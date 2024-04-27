// components/fullPage.ts
import { createHeaderHtml } from "../components/header.ts";
import { createWorkoutFormHtml } from "../components/workoutForm.ts";
import { createResultsDisplayHtml } from "../components/resultsDisplay.ts";
// import { createScript } from "../scripts/formHandler.js"

const HeaderHtml = createHeaderHtml();
const WorkoutFormHtml = createWorkoutFormHtml();
const ResultsDisplayHtml = createResultsDisplayHtml();
const body = `
  <!DOCTYPE html>
  <html lang="en>"
  <head>
    <meta charset="UTF-8">
    <meta name= "viewport" content="width=device-width, initial-scale=1.0">
    <title>Workout Tracker</title>
    <link rel="icon" href="/static/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/static/css/style.css">
    <script src="/static/scripts/newFormHandler.js"></script>
  </head> 
  <body>
    ${HeaderHtml}
    ${WorkoutFormHtml}
    ${ResultsDisplayHtml}
`
export function createFullPageHtml(_req: Request): Response {
    return new Response(body, {
        headers:{ 
          "Content-Type": "text/html",
        }
    });
} 
