import React from "react";

const CardItem = ({ image, alt, date, month, views, title, brief, link }) => {
  return (
    <>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full transform transition duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute left-[80%] -mt-4 transform bg-[#dfb871] px-1 py-[1px] text-white z-10">
          <p className="font-bold text-[22px]">{date}</p>
          <p>{month}</p>
        </div>
      </div>

      <div className="py-10 px-5">
        <p className="text-gray-600">&#9865; {views} views</p>
        <p className="font-bold text-lg">{title}</p>
        <p className="text-gray-600">{brief}</p>
        <div className="mt-4 flex justify-center">
          <a
            href={link}
            className="bg-[#dfb871] text-white py-2 px-6 hover:bg-black hover:text-white transition duration-300"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default CardItem;
