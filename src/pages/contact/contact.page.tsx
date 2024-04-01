import React from 'react'
import { PageTitle } from '../../components/mobile/page-title'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instagramIcon from '../../assets/icons/instagram.svg'
import githubIncon from '../../assets/icons/github.svg'
import gmailIcon from '../../assets/icons/gmail.svg'

export const ContactPage: React.FC = () => {

    return (
        <section id='contact' className='flex mt-2 flex-col'>
            <PageTitle title='CONTACT' />
            <div className='flex m-8 flex-col text-primary'>
                <a href='https://www.linkedin.com/in/marco-hermel-90994424/' target='blank'>
                    <div className='py-4 flex items-center'>
                        <img src={linkedinIcon} width='40' className='mr-2' />
                        <span>marco-hermel</span>
                    </div>
                </a>
                <a href='https://www.instagram.com/marcofelipeh/' target='blank'>
                    <div className='py-4 flex items-center'>
                        <img src={instagramIcon} width='40' className='mr-2' />
                        <span>@marcofelipeh</span>
                    </div>
                </a>
                <a href='https://github.com/marcohermel/' target='blank'>
                    <div className='py-4 flex items-center' >
                        <img src={githubIncon} width='40' className='mr-2' />
                        <span>https://github.com/marcohermel/</span>
                    </div>
                </a>
                <div className='py-4 flex items-center'>
                    <img src={gmailIcon} width='40' className='mr-2' />
                    <span>mf.hermel@gmail.com</span>
                </div>
            </div>
        </section>
    )
}