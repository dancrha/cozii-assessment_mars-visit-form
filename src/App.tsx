import "./App.css";
import { HealthForm } from "./HealthForm";
import { TravelForm } from "./TravelForm";
import { UserForm } from "./UserForm";
import { useMultistepForm } from "./useMultistepForm";
import { FormEvent, useState } from "react";
import Confetti from "react-confetti";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
  departureday: string;
  departuremonth: string;
  departureyear: string;
  returnday: string;
  returnmonth: string;
  returnyear: string;
  accommodation: string;
  specialreq: string;
  email: string;
  phone: number;
  healthy: boolean;
  contactname: string;
  contactnumber: number;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
  nationality: "",
  departureday: "",
  departuremonth: "",
  departureyear: "",
  returnday: "",
  returnmonth: "",
  returnyear: "",
  accommodation: "",
  specialreq: "",
  email: "",
  phone: 0,
  healthy: false,
  contactname: "",
  contactnumber: 0,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <TravelForm {...data} updateFields={updateFields} />,
      <HealthForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLastStep) {
      setIsSubmitted(true);
    } else {
      next();
    }
  }
  return (
    <div className='bg-[#191919] h-screen'>
      <nav className='bg-white'>
        <div className='flex justify-between items-center mx-8 uppercase'>
          <img src='/assets/logo.png' alt='logo' width={170} height={60} />

          <div className='flex gap-6'>
            <p>Home</p>
            <p>About</p>
            <p>Destinations</p>
          </div>
        </div>
      </nav>
      {isSubmitted ? <Confetti width={1900} height={1000} /> : null}
      <div className='relative bg-white mt-48 border p-4 rounded-md mx-auto w-[600px] text-black items-center'>
        {isSubmitted ? (
          // Show congratulations message when submitted

          <div className='text-center'>
            <h2>Congratulations, you are signed up!</h2>
          </div>
        ) : (
          // Show the form when not submitted
          <form onSubmit={onSubmit}>
            <div className='absolute top-2 right-2 '>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div className='mt-2 flex gap-2 justify-end mt-auto'>
              {!isFirstStep && (
                <button
                  type='button'
                  onClick={back}
                  className='border p-4 rounded-md bg-red-400 hover:scale-105 transition active:scale-90 duration-150 hover:shadow-xl'
                >
                  Back
                </button>
              )}
              <button
                type='submit'
                className='border p-4 rounded-md bg-blue-400 hover:scale-105 transition active:scale-90 duration-150 hover:shadow-xl '
              >
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
