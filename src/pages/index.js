import React, { useEffect, useState } from "react";

const Home = () => {
  //anggap state ini nyimpan data yang dikirim dari api
  const [data, setData] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  /**usestate : hooks react untuk membuat state functional component
   * state : VARIABLE dipake buat nyimpen data
   * data : state yang nyimpen nilai awal data
   * setData:fungsi untuk memperbarui nilai data
   * true (bool) : tipe data awal state data
   * ketika serrData dipanggil dengan nilai baru,react akan merender ulang komponendengan nilaistate yang baru
   */
  //fungsi untuk memperbarui nilai state

  const handleChange = () => {
    //mengubah state datadari nilaiawal true menjadi false
    // setData(false);
    //fungsi anon yang akan mengubah nilai boolean dari true ke false, false ke true.
    setData((prevState) => !prevState);
  };
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 ? true : false); // Adjust the threshold as needed
    };
    //mounting
    checkMobile(); // Initial check

    //updating
    window.addEventListener("resize", checkMobile);

    //unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  /**useEffect : hooks di react buat nambahin side effect ke state
   * useEffect biasanya dipake buat memperbaruhi data/komponen ketika ada perubahan pada state
   * [] (array kosong/dependency array) : jika array kosong maka argumen tersebut untuk menjalankan efek sekali,
   * jika ada state array tsb maka untuk memantau setiap ada perubahan pada state
   */
  console.log(isMobile);
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen gap-4 ${
        data ? "bg-black" : "bg-white"
      }`}
    >
      {data ? (
        <h1 className="text-6xl font-bold text-white">Data</h1>
      ) : (
        <h1 className="text-6xl font-bold">Updated data</h1>
      )}
      <button
        className="mt-4 p-4 bg-blue-600 text-white font-semibold"
        onClick={handleChange}
      >
        Ubah
      </button>
      {isMobile ? (
        <h1 className="text-6xl  text-red-600">hp</h1>
      ) : (
        <h1 className="text-6xl text-red-600">bukan hp</h1>
      )}
    </div>
  );
};

export default Home;
