import React from "react";
import Link from "next/link";
import Text from "@/components/atoms/Text";
const Welcome = () => {
  return (
    <>
      <section className="flex items-center justify-center py-52 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center text-white">
          <Text className="text-3xl font-bold mb-4" text="SELAMAT DATANG" />
          <Text className="text-3xl font-bold mb-6" text="DI FAKULTAS TEKNIK" />
          <Link
            href="#"
            className="px-6 py-3 text-lg font-semibold bg-black/50 text-white hover:bg-white hover:text-black transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Welcome;
