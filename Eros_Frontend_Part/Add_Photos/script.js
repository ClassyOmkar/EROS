document.addEventListener("DOMContentLoaded", function() {
    // Find the submit button by its ID
    var submitButton = document.getElementById("submitButton");
  
    // Add click event listener to the submit button
    submitButton.addEventListener("click", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Display a pop-up message
      alert("Account has been created!");
  
      // Redirect to the login page
      window.location.href = "/login.html"; // Adjust the URL as needed
    });
  });
  