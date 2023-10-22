// Get references to the HTML elements using their IDs.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputBox2 = document.getElementById("input-box2");

// Function to add a new task to the list.
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item.
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        // Add the list item to the task list container.
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Add a click event listener to the task list container.
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the task when the delete button is clicked.
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save the current task list to local storage.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to retrieve and display tasks from local storage.
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

// Function to check an email input.
function checkEmail() {
    if (inputBox2.value === '') {
        alert("You must write something!");
    }
}

// Function to switch between city tabs and display the selected city.
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Functions to display alerts.
function myFunctionT() {
    alert("We're putting you on Telegram.");
}

function myFunctionI() {
    alert("We're putting you on Instagram.");
}

function myFunctionW() {
    alert("We're putting you on Whatsapp.");
}
