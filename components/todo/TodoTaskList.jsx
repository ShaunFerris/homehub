import React from 'react';

const TodoTaskList = ({ title, emptyMsg, renderCondition }) => {
    const todoTasks = [
        { name: "placeholder task 1", complete: false },
        { name: "Placeholder task 2", complete: true }
    ];

    const tasksToDisplay = todoTasks.map((task) => {
        return task.complete === renderCondition;
    });

    return (
        <div className='card_container_vert'>
            <h1 className='subhead_text text-center'>
                {title}
            </h1>
            {todoTasks.length === 0 ? (
                <p className='desc_2 text-center'>
                    {emptyMsg}
                </p>
            ) : (
                <ul>
                    {tasksToDisplay.map((task) => (
                        <li key={task.name}>{task.name}</li>
                    ))}
                </ul>
            )

            }
        </div>
    );
};

export default TodoTaskList;