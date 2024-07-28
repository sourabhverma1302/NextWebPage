"use client";
import Link from 'next/link'
import MobileMenu from './mobile-menu';
// import heroImage from '../../public/images/hero-image-01.jpg';
import gargLogo from '../../public/images/Garg_Traders_-_Logo_1_1__1_-removebg-preview.png'
import Image from 'next/image';
import './header.css';
import { useState, useEffect } from 'react';
import Hero from '../hero';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isFadedOut, setIsFadedOut] = useState(false);

  useEffect(() => {
    // Start the fade-out effect when the component mounts
    const timer = setTimeout(() => {
      setIsFadedOut(true);
    }, 1000); // 1000ms delay before starting the fade-out effect

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-8xl px-10">
        <div className="flex items-center flex-col w-full">
          {/* Site branding */}
          <div className='flex align-center justify-between w-full'>
          <div className="shrink-0 mr-4" data-aos="fade-up">
            {/* Logo */}
            <Link href="/" aria-label="Cruip">
              <Image src={gargLogo} alt='garg_logo' className={`garg_logo`} />
            </Link>
          </div>


          {/* Desktop navigation */}
          <nav className="flex items-center justify-center" >
            {/* Desktop sign in links */}
            <div className='flex items-center gap-12 cursor-pointer' data-aos="fade-up">
              <Link href={'/'}>Home</Link>
              <Link href={'/aboutus'}>About Us</Link>
              <Link href={'/distribution-network'}>Distribution Network</Link>
              {/* <Link>Retail Formats</Link>
              <Link>Contact Us</Link> */}
            </div>
          </nav>
          {/* <ul className="flex flex-wrap items-center justify-center px-20" data-aos="fade-up">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul> */}
          </div>
          {/* <Hero/> */}

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
