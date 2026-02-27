import { createTaskService, deleteTaskService, getAllTasksService, updateTaskService } from '../services/taskService.js';

export async function getAllTasksController (req, res) {
    const task = await getAllTasksService();
    return res.status(200).json(task);
}

export async function createTaskController (req, res) {
    const data = req.body;

    try {
        const createTask = await createTaskService(data);

        return res.status(201).json(createTask);

    } catch (error) {
        if (error.type === "INVALID_INPUT") {
            return res.status(400).json({error: error.message});
        }
        return res.status(500).json({error: 'Internal server error'});
    }
}

export async function updateTaskController (req, res) {
    const {taskId} = req.params;
    const data = req.body;

    if (!taskId) {
        return res.status(400).json({error: 'Missing Parameters'});
    }

    try {
        const updatedTask = await updateTaskService({
            taskId,
            data,
        });

        return res.status(200).json(updatedTask);
        
    } catch (error) {
        if (error.type === "NOT_FOUND") {
            return res.status(404).json({error: error.message});
        }

        if (error.type === "FORIDDEN") {
            return res.status(403).json({error: error.message});
        }

        if (error.type === "INVALID_STATE") {
            return res.status(409).json({error: error.message});
        }

        return res.status(500).json({error: 'Internal server error'});
    }
}

export async function deleteTaskController(req, res) {
    try {
        await deleteTaskService(req.params.taskId);
        return res.status(204).send()

    } catch (error) {
            if (error.type === "NOT_FOUND") {
            return res.status(404).json({error: error.message});
        }

        if (error.type === "INVALID_STATE") {
            return res.status(409).json({error: error.message});
        }
        
        return res.status(500).json({error: 'Internal server error'});
    }    
}