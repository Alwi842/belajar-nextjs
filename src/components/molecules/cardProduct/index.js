import Button from "@/components/atoms/Button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Icons from "@/components/atoms/Icons";
/**Nested component : fungsinya sebagai wadah/container untuk beberapa komponen anak
 * seperti (header, body, footer) komponen ini akan jadi komponen pembungkus untuk komponen children
 */
const CardProduct = ({ children }) => {
  return (
    <>
      <div className="flex rounded-lg bg-gradient-aigen p-1 shadow-xl">
        <div className="w-full max-w-xs bg-white rounded-lg flex flex-col h-full">{children}</div>
      </div>
    </>
  );
};

function Header({ image }) {
  return (
    <Link href="#">
      <Image
        src={image}
        alt="Card Image"
        className="p-4 rounded-t-lg w-full aspect-video  object-contain"
        width={300}
        height={300}
      ></Image>
    </Link>
  );
}
function Body({ title, desc }) {
  return (
    <div className="px-5 pb-5">
      <Link href="#">
        <h3 className="text-3xl font-bold text-slate-900 line-clamp-2">{title}</h3>
        <p className="mt-3 text-slate-700 text-base text-justify line-clamp-4">{desc}</p>
      </Link>
    </div>
  );
}
function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex flex-col items-center justify-end px-5 pb-5 mt-auto">
      <span className="text-2xl font-semibold mb-2">{price}</span>
      <Button
        buttonClassName="flex items-center justify-center bg-gradient-aigen text-white w-full mt-4"
        onClick={() => handleAddToCart(id)}
      >
        <Icons.AddToCart />
        <span>beli</span>
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Footer = Footer;
CardProduct.Body = Body;
export default CardProduct;
