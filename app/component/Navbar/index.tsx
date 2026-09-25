"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { fetchTypeMenuJob } from "@/app/services/job";
import { useEffect, useState } from "react";
import { TNameType } from "@/app/type";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // const token = sessionStorage.getItem("token");

  const renderAfterLogin = (token: string) => {
    if (token) {
      return (
        <div>
          <div className="relative w-10 h-10 overflow-hidden bg-neutral-secondary-medium rounded-full">
            <svg
              className="absolute w-12 h-12 text-body-subtle -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      );
    }
  };

  // STATE LƯU DANH SÁCH LOẠI JOB

  const [data, setData] = useState<TNameType[]>([]);

  // GỌI API LẤY LOẠI CÔNG VIỆC

  useEffect(() => {
    const handleMenu = async () => {
      try {
        const result = await fetchTypeMenuJob();

        setData(result);
      } catch (error) {
        console.error("Lỗi fetch menu:", error);
      }
    };

    handleMenu();
  }, []);

  const handleGoToListJobTypeJob = (tenLoaiCongViec: string) => {
    router.push(`/ListJobTypeJob/${encodeURIComponent(tenLoaiCongViec)}`);
  };

  const renderMenuJob = () => {
    return data.map((nameType) => (
      <button
        key={nameType.id}
        onClick={() => handleGoToListJobTypeJob(nameType.tenLoaiCongViec)}
        className="
          py-3
          px-3
          text-sm
          font-medium
          text-gray-600
          hover:text-green-600
          transition
          whitespace-nowrap
        "
      >
        {nameType.tenLoaiCongViec}
      </button>
    ));
  };

  return (
    <div>
      <nav className="relative bg-white w-full z-20 border-b border-gray-200">
        {/* ========================================= */}
        {/* PHẦN TRÊN: LOGO + USER MENU */}
        {/* ========================================= */}

        <div
          className="
            max-w-screen-xl
            flex
            flex-wrap
            items-center
            justify-between
            mx-auto
            p-4
            border-b
            border-gray-100
          "
        >
          {/* LOGO */}

          <Link href="/" className="flex items-center">
            <img src="/fiverr-svgrepo-com.svg" className="h-7" alt="Fiverr" />
          </Link>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            className="
              inline-flex
              items-center
              p-2
              w-10
              h-10
              justify-center
              text-sm
              rounded-lg
              md:hidden
              hover:bg-gray-100
            "
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* USER MENU */}

          <div
            className="
              hidden
              w-full
              md:block
              md:w-auto
            "
          >
            <ul
              className="
                font-medium
                flex
                flex-col
                p-4
                md:p-0
                mt-4
                md:flex-row
                md:space-x-8
                md:mt-0
              "
            >
              {/* BECOME A SELLER */}

              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "text-green-600 font-bold"
                      : "text-gray-700 hover:text-green-600"
                  }
                >
                  Become a Seller
                </Link>
              </li>

              {/* SIGN UP */}

              <li>
                <Link
                  href="/SignUp"
                  className={
                    pathname === "/SignUp"
                      ? "text-green-600 font-bold"
                      : "text-gray-700 hover:text-green-600"
                  }
                >
                  Sign Up
                </Link>
              </li>

              <li>
                <Link
                  href="/SignIn"
                  className={
                    pathname === "/SignIn"
                      ? "text-green-600 font-bold"
                      : "text-gray-700 hover:text-green-600"
                  }
                >
                  Sign In
                </Link>
              </li>

              {/* JOIN */}

              <li>
                <Link
                  href="/dangnhap"
                  className={
                    pathname === "/dangnhap"
                      ? "text-green-600 font-bold"
                      : "text-gray-700 hover:text-green-600"
                  }
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================= */}
        {/* THANH LOẠI CÔNG VIỆC */}
        {/* ========================================= */}

        <div className="bg-white border-b border-gray-200">
          <div
            className="
              max-w-screen-xl
              mx-auto
              px-4
              flex
              items-center
              justify-between
              whitespace-nowrap
              overflow-x-auto
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {renderMenuJob()}
          </div>
        </div>
      </nav>
    </div>
  );
}
