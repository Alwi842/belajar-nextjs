import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
  // event simulasi login
  function handleLogin(event) {
    //event.preventDefault(); buat mencegah halaman refresh
    event.preventDefault();
    console.log("Klik login button");
    console.log(event.target.username.value);
    console.log(event.target.password.value);

    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = "/products";
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <Image src={"/next.svg"} alt="logo" width={100} height={100}></Image>
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
        <Button
          type="submit"
          buttonClassName="bg-gradient-hover text-white w-full mt-4"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
