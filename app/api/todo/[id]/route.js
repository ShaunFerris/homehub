import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";

export const DELETE = async (req, { params }) => {
  try {
    console.log("DELETE req");
    await connectToDB();

    await Todo.findByIdAndRemove(params.id);

    return new Response("Prompt deleted", { status: 200 });
  } catch (error) {
    return new Response("Task delete failed: ", { status: 500 });
  }
};
