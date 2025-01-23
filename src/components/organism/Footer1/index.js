import React from "react";
import Image from "next/image";
const Footer1 = () => {
  return (
    <>
      <footer>
        <div className="lg:flex lg:flex-row flex-col text-white justify-center px-2 lg:px-32 gap-8 py-12 bg-[#0d0d0d]">
          {/* <!-- Logo Section --> */}
          <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
            <a href="#" className="hidden sm:block">
              <Image
                className="h-30 w-auto mb-4"
                src="/logoft.png"
                alt="Desktop Logo"
                width={130}
                height={0}
              />
            </a>
            {/* <!-- Social Media Icons Placeholder --> */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                F
              </div>
              <div className="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                L
              </div>
              <div className="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                X
              </div>
              <div className="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                Y
              </div>
            </div>
          </div>

          {/* <!-- Links Section --> */}
          <div className="lg:w-1/4 pt-5 flex flex-col items-center lg:items-start">
            <p className="font-semibold mb-2 text-[20px]">Link</p>
            <a href="#">&#10148; Accreditation</a>
          </div>

          {/* <!-- Recent News Section --> */}
          <div className="lg:w-1/4 flex pt-5 flex-col items-center lg:items-start">
            <p className="mb-2 font-semibold text-[20px]">Recent News</p>
            <div className="pb-2">
              <a href="#">“au$250 Bonus</a>
              <p className="text-[10px]">
                &#10066; 17 Jan 25 &#9865; 999 views
              </p>
            </div>
            <div className="pb-2">
              <a href="#">“au$250 Bonus</a>
              <p className="text-[10px]">
                &#10066; 17 Jan 25 &#9865; 999 views
              </p>
            </div>
            <div className="pb-2">
              <a href="#">“au$250 Bonus</a>
              <p className="text-[10px]">
                &#10066; 17 Jan 25 &#9865; 999 views
              </p>
            </div>
          </div>

          <div className="lg:w-1/4 flex pt-5 flex-col items-center lg:items-start">
            <p className="font-bold mb-2 text-[20px]">Contact Details</p>
            <p>&#9750; Independence Pioneer Road 1</p>
            <p>&#9990; +62</p>
            <p>&#9993; ft@umt.ac.id</p>
            <p>&#128336; Monday–Saturday: 9am – 6pm</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
