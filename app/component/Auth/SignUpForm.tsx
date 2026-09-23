"use client";
import { useState } from "react";
import fetchSignUp from "@/app/services/auth";

export default function SignUpForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dữ liệu gửi lên:", formData);

    try {
      const result = await fetchSignUp(formData);

      console.log("Kết quả API:", result);
    } catch (error) {
      console.error("Lỗi API:", error);
    }
  };

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "USER",
    skill: [] as string[],
    certification: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "skill" || name === "certification") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trimStart()),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <form className="max-w-md mx-auto py-20" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="account"
          id="account"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="account"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Account
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          required
          value={formData.password}
          onChange={handleChange}
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Password
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="repeat-password"
          id="repeat-password"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="repeat-password"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Confirm password
        </label>
      </div>

      <div className="grid md:grid-cols-3 md:gap-6">
        {/* Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Name
          </label>
        </div>

        {/* Nam */}
        <div className="flex items-center mb-4">
          <input
            id="gender-male"
            type="radio"
            name="gender"
            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
            value="true"
            checked={formData.gender === true}
            onChange={() =>
              setFormData({
                ...formData,
                gender: true,
              })
            }
          />
          <label
            htmlFor="gender"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            Male
          </label>
        </div>

        {/* Nữ */}
        <div className="flex items-center mb-4">
          <input
            id="gender-female"
            type="radio"
            name="gender"
            value="true"
            checked={formData.gender === false}
            onChange={() =>
              setFormData({
                ...formData,
                gender: false,
              })
            }
            className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
          />
          <label
            htmlFor="gender-female"
            className="select-none ms-2 text-sm font-medium text-heading"
          >
            Female
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        {/* Phone */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
          />
          <label
            htmlFor="phone"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Phone number
          </label>
        </div>

        {/* Birthday */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="birthday"
            id="birthday"
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
            value={formData.birthday}
            onChange={handleChange}
          />
          <label
            htmlFor="birthday"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Birthday
          </label>
        </div>
      </div>

      {/* Email */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Email
        </label>
      </div>

      {/* Skill */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="skill"
          id="skill"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          required
          value={formData.skill.join(", ")}
          onChange={handleChange}
        />
        <label
          htmlFor="skill"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Skill
        </label>
      </div>

      {/* Certification */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="certification"
          id="certification"
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          required
          value={formData.certification.join(", ")}
          onChange={handleChange}
        />
        <label
          htmlFor="certification"
          className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Certification
        </label>
      </div>

      {/* User */}
      <div className="flex items-center mb-4">
        <input
          id="User"
          type="radio"
          name="role"
          className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
          value="User"
          checked={formData.role === "User"}
          onChange={() =>
            setFormData({
              ...formData,
              role: "User",
            })
          }
        />
        <label
          htmlFor="User"
          className="select-none ms-2 text-sm font-medium text-heading"
        >
          User
        </label>
      </div>

      {/* Admin */}
      <div className="flex items-center mb-4">
        <input
          id="Admin"
          type="radio"
          name="role"
          className="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
          value="Admin"
          checked={formData.role === "Admin"}
          onChange={() =>
            setFormData({
              ...formData,
              role: "Admin",
            })
          }
        />
        <label
          htmlFor="Admin"
          className="select-none ms-2 text-sm font-medium text-heading"
        >
          Admin
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Sign Up
      </button>
    </form>
  );
}
