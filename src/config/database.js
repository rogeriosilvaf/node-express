import { Pool } from 'pg';

const pool = new Pool({
    user: 'todo_user',
    host: 'localhost',
    database: 'todo_db',
    password: '1234',
    port: 5432,
});

export default pool;