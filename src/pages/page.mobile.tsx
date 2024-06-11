import React from 'react'
import { About } from './mobile/about/about.page'
import { Experience } from './mobile/experience/experience.page'
import { ContactPage } from './mobile/contact/contact.page'
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