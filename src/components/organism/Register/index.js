import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import Link from "next/link";
const Register = () => {
  return (
    <>
      <form>
        <InputForm
          label="Username"
          name="username"
          type="text"
          placeholder="Masukan Username"
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="Masukan Email"
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
          already have account?{" "}
          <Link className="text-blue-500 hover:text-blue-700" href="/login">
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
