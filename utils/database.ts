// utils/database.ts

// import { open } from "../deps.ts";
import { DB } from "../deps.ts";

const db = new DB("./workout_tracker.db");

// Creating the table if it doesn't already exist
db.execute(`
  CREATE TABLE IF NOT EXISTS workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    type TEXT,
    duration INTEGER
);
`);

// function to close the db
function closeDb() {
  db.close();
}

export default db;
