import { useState } from "react";
import { useSession } from "next-auth/react";

const TodoAddForm = () => {
    const { data: session } = useSession();

    const [todo, setTodo] = useState({ name: "", complete: false });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const createTodo = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/todo/newItem/", {
                method: "POST",
                body: JSON.stringify({
                    task: todo.name,
                    complete: todo.complete,
                    userID: session?.user.id
                })
            });

            if (response.ok) {
                console.log("Todo task created!")
                setTodo({ name: "", complete: false })
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className='card_container_long flex flex-row gap-4'
        onSubmit={createTodo}>
                <div id='todo_input' className='w-4/5'>
                    <input
                        className='form_input border border-black'
                        placeholder='Add a todo...'
                        value={todo.name}
                        onChange={(event) => setTodo({
                            ...todo,
                            name: event.target.value
                        })}
                    />
                </div>
                <div id='todo_buttons' className='w-1/5 flex flex-row
                justify-center'>
                    <button
                        className='black_btn w-full'
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>
                </div>
        </form>
    );
};

export default TodoAddForm;