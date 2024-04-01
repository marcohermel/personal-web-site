import React from 'react'
import image1 from '../../assets/images/pictures/I-coffee-1.png';
import { PageTitle } from '../../components/mobile/page-title';
import resume from '../../assets/pdfs/marco-hermel.pdf'
import downloadIcon from '../../assets/icons/download-icon.svg';

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
                    <p className='px-4 text-justify text-primary'>
                        Hello world! I'm Marco Hermel, a seasoned software developer with a flair for fun and a passion for clean code. With a decade of experience under my belt, I've honed my skills as a full-stack maestro in .NET for 7 years, while also weaving magic on the frontend with React for 4 years. Agile methodologies, especially Scrum, are my secret sauce for project success, as I thrive in collaborative environments where knowledge exchange is key. When I'm not coding, you'll find me exploring the world, hitting the open road, or kicking it on the soccer field. Let's embark on an epic coding adventure together – join me and let's create something extraordinary!
                    </p>
                </div>
            </div>
        </section>
    )
}