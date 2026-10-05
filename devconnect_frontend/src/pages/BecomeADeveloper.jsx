import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BecomeADeveloper = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    skills: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.role.trim()) {
      newErrors.role = "Your role is required.";
    }

    if (!form.skills.trim()) {
      newErrors.skills = "Please enter at least one skill.";
    }

    if (!form.bio.trim()) {
      newErrors.bio = "Please write a short bio.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitError("");

    try {
      const data = {
        name: form.name,
        email: form.email,
        role: form.role,
        skills: form.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
        bio: form.bio,
      };

      const res = await axios.post(
        "http://localhost:3000/api/developers/apply",
        data,
        {
          withCredentials: true,
        },
      );

      console.log(res.data);

      navigate("/home");
    } catch (err) {
      console.log(err);

      setSubmitError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#eef4ff]">
        {/* Header */}
        <div className="bg-[#5B86E5] py-14 px-6 text-center">
          <h1 className="text-3xl font-bold text-white">Become a Developer</h1>

          <p className="text-[#d7e3ff] text-sm mt-2">
            Join DevConnect and start working with clients.
          </p>
        </div>

        {/* Single Page Form */}
        <div className="max-w-2xl mx-auto px-5 py-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-[#dce8ff]
          shadow-sm p-8"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Developer Application
            </h2>

            <p className="text-sm text-gray-400 mb-8">
              Enter your details below.
            </p>

            {/* Name */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-xl border
              text-sm outline-none transition
              ${
                errors.name
                  ? "border-red-400"
                  : "border-[#dfe7f5] focus:border-[#5B86E5]"
              }`}
              />

              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 rounded-xl border
              text-sm outline-none transition
              ${
                errors.email
                  ? "border-red-400"
                  : "border-[#dfe7f5] focus:border-[#5B86E5]"
              }`}
              />

              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Role */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Professional Role
              </label>

              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="e.g. Full Stack Developer"
                className={`w-full px-4 py-3 rounded-xl border
              text-sm outline-none transition
              ${
                errors.role
                  ? "border-red-400"
                  : "border-[#dfe7f5] focus:border-[#5B86E5]"
              }`}
              />

              {errors.role && (
                <p className="text-xs text-red-500 mt-1">{errors.role}</p>
              )}
            </div>

            {/* Skills */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Skills
              </label>

              <input
                type="text"
                name="skills"
                value={form.skills}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB, AWS"
                className={`w-full px-4 py-3 rounded-xl border
              text-sm outline-none transition
              ${
                errors.skills
                  ? "border-red-400"
                  : "border-[#dfe7f5] focus:border-[#5B86E5]"
              }`}
              />

              <p className="text-[11px] text-gray-400 mt-1">
                Separate multiple skills with commas.
              </p>

              {errors.skills && (
                <p className="text-xs text-red-500 mt-1">{errors.skills}</p>
              )}
            </div>

            {/* Bio */}
            <div className="mb-7">
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                About You
              </label>

              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={6}
                placeholder="Tell clients about yourself, your experience, and the services you provide..."
                className={`w-full px-4 py-3 rounded-xl border
              text-sm outline-none resize-none transition
              ${
                errors.bio
                  ? "border-red-400"
                  : "border-[#dfe7f5] focus:border-[#5B86E5]"
              }`}
              />

              {errors.bio && (
                <p className="text-xs text-red-500 mt-1">{errors.bio}</p>
              )}
            </div>

            {/* Submit Error */}
            {submitError && (
              <div
                className="bg-red-50 border border-red-100
              text-red-500 text-sm rounded-xl px-4 py-3 mb-5"
              >
                {submitError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#5B86E5]
            hover:bg-[#4d78d5]
            text-white font-semibold text-sm
            py-3 rounded-xl transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BecomeADeveloper;
