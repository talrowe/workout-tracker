// utils/database.ts

import { open } from "/deps.ts";

const db = open("./workout_tracker.db");

// Creating the table if it doesn't already exist
db.query(`
  CREATE TABLE IF NOT EXISTS workouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    type TEXT,
    duration INTEGER
);
`);

export default db;
