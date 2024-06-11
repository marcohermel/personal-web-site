import React from 'react'
import image1 from '../../../assets/images/pictures/I-coffee-1.png';
import resume from '../../../assets/pdfs/marco-hermel.pdf'
import downloadIcon from '../../../assets/icons/download-icon.svg';
import { ABOUT_ME } from '../../../constants';
import { PageTitle } from '../../../components/mobile/page-title';

export const About: React.FC = () => {
    return (
        <section id='about' className='flex flex-col items-center pb-4'>
            <PageTitle title='MARCO HERMEL' />
            <div className='flex flex-col items-center'>
                <img src={image1} alt='test' className='rounded-image py-14' height="200" width="200" />
                <div className='flex flex-col items-center'>

                    <a href={resume} target='blank'>
                        <button className='bg-primary text-white pl-4 p-2 rounded-lg flex '>
                            <span> Resume</span>
                            <img src={downloadIcon} width='25' />
                        </button>
                    </a>
                    <div className='text-primary w-full text-center  text-xl py-5 font-bold'>About me</div>
                    <p className='px-4 text-justify text-primary'>{ABOUT_ME}</p>
                </div>
            </div>
        </section>
    )
}