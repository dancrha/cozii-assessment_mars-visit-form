// Importing necessary styles and components
import "../App.css";
import { HealthForm } from "./HealthForm";
import { TravelForm } from "./TravelForm";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultistepForm";
import React, { FormEvent, useState } from "react";
import Confetti from "react-confetti";
import { useRef } from "react";

// Define the structure of the form data
type FormData = {
  // User information
  firstName: string;
  middleName: string;
  lastName: string;
  age: string;
  gender: string;
  country: string;
  certs: string;
  // Travel information
  departureday: string;
  departuremonth: string;
  departureyear: string;
  returnday: string;
  returnmonth: string;
  returnyear: string;
  accommodation: string;
  launchsite: string;
  specialreq: string;
  // Health information
  email: string;
  phone: string;
  healthy: boolean;
  contactname: string;
  contactnumber: string;
  medical: string;
};

// Initial data for the form
const INITIAL_DATA: FormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  age: "",
  gender: "",
  country: "",
  certs: "",
  departureday: "",
  departuremonth: "",
  departureyear: "",
  returnday: "",
  returnmonth: "",
  returnyear: "",
  accommodation: "",
  launchsite: "",
  specialreq: "",
  email: "",
  phone: "",
  healthy: false,
  contactname: "",
  contactnumber: "",
  medical: "",
};

const LandingPage = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Ref to scroll to the form section
  const divRef = useRef<HTMLDivElement | null>(null);

  // Function to update form fields
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const areRequiredFieldsCompleted = () => {
    return (
      data.firstName.trim() !== "" &&
      data.lastName.trim() !== "" &&
      data.phone !== "" &&
      data.email.trim() !== "" &&
      data.contactname.trim() !== "" &&
      data.contactnumber.trim() !== "" &&
      data.departureday.trim() !== "" &&
      data.departuremonth.trim() !== "" &&
      data.departureyear.trim() !== "" &&
      data.returnday.trim() !== "" &&
      data.returnmonth.trim() !== "" &&
      data.returnyear.trim() !== ""
    );
  };

  // Custom hook for handling multistep form logic
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    back,
    next,
    isLastStep,
    setCurrentStepIndex,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <TravelForm {...data} updateFields={updateFields} />,
    <HealthForm {...data} updateFields={updateFields} />,
  ]);

  // Form submission handler
  function onSubmit(e: FormEvent) {
    e.preventDefault();

    // Function to validate the phone number
    const isValidPhoneNumber = (phoneNumber: string) => {
      const cleanedPhoneNumber = phoneNumber.replace(/[-()\s]/g, ""); // Remove hyphens and other non-digit characters
      return (
        cleanedPhoneNumber.length >= 10 && /^\d+$/.test(cleanedPhoneNumber)
      );
    };

    // Check if required fields are completed based on the current step
    if (
      (currentStepIndex === 0 &&
        (data.firstName.trim() === "" || data.lastName.trim() === "")) ||
      (currentStepIndex === 1 && data.departureday.trim() === "") ||
      (currentStepIndex === 1 && data.departuremonth.trim() === "") ||
      (currentStepIndex === 1 && data.departureyear.trim() === "") ||
      (currentStepIndex === 1 && data.returnday.trim() === "") ||
      (currentStepIndex === 1 && data.returnmonth.trim() === "") ||
      (currentStepIndex === 1 && data.returnyear.trim() === "") ||
      (currentStepIndex === 0 &&
        (!isValidPhoneNumber(data.phone) || data.email.trim() === "")) ||
      (currentStepIndex === 2 &&
        (data.contactname.trim() === "" ||
          !isValidPhoneNumber(data.contactnumber)))
    ) {
      // Display an alert for the user to fill in required fields
      alert("Please fill in all required fields.");
      return;
    }

    if (isLastStep) {
      setIsSubmitted(true);
    } else {
      next();
    }
  }

  // Function to reset the form
  const resetForm = () => {
    setData(INITIAL_DATA);
    setIsSubmitted(false);
    setCurrentStepIndex(0);

    // Scroll to the top of the screen
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // JSX for the App component
  return (
    <div className=' bg-gradient-to-b from-black to-gray-900 overflow-y-auto'>
      {/* Navigation bar */}
      <nav className='bg-gradient-to-r from-[#ffa103] to-[#f0030f] opacity-80'>
        {/* Logo and navigation links */}
        <div className='flex justify-between items-center mx-8 uppercase'>
          <img
            src='/assets/logo2.png'
            alt='logo'
            width={170}
            height={60}
            onClick={resetForm}
            className='hover:cursor-pointer'
          />
          <div className='flex gap-6 hover:cursor-pointer text-white'>
            <p>Home</p>
            <p>About</p>
            <p>Destinations</p>
          </div>
        </div>
      </nav>

      {/* Introduction section */}
      <div className='items-center flex flex-col justify-center mt-16'>
        <h1 className='text-white text-3xl font-mono mb-8 '>
          Greetings, intergalactic travelers!
        </h1>
        <h1 className='text-white lg:text-3xl xl:text-4xl 2xl:text-5xl font-mono   '>
          Embark on a Journey to Mars with{" "}
          <span className='bg-gradient-to-r from-[#ffa103] to-[#f0030f] inline-block text-transparent bg-clip-text '>
            Celestial Escapes
          </span>
        </h1>{" "}
        <img
          src='/assets/mars3.gif'
          alt='mars'
          width={800}
          className='mt-16 hover:scale-105 transition active:scale-90 duration-150'
        />
      </div>

      {/* Get Started button */}
      <div className='flex justify-center text-center'>
        <button
          onClick={() => divRef.current?.scrollIntoView({ behavior: "smooth" })}
          className='bg-gradient-to-r from-[#ffa103] to-[#f0030f] hover:from-[#f0030f] hover:to-[#ffa103] inline-block text-white py-3 px-8 mt-16 rounded-full hover:shadow-xl text-md font-mono hover:scale-105 active:scale-90 transition duration-150 uppercase mb-72'
        >
          Get Started
        </button>
      </div>

      {/* Confetti animation on successful submission */}
      {isSubmitted ? <Confetti width={1900} height={1800} /> : null}

      {/* Form section */}
      <div
        ref={divRef}
        className='relative bg-white mt-60 mb-20 border p-4 rounded-md mx-auto w-[600px] text-black items-center'
      >
        {isSubmitted ? (
          // Show congratulations message when submitted
          <div className='text-center flex-col justify-center mt-auto items-center p-4'>
            <img
              src='/assets/logo.png'
              alt='logo'
              width={200}
              height={60}
              className='mx-auto mb-4'
            />
            <h2 className='font-semibold text-xl'>
              Congratulations, you are signed up!
            </h2>
            <p className='text-center mt-4'>
              Thank you for completing the Mars Expedition Application Form!
              Your journey to Mars awaits you. We are thrilled to have you on
              board for this incredible adventure. Our team will review your
              application, and further details about the expedition will be
              shared with you soon.
            </p>
          </div>
        ) : (
          // Show the form when not submitted
          <form onSubmit={onSubmit}>
            <div className='absolute font-mono top-2 right-2 '>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            {/* Navigation buttons */}
            <div className='flex gap-2 justify-end mt-auto'>
              {!isFirstStep && (
                <button
                  type='button'
                  onClick={back}
                  className='border px-6 py-2 rounded-md bg-gradient-to-r from-red-900 to-red-600 text-white hover:scale-105 transition active:scale-90 duration-150 hover:shadow-xl'
                >
                  Back
                </button>
              )}
              <button
                disabled={!areRequiredFieldsCompleted() && isLastStep}
                type='submit'
                className='border px-6 py-2 rounded-md font-mono bg-gradient-to-r from-gray-700 to-black text-white hover:scale-105 transition active:scale-90 duration-150 hover:shadow-xl'
              >
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        )}
      </div>

      <footer className='w-full bg-black items-center justify-between flex'>
        <img
          src='/assets/logo2.png'
          alt='logo'
          width={170}
          height={60}
          onClick={resetForm}
          className='hover:cursor-pointer ml-8'
        />

        <p className='text-white mr-8'>&copy; 2023 Celestial Escapes</p>
      </footer>
    </div>
  );
};

export default LandingPage;
