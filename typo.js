

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const btn = document.querySelector(".btn #submit");

btn.addEventListener("click", () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns 0-based month
    const currentYear = currentDate.getFullYear();

    let d = currentDay - day;
    let m = currentMonth - month;
    let y = currentYear - year;
    const months = [31,28,31,30,31,30,31,30,31,30,30,31];

    if(dayInput.value === "" || monthInput.value === "" || yearInput.value === ""){
        document.getElementById("error").textContent = "Fields marked with * must be filled.";
        return;
    } else {
        document.getElementById("error").textContent = "";

        if(day > currentDay){
            m -= 1;
            d += months[currentMonth - 1];
        }

        if(month > currentMonth){
            y -= 1;
            m += 12;
        }
        
        document.getElementById("year-display").innerHTML = `${y}`;
        document.getElementById("month-display").innerHTML = `${m}`;
        document.getElementById("day-display").innerHTML = `${d}`;
        document.querySelector(".display").classList.add("show");
    }
});


const reset = document.querySelector(".btn #reset");

reset.addEventListener("click", () => {
    document.querySelector(".display").innerHTML = "";
    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
});