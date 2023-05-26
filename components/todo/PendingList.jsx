import React from 'react';

const PendingList = () => {
    const pendingTasks = [];

    return (
        <div className='card_container_vert'>
            <h1 className='subhead_text text-center'>
                Pending Tasks
            </h1>
            {pendingTasks.length === 0 ? (
                <p className='desc text-center'>
                    No tasks are pending right now
                </p>
            ) : (
                <div>Pending Tasks</div>
            )

            }
        </div>
    );
};

export default PendingList;