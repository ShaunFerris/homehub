"use client";

import Link from "next/link";
import Image from "next/image";
import { SiHomeassistant } from "react-icons/si";
import { signOut, useSession } from 'next-auth/react';

const Nav = () => {
    const { data: session } = useSession();

    return (
        <nav className="flex justify-between items-center w-full
            mb-16 pt-3">
            <Link href="/" className="flex gap-2">
                <SiHomeassistant size={40} className="object-contain" />
                <p className="logo_text">homeHub</p>
            </Link>
            <div className="flex items-center justify-between gap-4">
                {session?.user ? (
                    <>
                        <Link href='/profile'>
                            <Image
                                alt="user avatar"
                                src={session?.user.image}
                                width={37}
                                height={37}
                                className="rounded-full"
                            />
                        </Link>
                        <button
                            type="button"
                            className="black_btn"
                            onClick={signOut}
                        >Sign Out</button>
                    </>
                ) : (
                    <div></div>
                )}
            </div>
        </nav>
    );
};

export default Nav;