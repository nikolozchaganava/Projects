import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="bg-gray-100 py-16 min-h-screen flex justify-center items-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Top Contributors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://media.discordapp.net/attachments/1288216926476177458/1333846838951936082/image.png?ex=679a612c&is=67990fac&hm=92076d594019066c2403a94f8bdd800e0104c1b1e29a48155962409fc54ea8bb&=&format=webp&quality=lossless&width=1136&height=662"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Temu Temudan</h3>
            <p className="text-gray-500">Product Designer who contributed greatly to the tactile feel of the iPhone 16.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://cdn.discordapp.com/attachments/1199379636145106954/1333871593348268092/trex-temo.png?ex=679a7839&is=679926b9&hm=b7fc822873b5a74eb494855b443defb24b50946c75942f41981bee1dca6f8cc1&"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Temo T-rexize</h3>
            <p className="text-gray-500">Engineering lead responsible for integrating cutting-edge haptic technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://media.discordapp.net/attachments/1288216926476177458/1333846838951936082/image.png?ex=679a612c&is=67990fac&hm=92076d594019066c2403a94f8bdd800e0104c1b1e29a48155962409fc54ea8bb&=&format=webp&quality=lossless&width=1136&height=662"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Temo Reactidze</h3>
            <p className="text-gray-500">Lead Tester who ensured the smooth user experience of the iPhone 16.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/learn-more"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
