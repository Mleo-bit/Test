"use client";
import React, { useState } from 'react';
import User, { TokenScript, Deverloper, Menu } from './MenuPopover';
import { IoMenu, IoClose } from "react-icons/io5";

const MainHeader = () => {

    const [popoverOpen, setPopoverOpen] = useState({
        developer: false,
        user: false,
        token: false,
        menu: false,
    });

    // Hàm chung để thay đổi trạng thái
    const handleMouseEnter = (menu) => {
        setPopoverOpen((prevState) => ({
            ...prevState,
            [menu]: true,
        }));
    };

    const handleMouseLeave = (menu) => {
        setPopoverOpen((prevState) => ({
            ...prevState,
            [menu]: false,
        }));
    };

    const handleMouseClick = (menu) => {
        setPopoverOpen((prevState) => ({
            ...prevState,
            menu: !prevState.menu,
        }));
    }

    const closeMenu = () => {
        setPopoverOpen({ menu: false });
    };


    return (
        <div className="bg-white flex flex-row justify-between h-36 items-center px-3">
            <div className="flex justify-start w-44 md:w-28 md:ml-2 lg:w-44 lg:ml-14 xl:w-64 xl:ml-20">
                <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/logo-horizontal-new.svg" alt="Alphawallet logo" />
            </div>
            <nav>
                <ul className="flex flex-row gap-6 font-semibold">
                    <li
                        className="nav-item"
                        onMouseLeave={() => handleMouseLeave('developer')}
                        onMouseEnter={() => handleMouseEnter('developer')}
                    >
                        For Developer
                        {popoverOpen.developer && <Deverloper />}
                    </li>
                    <li
                        className="nav-item"
                        onMouseLeave={() => handleMouseLeave('user')}
                        onMouseEnter={() => handleMouseEnter('user')}
                    >
                        For User
                        {popoverOpen.user && <User />}
                    </li>
                    <li
                        className="nav-item"
                        onMouseLeave={() => handleMouseLeave('token')}
                        onMouseEnter={() => handleMouseEnter('token')}
                    >
                        TokenScript
                        {popoverOpen.token && <TokenScript />}
                    </li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Blog</li>
                    <li className="nav-item">Contact Us</li>
                    <li className="nav-item">English</li>
                </ul>
            </nav>
            <div>
                <button className="button-download bg-black text-white py-2 px-4 rounded-md">Download</button>
            </div>
            <div className='block md:hidden w-7 h-7'>
                <button
                    className='button-menu'
                    onClick={() => handleMouseClick('menu')}
                >
                    {popoverOpen.menu ? <IoClose className='w-7 h-7' /> : <IoMenu className='w-7 h-7' />}
                </button>
                {popoverOpen.menu && <Menu closeMenu={closeMenu} />}
            </div>
        </div>
    );
};

export default MainHeader;