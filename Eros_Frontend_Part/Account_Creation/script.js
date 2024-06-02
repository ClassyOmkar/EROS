// You can add JavaScript functionality here if needed
document.addEventListener("DOMContentLoaded", function() {
    // Find the submit button by its ID
    var submitButton = document.getElementById("submitButton");
  
    // Add click event listener to the submit button
    submitButton.addEventListener("click", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Redirect to the login page
      window.location.href = "/Add_Photos/Add_Phtos.html"; // Adjust the URL as needed
    });
  });
  