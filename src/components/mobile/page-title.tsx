import React from 'react'

interface IPageTitleProps {
    title: string;
}

export const PageTitle: React.FC<IPageTitleProps> = ({ title }) => {
    return (
        <div className='flex w-full justify-center items-center bg-primary h-20'>
            <span className='text-white text-center text-xl font-bold'>{title} </span>
        </div>
    )
}