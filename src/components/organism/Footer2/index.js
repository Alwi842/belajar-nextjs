import React from "react";

const Footer2 = () => {
  return (
    <>
      <footer className="bg-black py-4">
        <div className="container mx-auto flex justify-end">
          <ul className="flex space-x-6 text-white text-sm">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
