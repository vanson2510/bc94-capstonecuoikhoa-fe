import { TReviews } from "@/app/type";
import Image from "next/image";

type TReviewsProp = {
  comments: TReviews[];
};

export default async function Reviews({ comments }: TReviewsProp) {
  console.log(comments);

  const renderComment = (cms: TReviews[]) => {
    if (cms) {
      return cms.map((comment) => {
        return (
          <div key={comment.id} className="border-b border-gray-200 pb-7">
            <div className="flex gap-4">
              {/* Avatar */}

              <Image
                src={comment.avatar || "/images/avatar.jpg"}
                alt={comment.tenNguoiBinhLuan || "User avatar"}
                width={44}
                height={44}
                className="h-11 w-11 shrink-0 rounded-full object-cover"
              />

              {/* Content */}

              <div className="flex-1">
                {/* Name + rating */}

                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-900">
                    {comment.tenNguoiBinhLuan}
                  </span>

                  {/* Vòng lặp từ 1 đến 5 sao */}
                  <div className="flex gap-0.5 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= (comment.saoBinhLuan || 0)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <span className="text-sm font-medium text-gray-600">
                    {comment.saoBinhLuan}
                  </span>
                </div>

                {/* Review */}

                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600">
                  {comment.noiDung}
                </p>

                {/* Date */}

                <p className="mt-3 text-xs text-gray-400">
                  {comment.ngayBinhLuan}
                </p>

                {/* Helpful */}

                <div className="mt-4 flex items-center gap-5">
                  <button
                    className="
                  flex
                  items-center
                  gap-1.5
                  text-xs
                  font-medium
                  text-gray-500
                  transition
                  hover:text-green-600
                "
                  >
                    👍 Helpful
                  </button>

                  <button
                    className="
                  flex
                  items-center
                  gap-1.5
                  text-xs
                  font-medium
                  text-gray-500
                  transition
                  hover:text-red-500
                "
                  >
                    👎 Not Helpful
                  </button>
                </div>
              </div>
            </div>

            {/* ================= SELLER RESPONSE ================= */}

            <div className="ml-0 mt-6 rounded-xl bg-gray-50 p-5 sm:ml-14">
              <div className="flex gap-3">
                {/* Seller avatar */}

                <Image
                  src="/images/avatar.jpg"
                  alt="Seller"
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 rounded-full object-cover"
                />

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      Seller's Response
                    </span>

                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
                      Seller
                    </span>
                  </div>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                    Thank you for your order, it was a great experience working
                    with you. I will be looking forward to work with you more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <section className="mx-auto mt-10 max-w-5xl">
      {/* ================= HEADER ================= */}

      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>

          <p className="mt-1 text-sm text-gray-500">
            What buyers say about this service
          </p>
        </div>

        {/* Rating tổng */}

        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-2xl font-bold text-gray-900">5.0</span>

          <div>
            <div className="text-yellow-400">★★★★★</div>

            <p className="text-xs text-gray-400">335 reviews</p>
          </div>
        </div>
      </div>

      {/* ================= REVIEW ================= */}
      <div>{renderComment(comments)}</div>

      {/* ================= ADD COMMENT ================= */}

      <div className="mt-8">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900">Leave a review</h3>

          <p className="mt-1 text-sm text-gray-500">
            Share your experience with this service.
          </p>
        </div>

        {/* Rating */}

        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">
            Your rating:
          </span>

          <div className="flex gap-1 text-xl text-gray-300">
            <button className="transition hover:text-yellow-400">★</button>

            <button className="transition hover:text-yellow-400">★</button>

            <button className="transition hover:text-yellow-400">★</button>

            <button className="transition hover:text-yellow-400">★</button>

            <button className="transition hover:text-yellow-400">★</button>
          </div>
        </div>

        {/* Textarea */}

        <textarea
          placeholder="Write your review..."
          className="
            min-h-32
            w-full
            resize-y
            rounded-xl
            border
            border-gray-200
            bg-white
            p-4
            text-sm
            text-gray-700
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-green-500
            focus:ring-4
            focus:ring-green-100
          "
        />

        {/* Bottom */}

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            Your feedback helps other buyers make better decisions.
          </p>

          <button
            className="
              rounded-lg
              bg-green-500
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-green-600
            "
          >
            Add Comment
          </button>
        </div>
      </div>
    </section>
  );
}
