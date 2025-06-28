function getDayOfWeek(dateString) {
    let date = new Date(dateString);
    if (isNaN(date)) return "Invalid date format. Please use YYYY-MM-DD.";
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

console.log(getDayOfWeek("2025-06-25"));