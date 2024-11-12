import React from "react";
import first from '../assets/1.jfif';
import second from '../assets/2.avif';
import third from '../assets/3.webp';
import fourth from '../assets/4.jfif';
import fifth from '../assets/5.jfif';
import star from '../assets/star-symbol-icon.png'

export const Paragraph = () => {
    const Text = {
        topFirst : 'rated #1 in Georgia',
        heading: 'Lamborghini Gallardo',
        text: "Lamborghini Gallardo is the best selling supercar in the world(cap). If you want to see the performance of this car, click the link in the navigation menu. We offer car in the best conditions. It can win any race on the road(if you aren't in dubai or monaco, if you are... then you're cooked)",
        button: 'Order The Car'
    };

    return (
        <div className="flex flex-col gap-6 text-white font-Geist max-md:items-center">
            <h3 className="uppercase font-[300] tracking-wide">{Text.topFirst}</h3>
            <h1 className="text-5xl uppercase font-extrabold tracking-wider max-lg:stroke-2 max-sm:text-4xl">{Text.heading}</h1>
            <p className="text-2xl font-light w-[80%] max-sm:text-xl max-sm:stroke-2 max-sm:font-bold">{Text.text}</p>
            <button className="bg-red-800 bg-opacity-50 text-xl uppercase font-semibold p-3 rounded-md border-red-500 border-[1px] w-[40%] hover:bg-red-500 hover:bg-opacity-40 hover:border-red-800 hover:border-[1px] transition-all duration-[425ms]">
                {Text.button}
            </button>
            <div className="flex gap-10">
                <div className="flex gap-[-20px] animate-profileAnimation transition-all duration-500">
                    <img src={first} alt="" className="w-10 h-10 rounded-full mr-[-15px]"/>
                    <img src={second} alt="" className="w-10 h-10 rounded-full mr-[-15px]"/>
                    <img src={third} alt="" className="w-10 h-10 rounded-full mr-[-15px]" />
                    <img src={fourth} alt="" className="w-10 h-10 rounded-full mr-[-15px]"/>
                    <img src={fifth} alt="" className="w-10 h-10 rounded-full mr-[-15px]"/>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-5">
                        <div className="flex">
                            <img src={star} alt="" className="w-5 h-5"/>
                            <img src={star} alt="" className="w-5 h-5"/>
                            <img src={star} alt="" className="w-5 h-5"/>
                            <img src={star} alt="" className="w-5 h-5"/>
                            <img src={star} alt="" className="w-5 h-5"/>
                        </div>
                        
                        <p>5.0</p>
                    </div> 
                    <p>from 20k+ reviews</p>  
                </div>
            </div>
        </div>
    );
};
