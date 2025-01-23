import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/cardProduct";
import React, { useEffect, useState } from "react";
//data dari api
const data = [
  {
    id: 1,
    image: "/images/somai.jpg",
    title: "siomai biasa",
    desc: "B aja",
    price: 2000,
  },
  {
    id: 2,
    image: "/images/somai.jpg",
    title: "siomai enak",
    desc: "sama tapi mahalan",
    price: 3000,
  },
  {
    id: 3,
    image: "/images/somai.jpg",
    title: "siomai super enak",
    desc: "Harga orang kaya",
    price: 4000,
  },
];
const ProductPage = () => {
  /**sebutan variable di react */
  const [username, setUsername] = useState("");

  //buat nanganin side effec/efek dari perubahan dari suatu data yang dijalanin tiap kali halaman di load
  useEffect(() => {
    const getUsername = localStorage.getItem("username");
    if (getUsername) {
      setUsername(getUsername);
    }
  }, [username]);
  /**dependensi array : kalo kosong buat mastiin kalo use effect ini dijalanin cuma 1x
   * setiap kali halaman reload. kalau adastate di dalam dependensi array maka
   * fungsinya untuk mantau perubahan di state tsb
   */
  //untuk logout
  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button buttonClassName="bg-red-500" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-screen gap-3">
        {/* rendering list : teknik untuk nampilin beberapa element UI tertentu berdasarkan
        data dinamis yang di simpan dalam sebuah json*/}
        {data.map((item) => (
          <CardProduct key={item.id}>
            <CardProduct.Header image={item.image} />
            <CardProduct.Body title={item.title} desc={item.desc} />
            <CardProduct.Footer price={item.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
