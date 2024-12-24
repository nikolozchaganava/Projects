import React from "react";
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

export default function HomeBanner() {
  return (
    <Element name="homeBanner-section">
      <div
        className="h-screen bg-no-repeat bg-cover bg-fixed bg-right"
        style={{
          backgroundImage:
            "url(https://cdn.b12.io/client_media/aqnomJBm/a4a91ecc-b7be-11ef-886e-0242ac110002-jpg-hero_image.jpeg)",
        }}
      >
        <section className="bg-black bg-opacity-50 h-full w-full px-4 md:px-[24%] font-poppins z-0 max-md:flex max-md:justify-center">
          <div className="absolute top-1/2 transform -translate-y-1/2 max-md:text-center max-md:justify-items-center max-md:flex max-md:flex-col">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-2 tracking-wide">
              Achieve your goals
            </h1>
            <h3 className="text-white text-lg md:text-2xl mb-4">
              Join our supportive community
            </h3>
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 transition-all">
              <ScrollLink
                to={"services-section"}
                smooth={true}
                duration={1000}
                className="uppercase text-white font-semibold tracking-wider"
              >
                View services
              </ScrollLink>
            </button>
          </div>
        </section>
      </div>
    </Element>
  );
}