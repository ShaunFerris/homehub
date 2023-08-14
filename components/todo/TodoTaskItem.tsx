import { TbSwitchVertical } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";

const TodoTaskItem = ({ task, toggleStatus, handleDelete }) => {
  return (
    <li
      data-test="todo-listItem"
      className="flex flex-row justify-between items-center px-5
        p-2 border-b border-gray-500"
    >
      <div>
        {task.name}{" "}
        <span className="text-gray-500">
          | {task?.creator?.username}
        </span>
      </div>
      {/*Desktop displays get action buttons*/}
      <div id="buttons" className="sm:flex flex-row gap-4 hidden">
        <button
          data-test="todo-statusToggle"
          className="confirm_btn"
          onClick={(e) => {
            e.preventDefault();
            toggleStatus(task);
          }}
        >
          Toggle Complete
        </button>
        <button
          className="delete_btn"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(task);
          }}
        >
          Delete Task
        </button>
      </div>
      {/*Mobile displays get action icons*/}
      <div id="icons" className="sm:hidden flex flex-row gap-4">
        <TbSwitchVertical
          size="1.5em"
          onClick={(e) => {
            e.preventDefault();
            toggleStatus(task);
          }}
        />
        <TiDelete
          size="1.5em"
          onClick={(e) => {
            e.preventDefault();
            handleDelete(task);
          }}
        />
      </div>
    </li>
  );
};

export default TodoTaskItem;
