"use client";

import ShopAddItem from "@/components/shoplist/ShopAddItem";

const Shoplist = () => {
    return (
        <section className='flex flex-col items-center justify-center
        w-full'>
            <h1 className='head_text text-center blue_gradient py-3'>
                Shopping List
            </h1>
            <ShopAddItem />
        </section>
    );
};

export default Shoplist;