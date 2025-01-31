import { formatCurrency } from "@/helpers/util/formatCurrency";
import { getProductById } from "@/services/products";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

/**useSWR (state while revalidate) : hook thirdparty dari vercel untuk fetching data, caching dan revalidate
 * di sisi klien rumus : const{data,error,isLoading,isValidating}= useSWR(key(endpoint), dataFetcher)
 * swr punya properti :
 * data :data yang diambil dari API
 * error : error handling saat ambil data
 * isLoading : status loading
 * isValidating : status validasi ulang data (perbarui data)
 */
const ProductDetailPage = ({ detailProduct }) => {
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API;
  const { data } = useSWR(
    `${api}/products/${detailProduct?.id}`,
    async () => {
      const res = await axios.get(`${api}/products/${detailProduct?.id}`);
      return res.data;
    },
    { initialData: detailProduct }
  );
  return (
    <div className="flex flex-col px-6 py-8 min-h-screen bg-gradient-to-b from-black to-blue-900">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-white">Detail Produk</h1>

      {/* Product Details */}
      <div className="mt-6 p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl max-w-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white">{data?.title}</h2>
        <p className="mt-4 text-white text-lg">{data?.description}</p>
        <p className="mt-5 text-white text-2xl font-bold">{formatCurrency(data?.price)}</p>

        {/* Buttons Section */}
        <div className="mt-6 flex gap-4">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="px-6 py-3 text-lg font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
          >
            ← Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  //   const { query } = context;
  //   console.log(query);
  const id = context.query.id;
  try {
    const detailProduct = await getProductById(id);
    // console.log(detailProduct);
    if (!detailProduct) return { notFound: true };
    return {
      props: { detailProduct },
    };
  } catch (err) {
    console.log(err);
    /** cara kedua 404 handling di level catch
     * return {notFound:true};
     */
    return { props: { error: "error" } };
  }
}
export default ProductDetailPage;
