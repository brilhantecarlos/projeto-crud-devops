import mysql from "mysql"

const MAX_RETRIES = 10;
const RETRY_DELAY = 3000; // 3 segundos

let db;

function connectWithRetry(retries = 0) {
    db = mysql.createConnection({
        host: process.env.DB_HOST || "api_database",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "adsdev123",
        database: process.env.DB_NAME || "crud"
    });

    db.connect((err) => {
        if (err) {
            if (retries < MAX_RETRIES) {
                console.error(`Erro ao conectar ao MySQL (tentativa ${retries + 1}):`, err.message);
                setTimeout(() => connectWithRetry(retries + 1), RETRY_DELAY);
            } else {
                console.error("Não foi possível conectar ao MySQL após várias tentativas.");
                process.exit(1);
            }
        } else {
            console.log("Conectado ao MySQL!");
        }
    });
}

connectWithRetry();

export { db }; 