import Reviews from "@/app/component/Reviews/page";
import { fetchJobFollowingDetail } from "@/app/services/job";
import { fetchReviews } from "@/app/services/review";
import Image from "next/image";

type TProps = {
  params: {
    id: number | string;
  };
};

export default async function DetailTypeJob(props: TProps) {
  const { id } = await props.params;

  const data = await fetchJobFollowingDetail(id);

  console.log("DATA:", data);

  const comments = await fetchReviews(id);

  console.log("COMMENT: ", comments);

  return (
    <div>
      <div>
        <span className="text-blue-700">
          {data?.[0].tenLoaiCongViec} {">"} {data?.[0].tenNhomChiTietLoai} {">"}{" "}
          {data?.[0].tenChiTietLoai}
        </span>
      </div>

      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-8">
          {/* ================= HEADER ================= */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <button className="text-sm text-gray-500 hover:text-green-600">
                ← Back to search
              </button>

              <div className="flex gap-2">
                <button className="rounded-full border bg-white px-4 py-2 text-sm">
                  ♡ Save
                </button>

                <button className="rounded-full border bg-white px-4 py-2 text-sm">
                  ↗ Share
                </button>
              </div>
            </div>

            <h1 className="max-w-4xl text-3xl font-bold text-gray-900">
              {data?.[0].congViec.tenCongViec}
            </h1>

            <p className="mt-3 text-gray-500">{data?.[0].congViec.moTaNgan}</p>
          </div>

          {/* ================= SELLER ================= */}
          <div className="mb-8 flex items-center gap-4">
            <Image
              src={data?.[0].congViec.hinhAnh}
              alt="Seller"
              width={50}
              height={50}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Seller Name</span>

                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                  Top Rated
                </span>
              </div>

              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="text-yellow-500">★★★★★</span>

                <span className="font-semibold">4.9</span>

                <span className="text-gray-400">
                  ({data?.[0].congViec.danhGia})
                </span>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* =================================================
              LEFT - GALLERY
          ================================================== */}
            <section className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                {/* MAIN IMAGE */}

                <div className="relative aspect-video bg-gray-200">
                  <Image
                    src={data?.[0].congViec.hinhAnh}
                    alt="Job preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* ================= DESCRIPTION ================= */}

              <div className="mt-8 rounded-2xl border bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">
                  About This Gig
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {data?.[0].congViec.moTa}
                </p>

                <p className="mt-3 leading-7 text-gray-600">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
              </div>

              {/* ================= SELLER ================= */}

              <div className="mt-6 rounded-2xl border bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">
                  About the seller
                </h2>

                <div className="mt-5 flex items-center gap-5">
                  <Image
                    src={data?.[0].congViec.hinhAnh}
                    alt="Seller"
                    width={70}
                    height={70}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-gray-900">Seller Name</h3>

                    <p className="mt-1 text-sm text-gray-500"></p>

                    <p className="mt-2 text-sm text-yellow-500">
                      ★ 4.9 • {data?.[0].congViec.danhGia} viewer
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div>
                    <p className="text-xs text-gray-400">From</p>
                    <p className="mt-1 font-semibold">Vietnam</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Member since</p>
                    <p className="mt-1 font-semibold">2024</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Response time</p>
                    <p className="mt-1 font-semibold">1 hour</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Languages</p>
                    <p className="mt-1 font-semibold">English</p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
              RIGHT - PACKAGE
          ================================================== */}

            <aside>
              <div className="sticky top-6 overflow-hidden rounded-2xl border bg-white shadow-md">
                {/* PACKAGE INFO */}

                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase text-green-600">
                        Basic package
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        {data?.[0].tenChiTietLoai}
                      </h2>
                    </div>

                    <span className="text-2xl font-bold">
                      ${data?.[0].congViec.giaTien}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    {data?.[0].congViec.moTaNgan}
                  </p>

                  {/* DELIVERY */}

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs text-gray-400">Delivery</p>

                      <p className="mt-1 font-semibold">7 Days</p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4">
                      <p className="text-xs text-gray-400">Revisions</p>

                      <p className="mt-1 font-semibold">2 Revisions</p>
                    </div>
                  </div>

                  {/* FEATURES */}

                  <div className="mt-6">
                    <h3 className="text-sm font-bold">What's included</h3>

                    <div className="mt-4 space-y-3 text-sm text-gray-600">
                      <div className="flex gap-3">
                        <span className="text-green-500">✓</span>
                        Responsive design
                      </div>

                      <div className="flex gap-3">
                        <span className="text-green-500">✓</span>
                        Custom design
                      </div>

                      <div className="flex gap-3">
                        <span className="text-green-500">✓</span>
                        Source code
                      </div>

                      <div className="flex gap-3">
                        <span className="text-green-500">✓</span>
                        Mobile friendly
                      </div>

                      <div className="flex gap-3">
                        <span className="text-green-500">✓</span>1 Page
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}

                  <button
                    className="
                    mt-7
                    w-full
                    rounded-xl
                    bg-green-500
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:bg-green-600
                  "
                  >
                    Continue — ${data?.[0].congViec.giaTien}
                  </button>

                  <button
                    className="
                    mt-3
                    w-full
                    py-3
                    text-sm
                    font-medium
                    text-gray-500
                    hover:text-gray-900
                  "
                  >
                    Compare packages
                  </button>
                </div>

                {/* REQUIREMENTS */}

                <div className="border-t bg-gray-50 p-5 text-center">
                  <h3 className="text-sm font-semibold">
                    Have special requirements?
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Tell the seller what you need.
                  </p>

                  <button
                    className="
                    mt-4
                    rounded-lg
                    border
                    bg-white
                    px-6
                    py-2
                    text-sm
                    font-medium
                    text-gray-700
                    hover:bg-gray-100
                  "
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Reviews comments={comments} id={id} />
    </div>
  );
}
