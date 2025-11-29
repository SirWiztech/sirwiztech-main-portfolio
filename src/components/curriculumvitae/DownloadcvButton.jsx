import React from 'react'

const DownloadcvButton = () => {
  return (
    <div className='flex justify-center'>
        <button className="bg-cyan text-black px-6 py-3 mt-20 rounded-md hover:bg-blue-600 transition duration-300">
            {/* The fa-solid class calls the correct solid font file */}
            <a href='src\components\curriculumvitae\main_portfolio.html' className="flex items-center space-x-2">
                <i className="fa-solid fa-download"></i>
                <span>Download CV</span>
            </a>
        </button>
    </div>
  )
}
export default DownloadcvButton