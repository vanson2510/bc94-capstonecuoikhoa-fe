const categories = [
  {
    name: "Graphics & Design",
    icon: "fa-solid fa-palette",
  },
  {
    name: "Digital Marketing",
    icon: "fa-solid fa-bullhorn",
  },
  {
    name: "Writing & Translation",
    icon: "fa-solid fa-pen-nib",
  },
  {
    name: "Video & Animation",
    icon: "fa-solid fa-video",
  },
  {
    name: "Music & Audio",
    icon: "fa-solid fa-music",
  },
  {
    name: "Programming & Tech",
    icon: "fa-solid fa-code",
  },
  {
    name: "Business",
    icon: "fa-solid fa-briefcase",
  },
  {
    name: "Finance",
    icon: "fa-solid fa-coins",
  },
  {
    name: "Data",
    icon: "fa-solid fa-database",
  },
];

export default function MarketplaceCategories() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-6xl mx-auto px-2">
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-[#222325] mb-10">
          Explore the marketplace
        </h2>

        {/* CATEGORIES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8">
          {categories.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* ICON */}
              <div className="mb-4">
                <i
                  className={`${item.icon} text-2xl text-[#74767e] group-hover:text-[#1dbf73] transition-colors duration-200`}
                ></i>
              </div>

              {/* LINE */}
              <div className="w-10 h-px bg-[#c5c6c9] mb-3 group-hover:bg-[#1dbf73] group-hover:w-16 transition-all duration-200"></div>

              {/* NAME */}
              <p className="text-sm font-medium text-[#404145] group-hover:text-[#1dbf73] transition-colors duration-200">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
