const endDate = "24 March 2023 10:42 PM" // 
document.getElementById("end-date").innerHTML = endDate
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    console.log(diff);

    if (diff < 0) return;


    inputs[0].value = Math.floor(diff / 3600 / 24); // convert into days 
    inputs[1].value = Math.floor(diff / 3600) % 24; // convert into Hours
    inputs[2].value = Math.floor(diff / 60) % 60 // convert into Minutes
    inputs[3].value = Math.floor(diff) % 60 // convert into Sec
}

clock()

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 sec
 */

//To function call in sec all the time after page refresh
setInterval(
    () => {
        clock()
    },
    1000
)