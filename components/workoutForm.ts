// components/workoutForm.ts

export function createWorkoutFormHtml(req: Request): Response {
  return `
  <form id="workoutForm" method="POST" action="/submit">
    <input type="text" name="exercise" placeholder="Type of Exercise" required>
    <input type="number" name="duration" placeholder="Duration (minutes)" required>
    <textarea name="notes" placeholder="Notes"></textarea>
    <button type="submit">Submit Workout</button>
  </form>
`;
}
