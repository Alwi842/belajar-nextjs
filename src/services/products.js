//import library axios untuk bikin request http
import axios from "axios";

export const getProducts = async () => {
  //jalankan di dalem blok trycatch
  try {
    //request get ke url api pake axios.get
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
    //kembaliin data produk yang disimpen di response
    // console.log(response);

    return response.data;
  } catch (err) {
    //error handling
    throw new Error("Failed to fetch data : ", err);
  }
};
