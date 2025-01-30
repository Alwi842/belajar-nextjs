import Button from "@/components/atoms/Button";
import CardProduct from "@/components/molecules/cardProduct";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { data } from "@/constant/product";
import Icons from "@/components/atoms/Icons";
import { getProducts } from "@/services/products";
import { useRouter } from "next/router";
import { useLogin } from "@/hooks/useLogin";
import { formatCurrency } from "@/helpers/util/formatCurrency";

const ProductPage = ({ data }) => {
  /**sebutan variable di react */
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const footerRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);
  //useref :hooks untuk membuat referensi DOM/fungsiuntuk mengakses elemen DOM
  // const [data, setData] = useState([]); //ssr gk perlu
  //useEffect buat ngambil dari API
  const router = useRouter();
  const username = useLogin();

  const handleAddToCart = (id) => {
    //logic untuk ngecek kalo produk dengan id yang sama ditambahin lebih dari 1 maka akan menambahkan jumlah qty +1
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      //kalo fungsi baru sekali ditrigger makacuma nambahin satu produk doang ke cart
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  /** useCallback : hooksbuat nyimpen fungsi ke dalam cache
   * tujuannya biar fungsi tersebut gk perlu dijalankan/dihitung ulang ketika tidak ada perubahan pada nilainya
   */
  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => {
      const product = data.find((product) => product.id === item.id);

      return total + product.price * item.qty;
    }, 0);
  }, [cart, data]);
  //panggil fungsi callback
  const cartTotal = data.length > 0 ? calculateTotal() : 0;

  useEffect(() => {
    if (cart.length > 0) {
      // const sumTotal = cart.reduce((total, item) => {
      //   const product = data.find((product) => product.id === item.id);
      //   return total + product.price * item.qty;
      // }, 0);
      // setTotal(sumTotal);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //buat nanganin side effec/efek dari perubahan dari suatu data yang dijalanin tiap kali halaman di load

  /**dependensi array : kalo kosong buat mastiin kalo use effect ini dijalanin cuma 1x
   * setiap kali halaman reload. kalau adastate di dalam dependensi array maka
   * fungsinya untuk mantau perubahan di state tsb
   */
  //untuk logout
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    router.push("/login");
  }

  useEffect(() => {
    function handleScroll() {
      //ambil nillai offset top, atau posisi vertikal dari elemen footer.
      const footerTop = footerRef.current.offsetTop;
      //ambil tinggi dari tampilan layar
      const viewPointHeight = window.innerHeight;
      //ambil scroll sumbu y
      const scrollPosition = window.scrollY;

      //logic untuk ngecek apakah posisi scroll dilayar terlah mencapai footer.
      if (scrollPosition + viewPointHeight >= footerTop) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    }
    //event listener buat jalanin fungsi handlescrollsetiap event scroll terjadi
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll back to the top
    });
  };
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white font-bold px-5 py-4">
        <h1 className="text-xl">Hi, {username}</h1>
        <Button buttonClassname={"bg-red-500 hover:bg-red-700"} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex px-5 py-8">
        {/* products */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-blue-500 uppercase mb-4">Products</h1>
          <div className="flex flex-wrap gap-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} />
                <CardProduct.Body title={item.title} desc={item.description} />
                <CardProduct.Footer price={item.price} id={item.id} handleAddToCart={handleAddToCart} />
              </CardProduct>
            ))}
          </div>
        </div>

        {/* cart */}
        {cart.length > 0 && (
          <div className="w-full">
            <h1 className="text-3xl font-bold text-blue-500 mb-4 uppercase">Cart</h1>
            <div className="flex flex-col gap-2">
              {cart.map((item) => {
                const datas = data.find((data) => data.id === item.id);
                return (
                  <>
                    <div className="lg:flex p-4 border rounded-lg" key={item.id}>
                      <Image
                        className="rounded aspect-square"
                        width={100}
                        height={100}
                        src={datas?.image}
                        alt="cart image"
                      />
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-between ml-3">
                          <span className="font-bold text-xl line-clamp-2">{datas?.title}</span>
                          <span className="font-semibold">{formatCurrency(datas?.price)}</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <span className="mb-1">Qty</span>
                          <span className="flex justify-center items-center font-semibold p-2 border rounded-sm text-center w-10 h-10">
                            {item.qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex justify-between px-4 py-2 border mt-2 font-semibold rounded-lg">
              <span>Total</span>
              <span>{formatCurrency(cartTotal.toFixed(2), "en-US", "USD")}</span>
            </div>
          </div>
        )}
      </div>
      {/**footer */}
      {showBackToTop && (
        <div
          className="fixed bottom-20 right-5 bg-gradient-hover rounded-full p-2 text-white font-bold"
          onClick={scrollToTop}
        >
          <Icons.ArrowUp />
        </div>
      )}
      <footer ref={footerRef} className="text-center p-5 bg-black text-white w-full">
        All right reserved &copy; || by alwi{" "}
      </footer>
    </>
  );
};

/**SSR(server side generation) teknik yang merender haaman pada saat build time(npm run build)
 * dan halaman webnyabisa dicache jadi ketika user balik lagi ke halaman tsb, proses rendernya lebih cepat
 * tekknik ini khusus web yang datanya statis / hardcode / datanya tidak berubah
 * build time : proses penyimpanan aplikasi disisi server saat di deploy
 * run time : proses setelah build dimana aplikasi dijalanin di sisi server browser
 */
export async function getStaticProps() {
  try {
    //cara pertama untuk memanggilservice satu persatu
    // const products = await getProducts();
    //cara kedua kalo mau manggil beberapa service sekaligus pake promise
    const [products] = await Promise.all([getProducts()]);
    const slicedProducts = products.slice(0, 8);
    return {
      props: {
        data: slicedProducts || [],
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default ProductPage;
