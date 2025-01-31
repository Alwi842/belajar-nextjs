import { formatCurrency } from "@/helpers/util/formatCurrency";
import { getProductById } from "@/services/products";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Icons from "@/components/atoms/Icons";
import { useDispatch } from "react-redux";

const ProductDetailPage = ({ detailProduct }) => {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  // Function to add item to cart
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }

    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [dispatch]);

  return (
    <div className="flex flex-col px-6 py-8 min-h-screen bg-gradient-to-b from-black to-blue-900">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-white">Detail Produk</h1>

      {/* Product Details */}
      <div className="mt-6 p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl max-w-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white">{detailProduct?.title}</h2>
        <p className="mt-4 text-white text-lg">{detailProduct?.description}</p>
        <p className="mt-5 text-white text-2xl font-bold">{formatCurrency(detailProduct?.price)}</p>

        {/* Buttons Section */}
        <div className="mt-6 flex gap-4">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="px-6 py-3 text-lg font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
          >
            ← Kembali
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(detailProduct?.id)}
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all"
          >
            <Icons.AddToCart className="w-6 h-6" /> Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  console.log(query);
  const id = context.query.id;
  try {
    const detailProduct = await getProductById(id);
    console.log(detailProduct);
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
