import mysql from 'mysql2/promise';

// ค่าการเชื่อมต่ออ่านจาก environment variables (ดู backend/.env.example)
const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "slideme"
});

pool.getConnection()
    .then((conn) => {
        conn.release();
        console.log("MySQL successfully connected!");
    })
    .catch((err) => {
        console.log("Error connecting to DB:", err.message);
    });

export default pool;
