import { Request, Response } from 'express';
import { Task } from '../models/Task';

// In-memory data storage
let tasks: Task[] = [];

// Create a new task
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, dueDate, assignedTo, category } = req.body;

        // Validation
        if (!title || !dueDate || !assignedTo || !category) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newTask: Task = {
            id: (tasks.length + 1).toString(),
            title,
            description: description || '',
            creationDate: new Date(),
            dueDate: new Date(dueDate),
            assignedTo,
            category,
            status: 'Pending'
        };

        tasks.push(newTask);

        return res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Retrieve a task by ID
export const getTaskById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const task = tasks.find(task => task.id === id);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        return res.json(task);
    } catch (error) {
        console.error('Error retrieving task by ID:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a specific task
export const updateTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, dueDate, assignedTo, category, status } = req.body;
        const taskIndex = tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title: title || tasks[taskIndex].title,
            description: description || tasks[taskIndex].description,
            dueDate: dueDate ? new Date(dueDate) : tasks[taskIndex].dueDate,
            assignedTo: assignedTo || tasks[taskIndex].assignedTo,
            category: category || tasks[taskIndex].category,
            status: status || tasks[taskIndex].status
        };

        return res.json(tasks[taskIndex]);
    } catch (error) {
        console.error('Error updating task:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a specific task
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const taskIndex = tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }

        tasks.splice(taskIndex, 1);

        return res.status(204).send();
    } catch (error) {
        console.error('Error deleting task:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Retrieve all tasks
export const getAllTasks = async (req: Request, res: Response) => {
    try {
        return res.json(tasks);
    } catch (error) {
        console.error('Error retrieving all tasks:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Retrieve all tasks assigned to a specific user
export const getTasksByAssignee = async (req: Request, res: Response) => {
    try {
        const { assignedTo } = req.params;
        const filteredTasks = tasks.filter(task => task.assignedTo.toLowerCase() === assignedTo.toLowerCase());

        return res.json(filteredTasks);
    } catch (error) {
        console.error('Error retrieving tasks by assignee:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Retrieve all tasks under a specific category
export const getTasksByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.params;
        const filteredTasks = tasks.filter(task => task.category.toLowerCase() === category.toLowerCase());

        return res.json(filteredTasks);
    } catch (error) {
        console.error('Error retrieving tasks by category:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
