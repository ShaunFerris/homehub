"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession,
    getProviders } from "next-auth/react";
import { SiHomeassistant } from "react-icons/si";

const Nav = () => {
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <SiHomeassistant
                    size={40}
                    className="object-contain"
                />
                <p className="logo_text">
                    homeHub
                </p>
            </Link>
        </nav>
    );
};

export default Nav;
