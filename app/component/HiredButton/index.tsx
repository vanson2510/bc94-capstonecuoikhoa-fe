"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchHireJob } from "@/app/services/hire";

type TProps = {
  jobId: number | string;
  price: number;
};

export default function HireButton({ jobId, price }: TProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleHireJob = async () => {
    // 1. Kiểm tra đăng nhập
    const token = sessionStorage.getItem("Token");
    const savedUser = sessionStorage.getItem("user");

    if (!token || !savedUser) {
      router.push("/SignIn");
      return;
    }

    try {
      // 2. Lấy thông tin user
      const user = JSON.parse(savedUser);

      if (!user.id) {
        alert("Không tìm thấy ID người dùng!");
        return;
      }

      // 3. Tạo dữ liệu thuê công việc
      const hireData = {
        id: 0,
        maCongViec: Number(jobId),
        maNguoiThue: Number(user.id),
        ngayThue: new Date().toISOString(),
        hoanThanh: false,
      };

      setLoading(true);

      // 4. Gọi API
      const result = await fetchHireJob(hireData, token);

      console.log("Kết quả thuê công việc:", result);

      alert("Thuê công việc thành công!");
    } catch (error) {
      console.error("Lỗi thuê công việc:", error);
      alert("Thuê công việc thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleHireJob}
      disabled={loading}
      className="mt-7 w-full rounded-xl bg-green-500 py-4 font-semibold text-white transition hover:bg-green-600 disabled:opacity-50"
    >
      {loading ? "Processing..." : `Continue — $${price}`}
    </button>
  );
}
