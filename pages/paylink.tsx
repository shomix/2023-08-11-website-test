import { useState } from 'react';
import DashboardLayout from '@/layouts/DasboardLayout';
import {
  Chain,
  Left,
  Left2,
  More,
  Edit,
  Send,
  LinkIcon,
  Layer,
} from '@/components/assets';

const data = [
  {
    title: 'Link 001',
    link: 'www.bonpay.com/3al634',
    price: '40.00',
    sales: '3.1234361',
    volume: '3',
    id: 1,
  },
  {
    title: 'Link 002',
    link: 'www.bonpay.com/3al634',
    price: '20.00',
    sales: '7.1238760',
    volume: '2',
    id: 2,
  },
  {
    title: 'Link 003',
    link: 'www.bonpay.com/3al634',
    price: '60.00',
    sales: '1.3534563',
    volume: '5',
    id: 3,
  },
  {
    title: 'Link 004',
    link: 'www.bonpay.com/3al634',
    price: '90.00',
    sales: '2.3523568',
    volume: '8',
    id: 4,
  },
  {
    title: 'Link 005',
    link: 'www.bonpay.com/3al634',
    price: '10.00',
    sales: '4.1454566',
    volume: '7',
    id: 5,
  },
  {
    title: 'Link 006',
    link: 'www.bonpay.com/3al634',
    price: '20.00',
    sales: '3.1234564',
    volume: '1',
    id: 6,
  },
  {
    title: 'Link 007',
    link: 'www.bonpay.com/3al634',
    price: '30.00',
    sales: '7.1235562',
    volume: '6',
    id: 7,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 8,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 9,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 10,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 11,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 12,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 13,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 14,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 15,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 16,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 17,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 18,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 19,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 20,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 21,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 22,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 23,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 24,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 25,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 26,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 27,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 28,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 29,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 30,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 31,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 32,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 33,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 34,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 35,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 36,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 37,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 38,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 39,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 40,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 41,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 42,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 43,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 44,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 45,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 46,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 47,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 48,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 49,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 50,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 51,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 52,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 53,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 54,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 55,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 56,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 57,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 58,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 59,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 60,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 61,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 62,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 63,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 64,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 65,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 66,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 67,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 68,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 69,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 70,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 71,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 72,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 73,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 74,
  },
  {
    title: 'Link 008',
    link: 'www.bonpay.com/3al634',
    price: '70.00',
    sales: '9.1374565',
    volume: '2',
    id: 75,
  },
];

function Links() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 8;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordPerPage);
  const maxNumbersToShow = 6; // Total numbers to show
  const numbers = [];

  if (npage <= maxNumbersToShow) {
    numbers.push(...Array.from({ length: npage }, (_, i) => i + 1));
  } else {
    const firstNumbers = 3;
    const lastNumbers = 3;

    numbers.push(...Array.from({ length: firstNumbers }, (_, i) => i + 1));
    numbers.push('...');
    numbers.push(
      ...Array.from(
        { length: lastNumbers },
        (_, i) => npage - lastNumbers + i + 1
      )
    );
  }
  function truncateText(text: string | undefined, maxLength: number): string {
    if (!text) {
      return '';
    }
    return text.length > maxLength
      ? `${text.substr(0, maxLength - 1)}...`
      : text;
  }

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="  absolute  w-full  ">
      <div className="overflow-x-scroll   ">
        <table className="  text-[12px] text-[#98A2B3] font-inter  max-[765px]:w-screen  w-[97%]   bg-white rounded-[4px]">
          <thead>
            <tr className=" border-b border-[#e0e2e4]">
              <th className="flex justify-start px-[24px] py-[12px]">
                Payment Link
              </th>
              <th>
                <div className="justify-end flex">Price</div>
              </th>
              <th className="">
                <div className="justify-end flex">Sales</div>
              </th>
              <th>
                <div className="justify-end flex ml-3">Volume</div>
              </th>

              <th>
                <div className="justify-end flex px-[24px] py-[12px] text-black">
                  <div className="mr-2">Sort by: </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2 4.66675H14"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 8H12"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.66699 11.3333H9.33366"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => {
              return (
                <tr className="border-b border-[#e0e2e4] " key={item.id}>
                  <th className="flex justify-start my-[16px] px-[24px] ">
                    <div className="flex items-center  ">
                      <div className="p-[7px] bg-[#F9FAFB] border border-[#D1E9FF] rounded-full">
                        <Chain />
                      </div>
                      <div className="pl-[12px] items-start flex flex-col ">
                        <p className="font-medium text-[#344054]">
                          {item.title}
                        </p>
                        <p className="font-medium">
                          {truncateText(item.link, 20)}
                        </p>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex  items-center justify-end ">
                      <div className="pl-[12px] flex flex-col items-end ">
                        <p className="font-medium text-[#344054]">
                          {item.price}
                        </p>
                        <p className="font-medium">USD</p>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center  justify-end ">
                      <div className="pl-[12px] flex flex-col items-end">
                        <p className="font-medium text-[#344054]">
                          {item.sales}
                        </p>
                        <p className="font-medium">FIAT</p>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center  justify-end">
                      <div className="pl-[12px]">
                        <p>{item.volume}</p>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center   justify-end px-[24px] ">
                      <div className="pl-[12px] flex items-end">
                        <Edit />
                        <p className="font-medium text-[#344054]  ml-2 mr-[24px] cursor-pointer">
                          Edit
                        </p>
                        <Left />
                        <p className="font-medium text-[#344054]  ml-2 mr-[24px] cursor-pointer">
                          Duplicate
                        </p>
                        <Left2 />
                        <p className="font-medium text-[#344054] ml-2 mr-[24px] cursor-pointer ">
                          Share
                        </p>
                        <div className="font-medium text-[#0C7A47] py-[2px] px-[6px] flex bg-[#E5FCF1] rounded-[16px] items-center ml-[32px] ">
                          <div className="mr-[6px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <circle cx="4" cy="4" r="3" fill="#39C383" />
                            </svg>
                          </div>
                          Active
                        </div>
                        <div className="pl-[30px] cursor-pointer">
                          <More />
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between px-[24px] py-[20px] font-medium text-[14px]  w-[97%] max-md:w-full bg-white rounded-[4px]">
        <div
          className="flex items-center cursor-pointer text-[#667085] "
          onClick={prevPage}
          role="button"
          tabIndex={0}
          onKeyDown={prevPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-2"
          >
            <path
              d="M7.97533 4.94165L2.91699 9.99998L7.97533 15.0583"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.0836 10H3.05859"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className=" visible max-md-[765px]:hidden">Previous</div>
        </div>
        <div className="flex">
          {numbers.map((n) => (
            <div
              className={` px-[22px] py-4 rounded-full  text-[14px] cursor-pointer flex justify-self-center  " ${
                currentPage === n ? 'text-[#1570EF] bg-[#EFF8FF]' : ''
              }`}
              key={n}
            >
              <button
                onClick={changeCPage}
                type="button"
                onKeyDown={changeCPage}
                className="rounded-full"
              >
                {n}
              </button>
            </div>
          ))}
        </div>

        <div
          className="flex items-center cursor-pointer justify-self-end text-[#667085]  "
          onClick={nextPage}
          role="button"
          tabIndex={0}
          onKeyDown={nextPage}
        >
          <div className="max-md-[765px]:hidden vissible ">Next</div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none "
            className="ml-2"
          >
            <path
              d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91699 10H16.942"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <DashboardLayout>
      <div className=" relative bg-[#F9FAFB] h-[1300px]  pt-0  overflow-x-scroll w-full">
        <div className=" flex justify-between my-0 max-[915px]:flex-col p-6 ">
          <div className="">
            <p className=" font-bold text-[24px] font-gilroy">Payment Link</p>
            <p className="text-[#667085] text-[14px]">
              Make payment directly from your connected wallet address
            </p>
          </div>

          <div className=" bg-[#7B61FF] my-2 text-white text-[14px] cursor-pointer max-w-[204px] py-1 px-2 rounded-lg flex items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 9H13.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.5V4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Create Payment Links
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-1 p-6 ">
          <div className=" bg-white flex  lg:max-w-[300px] md:max-h-[100%] border p-4 mb-4 rounded-[4px] ">
            <div></div>
            <div className=" flex items-center ">
              <div>
                <Layer />
              </div>
              <div className="flex flex-col ml-5 ">
                <p className="text-[12px] text-[#667085]">Total volume</p>
                <span className="text-[24px] font-bold">0</span>
              </div>
            </div>
          </div>
          <div className=" bg-white flex justify-between lg:max-w-[300px] md:max-h-[100%] border p-4 mb-4 rounded-[4px]">
            <div className="flex items-center">
              <div>
                <Send />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-[12px] text-[#667085]">Total Sales</p>
                <span className="text-[24px] font-bold ">0</span>
              </div>
            </div>
          </div>
          <div className=" bg-white flex justify-between lg:max-w-[300px] md:max-h-[100%] border mb-4 rounded-[4px] p-4">
            <div className="flex items-center  ">
              <div>
                <LinkIcon />
              </div>
              <div className="flex flex-col ml-5">
                <p className="text-[12px] text-[#667085]">
                  Active Payment links
                </p>
                <span className="text-[24px] font-bold">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-0 lg:p-5 ">
          <Links />
        </div>
      </div>
    </DashboardLayout>
  );
}
