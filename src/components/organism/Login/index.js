import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
  return (
    <>
      <form>
        <Image src={"/nextjs.svg"} alt="logo" width={100} height={100}></Image>
        <InputForm
          label="Username"
          name="username"
          type="text"
          placeholder="Masukan Username"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="Masukan Password"
        />
        <Button buttonClassName="bg-gradient-hover text-white w-full mt-4">
          Login
        </Button>
        <p className="text-sm text-center mt-2">
          Dont have Account?{" "}
          <Link className="text-blue-500 hover:text-blue-700" href="/register">
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
