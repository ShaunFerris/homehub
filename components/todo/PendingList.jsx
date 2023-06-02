import React from 'react';
import TaskList from './TaskList';

const PendingList = () => {
    const pendingTasks = [];

    return (
        <div className='card_container_vert'>
            <h1 className='subhead_text text-center'>
                Pending Tasks
            </h1>
            {pendingTasks.length === 0 ? (
                <p className='desc_2 text-center'>
                    No tasks are pending right now
                </p>
            ) : (
                <TaskList />
            )

            }
        </div>
    );
};

export default PendingList;