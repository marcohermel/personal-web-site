/* eslint-disable @typescript-eslint/no-explicit-any */
import { COLOR } from '../../constants';
import { useOutside } from '../../hooks/useOutsideClick';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className='z-40'>
            <div className='flex justify-end bg-tertiary'>
                <FontAwesomeIcon
                    onClick={() => { setShowMenu(!showMenu) }}
                    size='2x'
                    className={`m-4 p-2 bg-primary z-30 rounded-sm fixed cursor-pointer`}
                    color={COLOR.SECONDARY}
                    icon={faBars}
                />
            </div>
            <nav ref={ref} className={`flex z-31 fixed w-full mt-20 px-4 text-secondary z-30  transition-all duration-200 ${showMenu ? "opacity-100" : "opacity-0"} `}>
                <ul className={`flex rounded-sm align-middle justify-center flex-col w-full py-2 bg-primary`}>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <span className='py-2' onClick={e => onClick(e, 'about')}>ABOUT</span>
                    </li>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <span className='py-2' onClick={e => onClick(e, 'experience')}>WORK EXPERIENCE</span>
                    </li>
                    <li className='flex justify-center align-middle hover:bg-secondary hover:text-white'>
                        <span className='py-2' onClick={e => onClick(e, 'contact')}>CONTACT</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}