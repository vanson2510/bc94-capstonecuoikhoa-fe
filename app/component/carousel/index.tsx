"use client";

import Image from "next/image";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function Carousel() {
  const [nameJob, setNameJob] = useState("");

  const handleOnChange = (e: any) => {
    const nameJob = e.target.value;
    setNameJob(nameJob);
  };

  const router = useRouter();

  const handleSearch = async () => {
    router.push(`/detail/${nameJob}`);
  };
  return (
    <div>
      <div className="relative carousel ">
        <Image
          className="mx-auto w-1200 h-150 overflow-hidden rounded-lg"
          src="/images/womens-15899471293751168355370.jpg"
          alt="carousel_image"
          width={1200}
          height={0}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute  inset-0 mx-10 my-5 grid grid-cols-2 gap-1">
          <h1 className=" ml-6 text-5xl h-[20%] text-center text-white rounded-2xl mt-2 ">
            Find the perfect <span className="italic">freelance</span> services
            for your business
          </h1>

          <div>
            <form className="max-w-md my-10 mx-30 mb-0 ">
              <label
                htmlFor="search"
                className="block mb-2.5 text-sm font-medium text-heading sr-only "
              >
                Search
              </label>
              <div className="relative max-w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-body"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-3 ps-9 bg-gray-300 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  placeholder="Search"
                  onChange={handleOnChange}
                  required
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </form>

            <div className=" text-white mt-5 mx-30 grid grid-rows-1 ">
              <p className="mr-2 mb-2">Popular:</p>
              <p className="rounded-2xl mr-2 mb-2 border-amber-50 border-2 text-center w-[50%]  ">
                Website Design
              </p>
              <p className="rounded-2xl mr-2 mb-2 border-amber-50 border-2 text-center w-[50%] ">
                WordPress
              </p>
              <p className="rounded-2xl mr-2 mb-2 border-amber-50 border-2 text-center w-[50%] ">
                Logo Design{" "}
              </p>
              <p className="rounded-2xl mr-2 mb-2 border-amber-50 border-2 text-center w-[50%] ">
                Dropshipping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
