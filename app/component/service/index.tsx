"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Service() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {" "}
      <div className="service bg-green-50 py-20 pt-10">
        <h1 className="text-3xl pl-9 mb-7 text-black">
          Popular professional services
        </h1>

        <div className="px-9">
          <Slider {...setting}>
            <div className="px-2">
              <figure className="relative max-w-sm cursor-pointer filter grayscale-0 ">
                <a href="#">
                  <img
                    className="rounded-base"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  <p>
                    Do you want to get notified when a new component is added to
                    Flowbite?
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="px-2">
              <figure className="relative max-w-sm cursor-pointer filter grayscale-0 ">
                <a href="#">
                  <img
                    className="rounded-base"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  <p>
                    Do you want to get notified when a new component is added to
                    Flowbite?
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="px-2">
              <figure className="relative max-w-sm cursor-pointer filter grayscale-0 ">
                <a href="#">
                  <img
                    className="rounded-base"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  <p>
                    Do you want to get notified when a new component is added to
                    Flowbite?
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="px-2">
              <figure className="relative max-w-sm cursor-pointer filter grayscale-0 ">
                <a href="#">
                  <img
                    className="rounded-base"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  <p>
                    Do you want to get notified when a new component is added to
                    Flowbite?
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="px-2">
              <figure className="relative max-w-sm cursor-pointer filter grayscale-0 ">
                <a href="#">
                  <img
                    className="rounded-base"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                    alt="image description"
                  />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  <p>
                    Do you want to get notified when a new component is added to
                    Flowbite?
                  </p>
                </figcaption>
              </figure>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
