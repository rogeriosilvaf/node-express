import { Router } from "express";
import { createTaskController, deleteTaskController, getAllTasksController, updateTaskController } from "../controllers/taskController.js";

const router = Router();

router.get('/', getAllTasksController);
router.post('/', createTaskController);
router.patch('/:taskId', updateTaskController);
router.delete('/:taskId', deleteTaskController);

export default router;