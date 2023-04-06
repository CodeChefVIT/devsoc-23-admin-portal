import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Example() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <div className="flex min-h-full flex-row">
        <div className="flex w-2/3 items-center justify-center bg-[#242E42] px-4 py-12 text-white sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full">
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Username
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center rounded-md border border-[#37ABBC] px-8 py-2 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#37ABBC]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/login-bg.png"
            alt="asldkj"
            className="h-full w-full object-contain"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
