// Get current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getDay()];

// Display current day of the week
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDayElement.textContent = currentDay;

// Get the current UTC time in milliseconds
// Function to update and display the current UTC time in milliseconds
function updateUTCTime() {
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    // Update the time in milliseconds every millisecond
    setInterval(function () {
        const currentUTCTime = Date.now(); // Get the current UTC time in milliseconds
        currentUTCTimeElement.textContent = currentUTCTime;
    }, 1); // Update every millisecond
}

// // Call the updateUTCTime function when the page loads
window.onload = updateUTCTime;
