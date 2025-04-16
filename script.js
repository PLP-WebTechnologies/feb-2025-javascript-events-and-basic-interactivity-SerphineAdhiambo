// Get the form and inputs
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submitBtn");

// Error display elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

// Event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to handle validation

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";

    let valid = true;

    // Validate Name input
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required!";
        valid = false;
    }

    // Validate Email input
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    }

    // If form is valid, display a success message
    if (valid) {
        alert("Form submitted successfully!");
    }
});

// Event listener to toggle submit button based on inputs
nameInput.addEventListener("input", toggleSubmitButton);
emailInput.addEventListener("input", toggleSubmitButton);

// Function to enable/disable the submit button based on input validity
function toggleSubmitButton() {
    if (nameInput.value.trim() !== "" && emailRegex.test(emailInput.value)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
