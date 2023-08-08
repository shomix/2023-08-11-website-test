import { useState } from 'react';
import Image from 'next/image';
import {
  DarkLogo,
  BusinessIcon,
  BackArrow,
  CreatorIcon,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
} from '@/components/assets';
import Input from '@/components/ui/organisms/Input';
import SelectInput from '@/components/ui/organisms/SelectInput';
import Button from '@/components/ui/organisms/Button';
import CheckBoxInput from '@/components/ui/organisms/CheckBoxInput';
import RadioInput from '@/components/ui/organisms/RadioInput';

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
    <div className="text-[0.9em]">
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

      <p className="font-medium font-gilroy">Are you a software developer ?</p>
      <div className="flex gap-4 py-3">
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
      <RadioInput
        containerClassName="flex items-start gap-2 mb-4"
        label={
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label
            htmlFor="consentPolicy"
            className="p-0 text-slate-600 font-gilroy"
          >
            I consent to the collection and processing of my personal data in
            line with data regulations as described in the
            <span className="font-semibold text-[#5241AA] font-gilroy">
              {' '}
              Privacy Policy
            </span>
          </label>
        }
        id="consentPolicy"
        checked={formData.consentPolicy}
        onChange={handleRadioInput}
      />

      <Button text="Create Account" onClick={handleSubmit} />
      <p className="w-[80%] mt-4 mx-auto text-slate-600 text-center font-gilroy">
        By clicking “Create Account” button, you agree to Bonpay’s <br />
        <span className="text-[#5241AA] font-semibold font-gilroy">
          Terms of use.
        </span>
      </p>

      <p className="text-center mt-5 text-slate-600 font-gilroy">
        Already have an account?{' '}
        <span className="font-semibold text-[#5241AA] font-gilroy">
          SIGN IN
        </span>
      </p>
    </div>
  );

  // First Business Section Content
  const businessFirst = (
    <div className="text-[0.9em]">
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

      <Button text="Continue" onClick={businessNext} />
    </div>
  );

  // second business section content
  const businessSecond = creatorContent;

  // to decide which business section to show
  const businessContent = nextBusiness ? businessSecond : businessFirst;

  return (
    <div className="font-gilroy">
      <div className="flex flex-col md:flex-row z-[-5] ">
        <div className="flex-1 bg-[#3D3080] py-5 px-6 md:px-10 lg:px-16 relative text-white z-[1]">
          <Image
            alt="DarkLogo"
            src={DarkLogo}
            className="w-[7em] flex absolute top-5 "
          />

          {/* Lines */}
          <Image
            src={Rectangle1}
            alt="rectangle1"
            className="absolute left-[-10em] bottom-0 z-[-1] top-0"
          />
          <Image
            src={Rectangle4}
            alt="rectangle4"
            className="absolute left-[-10em] bottom-0 z-[-1] top-[5em]"
          />
          <Image
            src={Rectangle3}
            alt="rectangle3"
            className="hidden md:flex fixed left-[-10em] bottom-0 z-[-1] top-[10em]"
          />
          <Image
            src={Rectangle2}
            alt="rectangle2"
            className="absolute right-0 md:-right-40 z-[-1] bottom-0 "
          />

          <div className="mt-20 z-[-3]">
            <h1 className="text-[2em] z-20 font-bold font-gilroy">
              Welcome to Bonpay
            </h1>
            <p className=" font-gilroy font-light text-[0.9em] w-[80%] md:w-[100%] text-slate-200">
              BonPay powers the new generation of businesses and help them reach
              new heights of profitability, admiration and love
            </p>

            <hr className="mt-12 mb-9 border-[#6d6b75] border-[0.1px]" />

            <h2 className="font-bold mb-7  text-[1.2em] font-gilroy">
              How would you like to use BonPay ?
            </h2>
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
                className="flex cursor-pointer border rounded-lg py-3 border-slate-500 px-5 "
              >
                <CheckBoxInput styleProp={!isCreator} isChecked={isCreator} />
                <div className="flex items-center w-full justify-between">
                  <div className="pl-4">
                    <h3 className="font-semibold text-[1.2em] pb-1 font-gilroy">
                      Creator
                    </h3>
                    <ul
                      style={isCreator ? { color: 'black' } : {}}
                      className="text-[0.9em] text-slate-200 list-inside font-gilroy "
                    >
                      <li
                        className={
                          isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 font-semibold'
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Freelancer
                      </li>
                      <li
                        className={
                          isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 font-semibold'
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Artist
                      </li>
                      <li
                        className={
                          isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 font-semibold'
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
                        ? 'bg-[#E4DFFF] p-4 rounded-lg scale-75 md:scale-100 '
                        : 'bg-[#F9F5FF] p-4 rounded-lg scale-75 md:scale-100 '
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
                className="flex cursor-pointer border border-slate-500 rounded-lg py-3 px-5 "
              >
                <CheckBoxInput styleProp={isCreator} isChecked={!isCreator} />
                <div className="flex items-center w-full justify-between">
                  <div className=" pl-4">
                    <h3 className="font-semibold text-[1.2em] pb-1 font-gilroy">
                      Business
                    </h3>
                    <ul
                      style={!isCreator ? { color: 'black' } : {}}
                      className="text-[0.9em] text-slate-200 list-inside relative"
                    >
                      <li
                        className={
                          !isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 font-semibold'
                            : 'custom-list-bullet pt-1 ml-6 font-light'
                        }
                      >
                        Registered Business
                      </li>
                      <li
                        className={
                          !isCreator
                            ? 'custom-list-bullet-active pt-1 ml-6 font-semibold'
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
                        ? 'bg-[#E4DFFF] p-4 rounded-lg scale-75 md:scale-100 '
                        : 'bg-[#F9F5FF] p-4 rounded-lg scale-75 md:scale-100 '
                    }
                  >
                    <Image src={BusinessIcon} alt="business_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[80vh] md:flex-1 md:h-screen bg-white py-5 pt-1 px-6 md:pt-0 md:px-10 lg:px-16 z-[2]">
          <div className=" w-full mt-10 mb-7 md:mb-auto md:mt-[6.2em] ">
            <div className="flex flex-col-reverse justify-start items-start md:flex-row md:justify-between">
              <h1 className="text-[1.8em] text-[#6651D4] font-bold pb-4 font-gilroy">
                Create new account
              </h1>

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
                  className=" cursor-pointer active:bg-[#0504091a] bg-[#3D30801A] bg-opacity-[0.1] flex items-center h-[2.5em] my-auto py-0 px-[0.6em] rounded-full mb-4 md:mb-auto "
                >
                  <Image src={BackArrow} alt="back_arrow" />
                </div>
              )}
            </div>
            <form className="text-[0.9em] pb-10 md:pb-0">
              {isCreator ? creatorContent : businessContent}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
