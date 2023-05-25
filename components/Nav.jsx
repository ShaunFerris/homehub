"use client";

import Link from "next/link";
import { SiHomeassistant } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const Nav = () => {
    const { isLoggedIn, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
    };

    return (
        <nav className="flex justify-between items-center w-full
            mb-16 pt-3">
            <Link href="/" className="flex gap-2">
                <SiHomeassistant size={40} className="object-contain" />
                <p className="logo_text">homeHub</p>
            </Link>
            <div className="flex items-center">
                {isLoggedIn ? (
                    <button
                        className="black_btn"
                        onClick={handleLogout}
                    >Sign Out</button>
                ) : (
                    <div></div>
                )}
            </div>
        </nav>
    );
};

export default Nav;