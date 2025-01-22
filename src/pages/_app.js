import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/**dibuat otomatis oleh nextjs
 * fungsinya untuk menerapkan perilaku/elemen global yang dibutuhin sama halaman/app nextjs
 * 1. untuk ngatur layout global
 * 2. untuk menyelesaikan stata global
 * 3. menggunakan css global yang berulaku diterima
 */
