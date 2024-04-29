// scripts/newFormHandler.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('workoutForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      console.log("Form submission started.");
      event.preventDefault();
      const formData = new FormData(form);

      fetch('/submit', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        const contentType = response.headers.get("Content-Type");
        if (!response.ok) {
          throw new Error('Network response was not ok:  ${response.status} ${response.statusText}');
        }
        return contentType.includes("application/json") ? response.json(): response.text();
      })
      .then(data => {
          console.log("Received data:", data); // lot to see what is actually sent.
          const resultsDiv = document.getElementById('workoutResults');
          if (typeof data === 'string') {
              resultsDiv.innerHTML = data
          } else {
            // assuming the data object contains the fields 'exercise', 'duration' as an object, and 'notes'.
            // const duration = data.duration;
            // const formattedDuration = `${duration.hours}h ${duration.minutes}m ${duration.seconds}s`
            resultsDiv.innerHTML = `
                <p>Exercise: ${data.exercise}</p>
                <p>Duration: ${data.duration}</p>
                <p>Notes: ${data.notes}</p>`
          }
      })
      .catch(error => {
        console.error('Error', error);
        document.getElementById('workoutResults').innerHTML = `<div class="error">Error: ${error.message}</div>`;
      });
    });
  } else {
      console.error("Failed to find the workout form on the page.");
  }
});
