import { Response, Request } from 'express'
//import { ITodo } from './../../types/todo'
import Todo from '../../models/todo'

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: any[] = await Todo.find()
        res.status(200).json({ todos })
    } catch (error) {
        throw error
    }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(req.body)
        const body = req.body as Pick<any, 'name' | 'description' | 'status'>

        const todo: any = new Todo({
            name: body.name,
            description: body.description,
            status: body.status,
        }) 

        const newTodo: any = await todo.save()
        const allTodos: any[] = await Todo.find()

        console.log("newTodo");
        console.log(newTodo);

        res.status(201).json({ message: 'Todo added', todo: newTodo, todos: allTodos })
    } catch (error) {
        throw error
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTodo: any | null = await Todo.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTodos: any[] = await Todo.find()
        res.status(200).json({
            message: 'Todo updated',
            todo: updateTodo,
            todos: allTodos,
        })
    } catch (error) {
        throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: any | null = await Todo.findByIdAndRemove(
            req.params.id
        )
        const allTodos: any[] = await Todo.find()
        res.status(200).json({
            message: 'Todo deleted',
            todo: deletedTodo,
            todos:allTodos,
        })
    } catch (error) {
        throw error
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo }
