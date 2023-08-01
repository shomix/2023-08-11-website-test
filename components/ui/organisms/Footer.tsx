import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Twitter,
  Instagram,
  Linkedin,
  Discord,
  Youtube,
} from '@/components/assets';

function FooterLinks({ links }: { links: { name: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link href={link.href} className="text-white">
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="pt-12 px-4 bg-primary">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-7xl m-auto">
        <div className="">
          <h3 className="font-extrabold text-white mb-4">Product</h3>
          <FooterLinks
            links={[
              { name: 'Online Payments', href: '/online-payments' },
              { name: 'Payment Links', href: '/payment-links' },
              { name: 'No-Code Payment', href: '/no-code-payment' },
              { name: 'Payment for Platforms', href: '/payment-for-platforms' },
              {
                name: 'Customizable Payment UIs',
                href: '/customizable-payment-uis',
              },
            ]}
          />
        </div>
        <div className="">
          <h3 className="font-extrabold text-white mb-4">Company</h3>
          <FooterLinks
            links={[
              { name: 'About Us', href: '/about-us' },
              { name: 'Blog', href: '/blog' },
              { name: 'Contact Us', href: '/contact-us' },
              { name: 'Terms of Use', href: '/terms-of-use' },
              { name: 'FAQ', href: '/faq' },
            ]}
          />
        </div>
        <div className="">
          <h3 className="font-extrabold text-white mb-4 col-span-full">
            Developers
          </h3>
          <FooterLinks
            links={[
              { name: 'Developer Resources', href: '/developer-resources' },
              { name: 'Documentation', href: '/documentation' },
              { name: 'API Reference', href: '/api-reference' },
              { name: 'API Status', href: '/api-status' },
              { name: 'Get an API Key', href: '/get-an-api-key' },
            ]}
          />
        </div>
        <div className="lg:col-start-4 md:col-start-2 col-span-full text-center md:text-left">
          <h3 className="font-extrabold text-white mb-4 text-lg">
            Subscribe to Bonpay Newsletter
          </h3>
          <form className="gap-2 md:gap-1 grid grid-cols-4">
            <input
              type="text"
              placeholder="Enter your email address"
              className="col-span-full md:col-span-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  focus:outline-none  p-2.5 text-base"
            />
            <button
              type="submit"
              className="col-span-2 md:col-span-1 col-start-2 text-white text-center bg-btn-primary font-medium rounded-lg text-base md:text-sm py-2.5 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white my-6">
            By subscribing to this form, you agree to receive marketing and
            other information from Bonpay about Bonpay Products and other
            company updates. You can unsubscribe from these communications at
            anytime.
          </p>

          <h3 className="font-extrabold text-white mb-4">
            Follow Bonpay on social
          </h3>
          <div className="flex gap-6 w-fit m-auto md:m-0">
            <Image src={Twitter} alt="twitter" />
            <Image src={Instagram} alt="instagram" />
            <Image src={Linkedin} alt="linkedin" />
            <Image src={Discord} alt="discord" />
            <Image src={Youtube} alt="youtube" />
          </div>
        </div>
      </div>
      <div className="text-white text-center md:text-left border-t border-[#1D2939] pt-6 max-w-7xl m-auto pb-6 mt-12">
        &copy; {new Date().getFullYear()} Bonpay Inc. All rights reserved.
      </div>
    </footer>
  );
}
