import React from 'react'
import image1 from '../../../assets/images/pictures/I-coffee-1.png';
import resume from '../../../assets/pdfs/marco-hermel.pdf'
import downloadIcon from '../../../assets/icons/download-icon.svg';
import { ABOUT_ME } from '../../../constants';

export const About: React.FC = () => {
    return (
        <section id='about' className='flex flex-col items-center pb-4'>
            <div className='flex justify-around py-40'>
                <div className='flex flex-col w-4/12'>
                    <div className='text-primary w-full text-4xl py-5 font-bold'>About me</div>
                    <p className='text-justify text-primary'>{ABOUT_ME}</p>
                    <a href={resume} target='blank'>
                        <button className='bg-primary text-white px-10 mt-10 p-2 rounded-lg flex '>
                            <span className='mr-2'> Download Resume</span>
                            <img src={downloadIcon} width='25' />
                        </button>
                    </a>
                </div>
                <div>
                    <img src={image1} alt='test' className='rounded-image' height="350" width="350" />
                </div>
            </div>
        </section>
    )
}