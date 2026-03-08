const API = "http://localhost:3000/api";

/* Register patient */
function registerPatient(){

const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const condition = document.getElementById("condition").value;

fetch(API + "/patient", {

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,age,condition})

})
.then(res => res.json())
.then(loadPatients);

}

/* Schedule therapy */
function scheduleTherapy(){

const patient = document.getElementById("pname").value;
const therapy = document.getElementById("therapy").value;
const date = document.getElementById("date").value;

fetch(API + "/therapy", {

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({patient,therapy,date})

})
.then(res => res.json())
.then(loadTherapies);

}

/* Load patients */
function loadPatients(){

fetch(API + "/patients")
.then(res => res.json())
.then(data => {

const list = document.getElementById("patientList");

list.innerHTML = "";

data.forEach(p => {

const li = document.createElement("li");
li.innerText = p.name + " - " + p.condition;

list.appendChild(li);

});

});

}

/* Load therapies */
function loadTherapies(){

fetch(API + "/therapies")
.then(res => res.json())
.then(data => {

const list = document.getElementById("therapyList");

list.innerHTML = "";

data.forEach(t => {

const li = document.createElement("li");
li.innerText = t.patient + " | " + t.therapy + " | " + t.date;

list.appendChild(li);

});

});

}

loadPatients();
loadTherapies();
