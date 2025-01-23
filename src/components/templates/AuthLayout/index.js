import React from "react";
import Link from "next/link";
const AuthLayout = ({ children, title, desc, type }) => {
  return (
    <>
      <div className="rounded-lg bg-gradient-aigen p-1 shadow-xl">
        <div className="w-full max-w-xs border rounded-lg p-8 bg-white">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate-500 mb-4">{desc}</p>
          {children}
          {/* cara 1 */}
          {type === "register" ? (
            <p className="text-sm text-center mt-2">
              already have account?{" "}
              <Link className="text-blue-500 hover:text-blue-700" href="/login">
                Login
              </Link>
            </p>
          ) : (
            <p className="text-sm text-center mt-2">
              dont have an account?{" "}
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="/register"
              >
                register
              </Link>
            </p>
          )}
          {/* cara2 */}
          <p className="text-sm text-center mt-2"></p>
          {type === "register"
            ? "already have account?"
            : "dont have an account?"}
          {type === "register" && (
            <Link className="text-blue-500 hover:text-blue-700" href="/login">
              Login
            </Link>
          )}
          {type === "login" && (
            <Link
              className="text-blue-500 hover:text-blue-700"
              href="/register"
            >
              register
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;

/**conditional rendering adalah teknik rendering ui berdasarkan kondisi tertentu */
