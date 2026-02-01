import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const db = await open({
    filename: "dev.db",
    driver: sqlite3.Database,
})

await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'PENDING',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);