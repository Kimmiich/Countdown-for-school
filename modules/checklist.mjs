//Function for the evt listener
function evtList(checkedArray) {
    
    document.querySelector("ul").addEventListener("click", (evt)=> {
        let checkbox = evt.target.id;

        if (evt.target.checked) {
            styleDone(checkbox);
            checkedArray.push(checkbox);

        } else {
            document.getElementById(checkbox).parentElement.style.textDecoration="none";
            checkedArray.splice(checkbox, 1)
        }

        localStorage.setItem("savedStyle", JSON.stringify(checkedArray));

    });
};


//Funktion som ändrar stilen på en färdig kurs
function styleDone(doneElement) {
    document.getElementById(doneElement).parentElement.style.textDecoration="line-through";
};

//Funktion som loopar varje element i LS
function setAttribute(localArray, checkedArray) {
    localArray.forEach(element => {
        styleDone(element)
        document.getElementById(element).checked = true;
        checkedArray.push(element)
        
    });
};

export { evtList, setAttribute};

