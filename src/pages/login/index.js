import Login from "@/components/organism/Login";
import AuthLayout from "@/components/templates/AuthLayout";
import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-y-1">
        <AuthLayout title="login" desc="Hi, Please Login To your Acc" type="login">
          <Login />
        </AuthLayout>
      </div>
    </>
  );
};
export default LoginPage;
