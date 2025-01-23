import React from "react";
import Text from "@/components/atoms/Text";
import Link from "next/link";

const Register = () => {
  return (
    <>
      {" "}
      <section>
        <div className="flex items-center justify-center text-center bg-[#FF8500] py-10">
          <div className="w-1/4 text-[100px] text-green-600 font-bold">
            &#9990;
          </div>
          <div className="w-1/2">
            <Text
              className="font-bold text-3xl text-white"
              text="New Student Registration"
            />
            <Text className="text-2xl" text="Register yourself immediately" />
          </div>
          <div className="w-1/4">
            <Link
              href="#"
              className="bg-white text-black font-bold py-3 px-6 hover:bg-black hover:text-white transition duration-300"
            >
              List
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
