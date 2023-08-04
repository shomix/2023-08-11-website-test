import React, { useState } from 'react';
import Image from 'next/image';
import { PlusCircle, MinusCircle, Messages } from '@/components/assets';
import HomeLayout from '@/layouts/HomeLayout';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className={
        'bg-white transition-all duration-500 linear rounded-md ' +
        `${expanded ? 'bg-[#e4dfff]' : 'bg-none'}`
      }
    >
      <button
        className="w-full text-left items-center pt-4 pb-2 select-none flex justify-between flex-row px-6"
        tabIndex={-1}
        onClick={toggleExpanded}
        type="button"
      >
        <h5 className="flex-1 font-bold font-inter">{title}</h5>
        <div className="flex-none pl-2">
          {expanded ? (
            <Image src={MinusCircle} alt="close icon" />
          ) : (
            <Image src={PlusCircle} alt="open icon" />
          )}
        </div>
      </button>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 linear ${
          expanded ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <p className="pb-4 text-left text-neutral font-inter">{content}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <HomeLayout>
      <div className="flex flex-col items-center justify-center py-20 bg-[url('/faq-hero-bg-1.svg'),_url('/faq-hero-bg-2.svg')] bg-[position:_right_0px_bottom_-7px,_right_0px_bottom_0px] bg-no-repeat">
        <h1 className=" text-4xl md:text-5xl font-bold font-gilroy text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-neutral mt-4 text-base md:text-xl font-inter">
          Everything you need to know about BonPay
        </p>
        <div className="relative w-[95%] max-w-lg mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58341 17.5001C13.9557 17.5001 17.5001 13.9557 17.5001 9.58341C17.5001 5.21116 13.9557 1.66675 9.58341 1.66675C5.21116 1.66675 1.66675 5.21116 1.66675 9.58341C1.66675 13.9557 5.21116 17.5001 9.58341 17.5001Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3334 18.3334L16.6667 16.6667"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg block w-full pl-10 p-2.5 focus:outline-none pb-2"
            placeholder="Search FAQs..."
          />
        </div>
      </div>
      <div className="">
        <section className="lg:max-w-4xl mx-auto text-center p-3 border rounded-lg max-w-[95%] my-20">
          <div className="border-b pb-6">
            <Accordion
              title="What is BonPay Finance?"
              content="BonPay Finance is a cutting-edge platform driving the Future of Payments. We offer a seamless, secure, and user-friendly experience that empowers businesses and creators to embrace Web3 payments. By revolutionizing the way transactions are conducted, we are fueling economic growth and paving the way for a new era of digital transactions."
            />
          </div>
          <div className="border-b py-2 pb-6">
            <Accordion
              title="How does Bonpay finance work?"
              content="Bonpay finance offers versatile payment solutions for Freelancers, Content creators, DAOs, and Businesses to easily receive crypto payments. Users can deploy any of our payment suites, including payment links, payment buttons, checkout options, and even our convenient QR code feature. These options provide seamless and secure ways to accept crypto payments for various transactions."
            />
          </div>
          <div className="border-b py-2 pb-6">
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur adipisicing."
              content={lorem}
            />
          </div>
          <div className="border-b py-2 pb-6">
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur adipisicing."
              content={lorem}
            />
          </div>
          <div className="border-b py-2 pb-6">
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur adipisicing."
              content={lorem}
            />
          </div>
          <div className="border-b py-2 pb-6">
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur adipisicing."
              content={lorem}
            />
          </div>
          <div className="border-b py-2 pb-6">
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur adipisicing."
              content={lorem}
            />
          </div>
          <div className="pt-2">
            <Accordion
              title="Lorem ipsum dolor sit amet consectetur adipisicing."
              content={lorem}
            />
          </div>
        </section>
        <div className="md:bg-[url('/contact-card-cape.svg')] bg-primary bg-blend-multiply bg-no-repeat bg-cover mb-12 lg:mb-32 mt-6 lg:mt-16 w-[95%] max-w-8xl mx-auto flex flex-col items-center gap-3 rounded-md py-12 px-2 font-inter">
          <Image src={Messages} alt="messages" />
          <div>
            <h2 className="text-center text-white text-2xl font-semibold my-2 font-gilroy">
              Still have questions?
            </h2>
            <p className="text-center text-white text-base md:text-sm pb-4 max-w-xl">
              If you're unable to find the answer you're seeking, please feel
              free to chat with our friendly team for further assistance.
            </p>
          </div>
          <button
            type="button"
            className="bg-white text-primary text-sm font-medium py-3 px-16 rounded-md mx-auto block"
          >
            Contact us
          </button>
        </div>
      </div>
    </HomeLayout>
  );
}
