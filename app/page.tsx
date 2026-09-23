"use client";
import Carousel from "./component/carousel";

import TrustBy from "./component/trust-by";
import Service from "./component/service";
import Features from "./component/features";
import CustomerStory from "./component/CustomerStory";
import MarketplaceCategories from "./component/MarketplaceCategories";

export default function Home() {
  return (
    <div>
      <Carousel />

      <TrustBy />

      <Service />

      <Features />

      <CustomerStory />

      <MarketplaceCategories />
    </div>
  );
}
