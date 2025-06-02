import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const db = knex({
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
        min: 1,
        max: 5,
    },
});

export default db;