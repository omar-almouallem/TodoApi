import Todo from "../module/todoSchema";
import {validationSchema} from "../libs/yup"

export async function getTodos (options:object | any={},page: number, limit: number)
{
  const startIndex = (page - 1) * limit;
  const totalItems = await Todo.countDocuments();
  const totalPages = Math.ceil(totalItems / limit);
  const todo = await Todo.find(options).skip(startIndex).limit(limit);
  return {
    todo,
    totalPages,
    currentPage: page,
    totalItems,
  };
}

export async function getTodoCompleated (page: number, limit: number)
{
  const todo = await getTodos({completed: "true" },page,limit)
  return todo
}

export async function getActiveTodo(page: number, limit: number)
{
  const todo = await getTodos({ completed: "false" },page,limit)
  return todo
}

export async function createTodo (data: any)
{
  const validationPipe = await validationSchema.validate(data)
  const todo = await Todo.create(validationPipe);
  return todo;
}

export async function updateById(id: string, update: object) {
  const todo = await Todo.findByIdAndUpdate(id, update, {
    new: true,
  });
  return todo;
}

export async function deleteTodo(id: string) {
  const todo = await Todo.findByIdAndDelete(id);
  return todo;
}

export async function getTodoById(id: any) {
  const todo = await Todo.findById(id);
  return todo;
}

