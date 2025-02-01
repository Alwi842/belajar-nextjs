import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Image from "next/image";
import { login } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/compat/router";
const Login = () => {
  // event simulasi login
  const [failed, setFailed] = useState(false);
  const router = useRouter();
  async function handleLogin(event) {
    //event.preventDefault(); buat mencegah halaman refresh
    event.preventDefault();

    const payload = {
      username: event.target.username.value, //johnd
      password: event.target.password.value, //m38rmF$
    };
    try {
      const res = await login(payload);

      if (res.status) {
        localStorage.setItem("token", res.token);
        setFailed(false);
        router.push("/products");
      } else {
        setFailed(res.error.response.data);
      }
    } catch (err) {
      setFailed(err.response.data);
    }
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <Image src={"/next.svg"} alt="logo" width={100} height={100}></Image>
        <InputForm label="Username" name="username" type="text" placeholder="Masukan Username" />
        <InputForm label="Password" name="password" type="password" placeholder="Masukan Password" />
        {failed && <p className="block text-center text-sm font-medium text-red-700 mb-1">{failed}</p>}
        <Button type="submit" buttonClassName="bg-gradient-hover text-white w-full mt-4">
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
