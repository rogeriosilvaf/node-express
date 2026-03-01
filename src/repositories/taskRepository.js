import pool from "../config/database.js";

export async function createTask({title}) {
    const result = await pool.query(`
        INSERT INTO tasks (title)
        VALUES ($1)
        RETURNING id, title, status, created_at, updated_at;
        `,
        [title]
    );
    return result.rows[0];
}

export async function getTaskById(id) {
    const result = await pool.query(`

        SELECT id, title, status, created_at, updated_at
        FROM tasks
        WHERE id = $1
        `,
        [id]
    );
    return result.rows[0];
}

export async function getAllTasks() {
    const result = await pool.query(`
        SELECT id, title, status, created_at, updated_at
        FROM tasks;
        `);
        return result.rows;
}

export async function updateTask(id, data) {
    const {title, status} = data;
    const result = await pool.query(`
        UPDATE tasks
        SET
            title = COALESCE($1, title),
            status = COALESCE($2, status),
            updated_at = NOW()
        WHERE id = $3
        RETURNING id, title, status, created_at, updated_at;
        `,
        [title ?? null, status ?? null, id]
    );

    return result.rows[0];
}

export async function deleteTask(id) {
    const result = await pool.query(`
        DELETE FROM tasks
        WHERE id = $1
        `,
    [id]
    );

    if (result.rowCount === 0) {
        return null;
    }

    return true;
}
