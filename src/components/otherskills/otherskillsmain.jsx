import React from 'react'
import BarberHairstylingSection from './hairstyling'
import InstrumentShowcase from './instrumental'

const OtherSkillsMain = () => {
  return (
    <div>
        <div className="text-500 text-cyan text-center text-6xl font-semibold mt-10">Other Skills</div>
        <BarberHairstylingSection/>
        <InstrumentShowcase/>
    </div>

  )
}

export default OtherSkillsMain
