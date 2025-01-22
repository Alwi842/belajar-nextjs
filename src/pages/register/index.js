import Register from "@/components/organism/Register";
import AuthLayout from "@/components/templates/AuthLayout";

import Header from "@/components/templates/Header";
import Footer from "@/components/templates/Footer";
const register = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen gap-y-1">
        <AuthLayout title="Register" desc="Welcome!">
          <Register></Register>
        </AuthLayout>
      </div>
      <Footer />
    </>
  );
};
export default register;
