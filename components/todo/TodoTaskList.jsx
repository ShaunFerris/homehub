import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";

const TodoTaskList = ({ title, emptyMsg, renderCondition }) => {
    const { todoTasks, dispatch } = useContext(TodoContext);

    console.log(todoTasks);

    const tasksToDisplay = todoTasks.data === null ?
        null : todoTasks.data.filter((task) => {
            return task.complete === renderCondition;
        });

    return (
        <div className='card_container_vert'>
            <h1 className='subhead_text text-center'>
                {title}
            </h1>
            {!tasksToDisplay ? (
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