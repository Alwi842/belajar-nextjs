import { isMobileScreenAtom } from "@/atoms/atoms";
import { setIsLargeScreen, setIsMobileScreen } from "@/redux/screenSlice/screenSlice";
import store from "@/redux/store";
import "@/styles/globals.css";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  //usesetatom buat perbaruhi nilai state
  const setIsMobileScreenAtom = useSetAtom(isMobileScreenAtom);
  useEffect(() => {
    function handleResize() {
      //dispatch : aksi yang memicu perubahan nilai state
      store.dispatch(setIsMobileScreen(window.innerWidth < 768));
      store.dispatch(setIsLargeScreen(window.innerWidth >= 1240));
      setIsMobileScreenAtom(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileScreenAtom]);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

/**dibuat otomatis oleh nextjs
 * fungsinya untuk menerapkan perilaku/elemen global yang dibutuhin sama halaman/app nextjs
 * 1. untuk ngatur layout global
 * 2. untuk menyelesaikan stata global
 * 3. menggunakan css global yang berulaku diterima
 */
