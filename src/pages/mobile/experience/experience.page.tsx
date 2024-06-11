import React from 'react'
import { PageTitle } from '../../../components/mobile/page-title'
import { ExperienceItem } from '../../../components/mobile/experience-item'

import { IExperienceItemProps } from '../../../interfaces'
import { experiences } from '../../../constants'

export const Experience: React.FC = () => {
    return (
        <section id='experience' className='flex flex-col items-center'>
            <PageTitle title='WORK EXPERIENCE' />
            <div className='flex mt-4 flex-col-reverse items-center'>
                {experiences.map((exp: IExperienceItemProps) =>
                    <ExperienceItem
                        key={exp.companyName}
                        companyName={exp.companyName}
                        monthYear={exp.monthYear}
                        image={exp.image}
                        url={exp.url}
                    />
                )}
            </div>
        </section>
    )
}