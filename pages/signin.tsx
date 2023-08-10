import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { DarkLogo } from '@/components/assets';
import Input from '@/components/ui/atoms/Input/Input';
import Button from '@/components/ui/atoms/Button';
import CheckBoxInput from '@/components/ui/atoms/Input/CheckBox';

export default function Signin() {
  const [staySigned, setStaySigned] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const updateSignedIn = () => {
    setStaySigned((prev) => !prev);
  };

  const updateForm = (e, id) => {
    setFormData((prev) => ({ ...prev, [id]: e.target.value }));
  };

  return (
    <div className="flex flex-col md:h-screen bg-[#FCFCFD] pt-12 md:pt-0">
      <div className="flex flex-col items-center font-gilroy bg-white border border-slate-200 rounded-2xl overflow-hidden mb-9 md:mb-0 w-[90%] md:w-[42em] mx-auto mt-auto">
        <div className=" bg-btn-primary flex flex-1 w-[100%] py-9">
          <Image
            src={DarkLogo}
            alt="bonpay logo"
            className="w-[10em] mx-auto"
          />
        </div>
        <div className="bg-white w-[90%] md:w-[75%] flex flex-col py-14 px-6 md:px-14 shadow-lg relative bottom-7 rounded-lg">
          <h3 className="font-gilroy font-semibold text-[1.6em] text-[#475467] pb-6">
            Log In
          </h3>
          <div className="text-[0.9em] md:text-[1em]">
            <Input
              text="Email Address"
              type="email"
              placeholder="Email Address"
              id="email"
              labelClassName="font-[500] mb-1 text-[#1D2939]"
              value={formData.email}
              onChange={updateForm}
            />
            <Input
              text={
                <p className="font-gilroy font-normal flex">
                  Password{' '}
                  <span className="font-gilroy ml-auto text-primary font-semibold">
                    Forgot your password?
                  </span>
                </p>
              }
              type="password"
              placeholder="Password"
              id="password"
              labelClassName="font-[500] mb-1 text-[#1D2939]"
              value={formData.password}
              onChange={updateForm}
            />
            <div className="flex mb-4">
              <CheckBoxInput
                inputClassName="h-3 my-auto flex"
                isChecked={staySigned}
                onClick={updateSignedIn}
              />
              <p className="font-gilroy">Stay signed In</p>
            </div>
          </div>
          <Button className="bg-[#7B61FF]">Continue</Button>
          <p className="mx-auto mt-6 font-gilroy text-slate-600 font-[500]">
            New to Bonpay?{' '}
            <Link href="/signup">
              <span className=" text-purple-500 font-gilroy">Signup</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="mt-[2em] md:mt-auto mb-10 py-3 bg-[#B3ACD21C]">
        <div className="flex w-[18em] justify-between mx-auto text-[0.9em] text-[#344054] font-[500]">
          <p className="font-gilroy">© Bonpay</p>
          <p className="font-gilroy">Contact</p>
          <p className="font-gilroy">Terms of use</p>
        </div>
      </div>
    </div>
  );
}
