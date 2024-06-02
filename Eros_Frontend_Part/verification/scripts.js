document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('.code-input');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (input.value.length > 0 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    document.getElementById('verificationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const code = Array.from(inputs).map(input => input.value).join('');
        console.log(`Verification code entered: ${code}`);
        // Add your form submission code here
    });

    document.getElementById('resendLink').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Resend code link clicked');
        // Add your resend code logic here
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const verificationForm = document.getElementById("verificationForm");
  
    verificationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Redirect to the Account Creation Page
      window.location.href = "Account_Creation/newaccount.html";
    });
  });
  