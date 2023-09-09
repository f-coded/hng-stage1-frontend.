// Get current day of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getDay()];

// Display current day of the week
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDayElement.textContent = currentDay;

// Get the current UTC time in milliseconds
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const currentUTCTime = new Date.now().toISOString(); // This generates the current UTC time in milliseconds

// Display the current UTC time on the webpage
currentUTCTimeElement.textContent = currentUTCTime;