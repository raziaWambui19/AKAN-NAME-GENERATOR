
const akanForm = document.getElementById("akanForm");
const day = document.getElementById("day");
const Month = document.getElementById("Month");
const year = document.getElementById("year");
const gender = document.getElementById("gender");
const submit = document.getElementById("submit");
    const Result = document.getElementById("Results");

function getDayOfWeek() {
    const DD = parseInt(day.value);
    const MM = parseInt(Month.value);
 const yearValue = document.getElementById("year").value;
    let CC = parseInt(yearValue.substring(0, 2));
    let YY = parseInt(yearValue.substring(2, 4));

    if (DD < 1 || DD > 31) {
        return -1;
    }
    if (MM < 1 || MM > 12) {
        return -1;
    }

    let d = (4 * CC - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

    console.log(d);
    console.log(DD, MM, CC, YY);

    return d.toFixed(0);

}
function getakanNames(dayOfWeek) {
    const gender = document.querySelector("input[name='gender']:checked").value;
    const male = [
        "kwasi",
        "kwadwo",
        "kwabena",
        "kwaku",
        "yaw",
        "kofi",
        "kwame",
    ]
    const female = [
        "akosua",
        "adwoa",
        "abenaa",
        "akua",
        "yaa",
        "afua",
        "ama",
    ]

    if (gender === "Male") {
        return male[dayOfWeek];
    } else if (gender === "Female") {
        return female[dayOfWeek];
    } else {
        return "invalid";
    }
}
submit.addEventListener("click", function (event) {
    event.preventDefault();
    const dayOfWeek = getDayOfWeek();
     if(dayOfWeek < 0){
    document.getElementById("Results").innerHTML = "invalid"
    return;
 }
 const akanName = getakanNames(dayOfWeek);
 document.getElementById("Results").innerHTML = akanName;
});


