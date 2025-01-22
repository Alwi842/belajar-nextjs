import Image from "next/image";
import Button from "@/components/Button";
import  ButtonWithProps  from "@/components/ButtonWithProps";
import Card from "@/components/CardWithChildern";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-5">
        <button className="h-14 px-6 font-semibold bg-blue-600 hover:bg-blue-800 text-white">
          click me
        </button>
        {/** button dengan basis komponen */}
        <Button />
        {/**button dengan basis komponen dan props atau parameter */}
        <ButtonWithProps text={"Here i am"} />
        <Card cardClassname={"py-5"}>
          <Image src={"/next.svg"} alt="nextjs" width={300} height={300} />
          <h2 className="text-xl font-bold my-3">asd</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum inventore, sapiente voluptatem cupiditate ad et quisquam maiore</p>
        <ButtonWithProps text={"mamank"} className="w-full bg-yellow-500 hover:bg-yellow-700" ></ButtonWithProps>
        </Card>

      </div>
    </>
  );
}
