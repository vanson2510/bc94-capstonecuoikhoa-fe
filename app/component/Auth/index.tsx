"use client";
import { TSignIn, TSignInResponse } from "@/app/type";
import { useState } from "react";
import { fetchSignIn } from "@/app/services/auth";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [formData, setFormData] = useState<TSignIn>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data", formData);

    try {
      const result = await fetchSignIn(formData);

      console.log("Kết quả API:", result);

      alert("Bạn đã đăng nhập thành công!");
      router.push("/");

      sessionStorage.setItem("Token", result.content.token);

      sessionStorage.setItem("user", JSON.stringify(result.content.user));
    } catch (error) {
      console.error("Lỗi API: ", error);
      alert("Bạn đã đăng nhập thất bại!");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // console.log("Name: ", name, "Value: ", value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="name@flowbite.com"
          required
          value={formData.email}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="••••••••"
          required
          value={formData.password}
          onChange={handleOnChange}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}
