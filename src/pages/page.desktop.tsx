import React from 'react'
import { Navegation } from '../components/desktop/navegation'
import { About } from './desktop/about/about'
import { Experience } from './desktop/experience/experience'
import { ContactPage } from './desktop/contact/contact'

export const PageDesktop: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <Navegation />
            <About />
            <Experience />
            <ContactPage />
        </div>
    )
}