import { useState } from 'react';
import Image from 'next/image';
import {
  DarkLogo,
  BusinessIcon,
  BackArrow,
  CreatorIcon,
} from '@/components/assets';
import Input from '@/components/ui/atoms/Input/Input';
import SelectInput from '@/components/ui/atoms/Input/Select';
import Button from '@/components/ui/atoms/Button';
import CheckBoxInput from '@/components/ui/atoms/Input/CheckBox';
import RadioInput from '@/components/ui/atoms/Input/Radio';

export default function Signup() {
  const [selected, setSelected] = useState('creator'); // saves current section
  const [nextBusiness, setNextBusiness] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    isSoftwareDeveloper: false,
    consent: '',
    businessName: '',
    country: 'nigeria',
    industry: 'ecommerce',
    website: '',
    consentPolicy: false,
  });

  const isCreator = selected === 'creator';

  // function to navigate between the 2 buisiness section forms
  const businessNext = () => {
    setNextBusiness(true);
  };

  // function to swtich between creator and business section
  function switchSection(newSection: string) {
    setSelected(newSection);
  }

  // function to handle Button Submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e, id) => {
    setFormData((prev) => ({ ...prev, [id]: e.target.value }));
  };

  const handleRadioInput = (e, id) => {
    setFormData((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // creator section content
  const creatorContent = (
    <div className="text-[1.em]">
      <Input
        text="Full Name"
        placeholder="Full name"
        id="fullName"
        type="text"
        onChange={handleInput}
        value={formData.fullName}
      />
      <Input
        text="Email Address"
        placeholder="Email Address"
        id="email"
        type="email"
        onChange={handleInput}
        value={formData.email}
      />
      <Input
        text="Password"
        placeholder="password"
        id="password"
        type="password"
        onChange={handleInput}
        value={formData.password}
      />

      <p className="font-medium">Are you a software developer ?</p>
      <div className="flex gap-5 py-3">
        <RadioInput
          label={
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="isSoftwareDeveloper">Yes, I am</label>
          }
          checked={formData.isSoftwareDeveloper}
          onChange={handleRadioInput}
          id="isSoftwareDeveloper"
        />
        <RadioInput
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          label={<label htmlFor="isSoftwareDeveloper">No, I'm not</label>}
          checked={!formData.isSoftwareDeveloper}
          onChange={handleRadioInput}
          id="isSoftwareDeveloper"
        />
      </div>
      <div className="flex gap-3 mt-3 mb-4 items-baseline">
        <CheckBoxInput isChecked={false} />

        <div className="p-0 text-slate-600">
          I consent to the collection and processing of my personal data in line
          with data regulations as described in the
          <span className="font-semibold text-[#5241AA]"> Privacy Policy</span>
        </div>
      </div>

      <Button onClick={handleSubmit}>Create Account</Button>
      <p className="lg:w-[80%] mt-4 mx-auto text-slate-600 text-center">
        By clicking “Create Account” button, you agree to Bonpay’s <br />
        <span className="text-[#5241AA] font-semibold">Terms of use.</span>
      </p>

      <p className="text-center mt-8 text-[15px] text-slate-600">
        Already have an account?{' '}
        <span className="font-semibold text-[#5241AA]">SIGN IN</span>
      </p>
    </div>
  );

  // First Business Section Content
  const businessFirst = (
    <div className="text-[1em]">
      <Input
        text="Legal Business Name"
        placeholder="Business name"
        id="businessName"
        type="text"
        onChange={handleInput}
        value={formData.businessName}
      />
      <SelectInput
        onChange={handleInput}
        id="country"
        text="Select a Country"
        options={[
          { value: 'nigeria', label: 'nigeria' },
          { value: 'USA', label: 'USA' },
        ]}
      />
      <SelectInput
        onChange={handleInput}
        id="industry"
        text="Select an Industy"
        options={[
          { value: 'ecommerce', label: 'ecommerce' },
          { value: 'fintech', label: 'fintech' },
        ]}
      />
      <Input
        text="Website"
        placeholder="Enter website"
        id="website"
        type="text"
        onChange={handleInput}
        value={formData.website}
      />

      <Button onClick={businessNext}>Continue</Button>
    </div>
  );

  // second business section content
  const businessSecond = creatorContent;

  // to decide which business section to show
  const businessContent = nextBusiness ? businessSecond : businessFirst;

  return (
    <div className="font-gilroy w-[100%]">
      <Image
        alt="DarkLogo"
        src={DarkLogo}
        className="h-[7em] mb-8 absolute left-[1.2rem] md:left-[7rem] w-[9em]"
      />
      <div className="flex flex-col md:flex-row z-[-5] w-[100%] md:h-[100vh] ">
        <div className="flex pt-[7em] pb-[4em] md:pb-0 md:pt-0 lg:px-28 bg-[#3D3080] flex-col w-[100%] md:w-[50%] h-[100%] px-6 md:px-10 text-white items-center justify-center">
          <div className="relative">
            <h1 className="text-[2em] z-20 font-bold mb-2 font-gilroy">
              Welcome to Bonpay
            </h1>
            <p className="text-[1em] w-[90%] md:w-[100%] text-slate-200 font-[400]">
              Bonpay powers the new generation of businesses and help them reach
              new heights of profitability, admiration and love
            </p>

            <hr className="mt-12 mb-9 border-[#6d6b75] border-[0.1px]" />

            <p className="font-[600] mb-7  text-[1.2em]">
              How would you like to use BonPay?
            </p>
            <div className="gap-5 flex flex-col">
              <div
                onClick={() => switchSection('creator')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    switchSection('creator');
                  }
                }}
                style={
                  isCreator
                    ? {
                        backgroundColor: '#F9F5FF',
                        color: 'black',
                        borderColor: '#3D3080',
                      }
                    : {}
                }
                className="flex flex-row md:flex-row lg:flex-row items-center cursor-pointer border border-slate-500 rounded-lg py-3 px-5 h-[9em] md:h-auto"
              >
                <CheckBoxInput styleProp={!isCreator} isChecked={isCreator} />
                <div className="flex items-center w-full justify-between">
                  <div className="pl-4">
                    <p className="text-[1.2em] pb-1">Creator</p>
                    <ul
                      style={isCreator ? { color: 'black' } : {}}
                      className="text-[0.9em] text-slate-200 list-inside font-gilroy "
                    >
                      <li
                        className={
                          isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 '
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Freelancer
                      </li>
                      <li
                        className={
                          isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 '
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Artist
                      </li>
                      <li
                        className={
                          isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 '
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Content Creator, etc
                      </li>
                    </ul>
                  </div>
                  <div
                    className={
                      isCreator
                        ? 'bg-[#E4DFFF] p-4 rounded-2xl scale-75 md:scale-100 '
                        : 'bg-[#F9F5FF] p-4 rounded-2xl scale-75 md:scale-100 '
                    }
                  >
                    <Image src={CreatorIcon} alt="creator_icon" />
                  </div>
                </div>
              </div>

              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    switchSection('business');
                  }
                }}
                onClick={() => switchSection('business')}
                style={
                  selected === 'business'
                    ? {
                        backgroundColor: '#F9F5FF',
                        color: 'black',
                        borderColor: '#3D3080',
                      }
                    : {}
                }
                className="flex flex-row md:flex-row lg:flex-row items-center cursor-pointer border border-slate-500 rounded-lg py-3 px-5 h-[9em] md:h-auto"
              >
                <CheckBoxInput styleProp={isCreator} isChecked={!isCreator} />
                <div className="flex items-center w-full justify-between">
                  <div className=" pl-4">
                    <p className=" text-[1.2em] pb-1">Business</p>
                    <ul
                      style={!isCreator ? { color: 'black' } : {}}
                      className="text-[0.9em] text-slate-200 list-inside relative"
                    >
                      <li
                        className={
                          !isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 '
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Registered Business
                      </li>
                      <li
                        className={
                          !isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 '
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Enterprise Business
                      </li>
                    </ul>
                  </div>
                  <div
                    className={
                      !isCreator
                        ? 'bg-[#E4DFFF] p-4 rounded-2xl scale-75 md:scale-100 '
                        : 'bg-[#F9F5FF] p-4 rounded-2xl scale-75 md:scale-100 '
                    }
                  >
                    <Image src={BusinessIcon} alt="business_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-[3em] md:pt-0 justify-center w-[100%] md:w-[50%] md:flex-1 md:h-screen bg-white md:flex-col py-5  px-6 md:px-10 z-[2]">
          <div className="w-[100%] lg:px-28">
            {!isCreator && nextBusiness && (
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setNextBusiness(false);
                  }
                }}
                onClick={() => setNextBusiness(false)}
                className=" cursor-pointer active:bg-[#0504091a] bg-[#3D30801A] bg-opacity-[0.1] flex items-center h-[2.5em] py-0 px-[0.6em] rounded-full mb-6 w-[2.5em]"
              >
                <Image src={BackArrow} alt="back_arrow" />
              </div>
            )}

            <h1 className="text-[1.8em] text-[#6651D4] pb-4 font-[600] font-gilroy">
              Create new account
            </h1>

            <form className="text-[0.9em] pb-10 md:pb-0 font-[Inter]">
              {isCreator ? creatorContent : businessContent}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
