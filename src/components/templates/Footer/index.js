import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div class="lg:flex lg:flex-row flex-col text-white justify-center px-2 lg:px-32 gap-8 py-12 bg-[#0d0d0d]">
          <div class="lg:w-1/4 flex flex-col items-center lg:items-start">
            <a href="#" class="hidden sm:block">
              <img
                class="h-30 w-auto mb-4"
                src="assets/img/logoft.png"
                alt="Desktop Logo"
              />
            </a>

            <div class="flex space-x-4">
              <div class="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                F
              </div>
              <div class="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                L
              </div>
              <div class="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                X
              </div>
              <div class="w-8 h-8 border-[1px] flex items-center justify-center text-white">
                Y
              </div>
            </div>
          </div>

          <div class="lg:w-1/4 pt-5 flex flex-col items-center lg:items-start">
            <p class="font-semibold mb-2 text-[20px]">Link</p>
            <a href="#">&#10148; Accreditation</a>
          </div>

          <div class="lg:w-1/4 flex pt-5 flex-col items-center lg:items-start">
            <p class="mb-2 font-semibold text-[20px]">Recent News</p>
            <div class="pb-2">
              <a href="#">“au$250 Bonus</a>
              <p class="text-[10px]">&#10066; 17 Jan 25 &#9865; 999 views</p>
            </div>
            <div class="pb-2">
              <a href="#">“au$250 Bonus</a>
              <p class="text-[10px]">&#10066; 17 Jan 25 &#9865; 999 views</p>
            </div>
            <div class="pb-2">
              <a href="#">“au$250 Bonus</a>
              <p class="text-[10px]">&#10066; 17 Jan 25 &#9865; 999 views</p>
            </div>
          </div>

          <div class="lg:w-1/4 flex pt-5 flex-col items-center lg:items-start">
            <p class="font-bold mb-2 text-[20px]">Contact Details</p>
            <p>&#9750; Independence Pioneer Road 1</p>
            <p>&#9990; +62</p>
            <p>&#9993; ft@umt.ac.id</p>
            <p>&#128336; Monday–Saturday: 9am – 6pm</p>
          </div>
        </div>
      </footer>
      <footer class="bg-black py-4">
        <div class="container mx-auto flex justify-end">
          <ul class="flex space-x-6 text-white text-sm">
            <li>
              <a href="#" class="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
