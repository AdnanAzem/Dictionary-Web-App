import db from "./knex";

export const initializeDB = async () => {
  const exists = await db.schema.hasTable("word_stats");

  if (!exists) {
    await db.schema.createTable("word_stats", (table) => {
      table.increments("id").primary();
      table.string("word").unique().notNullable();
      table.integer("count").defaultTo(1);
    });

    console.log("✅ word_stats table created on NeonDB");
  }
};
