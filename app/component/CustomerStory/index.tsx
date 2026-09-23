export default function CustomerStory() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* LEFT - VIDEO */}
          <div className=" w-full">
            <div className="aspect-video overflow-hidden rounded-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5icFYAZV0yo?si=JjRdIyKJyC_6zZLd"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="max-w-lg">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-sm text-[#74767e]">
                Kay Kim, Co-Founder
              </span>

              <span className="text-xs font-bold text-[#222325]">revolut</span>
            </div>

            <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed text-[#404145]">
              "It's extremely exciting that Fiverr has freelancers from all over
              the world — it broadens the talent pool. One of the best things
              about Fiverr is that while we're sleeping, someone's working."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
