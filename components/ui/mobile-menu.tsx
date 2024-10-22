'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
  className="w-6 h-6 fill-current text-white hover:text-gray-200 transition duration-150 ease-in-out"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect y="4" width="24" height="2" rx="1" />
  <rect y="11" width="24" height="2" rx="1" />
  <rect y="18" width="24" height="2" rx="1" />
</svg>

      </button>

      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full bg-gray-800 px-4 transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
      >
        <ul className="px-4 py-2 space-y-2 text-center">
          <li>
            <Link href="/" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/distribution-network" className="block text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>
              Distribution Network
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
