import { connectToDB } from "@/utils/database";
import Todo from "@/models/todo";

export const GET = async (req) => {
  try {
    await connectToDB();

    const tasks = await Todo.find({}).populate("creator");

    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch todo tasks", {
      status: 500
    });
  }
};

export const PATCH = async (req) => {
  const { _id, complete } = await req.json();

  try {
    await connectToDB();

    const currentTask = await Todo.findById(_id);

    if (!currentTask) {
      return new Response("Task not found", { status: 404 });
    }

    currentTask.complete = !complete;
    await currentTask.save();
    return new Response("Task status toggled", { status: 200 });
  } catch (error) {}
};

export const DELETE = async (req) => {
  const { renderCondition } = await req.json();
  try {
    await connectToDB();

    await Todo.deleteMany({ complete: renderCondition });

    return new Response("List cleared!", { status: 200 });
  } catch (error) {
    return new Response("Failed to clear list!", { status: 500 });
  }
};
