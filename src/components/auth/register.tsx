import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "../common/phoneInput";
import Stepper from "../common/stepper";
import RadioButton from "../common/RadioButton";

const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "My Number Is",
    "Verification Code",
    "What’s Your Name?",
    "Email Address",
    "How old are you?",
    "What’s Your Gender?",
    "I am Looking for...",
    "Select up to 3 interest",
    "Upload your photo",
  ];
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <MyNumber />;
      case 2:
        return <Verification />;
      case 3:
        return <YourName />;
      case 4:
        return <EmailAddress />;
      case 5:
        return <HowOld />;
      case 6:
        return <Gender />;
      case 7:
        return <LookingFor />;
      case 8:
        return <MultiSelect />;
      case 9:
        return <UploadImag />;
      default:
        return null;
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <div className="mt-4">{renderStepContent()}</div>
      <div className=" mt-4 items-center justify-center">
        {/* <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="bg-gray-300 text-gray-600 py-2 px-4 rounded disabled:opacity-50"
        >
          Previous
        </button> */}
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className="flex text-white w-[325px] h-[56px] bg-[#FF5069] rounded-full font-medium px-16 py-2 text-center items-center"
        >
          {currentStep === 2 ? "Verify" : "Continue"}
        </button>
      </div>
      <div className="flex flex-col">
        <img className="w-[90%] h-auto" src="/image/main/vectorLine.png" />
      </div>
    </div>
  );
};

const MyNumber: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center">
        <div className="flex flex-col">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"My Number Is"}
          </p>
          <p className="text-[#333333] mx-3 px-14 text-center text-sm">
            We'll need your phone number to send an OTP for verification.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <PhoneInput />
          {/* <button
            type="button"
            className="flex text-white w-[325px] h-[56px] bg-[#FF5069] rounded-full font-medium px-16 py-2 text-center items-center"
          >
            Continue
          </button> */}
        </div>
        {/* <div className="flex flex-col">
          <img className="w-[90%] h-auto" src="/image/main/vectorLine.png" />
        </div> */}
      </div>
    </div>
  );
};

const Verification: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-between mt-14 gap-5 items-center">
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"Verification Code"}
          </p>
          <p className="text-[#333333] mx-3 px-14 text-center text-sm">
            Please enter code we just send to
          </p>
          <p className="text-[#333333] mx-3 px-14 text-center font-semibold text-sm">
            +91 99292 77633
          </p>
        </div>
        <form className="max-w-sm items-center justify-center mx-auto">
          <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
            <div>
              <label htmlFor="code-1" className="sr-only">
                First code
              </label>
              <input
                type="number"
                maxLength={1}
                data-focus-input-init
                data-focus-input-next="code-2"
                id="code-1"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-full focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="code-2" className="sr-only">
                Second code
              </label>
              <input
                type="number"
                maxLength={1}
                data-focus-input-init
                data-focus-input-prev="code-1"
                data-focus-input-next="code-3"
                id="code-2"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-full focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="code-3" className="sr-only">
                Third code
              </label>
              <input
                type="number"
                maxLength={1}
                data-focus-input-init
                data-focus-input-prev="code-2"
                data-focus-input-next="code-4"
                id="code-3"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-full focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div>
              <label htmlFor="code-4" className="sr-only">
                Fourth code
              </label>
              <input
                type="number"
                maxLength={1}
                data-focus-input-init
                data-focus-input-prev="code-3"
                data-focus-input-next="code-5"
                id="code-4"
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-full focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col">
          <p className="text-[#333333] mx-3 px-14 text-center font-semibold text-sm">
            {"Didn’t receive OTP?"}
          </p>
          <Link className="text-[#FF5069] text-center underline" to={""}>
            Resend Code
          </Link>
        </div>
        {/* <div className="flex flex-col gap-5">
          <button
            type="button"
            className="flex text-white w-[325px] h-[56px] bg-[#FF5069] rounded-full font-medium px-16 py-2 text-center items-center"
          >
            Verify
          </button>
        </div> */}
        {/* <div className="flex flex-col">
          <img className="w-[90%] h-auto" src="/image/main/vectorLine.png" />
        </div> */}
      </div>
    </div>
  );
};

const YourName: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center">
        <div className="flex flex-col">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"What is your Name?"}
          </p>
          <p className="text-[#333333] mx-3 px-14 text-center text-sm">
            Let's Get to Know Each Other
          </p>
        </div>
        <form className="max-w-sm mx-auto">
          <div className="flex mb-2 space-x-2 w-[325px] h-[56px] rtl:space-x-reverse">
            <div>
              <label htmlFor="code-1" className="sr-only">
                First code
              </label>
              <input
                type="text"
                className="w-[325px] h-[56px] block py-3 text-lg font-semibold text-center text-gray-600 bg-white border border-gray-300 rounded-full"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const EmailAddress: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"Email Address"}
          </p>
          <p className="text-[#333333] mx-3 px-10 text-center text-sm">
            We'll need your email to stay in touch
          </p>
        </div>
        <form className="max-w-sm mx-auto">
          <div className="flex mb-2 space-x-2 w-[325px] h-[56px] rtl:space-x-reverse">
            <div>
              <label htmlFor="code-1" className="sr-only">
                First code
              </label>
              <input
                type="text"
                className="w-[325px] h-[56px] block py-3 text-lg font-semibold text-center text-gray-600 bg-white border border-gray-300 rounded-full"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const HowOld: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"How Old Are You?"}
          </p>
          <p className="text-[#333333] mx-3 px-10 text-center text-sm">
            Please provide your age in years
          </p>
        </div>
        <form className="max-w-sm mx-auto">
          <div className="flex mb-2 space-x-2 w-[325px] h-[56px] rtl:space-x-reverse">
            <div>
              <label htmlFor="code-1" className="sr-only">
                First code
              </label>
              <input
                type="text"
                className="w-[325px] h-[56px] block py-3 text-lg font-semibold text-center text-gray-600 bg-white border border-gray-300 rounded-full"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Gender: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"What's Your Gender?"}
          </p>
          <p className="text-[#333333] mx-3 px-10 text-center text-sm">
            Tell us about your gender
          </p>
        </div>
        <div className="flex flex-col">
          <ul className="flex w-full flex-col gap-3">
            <li className="rounded-full">
              <input
                type="radio"
                id="hosting-small"
                name="gender"
                value="male"
                className="hidden peer"
                required
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex flex-col items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer peer-checked:bg-[#FF5069] peer-checked:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M442 48h-90a22 22 0 0 0 0 44h36.89l-60.39 60.39c-68.19-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.35 14.57-229.54L420 123.11V160a22 22 0 0 0 44 0V70a22 22 0 0 0-22-22M313.92 381.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0s50.69 133.16 0 183.84"
                  ></path>
                </svg>
                <div className="block">
                  <div className="w-full text-lg font-semibold">Male</div>
                </div>
              </label>
            </li>

            <li className="rounded-full">
              <input
                type="radio"
                id="hosting-medium"
                name="gender"
                value="female"
                className="hidden peer"
                required
              />
              <label
                htmlFor="hosting-medium"
                className="inline-flex flex-col items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-full cursor-pointer peer-checked:bg-[#FF5069] peer-checked:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M512 640a256 256 0 1 0 0-512a256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640a320 320 0 0 1 0 640"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32"
                  ></path>
                </svg>
                <div className="block">
                  <div className="w-full text-lg font-semibold">Female</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const LookingFor: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("male");

  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"I Am Looking For..."}
          </p>
          <p className="text-[#333333] mx-3 px-10 text-center text-sm">
            Provide us with further insights into your preferences
          </p>
        </div>
        <div className="flex">
          <ul className="flex flex-col font-medium text-gray-900 gap-5">
            <li className="">
                <div className="flex  px-5 items-center w-[325px] h-[56px] bg-white rounded-full">
                    <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">A relationship </label>
                    <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
            </li>
            <li className="">
                <div className="flex  px-5 items-center w-[325px] h-[56px] bg-white rounded-full">
                    <label htmlFor="list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Somthing casual</label>
                    <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
            </li>
            <li className="">
                <div className="flex  px-5 items-center w-[325px] h-[56px] bg-white rounded-full">
                    <label htmlFor="list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I’m not sure yet</label>
                    <input id="list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
            </li>
            <li className="">
                <div className="flex  px-5 items-center w-[325px] h-[56px] bg-white rounded-full">
                    <label htmlFor="list-radio-passport" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Prefer not to say</label>
                    <input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                </div>
            </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: 'A relationship', value: 'relationship' },
  { label: 'Something casual', value: 'casual' },
  { label: 'I’m not sure yet', value: 'not_sure' },
  { label: 'Prefer not to say', value: 'prefer_not_to_say' },
];

const MultiSelect: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"Select up to 3 interest"}
          </p>
          <p className="text-[#333333] mx-3 px-10 text-center text-sm">
          Tell us what piques your curiosity and passions
          </p>
        </div>
        <div className="flex">
          <ul className="flex w-full flex-col gap-3">
            {options.map((option) => (
              <li key={option.value}>
                <div
                  className={`flex w-[325px] h-[56px] px-4 items-center justify-between rounded-full cursor-pointer ${
                    selectedValues.includes(option.value)
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  <span className="text-lg font-medium">{option.label}</span>
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleSelect(option.value)}
                    className="w-5 h-5 text-[#FF5069] bg-gray-100 border-gray-300 focus:ring-[#FF5069]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const UploadImag: React.FC  =() => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between mt-14 items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-black font-semibold mx-5 px-5 text-center text-2xl">
            {"Upload your photo"}
          </p>
          <p className="text-[#333333] mx-3 px-10 text-center text-sm">
          We'd love to see you. Upload a photo for your dating journey.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register;
export {
  MyNumber,
  Verification,
  YourName,
  EmailAddress,
  HowOld,
  Gender,
  LookingFor,
};
