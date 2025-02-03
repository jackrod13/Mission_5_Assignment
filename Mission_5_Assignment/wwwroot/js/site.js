// Wait for the document to fully load before running any JavaScript
$(document).ready(function () {
    // Add a click event listener to the "Calculate" button
    $("#calculateButton").click(function () {
        console.log("Button clicked"); // Debug message to confirm the button was clicked

        // Get the input values from the hours and rate fields
        let hours = parseFloat($("#hoursInput").val()); // Retrieve and parse the number of hours
        let rate = parseFloat($("#rateInput").val()); // Retrieve and parse the hourly rate
        let totalOutput = $("#totalOutput"); // Reference the total cost output field
        let error = $("#hoursError"); // Reference the error message element

        // Reset the visibility of the error message (hide it initially)
        error.addClass("hidden");

        // Validate the input to ensure it's a positive number
        if (isNaN(hours) || hours <= 0) {
            error.removeClass("hidden"); // Show the error message if validation fails
            totalOutput.val(""); // Clear the total cost output
            return; // Exit the function to prevent further execution
        }

        // Calculate the total cost by multiplying hours and rate
        let total = hours * rate;

        // Display the calculated total in the output field, formatted to 2 decimal places
        totalOutput.val(`$${total.toFixed(2)}`);
    });
});
