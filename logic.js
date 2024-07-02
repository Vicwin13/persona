document.addEventListener("DOMContentLoaded", () => {
  let today = document.getElementById("Today");
  let currentTime = document.getElementById("Time");

  function updateDateTime() {
    let date = new Date();

    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currentDay = daysOfWeek[date.getDay()];

    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    let currentTimeUTC = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    today.textContent = currentDay;
    currentTime.innerText = currentTimeUTC;
  }

  updateDateTime();

  setTimeout(updateDateTime, 1000);
});
