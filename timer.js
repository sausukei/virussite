// Set the time for the timer (in seconds)
var timeLeft = 300;

// Function to update the timer display
function updateTimer() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  // Add leading zeros if the values are less than 10
  var formattedTime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

  // Update the timer display
  document.getElementById("timer").textContent = formattedTime;

  // Decrement the time by 1 second
  timeLeft--;

  // Check if the timer has reached 0
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    alert("Time's up!");
  }
}

// Call the updateTimer function every second
var timerInterval = setInterval(updateTimer, 1000);
