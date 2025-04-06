import React from 'react'
import HeaderImg from '../assets/img/header-img.png'

function Header() {
  return (
    <div className='bg-[#F5F7FA] h-auto md:h-[37.5rm]'>
        <div className='container mx-auto max-w-[2320px] p-10 flex flex-col md:flex-row md:justify-between items-center'>
            <div>
                <h1 className='text-[4rem] font-semibold text-[#4D4D4D] leading-[1]'>Lessons and insights <br/><span className='text-[#4CAF4F]'>from 8 years</span></h1>
                <p className='text-[#717171] mt-5'>Where to grow your business as a photographer: site or social media?</p>
                <a className="inline-flex justify-center items-center py-3 px-8 mt-10 bg-[#4CAF4F] text-white rounded-md" href="#">Register</a>
            </div>
            <div><img src={HeaderImg} alt="" /></div>
        </div>

    </div>
  )
}

export default Header