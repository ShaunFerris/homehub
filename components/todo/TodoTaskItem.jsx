import React from 'react';

const TodoTaskItem = ({ task, toggleStatus }) => {
    return (
        <li className='flex flex-row justify-between items-center px-5
        p-2 border-b border-gray-500'>
            {task.name}
            <button className='black_btn' onClick={(e) => {
                e.preventDefault();
                toggleStatus(task);
            }}>
                Toggle Complete
            </button>
        </li>
    );
};

export default TodoTaskItem;