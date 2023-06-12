"use client";

import ShopAddItem from "@/components/shoplist/ShopAddItem";
import ShopList from "@/components/shoplist/ShopList";
import Loader from "@/components/Loader";
import { ShoplistProvider } from "@/context/ShoplistContext";
import { useSession } from "next-auth/react";

const Shoplist = () => {
    const { status } = useSession();

    if (status === "loading") {
        return <Loader />;
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>;
    }

    return (
        <section className='flex flex-col items-center justify-center
        w-full'>
            <h1 className='head_text text-center blue_gradient py-3'>
                Shopping List
            </h1>
            <div className="card_container w-full">
                <ShoplistProvider>
                    <ShopAddItem />
                    <ShopList />
                </ShoplistProvider>
            </div>
        </section>
    );
};

export default Shoplist;