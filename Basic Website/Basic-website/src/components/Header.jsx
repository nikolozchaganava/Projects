import React from "react";
import { List } from "./List";
import Logo from '../assets/Logo.webp'

export const Header = () => {
    return (
        <header className="z-1 flex justify-between px-32 items-center p-16 w-full max-md:p-10">
            <img src={Logo} alt="Logo" className="h-32 w-32 rounded-full hover:cursor-pointer" />
            <List />
        </header>
    );
}
