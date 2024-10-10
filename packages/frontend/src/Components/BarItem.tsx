import { log } from "console";
import React from "react";
import { Link as RouterLink } from "react-router-dom";  

interface LinkProps {
    logOut?: boolean;
    to: string;
    title: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CustomLink: React.FC<LinkProps> = ({ to, title, onClick, logOut }) => {
    return (
        <RouterLink className={logOut ? "text-red-500 hover:text-red-700 p-2" : "text-blue-500 hover:text-blue-700 p-2"} to={to} onClick={onClick}>
            {title}
        </RouterLink>
    );
};

export default CustomLink;
