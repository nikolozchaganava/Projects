import React from 'react';
import Header from '../components/Header';
import SectionDivsPricing from '../components/SectionDivsPricing'
import Footer from '../components/Footer'

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Header />
      <section className="relative bg-cover bg-top" style={{ backgroundImage: "url('https://cdn.b12.io/client_media/aqnomJBm/a499e538-b7be-11ef-91ca-0242ac110002-jpg-hero_image.jpeg')" }}>
        <div className="bg-black bg-opacity-50 py-44 flex justify-center items-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl font-bold text-white mb-4">Unlock your future</h2>
            <p className="text-xl text-gray-200">Empower your career with skills</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <SectionDivsPricing />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;