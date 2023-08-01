import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/assets';

function LoginSignUp({ visibleOnMobile }) {
  return (
    <div
      className={`mt-4 md:mt-0 flex ${
        !visibleOnMobile
          ? 'hidden md:flex items-center gap-8'
          : 'md:hidden flex flex-col items-start gap-6'
      }`}
    >
      <Link href="/login" className="text-primary">
        Login
      </Link>
      <Link href="/signup">
        <button
          type="button"
          className="bg-primary text-white px-6 py-2 rounded-md"
        >
          Get started
        </button>
      </Link>
    </div>
  );
}

function Dropdown({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={handleToggle}
      >
        <span>{title}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6199 5.22095L7.81655 9.02428C7.36738 9.47345 6.63238 9.47345 6.18322 9.02428L2.37988 5.22095"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="dropdown-content bg-white absolute top-10 left-0 w-40 border border-gray-300 shadow-lg rounded z-10">
          <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Option 1
          </li>
          <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Option 2
          </li>
          <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto md:flex md:justify-between md:items-center max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="text-xl text-black font-semibold">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black hover:text-gray-400 focus:outline-none"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                className="h-6 w-6 fill-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7.0376H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12.0376H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 17.0376H21"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:flex flex-col md:flex-row gap-8 transition-all duration-500 linear max-h-0 md:max-h-96 overflow-hidden md:overflow-visible ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }

          `}
        >
          <div className="block my-4 md:my-0">
            <Dropdown title="Product" />
          </div>
          <div className="block my-4 md:my-0">Pricing</div>
          <div className="block my-4 md:my-0">
            <Dropdown title="Developers" />
          </div>
          <div>
            <Dropdown title="Support" />
          </div>
          <LoginSignUp visibleOnMobile />
        </div>
        <LoginSignUp visibleOnMobile={false} />
      </div>
    </nav>
  );
}
