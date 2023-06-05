"use client";

import React from 'react';

const Shoplist = () => {
    return (
        <section className='flex flex-col items-center justify-center
        w-full'>
            <h1 className='head_text text-center blue_gradient py-3'>
                Shopping List
            </h1>
            <div className='card_container w-full flex flex-row gap-4'>
                <input 
                    className='form_input border border-black'
                    placeholder='Add an item to your shopping list...'
                />
                <button className='black_btn'>Add</button>
            </div>
        </section>
    );
};

export default Shoplist;