import { useState } from "react";
import { loginUser } from "../services";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    mobile: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(form);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Welcome Back 🌱
        </h2>

        <p className="text-sm text-gray-500 text-center mb-8">
          Login to your KrishiSakshi account
        </p>

        {/* Mobile */}
        <input
          type="tel"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg
                     hover:bg-green-700 transition duration-200"
        >
          Login
        </button>

        {/* Register Redirect */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
