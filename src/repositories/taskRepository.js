import { db } from "../data/sqlite";

export async function getTaskById(id) {
    return db.run(
        "SELECT * FROM tasks WHERE id = ?",
        [id]
    );
}

export async function updateTask(id, data) {
    const fields = [];
    const values = [];

    if (data.title !== undefined) {
        fields.push("title=?");
        values.push(data.title);
    }

    if (data.status !== undefined) {
        fields.push("status=?");
        values.push(data.status);
    }

    if (fields.length === 0) {
        return getTaskById(id);
    }

    values.push(id);

    await db.run(
        `UPDATE tasks
        SET ${fields.join(", ")},   
            upadateAt = CURRENT_TIMESTAMP
        WHERE id = ?`,
        values
    );

    return getTaskById(id);
}

export async function createTask({title}) {
    const result = await db.run(
        "INSERT INTO tasks (title) VALUES (?)",
        [title]
    );

    return {
        id: result.lastID,
        title,
        status: "PENDING",
    };
}