import React from 'react';

const TodoTaskItem = ({ task, toggleStatus }) => {
    return (
        <li className='flex flex-row justify-between items-center px-5
        p-2 border-b border-gray-500'>
            {task.name}
            <div id='buttons' className='flex flex-row gap-4'>
                <button className='confirm_btn' onClick={(e) => {
                    e.preventDefault();
                    toggleStatus(task);
                }}>
                    Toggle Complete
                </button>
                <button className='delete_btn'>
                    Delete Task
                </button>
            </div>

        </li>
    );
};

export default TodoTaskItem;