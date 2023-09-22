import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="flex items-center justify-center xl:h-screen xl:w-full">
      <div className="bg-slate-50 shadow-lg text-font-colors xl:w-[700px] xl:h-[500px] p-10 rounded-lg">
        <div className="flex flex-col gap-10 xl:mt-6">
          <h1 className="m-0 text-2xl font-semibold uppercase">sign</h1>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                className="p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                placeholder="username"
              />
              <input
                type="password"
                className="p-3 text-sm font-medium duration-300 border rounded-md outline-none placeholder:text-slate-400 placeholder:capitalize focus:outline-main-color focus:outline-1 border-slate-300 placeholder:font-medium"
                placeholder="password"
              />
            </div>

            <div className="flex flex-col gap-4">
              <button type="submit" className="p-3 text-base font-semibold text-white uppercase duration-500 rounded-md bg-main-color hover:bg-thirdy-color hover:text-font-colors">
                Sign
              </button>

              <Link to="/register">
                don&apos;t have account?
                {' '}
                <b className="font-semibold text-main-color">sign up now</b>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
