import React from "react";
import img from "@/Assets/support.png";
import Image from "next/image";

const NewLetter = () => {
  return (
    <>
      <div className="container py-20">
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="">
            <h2 className=" text-5xl font-medium tracking-tight text-dark sm:text-4xl">
              Subscribe to our Newsletter for Updates and Offers 
            </h2>

            <p className="mt-4  text-lg leading-8 text-gray-600">
              Keep pace with SecureCloud advancements! Join our mailing list for
              selective, noteworthy updates.
            </p>

            <form className=" mt-8 flex max-w-md gap-x-4">
              <label for="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                className=" flex-auto rounded-md border-0 bg-gray-300 px-6 py-3 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Notify me
              </button>
            </form>

            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true">
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.7"></circle>
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)">
                  <stop stop-color="#7775D6"></stop>
                  <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="">
            <Image src={img} className="w-full" alt="newsletter" />
          </div>
        </div>
      </div>

      {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          
        </div>
      </div> */}
    </>
  );
};

export default NewLetter;
