import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  ArrowCircleRightSecondary,
  ArrowCircleRightTertiary,
  ArrowRight,
  BusinessList,
  CreatorList,
  Integration1,
  Integration2,
  Integration3,
} from '@/components/assets';

function ListItem({
  type,
  text,
}: {
  type: 'creator' | 'business';
  text: string;
}) {
  return (
    <li className="flex items-center gap-4">
      <Image
        src={type === 'creator' ? CreatorList : BusinessList}
        alt="list-icon"
        width={40}
        height={40}
      />
      <span className="font-inter text-sm md:text-lg">{text}</span>
    </li>
  );
}

export default function Home() {
  const [heroBgUrl, setHeroBgUrl] = useState('');

  const updateHeroBgUrl = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      setHeroBgUrl('/desktop-hero.svg');
    } else {
      setHeroBgUrl('/mobile-hero.svg');
    }
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      setHeroBgUrl('/desktop-hero.svg');
    } else {
      setHeroBgUrl('/mobile-hero.svg');
    }
    window.addEventListener('resize', updateHeroBgUrl);

    return () => {
      window.removeEventListener('resize', updateHeroBgUrl);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-[url('/hero-bg/fourth.svg'),_url('/hero-bg/third.svg'),_url('/hero-bg/second.svg'),_url('/hero-bg/top.svg')] bg-[position:_right_0px_bottom_0px,_right_0px_bottom_0px,_right_0px_bottom_-120px,_right_0px_bottom_-50px] bg-[size:100%,100%,120%,cover] bg-no-repeat pt-20">
        <div className="flex flex-col items-center mb-20 w-11/12 max-w-8xl mx-auto">
          <h2 className="font-gilroy text-3xl md:text-5xl max-w-2xl text-center font-bold">
            Web3 Payment Platform for{' '}
            <span className="font-gilroy text-[#7B61FF]">
              Creators & Business
            </span>
          </h2>
          <p className="font-inter max-w-4xl text-center my-6 mb-12">
            Lorem ipsum dolor sit amet consectetur. Id magna diam malesuada nisi
            habitasse. Augue id libero magna nunc sodales iaculis. Magna varius
            etiam neque faucibus urna. Erat a viverra suspendisse nisl et
            senectus at sit ut.
          </p>
          <div>
            {heroBgUrl && (
              <Image
                src={heroBgUrl}
                alt="list-icon"
                width={1000}
                height={1000}
              />
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 w-11/12 max-w-8xl mx-auto">
        <div className="col-span-full md:col-span-1 text-center md:text-left md:flex items-start justify-center md:flex-col flex-row font-extrabold">
          <span className="md:block font-gilroy text-3xl md:text-4xl">
            Seamless Global Payments:{' '}
          </span>
          <span className="md:block text-[#917BFF] font-gilroy text-3xl md:text-4xl">
            Effortlessly Transact Across Borders
          </span>
        </div>
        <div className="col-span-full md:col-span-1 text-center md:text-left text-[#101828] text-lg">
          Securely accept payments backed by blockchain technology for a
          seamless experience. Give your customers the confidence they need to
          shop and explore our wide selection today. Join us in embracing the
          future of secure transactions!
        </div>
      </div>
      <div className="grid gap-12 md:gap-4 grid-cols-1 md:grid-cols-2 w-11/12 max-w-8xl mx-auto my-8 md:my-16">
        <div className="bg-[url('/wood-bg.svg')] bg-blend-multiply text-center md:text-left bg-[#FCFAFF] border border-[#E4DFFF] p-8 rounded-2xl">
          <h3 className="font-gilroy font-bold text-[#101828] text-2xl md:text-3xl mb-3">
            Wallet Transfers
          </h3>
          <p className="text-[#101828] font-inter">
            Allow your customers easily connect with their browser wallets and
            process payments directly. This feature streamlines the payment
            process and improves the customer experience by making it fast and
            secure.
          </p>
        </div>
        <div className="bg-[url('/wood-bg.svg')] bg-blend-multiply text-center md:text-left bg-[#FCFAFF] border border-[#E4DFFF] p-8 rounded-2xl">
          <h3 className="font-gilroy font-bold text-[#101828] text-2xl md:text-3xl mb-3">
            Direct Transfers
          </h3>
          <p className="text-[#101828] font-inter">
            Let&apos;s businesses easily connect with their customers' MetaMask
            Wallets and process payments directly. This feature streamlines the
            payment process and improves the customer experience by making it
            fast and secure.
          </p>
        </div>
        <div className="bg-[url('/wood-bg.svg')] bg-blend-multiply text-center md:text-left bg-[#FCFAFF] border border-[#E4DFFF] p-8 rounded-2xl">
          <h3 className="font-gilroy font-bold text-[#101828] text-2xl md:text-3xl mb-3">
            Accept NFTs
          </h3>
          <p className="text-[#101828] font-inter">
            Let&apos;s businesses easily connect with their customers' MetaMask
            Wallets and process payments directly. This feature streamlines the
            payment process and improves the customer experience by making it
            fast and secure.
          </p>
        </div>
        <div className="bg-[url('/wood-bg.svg')] bg-blend-multiply text-center md:text-left bg-[#FCFAFF] border border-[#E4DFFF] p-8 rounded-2xl">
          <h3 className="font-gilroy font-bold text-[#101828] text-2xl md:text-3xl mb-3">
            Accept Stable Tokens
          </h3>
          <p className="text-[#101828] font-inter">
            Let&apos;s businesses easily connect with their customers' MetaMask
            Wallets and process payments directly. This feature streamlines the
            payment process and improves the customer experience by making it
            fast and secure.
          </p>
        </div>
      </div>
      <div className="bg-[#101828] md:py-16 my-16 md:my-20">
        <div className="grid grid-cols-3 max-w-8xl w-11/12 mx-auto">
          <div className="md:pr-20 col-span-full md:col-span-1 pt-12 md:py-0 md:my-0">
            <Image src={Integration3} alt="list-icon" width={50} height={50} />
            <h3 className="font-gilroy text-white font-bold text-3xl mt-9 mb-3">
              Borderless Transactions
            </h3>
            <p className="font-inter text-white text-lg">
              Businesses can expand their reach globally without any issue of
              currency conversion or cross-border transaction fees.
            </p>
          </div>
          <div className="md:pr-20 col-span-full md:col-span-1 pt-12 md:py-0 md:my-0 relative">
            <Image src={Integration2} alt="list-icon" width={50} height={50} />
            <h3 className="font-gilroy text-white font-bold text-3xl mt-9 mb-3">
              Security
            </h3>
            <p className="font-inter text-white text-lg">
              Bonpay employs blockchain to ensure secure and tamper-proof
              transactions, offering utmost reliability in a decentralized
              environment.
            </p>
            <div className="hidden md:block border-l h-2/3 absolute top-12 -left-10 opacity-10"></div>
          </div>
          <div className="md:pr-20 col-span-full md:col-span-1 pt-12 pb-12 md:py-0 md:my-0 relative">
            <Image src={Integration1} alt="list-icon" width={50} height={50} />
            <h3 className="font-gilroy text-white font-bold text-3xl mt-9 mb-3">
              Ease of Integration
            </h3>
            <p className="font-inter text-white text-lg">
              With the customizable payment gateway, it can easily be integrated
              to business&apos;s existing e-commerce platforms
            </p>
            <div className="hidden md:block border-l h-2/3 absolute top-12 -left-10 opacity-10"></div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 w-11/12 max-w-8xl mx-auto">
        <div className="col-span-full bg-[url('/quote-bg-1.svg'),url('/quote-bg-2.svg')] bg-cover bg-center bg-blend-multiply bg-primary w-full max-w-8xl mx-auto flex items-center rounded-2xl p-3 md:p8 md:py-20 md:px-14">
          <p className="text-white text-3xl md:text-5xl font-inter max-w-5xl font-extrabold">
            We are the leading blockchain powered payment platform
          </p>
        </div>
        <div className="col-span-full md:col-span-1 bg-[url('/creator-card.svg')] bg-[position:_right_0px_bottom_-100px] bg-no-repeat bg-blend-multiply bg-[#FEF6FB] border border-[#FFDCE9] p-6 md:py-10 md:px-8 rounded-2xl flex flex-col items-start gap-4">
          <h3 className="font-gilroy font-bold text-3xl md:text-4xl">
            For Creators
          </h3>
          <p className="text-xl font-inter">
            We have the perfect solution for creators to accept payments accross
            borders
          </p>
          <ul className="flex flex-col gap-5 text-lg my-4 flex-grow">
            <ListItem
              type="creator"
              text="Create Custom, expirable, and revokable payment links"
            />
            <ListItem type="creator" text="Tracking Dashboard with metrics" />
            <ListItem type="creator" text="Send USDC directly to Bank" />
            <ListItem
              type="creator"
              text="Add Settlements in Local Currency Only"
            />
            <ListItem type="creator" text="Dedicated E-commerce Page" />
          </ul>
          <button
            type="button"
            className="flex gap-2 items-center text-[#FF5999]"
          >
            Get Started as a Creator{' '}
            <Image
              src={ArrowCircleRightTertiary}
              alt="list-icon"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="col-span-full md:col-span-1 bg-[url('/business-card.svg')] bg-[position:_right_0px_bottom_-100px] bg-no-repeat bg-blend-multiply bg-[#EFF8FF] border border-[#D1E9FF] p-6 md:py-10 md:px-8 rounded-2xl flex flex-col items-start gap-4">
          <h3 className="font-gilroy font-bold text-3xl md:text-4xl">
            For Businesses
          </h3>
          <p className="text-xl font-inter">
            We have the perfect solution for creators to accept payments accross
            borders
          </p>
          <ul className="flex flex-col gap-5 text-lg my-4">
            <ListItem type="business" text="Everything In Creator's Package" />
            <ListItem type="business" text="Cart Checkout Integration" />
            <ListItem type="business" text="Dedicated Payment Button" />
            <ListItem
              type="business"
              text="Add Settlements in Local Currency, Crypto & USD"
            />
            <ListItem
              type="business"
              text="Exclusive Third Party Payment Method"
            />
          </ul>
          <button
            type="button"
            className="flex gap-2 items-center text-[#1570EF]"
          >
            Get Started as a Business{' '}
            <Image
              src={ArrowCircleRightSecondary}
              alt="list-icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row w-11/12 max-w-8xl m-auto items-center my-10 md:my-24">
        <div className="flex-1 md:pr-20">
          <span className="text-primary font-bold font-gilroy bg-[#F9F5FF] px-3 py-1 rounded-full">
            For Developers
          </span>
          <h3 className="font-gilroy text-2xl md:text-[2.5rem] md:leading-[2.5rem] font-bold break-words my-6">
            Supercharge your shipping process with powerful, and user-friendly
            APIs.
          </h3>
          <p className="font-inter text-base text-[#475467]">
            Streamline your engineering efforts with a seamless web3 payment
            solution. We meticulously handle the complexities of diverse payment
            gateways, rails, and financial systems in the decentralized world,
            empowering your teams to build on a unified platform hassle-free.
          </p>
          <button
            type="button"
            className="bg-primary rounded-md text-white text-base px-6 py-3 mt-6 hidden md:flex items-center gap-2"
          >
            <span className="font-inter">Read the docs</span>
            <Image src={ArrowRight} alt="list-icon" width={20} height={20} />
          </button>
        </div>
        <div className="flex-1 w-full">
          <Image src="/code-preview.png" alt="api" width={800} height={800} />
        </div>
      </div>
      <div className="bg-primary md:bg-[url('/trial-bg.svg')] bg-blend-multiply mb-12 md:mb-32 mt-6 lg:mt-16 w-11/12 max-w-8xl mx-auto flex flex-col items-center gap-3 rounded-xl py-12 px-2 font-inter">
        <h2 className="text-center text-white text-3xl md:text-5xl font-semibold my-2 font-gilroy">
          Try B<span className="text-[#917BFF] font-gilroy">o</span>npay Now
        </h2>
        <p className="text-center text-white text-base md:text-sm pb-4 max-w-xs font-inter">
          Get started with us today to get access to Lorem ipsum dolor sit.
        </p>
        <button
          type="button"
          className="bg-white text-primary text-sm font-medium py-3 px-4 rounded-md mx-auto block"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
