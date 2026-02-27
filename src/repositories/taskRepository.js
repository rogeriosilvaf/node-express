let tasks = [];
let idCounter = 0;

export async function createTask({ title }) {
    const newTask = {
        id: idCounter++,
        title,
        status: "PENDING",
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    tasks.push(newTask);
    return newTask;
}

export async function getTaskById(id) {
    return tasks.find(t => t.id === Number(id));
}

export async function getAllTasks() {
    return tasks;
}

export async function updateTask(id, data) {
    const task = await getTaskById(id);

    if (!task) return null;

    if (data.title !== undefined) {
        task.title = data.title;
    }

    if (data.status !== undefined) {
        task.status = data.status;
    }

    task.updatedAt = new Date();

    return task;
}

export async function deleteTask(id) {
    const index = tasks.find(t => t.id === Number(id))

    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
}