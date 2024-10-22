"use client";
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import gargLogo from '../../public/images/Garg_Traders_-_Logo_1_1__1_-removebg-preview.png';
import Image from 'next/image';
import './header.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isFadedOut, setIsFadedOut] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadedOut(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="absolute w-full z-30 bg-white">
      {/* Full-width container with no extra spacing */}
      <div className="w-full mx-0 px-4 md:px-10 h-[60px]" style={{ backgroundColor: '#151719' }}>
        <div className="flex items-center justify-between w-full py-4 h-[60px]">
          {/* Logo */}
          <div className="shrink-0" data-aos="fade-up">
            <Link href="/" aria-label="Cruip">
              <Image
                src={gargLogo}
                alt="garg_logo"
                className="garg_logo"
                priority={true}
                style={{ width: '100%', height: 'auto' }} // Ensure responsiveness
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="nav-links">
            <Link href="/" className="hover:underline text-white">
              Home
            </Link>
            <Link href="/aboutus" className="hover:underline text-white">
              About Us
            </Link>
            <Link href="/distribution-network" className="hover:underline text-white">
              Distribution Network
            </Link>
          </nav>


          {/* Mobile Menu - Visible on mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
