export default function Features() {
  return (
    <section className="w-full bg-[#dfe7e3] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT - CONTENT */}
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222325] leading-tight mb-5">
              A whole world of freelance
              <br />
              talent at your fingertips
            </h2>

            {/* Item 1 */}
            <div className="flex gap-3 mb-5">
              <i className="fa-regular fa-circle-check text-[#74767e] text-sm mt-1.5"></i>

              <div>
                <h3 className="text-sm font-semibold text-[#404145] mb-1">
                  The best for every budget
                </h3>

                <p className="text-xs leading-5 text-[#74767e]">
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3 mb-5">
              <i className="fa-regular fa-circle-check text-[#74767e] text-sm mt-1.5"></i>

              <div>
                <h3 className="text-sm font-semibold text-[#404145] mb-1">
                  Quality work done quickly
                </h3>

                <p className="text-xs leading-5 text-[#74767e]">
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-3 mb-5">
              <i className="fa-regular fa-circle-check text-[#74767e] text-sm mt-1.5"></i>

              <div>
                <h3 className="text-sm font-semibold text-[#404145] mb-1">
                  Protected payments, every time
                </h3>

                <p className="text-xs leading-5 text-[#74767e]">
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-3">
              <i className="fa-regular fa-circle-check text-[#74767e] text-sm mt-1.5"></i>

              <div>
                <h3 className="text-sm font-semibold text-[#404145] mb-1">
                  24/7 support
                </h3>

                <p className="text-xs leading-5 text-[#74767e]">
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - VIDEO */}
          <div className="relative w-full">
            <div className="aspect-video w-full overflow-hidden rounded-sm bg-gray-300">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/AzRYJRmuMWg?si=5NLUa9pYEPf-Ncq1"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
