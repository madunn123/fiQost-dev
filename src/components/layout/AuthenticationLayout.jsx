import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthenticationLayout({
  children, title, link, haveornohaveaccount, bodyLink,
}) {
  return (
    <section className="grid grid-cols-6 gap-0 p-0 overflow-hidden xl:h-full xl:w-full">
      <div className="relative col-span-2">
        <div className="absolute flex flex-row justify-center w-full xl:top-24">
          <img src="/src/assets/images/logo.svg" alt="logo-fiqos" className="bg-cover xl:w-80 xl:mx-auto" />
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center">
              <h1 className="m-0 text-4xl font-bold capitalize">{title}</h1>
              <span className="flex flex-row gap-1.5 text-slate-600 mx-auto">
                {haveornohaveaccount}
                <Link to={link} className="font-semibold text-main-color">{bodyLink}</Link>
              </span>
            </div>

            {children}
          </div>
        </div>

        <div className="absolute left-0 flex justify-center w-full bottom-10">
          <span className="text-sm text-center xl:max-w-xs text-slate-600">
            Dengan mendaftar, kamu telah setuju dengan
            {' '}
            <Link to="/" className="font-bold text-main-color">Ketentuan & Kebijakan Pribadi</Link>
          </span>
        </div>
      </div>

      <div className="col-span-4 container-images">
        <img src="/src/assets/images/login-image.jpg" className="object-cover object-center w-full h-screen bg-cover" alt="banner" />
      </div>
    </section>
  );
}
