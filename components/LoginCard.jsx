"use client";

import { SlLogin } from "react-icons/sl";

const LoginCard = () => {
    return (
        <div class="card_container">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight
                    text-gray-900">
                        Login to access your homes planning tools
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
                    We currently only support the home of the sites
                    creator, so unfortunately if you do not live
                    with me, you cannot use this service.
            </p>
            <a href="#" class="black_btn">
                Login
                <SlLogin
                    size={20}
                    className="object-contain"
                />
            </a>
        </div>
    );
};

export default LoginCard;