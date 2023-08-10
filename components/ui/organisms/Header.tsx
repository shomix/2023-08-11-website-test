import React, { useState, useEffect, useRef } from 'react';
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
  Messages,
} from '@/components/assets';

function LoginSignUp({ visibleOnMobile }) {
  return (
    <div
      className={`mt-4 md:mt-0 flex text-sm  ${
        !visibleOnMobile
          ? 'hidden md:flex items-center gap-8'
          : 'md:hidden flex flex-col items-start gap-6 '
      }`}
    >
      <Link
        href="/login"
        className="md:text-[#7B61FF] font-semibold text-black  "
      >
        Login
      </Link>
      <Link href="/signup">
        <Link
          href="/dashboard"
          className="bg-primary text-white px-6 py-3 rounded-md font-semibold cursor-pointer"
        >
          Get started
        </Link>
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
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>();

  const isWindowWidthGreaterThan960 = () => {
    return window.innerWidth > 760;
  };
  const onClickEnter = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  const onMouseEnter = () => {
    if (isWindowWidthGreaterThan960()) {
      setIsOpen(!isOpen);
    }
  };

  const onMouseLeave = () => {
    if (isWindowWidthGreaterThan960()) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mouseenter', onMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', onMouseEnter);
    };
  }, []);

  return (
    <div
      className="dropdown relative "
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClickEnter}
      onKeyDown={null}
      role="button"
      tabIndex={0}
    >
      <button type="button" className="flex items-center gap-2">
        <span className=" font-inter font-normal ">{title}</span>
        {isOpen ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9201 15.0496L13.4001 8.52965C12.6301 7.75965 11.3701 7.75965 10.6001 8.52965L4.08008 15.0496"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <div>
          <ul className="dropdown-content bg-white   top-[1.1rem] left-0 border border-gray-300 my-[0.20rem] right-0  max-md-[765px]:hidden  max-md-[765px]:p-6  w-[22rem] rounded z-[10] absolute p-2 px-4 font-inter shadow-lg shadow-black-500/40">
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 ">
              {icon1}
              <li className="px-4 py-2 font-medium cursor-pointer text-base ">
                {subtitle}
                <p className="text-sm text-[#667085] font-normal">{sub}</p>
              </li>
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-gray-100 ">
              {icon2}
              <li className="px-4 py-2 cursor-pointer font-medium text-base  ">
                {midtitle}
                <p className="text-sm text-[#667085] font-normal">{mid}</p>
              </li>
            </div>
            <div className="flex items-center px-4 py-2 hover:bg-gray-100">
              {icon3}

              <li className="px-4 py-2   font-medium cursor-pointer text-base">
                {lasttitle}
                <p className="text-sm text-[#667085] font-normal ">{last}</p>
              </li>
            </div>
          </ul>
          <ul className="min-[767px]:hidden z-10  ">
            <li className="m-4">{subtitle}</li>
            <li className="m-4">{midtitle}</li>
            <li className="m-4">{lasttitle}</li>
          </ul>
        </div>
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
    <nav className=" absolute marker:flex justify-between w-[100%] p-4 max-md-[765px]:p-0 ">
      <div className="container mx-auto md:flex md:justify-between md:items-center max-md-[765px]:p-4  ">
        <div className="flex items-center justify-between">
          <div className="text-xl text-black font-semibold cursor-pointer ">
            <Link href="/">
              {' '}
              <Logo />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black hover:text-gray-400 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.16998 14.8299L14.83 9.16992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    // strokeOnLoadinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.83 14.8299L9.16998 9.16992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>
        <div
          className={` flex-col md:flex-row gap-8 transition-all duration-500  flex linear max-h-0 h-screen md:max-h-0 md:h-[100%] overflow-hidden md:overflow-visible text-sm lg:ml-[5rem]   bg-white max-md-[765px]:px-9  p-4 ${
            isMenuOpen ? 'max-h-full  max-md-[765px]:h-screen  ' : 'max-h-0'
          }

          `}
        >
          <div className="block my-4 md:my-0   ">
            <Dropdown
              title="Product"
              subtitle="Online Payment"
              icon1={<Code />}
              icon2={<Card />}
              icon3={<Mobile />}
              sub="Prebuilt checkout page"
              midtitle="Payment Links"
              mid="No code payment linkst"
              lasttitle="Components"
              last="Customizable payment UI"
            />
          </div>
          <div className="block my-4 md:my-0">
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="block my-4 md:my-0">
            <Dropdown
              title="Developers"
              subtitle="Documentation"
              sub="Online Payment"
              icon1={<Book />}
              icon2={<Flag />}
              icon3={<Tag />}
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
              icon1={<Discord2 />}
              icon2={<Messages />}
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
