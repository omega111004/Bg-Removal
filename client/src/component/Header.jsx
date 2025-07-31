import React from 'react'
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className=" flex items-center justify-between flex-col-reverse sm:flex-row gap-y-10 sm:gap-y-0 px-4 sm:px-10 lg:px-24 xl:px-44 mt-10 sm:mt-20">
            {/* -------left side-------- */}
            <div >
                <h1 className='text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-6xl font-bold text-neutral-700 leading-tight tracking-tight'>
                    Remove the <br className='max-md:hidden'/>
                    <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>
                        background
                    </span> from <br className='max-md:hidden'/> images for free.
                </h1>
                <p className='my-6 text-[15px] text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br className='max-ms:hidden'/>
                    Lorem Ipsum has been the industry's standard dummy text ever.</p>
                <div>
                    <input type="file" name="" id="upload1" hidden />
                    <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                        <img width={20} src={assets.upload_btn_icon} alt="" />
                        <p className='text-white text-lg'>Upload your image</p>
                    </label>
                </div>
            </div>
            {/* -------right side-------- */}
            <div className='w-full max-w-md'>
                <img src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header;