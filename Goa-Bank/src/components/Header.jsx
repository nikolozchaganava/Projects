import React from 'react';
import Image from '../assets/logo.png';
import ListItemsStyling from '../functions/ListItemsStyling';

const Header = () => {
  return (
    <header className="w-full p-10 bg-black bg-opacity-70 font-poppins flex items-center justify-between">
      <div className="flex items-center gap-5">
        <a href="#"><img src={Image} alt="Logo" className="w-40 rounded-[50%]" /></a>
        <a href="#"><h1 className="text-white text-[2.5rem] font-bold uppercase">ChagoZigger</h1></a>
      </div>
      <form className="w-fit rounded-[10px] bg-white">
        <input type="search" placeholder="Search..." className="p-3 w-[20rem] bg-transparent" />
        <link to='/login' type="submit" className="bg-green-600 text-white font-bold p-3 rounded-[10px] focus:border-transparent">
          Search
        </link>
      </form>
      <ListItemsStyling />  
    </header>
  );
};

export default Header;
