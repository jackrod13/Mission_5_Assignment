$(document).ready(function () {
    $("#calculateButton").click(function () {
        console.log("Button clicked"); // Debug messagr

        let hours = parseFloat($("#hoursInput").val());
        let rate = parseFloat($("#rateInput").val());
        let totalOutput = $("#totalOutput");
        let error = $("#hoursError");

        // Reset error message visibility
        error.addClass("hidden");

        // Validate input
        if (isNaN(hours) || hours <= 0) { 
            error.removeClass("hidden");
            totalOutput.val("");
            return;
        }

        // Calculate the total cost
        let total = hours * rate;

        // Display the total value in the output box
        totalOutput.val(`$${total.toFixed(2)}`);
    });
});
