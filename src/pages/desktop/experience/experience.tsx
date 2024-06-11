import React from 'react'
import { PageTitle } from '../../../components/mobile/page-title'
import { ExperienceItem } from '../../../components/mobile/experience-item'
import { experiences } from '../../../constants'
import { IExperienceItemProps } from '../../../interfaces'

export const Experience: React.FC = () => {
    return (
        <section id='experience' className='flex flex-col items-center'>
            <PageTitle title='WORK EXPERIENCE' />
            <div className='flex my-60 flex-row-reverse gap-24 items-center'>
                {experiences.map((exp: IExperienceItemProps) =>
                    <ExperienceItem
                        key={exp.companyName}
                        companyName={exp.companyName}
                        monthYear={exp.monthYear}
                        image={exp.image}
                        url={exp.url}
                        size={150}
                    />
                )}
            </div>
        </section>
    )
}