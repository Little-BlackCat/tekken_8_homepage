import dotenv from "dotenv";
const { Client } = require('pg');
dotenv.config();


export async function getTekken8Characters(name: string) {
  try {
    const client = new Client({
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      ssl: false,
    });
    await client.connect();
    if(name === '') {
      const res = await client.query(process.env.QUERY_ALL);
      await client.end();
      return res.rows;
    }

    const res = await client.query(process.env.QUERY_SELECT_NAME, name);
    await client.end();
    return res.rows;

  } catch (e) {
    console.error(e);
  }
}
