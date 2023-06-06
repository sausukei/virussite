// Function to update the IP address display
function updateIPAddress(ip) {
    document.getElementById("ip-address").textContent = "Your IP Address: " + ip;
  }
  
  // Function to handle the response from the IP API
  function handleResponse(response) {
    var ip = response.ip;
    updateIPAddress(ip);
  }
  
  // Make a request to the IP API to get the user's IP address
  fetch("https://api.ipify.org?format=json")
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(handleResponse)
    .catch(function(error) {
      console.error("Error:", error);
    });
  