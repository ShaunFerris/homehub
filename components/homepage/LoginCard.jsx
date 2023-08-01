/* eslint-disable react/no-unescaped-entities */
"use client";

import CardMenu from "./CardMenu";
import Loader from "../Loader";
import { SlLogin } from "react-icons/sl";
import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";

const LoginCard = () => {
  const { data: session, status } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div data-test="login-card-container" className="card_container">
      {status === "loading" ? (
        <Loader />
      ) : session?.user ? (
        <CardMenu /> /*The card menu overflowing the card*/
      ) : (
        /*is a purposeful design choice*/
        <div data-test="login-prompt">
          <a href="#">
            <h5
              className="mb-2 text-2xl font-bold
                            tracking-tight text-gray-900"
            >
              Login to access your home planning tools
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            We currently only support the home of the site's creator,
            so unfortunately, if you do not live with me, you cannot
            use this service.
          </p>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                data-test="login-button"
                type="button"
                key={provider.name}
                className="black_btn w-full"
                onClick={() => {
                  signIn(provider.id);
                }}
              >
                Login
                <SlLogin size={20} className="object-contain ml-3" />
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LoginCard;
