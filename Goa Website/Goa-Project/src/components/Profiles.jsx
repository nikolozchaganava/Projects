import React from "react";
import Keshelava from "../assets/nikaKeshelavaProfile.jpg";
import Chaganava from "../assets/nikolozChaganavaProfile.jpg";
import Wiqarishvili from "../assets/sabaWiqarishviliProfile.jpg";
import star from "../assets/star.webp";

export default function Profiles() {
  const profiles = [
    {
      name: "Nika Keshelava",
      image: Keshelava,
      occupation: "Owner of GOA",
      description:
        "GOA welcomes everyone, whether young or adult. We provide an excellent environment with friendly students and supportive teachers. By joining GOA, you will experience a life-changing transformation, becoming more sociable, smarter, and so much more.",
    },
    {
      name: "Nikolo Chaganava",
      image: Chaganava,
      occupation: "Student/Future leader",
      description:
        "After joining GOA, my life underwent a remarkable transformation. My views on people and education have significantly evolved. I've made many wonderful friends and gained a wealth of knowledge.",
    },
    {
      name: "Saba Wiqarishvili",
      image: Wiqarishvili,
      occupation: "Student/Future leader",
      description:
        "They say the beginning of education can be bitter, with sweet rewards at the end. But at GOA, both the journey and the result are sweet. Here, you'll find friendly people, supportive teachers, dedicated mentors, and even the owner himself ready to help.",
    },
  ];
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 h-screen place-content-center bg-slate-50 px-5 max-md:h-fit max-md:py-60">
      {profiles.map((item, index) => (
        <div key={index} className="bg-white px-10 py-12 rounded-xl space-y-6">
          <div className="flex items-center gap-5 max-md:text-center">
            <img
              src={item.image}
              alt=""
              className="rounded-full outline outline-black w-24 h-24 object-cover"
            />
            <div className="space-y-1">
              <h2 className="text-2xl text-[#595959] font-semibold">
                {item.name}
              </h2>
              <h3 className="text-md text-[#595959]">{item.occupation}</h3>
              <div className="flex space-x-[-6px] max-md:flex-row max-md:justify-center">
                <img src={star} alt="" className="w-5 h-5"/>
                <img src={star} alt="" className="w-5 h-5"/>
                <img src={star} alt="" className="w-5 h-5"/>
                <img src={star} alt="" className="w-5 h-5"/>
                <img src={star} alt="" className="w-5 h-5"/>
              </div>
            </div>
          </div>
          <p className="text-md text-[#595959] max-md:text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
