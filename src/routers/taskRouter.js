import { Router } from "express";
import { createTaskController, getAllTasksController, updateTaskController } from "../controllers/taskController.js";

const router = Router();

router.get('/', getAllTasksController);
router.post('/', createTaskController);
router.patch('/:taskId', updateTaskController);
router.delete('/:taskId', )

export default router;