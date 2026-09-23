"use client";
import { fetchTypeMenuJob } from "@/app/services/job";
import { TNameType } from "@/app/type";

import { useState, useEffect, use } from "react";

import { useRouter } from "next/navigation";

import Image from "next/image";

type TProps = {
  params: Promise<{
    name: string;
  }>;
};

export default function ListJobTypeJob({ params }: TProps) {
  const resolvedParams = use(params);
  const categoryName = decodeURIComponent(resolvedParams.name);

  console.log(categoryName);
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
  const [data, setData] = useState<TNameType[]>([]);

  console.log(data);

  const router = useRouter();

  const handleConvertToPage = (id: number | string) => {
    router.push(`/detailTypeJob/${id}`);
  };

  const renderCard = () => {
    return data.map((nameType) => {
      if (nameType.tenLoaiCongViec === categoryName) {
        return nameType.dsNhomChiTietLoai.map((group) => {
          return (
            <div
              key={group.id}
              className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs"
            >
              <a href="#">
                {group.hinhAnh && (
                  <Image
                    src={group.hinhAnh}
                    alt={group.tenNhom}
                    width={300}
                    height={200}
                  />
                )}
              </a>
              <a href="#">
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                  {group.tenNhom}
                </h5>
              </a>
              <div className="mb-6 text-body">
                {group.dsChiTietLoai.map((detail) => (
                  <button
                    onClick={() => handleConvertToPage(detail.id)}
                    key={detail.id}
                    className="block cursor-pointer hover:text-yellow-300"
                  >
                    {detail.tenChiTiet}
                  </button>
                ))}
              </div>
            </div>
          );
        });
      }
    });
  };

  return (
    <div className="bg-black py-10">
      <div className="bg-green-500">
        <h1 className="text-white text-3xl text-center">{categoryName}</h1>
      </div>

      <div className="text-green-200 py-5">
        <h3 className="text-xl">Explore {categoryName}</h3>
      </div>

      <div className="grid grid-cols-3 ml-[5rem]  ">{renderCard()}</div>
    </div>
  );
}
