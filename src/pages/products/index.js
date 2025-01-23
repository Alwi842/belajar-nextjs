import CardProduct from "@/components/molecules/cardProduct";
import React from "react";

const ProductPage = () => {
    //data dari api
    const data = [{
        id:1,
        image:"/images/somai.jpg",
        title:"siomai biasa",
        desc:"B aja",
        price:2000,
    },
    {
        id:2,
        image:"/images/somai.jpg",
        title:"siomai enak",
        desc:"sama tapi mahalan",
        price:3000,
    },
    {
        id:3,
        image:"/images/somai.jpg",
        title:"siomai super enak",
        desc:"Harga orang kaya",
        price:4000,
    },
];
  return (
    <>
    <div className="flex justify-center items-center min-h-screen gap-3">
        <CardProduct>
            <CardProduct.Header image="/images/somai.jpg"/>
            <CardProduct.Body title="Somai"
            desc="lorem ipsum"/>
            <CardProduct.Footer price={"2000"}/>
        </CardProduct>
        
        {/* rendering list : teknik untuk nampilin beberapa element UI tertentu berdasarkan
        data dinamis yang di simpan dalam sebuah json*/}
        {data.map((item) => (
        <CardProduct key={item.id}>
            <CardProduct.Header image={item.image}/>
            <CardProduct.Body title={item.title}
            desc={item.desc}/>
            <CardProduct.Footer price={item.price}/>
        </CardProduct>
        ))}
        </div>
        </>
  );
};

export default ProductPage;
