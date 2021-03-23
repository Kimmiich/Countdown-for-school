import { printCountdown, printChecklist } from './modules/printingFunct.mjs';
import { updateTime} from './modules/countDown.mjs';
import { evtList, setAttribute} from './modules/checklist.mjs';
printCountdown();

let courses = ["HTML & CSS", "Javascript grundkurs","Arbetsmetodik för utvecklare","Dynamisk webbutveckling","Javascript fördjupning","Arbeta med projekt i agila metoder", "Grafiska verktyg för gränssnittsdesign", "UX/Usability", "LIA 1", "Examensarbete", "LIA 2","Kompetensportfölj & Entreprenörskap"];

printChecklist(courses);

updateTime;

let checkedArray = [];

evtList(checkedArray);

//If som kollar om vi har något i LS
if (localStorage.getItem("savedStyle")) {
    let localArray = JSON.parse(localStorage.getItem("savedStyle"));

    setAttribute(localArray, checkedArray);
};






