import express from 'express';
import { createTask, getTaskById, updateTask, deleteTask, getAllTasks, getTasksByAssignee, getTasksByCategory } from '../controllers/taskController';

const router = express.Router();

// Create a new task
router.post('/', createTask);

// Retrieve a task by ID
router.get('/:id', getTaskById);

// Update a specific task
router.put('/:id', updateTask);

// Delete a specific task
router.delete('/:id', deleteTask);

// Retrieve all tasks
router.get('/', getAllTasks);

// Retrieve all tasks assigned to a specific user
router.get('/assigned/:assignedTo', getTasksByAssignee);

// Retrieve all tasks under a specific category
router.get('/category/:category', getTasksByCategory);

export default router;
