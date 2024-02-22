import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";
import { ITodo } from "@/types/models";

export const POST = async (req) => {
  const { task, complete, userID } = await req.json();

  try {
    await connectToDB();

    const newTodo: ITodo = new Todo({
      creator: userID,
      name: task,
      complete: complete
    });

    await newTodo.save();
    return new Response(JSON.stringify(newTodo), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new todo item", {
      status: 500
    });
  }
};
