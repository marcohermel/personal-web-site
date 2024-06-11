/* eslint-disable @typescript-eslint/no-explicit-any */
import { useOutside } from '../../hooks/useOutsideClick';
import React, { useRef, useState } from 'react'

export const Navegation: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const ref = useRef(null)

    useOutside(ref, (e: Event) => {
        if (showMenu) {
            setShowMenu(false);
            e.preventDefault();
            e.stopPropagation();
        }
    });

    const onClick = (e: any, id: string) => {
        const hero = document.getElementById(id);
        e.preventDefault();
        hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(id, id, `/${id}`);
        setShowMenu(false);
    }


    return (
        <nav ref={ref} className={`flex z-31 w-full p-4 text-white z-30 bg-primary`}>
            <span className='text-white pl-20 text-xl font-bold w-full pt-1'>MARCO HERMEL</span>
            <ul className={`flex rounded-sm  justify-end gap-8 w-full pr-20`}>
                <li className='flex justify-center align-middle cursor-pointer  hover:text-secondary'>
                    <span className='py-2' onClick={e => onClick(e, 'about')}>ABOUT</span>
                </li>
                <li className='flex justify-center align-middle cursor-pointer hover:text-secondary'>
                    <span className='py-2' onClick={e => onClick(e, 'experience')}>WORK EXPERIENCE</span>
                </li>
                <li className='flex justify-center align-middle cursor-pointer hover:text-secondary'>
                    <span className='py-2' onClick={e => onClick(e, 'contact')}>CONTACT</span>
                </li>
            </ul>
        </nav>
    );
}