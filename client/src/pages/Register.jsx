import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      setUser(user);
      setIsAuthenticated(true);

      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Registration error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Registration successful.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-green-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-green-600">
          Create Your Account
        </h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium mb-1">First Name<span className="text-red-500">*</span></label>
              <Input name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-medium mb-1">Middle Name</label>
              <Input name="middleName" placeholder="Middle name (optional)" value={formData.middleName} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-medium mb-1">Last Name<span className="text-red-500">*</span></label>
              <Input name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Gmail<span className="text-red-500">*</span></label>
            <Input name="email" type="email" placeholder="Enter Gmail address" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <label className="block font-medium mb-1">Username<span className="text-red-500">*</span></label>
            <Input name="username" placeholder="Choose a username" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Password<span className="text-red-500">*</span></label>
              <Input name="password" type="password" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
            </div>
            <div>
              <label className="block font-medium mb-1">Confirm Password<span className="text-red-500">*</span></label>
              <Input name="confirmPassword" type="password" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>

          <Button type="submit" className="w-full text-white font-semibold text-lg">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
