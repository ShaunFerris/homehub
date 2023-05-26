import React from 'react';

const TodoAddForm = () => {
    return (
        <div className='card_container_long flex flex-row gap-4'>
            <div id='todo_input' className='w-4/5'>
                <input
                    className='form_input border border-black'
                    placeholder='Add a todo...'
                />
            </div>
            <div id='todo_buttons' className='w-1/5 flex flex-row
                justify-center'>
                <button
                    className='black_btn w-full'
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default TodoAddForm;