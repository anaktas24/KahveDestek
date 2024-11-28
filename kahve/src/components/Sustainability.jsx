import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/assets'


const Presentation = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'SUSTAINABILITY'}/>
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-16">
            <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                <p className='break-words'>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</p>
                <p className='break-words'>TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2TEXT2</p>
                <b className='text-gray-800'>Our Mission</b>
                <p className='break-words'>TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3TEXT3</p>
            </div>
        </div>
    </div>
  )
}

export default Presentation