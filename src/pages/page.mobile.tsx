import React from 'react'
import { About } from './about/about.page'
import { Experience } from './experience/experience.page'
import { ContactPage } from './contact/contact.page'
import { Navegation } from '../components/mobile/navegation'

export const PageMobile: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <Navegation />
            <About />
            <Experience />
            <ContactPage />
        </div>
    )

}