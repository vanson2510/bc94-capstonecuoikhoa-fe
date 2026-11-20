"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { fetchInfoUser } from "@/app/services/user";
import { TUser } from "@/app/type";

type TGig = {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
};

const gigs: TGig[] = [
  {
    id: 1,
    title: "I will build a modern responsive website using React JS",
    category: "Programming & Tech",
    price: 50,
    rating: 4.9,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
  },
  {
    id: 2,
    title: "I will create a professional frontend website",
    category: "Website Development",
    price: 80,
    rating: 5.0,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
  },
  {
    id: 3,
    title: "I will design a beautiful modern landing page",
    category: "Web Design",
    price: 65,
    rating: 4.8,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=700",
  },
];

export default function UserPage() {
  // Dữ liệu mẫu, sau này em thay bằng dữ liệu API
  const userdemo = {
    name: "Nguyễn Văn A",
    username: "nguyenvana",
    email: "nguyenvana@gmail.com",
    country: "Vietnam",
    description:
      "Xin chào! Tôi là một Frontend Developer. Tôi có kinh nghiệm xây dựng website bằng ReactJS, NextJS và Tailwind CSS. Tôi luôn cố gắng mang đến những sản phẩm chất lượng và trải nghiệm tốt nhất cho khách hàng.",
    languages: ["Vietnamese (Native)", "English (Basic)"],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "TypeScript",
    ],
    education: "Information Technology",
    school: "University of Information Technology",
    certification: "Frontend Web Development",
  };

  const pathname = usePathname();
  const [idUser, setIdUser] = useState<number | string>(0);
  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    const savedUser =
      typeof window !== "undefined" ? sessionStorage.getItem("user") : null;

    console.log(savedUser);
    if (savedUser) {
      const userData = JSON.parse(savedUser);

      console.log("Data", userData?.id);

      setIdUser(userData?.id);
    }
  }, [pathname]);

  console.log(idUser);

  useEffect(() => {
    if (!idUser) return;

    const handleGetUser = async () => {
      try {
        const result = await fetchInfoUser(idUser);
        setUser(result);
        console.log("Ket qua", result);
      } catch (error) {
        console.error(error);
      }
    };

    handleGetUser();
  }, [idUser]);

  console.log("userName: ", user?.name);

  return (
    <main className="min-h-screen bg-[#f7f7f7] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-500 mt-2">
              Manage your personal information and account.
            </p>
          </div>

          <button className="bg-[#1dbf73] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Edit Profile
          </button>
        </div>

        {/* PROFILE CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <aside className="space-y-6">
            {/* USER INFORMATION */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-4xl font-bold">
                    {user?.name.charAt(0)}
                  </div>

                  <span className="absolute bottom-2 right-1 w-5 h-5 rounded-full bg-green-500 border-4 border-white" />
                </div>

                <h2 className="text-xl font-bold text-gray-900 mt-4">
                  {user?.name}
                </h2>

                <p className="text-gray-500 text-sm">Phone: {user?.phone}</p>

                <span className="mt-3 bg-green-50 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full">
                  ● Online
                </span>

                <div className="grid grid-cols-2 gap-3 w-full mt-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xl font-bold text-gray-900">12</p>
                    <p className="text-xs text-gray-500">Orders</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xl font-bold text-gray-900">4.9</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 mt-6 pt-5 space-y-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Email
                  </p>
                  <p className="text-sm text-gray-700 mt-1 break-all">
                    {user?.email}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Sex
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    {user?.gender === false ? "Female" : "Male"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Birthday
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{user?.birthday}</p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <section className="lg:col-span-2 space-y-6">
            {/* SKILLS */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">
                  Skills & Expertise
                </h3>
                <button className="text-green-600 text-sm font-semibold">
                  Edit
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {user?.skill.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CERTIFICATION */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900">
                  Certifications
                </h3>
                <button className="text-green-600 text-sm font-semibold">
                  + Add
                </button>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-yellow-50 flex items-center justify-center text-2xl">
                  🏆
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {user?.certification}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Professional Certificate
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* MY GIGS */}
        <section className="mt-12">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">My Gigs</h2>
              <p className="text-sm text-gray-500 mt-2">
                Manage and showcase your services.
              </p>
            </div>

            <button className="bg-[#1dbf73] hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold text-sm transition">
              + Create a New Gig
            </button>
          </div>

          {/* GIG CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {gigs.map((gig) => (
              <article
                key={gig.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={gig.image}
                  alt={gig.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <p className="text-xs text-green-600 font-semibold mb-2">
                    {gig.category}
                  </p>

                  <h3 className="font-semibold text-gray-800 leading-6 min-h-12">
                    {gig.title}
                  </h3>

                  <div className="flex items-center justify-between mt-4">
                    <p className="text-yellow-500 text-sm font-semibold">
                      ★ {gig.rating}
                      <span className="text-gray-400 font-normal">
                        {" "}
                        ({gig.reviews})
                      </span>
                    </p>

                    <p className="text-gray-900 font-bold">From ${gig.price}</p>
                  </div>

                  <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
                    <span className="text-xs text-green-600 font-semibold">
                      ● Active
                    </span>

                    <button className="text-sm font-semibold text-gray-600 hover:text-green-600">
                      Manage Gig →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
