import { useId } from 'react';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Login() {
  const inputId = useId();

  return (
    <section className="grid xl:grid-cols-8 gap-0">
      <div className="xl:col-span-5 bg-main-color xl:h-screen">
        <div className="flex items-center justify-center xl:h-full">
          <div className="bg-thirdy-color p-20 flex flex-col gap-[40px] xl:w-[60%]">
            <div className="flex flex-col gap-0 leading-snug">
              <h1 className="xl:text-[48px] text-white xl:max-w-xs font-semibold">
                Lorem ipsum dolor si <br className="hidden xl:block" /> amet{' '}
              </h1>
              <h1 className="xl:text-[48px] font-colors font-semibold">
                consectetur
              </h1>
            </div>
            <p className="m-0 font-colors font-normal xl:max-w-sm xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna{' '}
              <br className="hidden xl:block" /> aliqua.
            </p>
          </div>
        </div>
      </div>

      <form className="xl:col-span-3">
        <div className="h-full justify-center flex items-center">
          <div className="flex flex-col w-[450px] gap-[48px]">
            <div className="flex flex-col gap-[8px] font-colors">
              <h1 className="xl:text-[32px] font-bold">Hello</h1>
              <span className="xl:text-lg font-normal">
                Enter your email and password to login.
              </span>
            </div>

            <div className="grid grid-cols-1 gap-[24px]">
              <label htmlFor={inputId} className="flex flex-col gap-[8px]">
                <small className="text-base font-colors capitalize font-semibold">
                  email
                </small>
                <input
                  type="text"
                  id={inputId}
                  className="border border-secondary-color outline-none font-normal focus:border focus:outline-main-color duration-700 p-[16px] rounded-[8px] placeholder:text-font-colors text-font-colors text-base"
                  placeholder="johndoe@gmail.com"
                />
              </label>

              <label htmlFor={inputId} className="flex flex-col gap-[8px]">
                <small className="text-base font-colors capitalize font-semibold">
                  password
                </small>
                <input
                  type="password"
                  id={inputId}
                  className="border border-secondary-color outline-none font-normal focus:border focus:outline-main-color duration-700 p-[16px] rounded-[8px] placeholder:text-font-colors text-font-colors text-base"
                  placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;"
                />
              </label>

              <div className="flex flex-row items-center justify-between">
                <label
                  htmlFor={inputId}
                  className="flex flex-row items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={inputId}
                    className="h-4 w-4 accent-main-color"
                  />
                  <span className="text-base text-font-colors">
                    Remember me
                  </span>
                </label>

                <Link
                  to="/"
                  className="text-font-colors text-base underline underline-offset-2"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="flex flex-row items-center gap-[24px]">
                <button
                  type="button"
                  className="capitalize w-full font-semibold text-base bg-main-color text-white rounded-[8px] p-[16px]"
                >
                  login
                </button>

                <button
                  type="button"
                  className="capitalize w-full font-semibold text-base border border-font-colors text-font-colors rounded-[8px] p-[16px]"
                >
                  sign up
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <span className="text-center text-sm font-normal text-font-colors">
                Or, login with
              </span>

              <div className="flex flex-row items-center gap-[16px]">
                {Array.from({ length: 3 })?.map((_, i) => {
                  const nameWith = ['facebook', 'linkedin', 'google'];

                  return (
                    <span
                      key={i}
                      className="w-full border border-secondary-color text-font-colors text-sm font-medium text-center capitalize py-[12px] px-[16x] rounded-[4px]"
                    >
                      {nameWith[i]}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
