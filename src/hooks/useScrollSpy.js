import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offset = 120) => {
  const [active, setActive] = useState(sectionIds[0]);
  const sectionsKey = sectionIds.join(",");

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        let current = sectionIds[0];
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= offset) current = id;
        }
        setActive((prev) => (prev === current ? prev : current));
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionsKey, offset]);

  return active;
};
