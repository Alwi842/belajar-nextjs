import React from "react";

const Header = () => {
  return (
    <>
      <nav class="bg-black flex px-4 lg:px-[50px] py-3 justify-between items-center  top-0">
        <div class="flex items-center gap-5 lg:gap-10 text-white font-bold">
          <a href="#">
            <img
              class="h-10 w-auto"
              src="assets/img/aigen-logo.png"
              alt="navlogo"
            />
          </a>
          <a href="#">Home</a>
          <a href="blog/index.html">Register</a>
        </div>
        <div class="flex items-center bg-[#eb374e] hover:bg-[#d12038] px-3 py-2 rounded-lg">
          <a href="contact/index.html" class="hidden lg:block">
            Contact Me
          </a>
          <a href="contact/index.html" class="lg:hidden">
            <span class="material-symbols-outlined">support_agent</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
