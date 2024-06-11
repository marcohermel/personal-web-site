import React from 'react'
import { PageTitle } from '../../../components/mobile/page-title'
import linkedinIcon from '../../../assets/icons/linkedin.svg'
import instagramIcon from '../../../assets/icons/instagram.svg'
import githubIncon from '../../../assets/icons/github.svg'
import gmailIcon from '../../../assets/icons/gmail.svg'
import { CONTACTS } from '../../../constants'

export const ContactPage: React.FC = () => {

    return (
        <section id='contact' className='flex mt-2 flex-col'>
            <PageTitle title='CONTACT' />
            <div className='flex my-80 gap-16 w-full justify-center text-primary'>
                <a href={CONTACTS.linkedIn.link} target='blank'>
                    <div className='py-4 flex items-center'>
                        <img src={linkedinIcon} width='40' className='mr-2' />
                        <span>{CONTACTS.linkedIn.text}</span>
                    </div>
                </a>
                <a href={CONTACTS.instagram.link} target='blank'>
                    <div className='py-4 flex items-center'>
                        <img src={instagramIcon} width='40' className='mr-2' />
                        <span>{CONTACTS.instagram.text}</span>
                    </div>
                </a>
                <a href={CONTACTS.github.link} target='blank'>
                    <div className='py-4 flex items-center' >
                        <img src={githubIncon} width='40' className='mr-2' />
                        <span>{CONTACTS.github.text}</span>
                    </div>
                </a>
                <div className='py-4 flex items-center'>
                    <img src={gmailIcon} width='40' className='mr-2' />
                    <span>{CONTACTS.email.text}</span>
                </div>
            </div>
        </section>
    )
}