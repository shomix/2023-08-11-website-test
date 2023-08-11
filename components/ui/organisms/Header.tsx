import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  Logo,
  Code,
  Mobile,
  Book,
  Flag,
  Tag,
  Discord2,
  Message,
} from '@/components/assets';

function LoginSignUp({ visibleOnMobile }) {
  return (
    <div
      className={`mt-4 md:mt-0 flex text-sm ${
        !visibleOnMobile
          ? 'hidden md:flex items-center gap-8'
          : 'md:hidden flex flex-col items-start gap-6'
      }`}
    >
      <Link href="/login" className="text-primary font-semibold">
        Login
      </Link>
      <Link href="/signup">
        <button
          type="button"
          className="bg-primary text-white px-6 py-3 rounded-md font-semibold"
        >
          Get started
        </button>
      </Link>
    </div>
  );
}

function Dropdown({
  title,
  subtitle,
  midtitle,
  lasttitle,
  sub,
  mid,
  last,
  icon1,
  icon2,
  icon3,
}: {
  title: string;
  subtitle: string;
  midtitle: string;
  lasttitle: string;
  sub: string;
  mid: string;
  last: string;
  icon1: string;
  icon2: string;
  icon3: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(!isOpen);
  };
  // const handleMouseShow = () => {
  //   setIsOpen(true);
  // };

  const handleMouseOut = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseenter', handleMouseOut);
    return () => {
      document.removeEventListener('mouseleave', handleMouseEnter);
    };
  }, []);

  return (
    <div className="dropdown relative " ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
      >
        <span className="font-inter">{title}</span>
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
        <ul className="dropdown-content bg-white absolute top-10 left-0 w-[22rem] border border-gray-300 shadow-lg rounded z-20 p-4 px-4 ">
          <div className="flex items-center px-4 py-2 hover:bg-gray-100 ">
            <Image src={icon1} alt="logo" />
            <li className="px-4 py-2 text-black  cursor-pointer text-lg font-medium">
              {subtitle}
              <p className="text-sm text[#667085] font-light">{sub}</p>
            </li>
          </div>
          <div className="flex items-center px-4 py-2 hover:bg-gray-100 ">
            <Image src={icon2} alt="logo" />
            <li className="px-4 py-2 text-black cursor-pointer  text-lg  ">
              {midtitle}
              <p className="text-sm text[#667085] font-light">{mid}</p>
            </li>
          </div>
          <div className="flex items-center px-4 py-2 hover:bg-gray-100">
            <Image src={icon3} alt="" />

            <li className="px-4 py-2 text-black  cursor-pointer text-lg">
              {lasttitle}
              <p className="text-sm text[#667085] font-light">{last}</p>
            </li>
          </div>
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
      <div className="container mx-auto md:flex md:justify-between md:items-center">
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
          className={`md:flex flex-col md:flex-row gap-8 transition-all duration-500 linear max-h-0 md:max-h-96 overflow-hidden md:overflow-visible text-sm lg:ml-[5rem] ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }

          `}
        >
          <div className="block my-4 md:my-0">
            <Dropdown
              title="Product"
              subtitle="Online Payment"
              icon1={Code}
              icon2={Card}
              icon3={Mobile}
              sub="Prebuilt checkout page"
              midtitle="Payment Links"
              mid="No code payment linkst"
              lasttitle="Components"
              last="Customizable payment UI"
            />
          </div>
          <div className="block my-4 md:my-0">Pricing</div>
          <div className="block my-4 md:my-0">
            <Dropdown
              title="Developers"
              subtitle="Documentation"
              sub="Online Payment"
              icon1={Book}
              icon2={Flag}
              icon3={Tag}
              midtitle="Get Started"
              mid="Build amazing experiences"
              lasttitle="Guides"
              last="Start your journey here"
            />
          </div>
          <div>
            <Dropdown
              title="Support"
              subtitle="Discord Support"
              sub=""
              icon1={Discord2}
              icon2={Message}
              midtitle="Contact Us"
              icon3=""
              mid=""
              lasttitle=""
              last=""
            />
          </div>
          <LoginSignUp visibleOnMobile />
        </div>
        <LoginSignUp visibleOnMobile={false} />
      </div>
    </nav>
  );
}
