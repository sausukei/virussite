// Get the body element
var body = document.querySelector("body");

// Function to start the flashing animation
function startFlashing() {
  body.style.animationPlayState = "running";
}

// Function to stop the flashing animation
function stopFlashing() {
  body.style.animationPlayState = "paused";
}

// Call the startFlashing function to start the animation
startFlashing();
