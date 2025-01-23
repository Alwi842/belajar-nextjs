import React from "react";

const Nav1 = () => {
  return (
    <>
      <nav className="bg-white lg:flex px-2 lg:px-28 py-1 justify-between items-center top-0 text-[14px]">
        <div className="flex items-center gap-10 lg:gap-5 text-black">
          <a href="mailto:ft@umt.ac.id">&#9993;ft@umt.ac.id</a>
        </div>
        <div>
          <ul className="flex">
            <li className="opacity-50">Accreditation |</li>

            <li>
              <select aria-label="Select Language">
                <option value="">Select Language</option>
                <option value="id|ar" data-gt-href="#">
                  Arabic
                </option>
                <option value="id|en" data-gt-href="#">
                  English
                </option>
                <option value="id|id" data-gt-href="#" selected="">
                  Indonesian
                </option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav1;
