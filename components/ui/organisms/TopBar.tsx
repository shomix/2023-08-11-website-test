import React, { useState } from 'react';
import SideBar from './SideBar';

function TopBar() {
  const [isSidebar, setIsSidebar] = useState(false);

  const SidebarOpen = () => {
    setIsSidebar(true);
  };
  const SidebarClose = () => {
    setIsSidebar(false);
  };
  return (
    <div className=" flex relative h-[81px]  text-black   ">
      <div className=" min-[766px]:hidden mx-2 my-1  flex z-10">
        <div
          className={`absolute ${
            isSidebar
              ? 'transform translate-x-0 transition-all duration-500 ease-in-out'
              : '-translate-x-full  transform transition-all duration-500 ease-in-out'
          }`}
        >
          {isSidebar && <SideBar isSidebarclose={SidebarClose} />}
        </div>

        <button
          onClick={SidebarOpen}
          type="button"
          className="text-black hover:text-gray-400 focus:outline-none ml-2"
        >
          <svg
            width="35"
            height="34"
            viewBox="0 0 24 25"
            className="h-9 w-9 fill-current"
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

      <div className="flex items-center">
        <div className="text-[14px] h-6 text-[#98A2B3] ml-[13px] border-[1px] rounded-lg px-2 items-center flex ">
          <div className="px-2">Home</div>

          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg "
          >
            <path
              d="M7.99967 15.1666C11.6816 15.1666 14.6663 12.1818 14.6663 8.49992C14.6663 4.81802 11.6816 1.83325 7.99967 1.83325C4.31778 1.83325 1.33301 4.81802 1.33301 8.49992C1.33301 12.1818 4.31778 15.1666 7.99967 15.1666Z"
              stroke="#98A2B3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.16016 10.8534L9.50682 8.50006L7.16016 6.14673"
              stroke="#98A2B3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="px-2  text-[#7B61FF]">Payment links</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
