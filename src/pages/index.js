import { isMobileScreenAtom } from "@/atoms/atoms";
import { useLogin } from "@/hooks/useLogin";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  //anggap state ini nyimpan data yang dikirim dari api
  //

  const [data, setData] = useState(true);
  const username = useLogin();
  //fungsi untuk memperbarui nilai state
  // const { isMobileScreen } = useSelector((state) => state.screen);

  //use atom buat makestate global
  const [isMobileScreen] = useAtom(isMobileScreenAtom);
  const { isLargeScreen } = useSelector((state) => state.screen);

  console.log(isMobileScreen);

  const handleChange = () => {
    //mengubah state datadari nilaiawal true menjadi false
    // setData(false);
    //fungsi anon yang akan mengubah nilai boolean dari true ke false, false ke true.
    setData((prevState) => !prevState);
  };

  return (
    <div className={`flex flex-col justify-center items-center h-screen gap-4 ${data ? "bg-black" : "bg-white"}`}>
      {data ? (
        <h1 className="text-6xl font-bold text-white">Data</h1>
      ) : (
        <h1 className="text-6xl font-bold">Updated data</h1>
      )}
      <button className="mt-4 p-4 bg-blue-600 text-white font-semibold" onClick={handleChange}>
        Ubah
      </button>
      <h1 className={`text-6xl text-red-600`}>{isMobileScreen ? "hp" : isLargeScreen ? "Big" : "Tablet"}</h1>

      <p className="font-bold text-blue-700">Hi, {username}</p>
    </div>
  );
};

export default Home;
