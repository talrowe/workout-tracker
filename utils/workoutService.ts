// utils/workoutService.ts

import db from "./database.ts";

// Create a new workout entry
export function createWorkout(date: string, type: string, duration: number) {
  db.query("INSERT INTO workouts (date, type, duration) VALUES (?, ?, ?)", [
    date,
    type,
    duration,
  ]);
}

// Get all workouts
export function getAllWorkouts() {
  return [ ...db.query("SELECT * from workouts")];
}

// Get a single workout by ID
export function getWorkoutById(id: number) {
  return [...db.query("SELECT * FROM workouts WHERE id = ?", [id])][0];
}

// update a workout
export function updateWorkout(id: number, date: string, type: string, duration: number) {
  db.query("UPDATE workouts SET date = ?, type = ?, duration = ? WHERE id = ?", [
    date,
    type,
    duration,
    id,
  ]);
}

// Delete a workout
export function deleteWorkout(id: number) {
  db.query("DELETE FROM workouts WHERE id = ?", [id]);
}
