"use client";

import { useState } from "react";
import { TComment } from "@/app/type";
import { sendComments } from "@/app/services/review";
import { useRouter } from "next/navigation";

type Tid = {
  maCongViec: number | string;
};
export default function CommentInput({ maCongViec }: Tid) {
  const [content, setContent] = useState("");
  const [starComment, setStarComment] = useState(5);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!content) {
      alert("Vui lòng nhập nội dung đánh giá!");
      return;
    }

    try {
      setLoading(true);

      const userObj =
        typeof window !== "undefined"
          ? JSON.parse(sessionStorage.getItem("user") || "{}")
          : {};

      const detailComment: TComment = {
        maCongViec: maCongViec,
        maNguoiBinhLuan: userObj.id || 0,
        ngayBinhLuan: new Date().toISOString(),
        noiDung: content,
        saoBinhLuan: starComment,
      };

      const rs = await sendComments(detailComment);

      console.log(rs);

      alert("Đánh giá của bạn đã được đăng");
      setContent("");
      setStarComment(5);

      // Tải lại dữ liệu mới nhất từ Server mà không làm reload trang
      router.refresh();
    } catch (error) {
      console.error("Lỗi khi đăng comment:", error);
      alert("Đăng đánh giá thất bại!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-8 border-t pt-6">
      <h3 className="text-lg font-bold text-gray-900 mb-2">Leave a review</h3>

      {/* Chọn sao */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-sm font-medium">Rating:</span>
        <div className="flex gap-1 text-xl cursor-pointer">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setStarComment(star)}
              className={
                star <= starComment ? "text-yellow-400" : "text-gray-300"
              }
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Ô nhập nội dung */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your review..."
        className="w-full min-h-28 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Nút gửi */}
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="px-5 py-2.5 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-400"
        >
          {loading ? "Posting..." : "Add Comment"}
        </button>
      </div>
    </div>
  );
}
