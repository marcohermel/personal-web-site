import React from 'react'
import { IExperienceItemProps } from '../../pages/experience/experience.interface'

export const ExperienceItem: React.FC<IExperienceItemProps> = ({ companyName, monthYear, image, url }) => {
    return (
        <a href={url} target='blank'>
            <div className='flex flex-col mb-4 items-center'>
                <div className='my-2'>
                    <img src={image}
                        alt={companyName}
                        className='rounded-full border-4 border-secondary'
                        height="100"
                        width="100"
                    />
                </div>
                <div className='text-primary'>{companyName}</div>
                <div className='text-gray-400 text-sm'>{monthYear}</div>
            </div>
        </a>
    )
}