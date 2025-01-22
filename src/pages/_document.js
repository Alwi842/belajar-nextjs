import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/**file ini dibuat otomatis di folder /src
 * fungsi untuk menyesuaikan atau menambahkan informasi tambahan ke project kita
 * strukturnya seperti head pada html
 *
 * kapan digunakannya?
 * 1.nambahin elemen ke dalam head yang berlaku untuk seluruh halaman (global)
 * kaya inject tag script, install google analytic, google tag manager dll
 * 2. saat menerapkan konfigurasi seo(search engine optimization)
 */
