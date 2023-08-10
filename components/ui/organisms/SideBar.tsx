import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/assets';
import SidebarData from './SideBarData';

function SideBar({ isSidebarclose }: { isSidebarclose: any }) {
  return (
    <div className=" w-[262px] h-screen p-4 bg-white border-r-[1px] flex flex-col ">
      <div className=" flex text-white p-3 rounded-lg mb-[55px] items-center justify-between ]">
        <Logo />
        <button
          onClick={() => isSidebarclose()}
          type="button"
          className="text-black  min-[766px]:hidden transform transition-all duration-500 "
        >
          <svg
            width="34"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="#292D32"
            />
            <path
              d="M9.16999 15.5799C8.97999 15.5799 8.78999 15.5099 8.63999 15.3599C8.34999 15.0699 8.34999 14.5899 8.63999 14.2999L14.3 8.63986C14.59 8.34986 15.07 8.34986 15.36 8.63986C15.65 8.92986 15.65 9.40986 15.36 9.69986L9.69998 15.3599C9.55998 15.5099 9.35999 15.5799 9.16999 15.5799Z"
              fill="#292D32"
            />
            <path
              d="M14.83 15.5799C14.64 15.5799 14.45 15.5099 14.3 15.3599L8.63999 9.69986C8.34999 9.40986 8.34999 8.92986 8.63999 8.63986C8.92999 8.34986 9.40998 8.34986 9.69998 8.63986L15.36 14.2999C15.65 14.5899 15.65 15.0699 15.36 15.3599C15.21 15.5099 15.02 15.5799 14.83 15.5799Z"
              fill="#292D32"
            />
          </svg>
        </button>
      </div>

      <div className="text-[14px]">
        {SidebarData.map((item) => {
          return (
            <Link href={item.path} key={item.id}>
              <div className=" hover:bg-[#7B61FF] my-2 hover:text-white   cursor-pointer  p-3 rounded-lg flex items-center text-[#667085]">
                <div className=" hover:text-white">{item.icon}</div>
                <p className="ml-4"> {item.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
