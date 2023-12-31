"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
      <h1 className="mb-4 font-bold secondary-radiant">Login to your account</h1>
      <form>
        <label className="block mb-3">
          <span className="block text-sm font-medium secondary-radiant">Email</span>
          <input type="text" placeholder="Enter Email" className="form-input" />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium secondary-radiant">Password</span>
          <input type="text" className="form-input" placeholder="Enter Password" />
        </label>
        <label className="block mb-3">
          <Link
            href="/forget"
            className="block text-sm font-medium text-blue-500 text-right cursor-pointer"
          >
            Forgot Password ?
          </Link>
        </label>
        <hr className="mb-3" />
        <label className="block mb-3">
          <input
            type="button"
            value="Login"
            onClick={() => router.push("/onboarding/welcome")}
            className="btn-primary"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-gray-500">
            New to CedCommerce?{" "}
            <Link href="/auth/signup" className="text-blue-500 cursor-pointer">
              Create Account
            </Link>
          </span>
        </label>
      </form>
    </div>
  );
};

export default Login;
