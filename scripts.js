/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const messageDiv = document.querySelector(".message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = emailInput.value.trim(); // Trim removes leading/trailing spaces

    if (email === "") {
      // No email address provided
      messageDiv.textContent = "Please enter a valid email address.";
    } else {
      // Valid email address provided
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      emailInput.value = ""; // Clear the input field after submission
    }
  });
});