//Function for calculations 
function calculate(dist) {

    let days = Math.floor(dist / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours =+ (hours < 10) ? "0" + hours : hours;

    let minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    minutes =+ (minutes < 10) ? "0" + minutes : minutes;

    let seconds = Math.floor((dist % (1000 * 60)) / 1000);
    seconds =+ (seconds < 10) ? "0" + seconds : seconds;

    let printContent = `<p>${days}d ${hours}t ${minutes}m ${seconds}s</p>`

    return printContent; 
};

//Function for printing to DOM
function printTime(a, b) {
    document.getElementById("countDown").innerHTML = a;
    document.getElementById("countDownSum").innerHTML = b;
};


// Update the count down every 1 second
let updateTime = setInterval(() => {

    // Set the date we're counting down to
    const countDownDate = new Date("Sept 23, 2022 18:00:00").getTime();
    const countTilSummer = new Date("June 18, 2021 17:00:00").getTime();
    // Get today's date and time
    let now = new Date().getTime();
    let summerNow = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    let summerDistance = countTilSummer - summerNow;

    //Call function
    let tilGrad = calculate(distance);
    let tilSummer = calculate(summerDistance)
    printTime(tilGrad, tilSummer);
    
// If the count down is over, write some text 
if (distance < 0) {
    clearInterval(updateTime);
    document.getElementById("countDown").innerHTML = "Grattis till examen!";
}
}, 1000);

export { updateTime, printTime, calculate};