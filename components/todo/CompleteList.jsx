import TaskList from "./TaskList";

const CompleteList = () => {
    const completedTasks = [];

    return (
        <div className='card_container_vert'>
            <h1 className='subhead_text text-center'>
                Completed Tasks
            </h1>
            {completedTasks.length === 0 ? (
                <p className='desc text-center'>
                    No Tasks have been completed
                </p>
            ) : (
                <TaskList />
            )

            }
        </div>
    );
};

export default CompleteList;