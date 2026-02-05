import { useState } from "react";
import { registerUser } from "../services";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          KrishiSakshi 🌱
        </h2>

        <p className="text-sm text-gray-500 text-center mb-8">
          Create your farmer account
        </p>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

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
          Register
        </button>

        {/* Login Redirect */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
