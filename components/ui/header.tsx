"use client";
import Link from 'next/link'
import MobileMenu from './mobile-menu';
// import heroImage from '../../public/images/hero-image-01.jpg';
import gargLogo from '../../public/images/Logo.png'
import Image from 'next/image';
import './header.css';
import { useState, useEffect } from 'react';

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
        <div className="flex items-center justify-between h-20 mt-10 gap-[200px]">
          {/* Site branding */}
          <div className="shrink-0 mr-4" data-aos="fade-up">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={gargLogo} alt='garg_logo' height={300} width={300} className={`garg_logo`} />
            </Link>
          </div>


          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow" >
            {/* Desktop sign in links */}
            <div className='flex items-center justify-between gap-10 cursor-pointer' data-aos="fade-up">
              <h1>Home</h1>
              <h1>About Us</h1>
              <h1>Distribution Network</h1>
              <h1>Retail Formats</h1>
              <h1>Contact Us</h1>
            </div>
            <ul className="flex grow justify-end flex-wrap items-center" data-aos="fade-up">
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
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
