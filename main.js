const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
// days of the week
const clockElement = document.querySelector('[data-testid="currentTimeUTC"]');
const dayElement = document.querySelector('[data-testid="currentDay"]');

function updateTime() {
  const today = new Date();

  let hour_24 = today.getUTCHours();
  let mins = today.getUTCMinutes();
  let secs = today.getUTCSeconds();
  let day = weekday[today.getDay()]; // Assuming `weekday` is an array containing weekday names
  const meridian = hour_24 < 12 ? "AM" : "PM";

  let hour_12;
  if (hour_24 > 12) {
    hour_12 = hour_24 - 12;
  } else if (hour_24 === 0) {
    hour_12 = hour_24 + 12;
  } else {
    hour_12 = hour_24;
  }
  if (hour_12 < 9) {
    hour_12 = hour_12.toString().padStart(2, "0");
  }
  console.log(hour_24);
  if (mins < 10) {
    mins = mins.toString().padStart(2, "0");
  }
  if (secs < 9) {
    secs = secs.toString().padStart(2, "0"); // 2-digit padding for seconds (corrected from 5)
  }

  let time = `${hour_12} : ${mins} : ${secs} ${meridian}`;

  // Issue 1: Incorrect update method (fixed)
  clockElement.textContent = time; // Set the content, not append
  dayElement.textContent = day; // Set the content, not append
}

// Issue 2: Missing initial call (fixed)
setInterval(updateTime, 1000);
updateTime();
