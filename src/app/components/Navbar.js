"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from "./Navbar.module.css";
import { ReorderThreeOutline } from 'react-ionicons';

const Navbar = () => {

    // Handle scrolling changes - logo change
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle scrolling changes - header color change
    const [isScrolledHeader, setIsScrolledHeader] = useState(false);
    useEffect(() => {
        const handleScrollHeader = () => {
            setIsScrolledHeader(window.scrollY > 35);
        };

        window.addEventListener('scroll', handleScrollHeader);
        return () => window.removeEventListener('scroll', handleScrollHeader);
    }, []);


    return (
        <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-[5.6rem] py-[1.5rem] z-100 
                            ${isScrolledHeader ? 'bg-[#002e5f] bg-opacity-80 shadow-[0_0.2rem_0.5rem_rgba(0,0,0,0.4)]' : ''}`}>

            <div className="relative">
                <h2 className={`${styles.navTitle} text-white text-[2.1rem] transition-all duration-300 ease-in-out
                        ${isScrolled ? 'opacity-0 translate-x-[-20px]' : ''}`}>
                    EQUIOPTIONS
                </h2>

                <Image
                    src="/favicon.png"
                    alt="EQ Logo"
                    width={26}
                    height={26}
                    className={`absolute top-0 left-0 transition-all duration-100 ease-in-out
                        ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                />
            </div>

            <ReorderThreeOutline
                className={`${styles.threeBars} h-[1.2em] w-[1.2em]`}
            />

            <nav className="navbar">
                <ul className="flex items-center space-x-12">
                    {['home', 'about', 'services', 'contact', 'FAQ'].map((item) => (
                        <li key={item}>
                            <Link href={`#${item}`} className="capitalize text-white text-[2.1rem] relative after:block after:content-['']
                                                               after:h-px after:w-0 after:bg-white after:transition-all after:duration-100
                                                               after:ease-in-out hover:after:w-full">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
