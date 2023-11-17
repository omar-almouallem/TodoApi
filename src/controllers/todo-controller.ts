import { Request, Response } from "express";

import * as TodoService from "../services/todo-service";


export async function getAllTodo(req: Request, res: Response) {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const data = await TodoService.getTodos({},page, limit);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function createNewTodo(req: Request, res: Response) {
  try {
    const data= {...req.body}
    const todo = await TodoService.createTodo(data);
    res.status(201).json(todo);
  } catch (err:any) {
    res.status(500).json({ Message: err.message });
  }
}

export async function deleteTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await TodoService.deleteTodo(id);
    res.status(202).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function completeTodo(req: Request,res: Response) {
  try {
    const { id } = req.params;
        const todo = await TodoService.getTodoById(id);
    if (!todo) {
      return res.status(404).json({ message: 'User not found' });
    }
    todo.completed = !todo.completed;
        await todo.save();
    res.status(202).json(todo);

  } catch (err) {
    res.status(400).json({ message: "Bad Request" });
  }
}

export async function getTodoCompleated (req: Request, res:Response | any)
{
  try {
     const page = parseInt(req.query.page as string) || 1;
     const limit = parseInt(req.query.limit as string) || 5;
     const data = await TodoService.getTodoCompleated(page, limit);
      res.status(200).json(data);
    
  }catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getActiveTodo(req: Request, res: Response | any) {
  try {
  const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;
    const data = await TodoService.getActiveTodo(page, limit);
      res.status(200).json(data);
  }
catch (error) {
    res.status(500).json({ message: error });
  }
}


