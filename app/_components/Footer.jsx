import Image from "next/image";
import React from "react";
import logo from "../../Assets/edulogo.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-gray-50">
        <div className="container pt-10 pb-6">
          <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div className="p-5">
              <Image src={logo} width={130} height={130}/>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Resources
              </div>
              <a className="my-3 block" href="/#">
                Documentation{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Tutorials <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Support <span className="text-teal-600 text-xs p-1">New</span>
              </a>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Support
              </div>
              <a className="my-3 block" href="/#">
                Help Center <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Privacy Policy{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Conditions <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Contact us
              </div>
              <a className="my-3 block" href="/#">
                XXX XXXX, Floor 4 San Francisco, CA
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                contact@company.com
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
