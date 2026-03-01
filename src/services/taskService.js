import { getAllTasks, createTask, getTaskById, updateTask } from '../repositories/taskRepository.js'

export async function getAllTasksService() {
    return await getAllTasks();
}

export async function createTaskService({title}) {
    
    if (!title) {
        throw {
            type: "INVALID_INPUT",
            message: "Title is required",
        };
    }

    const task = await createTask({title,});

    return task;

}

export async function updateTaskService({taskId, data}) {
    
    const task = await getTaskById(taskId);

    if (!task) {
        throw {
            type: "NOT_FOUND",
            message: "Task not found",
        };
    }

    if (task.status === "COMPLETED") {
        throw {
            type: "INVALID_STATE",
            message: "Completed task cannot be edited",
        };
    }

    const updatedTask = await updateTask(taskId, data);

    return updatedTask;
}

export async function deleteTaskService(taskId) {
    const task = await getTaskById(taskId);

    if (!task) {
        throw {
            type: "NOT_FOUND",
            message: "Task not found",
        };
    }

    if (task.status === "COMPLETED") {
        throw {
            type: "INVALID_STATE",
            message: "Complated task cannot to be deleted",
        };
    }

    await deleteTask(taskId);
}