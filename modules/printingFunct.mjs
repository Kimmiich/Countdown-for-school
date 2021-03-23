//Get and create elements
const main = document.getElementById("main");

function printCountdown(){
    main.insertAdjacentHTML("beforeend", `
    <section id="contentExam">
        <h1>Nedräkning till examen!</h1>
        <div id="countDown"> </p>
    </section>
    <section id="contentSum">
        <h2>Nedräkning till sommarlov!</h2>
        <div id="countDownSum"> </p>
    </section> `); 
};

function printChecklist(array) {
    main.insertAdjacentHTML("beforeend", `
    <section id="checklistBox">
        <h3>Kursplan</h3>
        <ul></ul>
    </section>`);
    array.forEach(element => {
        document.querySelector("ul").insertAdjacentHTML("beforeend", `
        <li><input type="checkbox" id="${element}"> ${element}</li>`)
    });  
    
};

export {printCountdown, printChecklist};
