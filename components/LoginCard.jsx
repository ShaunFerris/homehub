/* eslint-disable react/no-unescaped-entities */
"use client";

import { SlLogin } from "react-icons/sl";
import { AuthContext } from "@/context/AuthContext";
import { useState, useEffect, useContext } from "react";
import { signIn, signOut, useSession,
    getProviders } from "next-auth/react";

const LoginCard = () => {
    const { isLoggedIn, dispatch } = useContext(AuthContext);

    const toggleLoginStatus = () => {
        dispatch({
            type: "LOGIN",
        });
    };

    return (
        <div className="card_container">
            {isLoggedIn ? (
                <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back!
                </h1>
            ) : (
                <>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold
                            tracking-tight text-gray-900">
                            Login to access your home planning tools
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                        We currently only support the home of the site's
                        creator, so unfortunately, if you do not live 
                        with me, you cannot use this service.
                    </p>
                    <button
                        href="#"
                        className="black_btn w-full"
                        onClick={toggleLoginStatus}
                    >
                        Login
                        <SlLogin size={20} className="object-contain
                            ml-3" />
                    </button>
                </>
            )}
        </div>
    );
};

export default LoginCard;
