import React from "react";

const CardTestimoniItem = ({ comment, avatar, username, status }) => {
  return (
    <>
      <div class="relative bg-white rounded-md shadow overflow-hidden group">
        <div class="py-2 px-3">
          <p class="text-gray-600 text-[13px]">{comment}</p>
          <div class="flex items-center mt-4">
            {/* <!-- Round Image --> */}
            <img
              src={avatar}
              alt="User profile"
              class="w-14 h-14 rounded-full"
            />
            {/* <!-- Status Information --> */}
            <div class="ml-3 text-left">
              <p class="text-[12px] font-medium text-gray-700">{username}</p>
              <p class="text-[12px] text-gray-500 leading-3">{status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTestimoniItem;
