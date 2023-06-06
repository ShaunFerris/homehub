import React from 'react';

const TodoTaskItem = ({ task, toggleStatus, handleDelete }) => {
    return (
        <li className='flex flex-row justify-between items-center px-5
        p-2 border-b border-gray-500'>
            <div>
                {task.name} 
                <span className='text-gray-500'>
                     | {task.creator.username}
                </span>
            </div>
            <div id='buttons' className='flex flex-row gap-4'>
                <button className='confirm_btn' onClick={(e) => {
                    e.preventDefault();
                    toggleStatus(task);
                }}>
                    Toggle Complete
                </button>
                <button className='delete_btn' onClick={(e) => {
                    e.preventDefault();
                    handleDelete(task);
                }}>
                    Delete Task
                </button>
            </div>

        </li>
    );
};

export default TodoTaskItem;