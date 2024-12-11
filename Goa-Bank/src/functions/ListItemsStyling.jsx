import React from 'react';
import { Link } from 'react-router-dom';

const listItems = ['Home', 'Contact Us', 'Products', 'About Us', 'Log in'];

const ListItemsStyling = () => {
  return (
    <ul className="flex text-white gap-[15px] text-[1.5rem]">
      {listItems.map((item, index) => (
        <li key={index} className="font-bold hover:underline cursor-pointer">
          {item === 'Log in' ? (
            <Link to="/login">{item}</Link>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  ); 
};

export default ListItemsStyling;