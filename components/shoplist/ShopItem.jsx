import React from 'react';

const ShopItem = ({item}) => {
    return (
        <li className='flex flex-row justify-between items-center px-5
        p-2 border-b border-gray-500'>
            <div>
                {item.name}
                <span className='text-gray-500'>

                </span>
            </div>
        </li>
    );
};

export default ShopItem;