/*
Jen Dahl
script.js
December 13 2024
*/

// Global
var instructions = document.querySelector("#instructions p");
var heading = document.querySelector("#instructions h2");

// Hamburger
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("logo");
    if (menu.style.display == "block" && logo.style.display == "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

// Pushup
function pushup() {
    heading.style.display = "block";
    instructions.textContent = "Place your hands shoulder width apart. Extend your legs straight back, and bend your elbows to lower yourself down. Push back up to complete one repetition.";
}

// Situp
function situp() {
    heading.style.display = "block";
    instructions.textContent = "Lay flat on your back and bend your knees so your feet are flat on the ground. Holding your hands behind your head, sit up and lay back down to complete one repetition.";
}

// Plank
function plank() {
    heading.style.display = "block";
    instructions.textContent = "Place your hands shoulder width apart and lower yourself to your elbows. Holding this position, time how long you can remain up.";
}

// Crunches
function crunches() {
    heading.style.display = "block";
    instructions.textContent = "Lay flat on your back and raise your knees up to a 90 degree angle, crossing your feet. Place your hands behind your head and crunch so your elbows touch your knees. Lay back down to complete one repetition.";
}

// Mountain Climbers
function m_climbers() {
    heading.style.display = "block";
    instructions.textContent = "Place your hands shoulder width apart and extend your legs straight back. Bring one knee up to your chest, and quickly switch knees. Bring your legs back out straight to complete one repetition.";
}

// Bicycle
function bicycle() {
    heading.style.display = "block";
    instructions.textContent = "Lay flat on your back and extend your legs out. Place your hands behind your head, and bring one knee to touch your elbow. Switch knees, and return your legs straight out to comeplete one repetition.";
}
