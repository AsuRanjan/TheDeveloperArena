"use strict";


/* ==========================================================
   PORTFOLIO WEBSITE
   Week-03 JavaScript
   The Developer Arena Internship
   Developed by: Ashutosh Ranjan
========================================================== */

console.log("Portfolio JavaScript Loaded Successfully!");


/* DOM ELEMENTS */

const body = document.body;

const heroTitle = document.getElementById("heroTitle");

const greetingText = document.getElementById("greeting");

const navbar = document.getElementById("navbar");

const contactForm = document.getElementById("contactForm");

const submitBtn = document.getElementById("submitBtn");

const galleryImages = document.querySelectorAll(".gallery-image");

const footer = document.getElementById("footer");




/* CREATE DARK MODE BUTTON */

const darkModeButton = document.createElement("button");

darkModeButton.textContent = "🌙 Dark Mode";

darkModeButton.id = "darkModeButton";

darkModeButton.style.marginTop = "20px";

darkModeButton.style.padding = "10px 18px";

darkModeButton.style.cursor = "pointer";

document.querySelector(".hero").appendChild(darkModeButton);

/* LOAD SAVED THEME */

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark-mode");

    darkModeButton.textContent = "☀️ Light Mode";

} 


/* TOGGLE DARK MODE */

function toggleDarkMode() {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {

        darkModeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    }

    else {

        darkModeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    }

}

darkModeButton.addEventListener(
    "click",
    toggleDarkMode
);


/* HIGHLIGHT HERO TITLE */

heroTitle.addEventListener("mouseover", function () {

    heroTitle.style.color = "#facc15";

});

heroTitle.addEventListener("mouseout", function () {

    heroTitle.style.color = "";

});



/* SHOW CURRENT YEAR */

const currentYear = new Date().getFullYear();

footer.innerHTML =
`
<p>© ${currentYear} Ashutosh Ranjan</p>

<p>
Built with HTML5, CSS3 and JavaScript
as part of
The Developer Arena Internship Program.
</p>

<a href="#top">
Back to Top
</a>
`;


/* PAGE LOAD MESSAGE */

window.addEventListener("load", function () {

    console.log("Website Loaded Successfully.");

});


/* CONTACT FORM VALIDATION */

function removeOldMessages() {

    const oldMessages = document.querySelectorAll(".error, .success");

    oldMessages.forEach(function(message) {

        message.remove();

    });

}


/* CREATE ERROR MESSAGE */

function createError(inputElement, message) {

    const error = document.createElement("p");

    error.className = "error";

    error.textContent = message;

    inputElement.insertAdjacentElement(
        "afterend",
        error
    );

}


/* CREATE SUCCESS MESSAGE */

function createSuccess(message) {

    const success = document.createElement("p");

    success.className = "success";

    success.textContent = message;

    contactForm.appendChild(success);

}


/* EMAIL VALIDATION */

function validateEmail(email) {

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* PHONE VALIDATION */

function validatePhone(phone) {

    const phonePattern =
    /^[0-9]{10}$/;

    return phonePattern.test(phone);

}


/* FORM SUBMIT EVENT */

contactForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        removeOldMessages();

        let isValid = true;

        const name =
        document.getElementById("name");

        const email =
        document.getElementById("email");

        const phone =
        document.getElementById("phone");

        const message =
        document.getElementById("message");

        /* NAME */

        if(name.value.trim()===""){

            createError(
                name,
                "Please enter your full name."
            );

            isValid=false;

        }

        else if(name.value.trim().length<3){

            createError(
                name,
                "Name must contain at least 3 characters."
            );

            isValid=false;

        }

        /* EMAIL */

        if(email.value.trim()===""){

            createError(
                email,
                "Email address is required."
            );

            isValid=false;

        }

        else if(
            !validateEmail(email.value.trim())
        ){

            createError(
                email,
                "Please enter a valid email address."
            );

            isValid=false;

        }

        /* PHONE */

        if(phone.value.trim()!==""){

            if(
                !validatePhone(phone.value.trim())
            ){

                createError(
                    phone,
                    "Phone number must contain exactly 10 digits."
                );

                isValid=false;

            }

        }

        /* MESSAGE */

        if(message.value.trim()===""){

            createError(
                message,
                "Message cannot be empty."
            );

            isValid=false;

        }

        else if(message.value.trim().length<10){

            createError(
                message,
                "Message should contain at least 10 characters."
            );

            isValid=false;

        }

        /* SUCCESS */

        if(isValid){

            createSuccess(
                "✅ Thank you! Your message has been submitted successfully."
            );

            console.log("Form Submitted Successfully");

            localStorage.setItem(
                "visitorName",
                name.value.trim()
            );

            localStorage.setItem(
                "visitorEmail",
                email.value.trim()
            );

            contactForm.reset();

        }

    }

);


/* AUTO FILL PREVIOUS USER */

window.addEventListener(
    "DOMContentLoaded",
    function(){

        const savedName =
        localStorage.getItem("visitorName");

        const savedEmail =
        localStorage.getItem("visitorEmail");

        if(savedName){

            document.getElementById("name").value =
            savedName;

        }

        if(savedEmail){

            document.getElementById("email").value =
            savedEmail;

        }

    }

);


/* BUTTON CLICK EFFECT */

submitBtn.addEventListener(
    "mouseover",
    function(){

        submitBtn.style.transform =
        "scale(1.05)";

    }
);

submitBtn.addEventListener(
    "mouseout",
    function(){

        submitBtn.style.transform =
        "scale(1)";

    }
);


/* IMAGE GALLERY INTERACTIVITY */

let currentImageIndex = 0;


/* IMAGE CAPTIONS */

const imageCaptions = [

    "Learning HTML Fundamentals",

    "Coding Workspace",

    "Web Development Journey"

];


/* CREATE CAPTION ELEMENT */

const caption = document.createElement("p");

caption.style.textAlign = "center";

caption.style.fontWeight = "bold";

caption.style.color = "#1e3a8a";

caption.style.marginTop = "15px";

const gallerySection = document.getElementById("gallery");

gallerySection.appendChild(caption);


/* UPDATE ACTIVE IMAGE */

function updateGallery(index){

    galleryImages.forEach(function(image){

        image.style.opacity = "0.5";

        image.style.borderColor = "transparent";

        image.style.transform = "scale(1)";

    });

    galleryImages[index].style.opacity = "1";

    galleryImages[index].style.borderColor = "#2563eb";

    galleryImages[index].style.transform = "scale(1.05)";

    caption.textContent = imageCaptions[index];

}


/* INITIAL IMAGE */

updateGallery(currentImageIndex);


/* CLICK TO CHANGE IMAGE */

galleryImages.forEach(function(image,index){

    image.addEventListener("click",function(){

        currentImageIndex=index;

        updateGallery(currentImageIndex);

    });

});


/* NEXT IMAGE */

function nextImage(){

    currentImageIndex++;

    if(currentImageIndex>=galleryImages.length){

        currentImageIndex=0;

    }

    updateGallery(currentImageIndex);

}


/* PREVIOUS IMAGE */

function previousImage(){

    currentImageIndex--;

    if(currentImageIndex<0){

        currentImageIndex=galleryImages.length-1;

    }

    updateGallery(currentImageIndex);

}


/* AUTO SLIDESHOW */

let slideShow=setInterval(nextImage,4000);


/* PAUSE SLIDESHOW ON HOVER */

gallerySection.addEventListener("mouseenter",function(){

    clearInterval(slideShow);

});

gallerySection.addEventListener("mouseleave",function(){

    slideShow=setInterval(nextImage,4000);

});


/* KEYBOARD NAVIGATION */

document.addEventListener("keydown",function(event){

    if(event.key==="ArrowRight"){

        nextImage();

    }

    if(event.key==="ArrowLeft"){

        previousImage();

    }

});


/* DOUBLE CLICK EFFECT */

galleryImages.forEach(function(image){

    image.addEventListener("dblclick",function(){

        image.classList.toggle("zoomed");

    });

});


/* IMAGE LOAD CHECK */

galleryImages.forEach(function(image){

    image.addEventListener("load",function(){

        console.log(image.alt+" loaded successfully.");

    });

});


/* GALLERY COUNTER */

const counter=document.createElement("p");

counter.style.textAlign="center";

counter.style.marginTop="10px";

gallerySection.appendChild(counter);

function updateCounter(){

    counter.textContent=
    "Image "+
    (currentImageIndex+1)+
    " of "+
    galleryImages.length;

}

updateCounter();


/* UPDATE COUNTER AUTOMATICALLY */

const originalUpdateGallery=updateGallery;

updateGallery=function(index){

    galleryImages.forEach(function(image){

        image.style.opacity="0.5";

        image.style.borderColor="transparent";

        image.style.transform="scale(1)";

    });

    galleryImages[index].style.opacity="1";

    galleryImages[index].style.borderColor="#2563eb";

    galleryImages[index].style.transform="scale(1.05)";

    caption.textContent=imageCaptions[index];

    updateCounter();

};


/* Advanced Interactive Features */

/* Toggle About Section */

const aboutSection = document.getElementById("about");

if (aboutSection) {

    const toggleButton = document.createElement("button");

    toggleButton.textContent = "Hide About Section";

    toggleButton.style.marginBottom = "20px";

    aboutSection.insertBefore(
        toggleButton,
        aboutSection.children[1]
    );

    let visible = true;

    toggleButton.addEventListener("click", () => {

        const content = aboutSection.querySelectorAll(
            "img, p"
        );

        if (visible) {

            content.forEach(item => {

                item.style.display = "none";

            });

            toggleButton.textContent = "Show About Section";

        }

        else {

            content.forEach(item => {

                item.style.display = "";

            });

            toggleButton.textContent = "Hide About Section";

        }

        visible = !visible;

    });

}


/* Live Character Counter */

const messageBox =
    document.getElementById("message");

if (messageBox) {

    const counter =
        document.createElement("small");

    counter.id = "character-counter";

    counter.style.display = "block";

    counter.style.marginTop = "8px";

    counter.style.color = "#2563eb";

    messageBox.insertAdjacentElement(
        "afterend",
        counter
    );

    function updateCharacterCounter() {

        counter.textContent =
            "Characters : " +
            messageBox.value.length;

    }

    updateCharacterCounter();

    messageBox.addEventListener(
        "input",
        updateCharacterCounter
    );

}


/* Live Typing Preview */

if (messageBox) {

    const preview =
        document.createElement("p");

    preview.style.marginTop = "15px";

    preview.style.fontStyle = "italic";

    preview.style.color = "#1e3a8a";

    preview.textContent =
        "Live Preview :";

    messageBox.parentNode.appendChild(preview);

    messageBox.addEventListener("input", () => {

        preview.textContent =
            "Live Preview : " +
            messageBox.value;

    });

}


/* Active Navigation Highlight */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 120;

        const height =
            section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color = "#facc15";

        }

    });

});



/* Better Scroll To Top */

const footerLink =
    document.querySelector(".footer a");

if (footerLink) {

    footerLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    );

}


/* Welcome Message (Only Once) */

if (!localStorage.getItem("portfolioVisited")) {

    alert(
        "Welcome! Thanks for visiting my portfolio."
    );

    localStorage.setItem(
        "portfolioVisited",
        "true"
    );

}


/* Console Information */

console.log("--------------------------------");

console.log("Portfolio Loaded Successfully");

console.log("Author : Ashutosh Ranjan");

console.log("Week 3 JavaScript Project");

console.log("--------------------------------");


/* Professional Portfolio Enhancements */


/* Digital Clock */

function updateClock() {

    const clock = document.getElementById("live-clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();




/* Form Reset Confirmation */

const resetButton =
    document.querySelector(
        "button[type='reset']"
    );

if (resetButton) {

    resetButton.addEventListener(
        "click",
        function (event) {

            const confirmReset =
                confirm(
                    "Do you really want to clear the form?"
                );

            if (!confirmReset) {

                event.preventDefault();

            }

        }

    );

}


/* Profile Image Animation */

const profileImage =
    document.querySelector("#about img");

if (profileImage) {

    profileImage.addEventListener(
        "dblclick",
        () => {

            profileImage.style.transform =
                "rotate(360deg) scale(1.1)";

            setTimeout(() => {

                profileImage.style.transform =
                    "";

            }, 700);

        }

    );

}


/* Random Developer Quotes */

const quotes = [

    "Code. Learn. Improve.",

    "Every expert was once a beginner.",

    "Stay curious. Keep building.",

    "Consistency beats intensity.",

    "Practice makes progress."

];

const quoteBox =
    document.getElementById("developer-quote");

if (quoteBox) {

    const randomQuote =
        quotes[
            Math.floor(
                Math.random() * quotes.length
            )
        ];

    quoteBox.textContent =
        randomQuote;

}


/* Scroll Progress Indicator */

const progressBar =
    document.createElement("div");

progressBar.style.position = "fixed";

progressBar.style.top = "0";

progressBar.style.left = "0";

progressBar.style.height = "5px";

progressBar.style.background =
    "#2563eb";

progressBar.style.zIndex = "9999";

progressBar.style.width = "0%";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / height) * 100;

    progressBar.style.width =
        progress + "%";

});


/* Session Visit Counter */

let visits =
    sessionStorage.getItem("portfolioVisits");

if (!visits) {

    visits = 1;

}

else {

    visits = Number(visits) + 1;

}

sessionStorage.setItem(
    "portfolioVisits",
    visits
);

console.log(
    "Session Visits : " + visits
);



/* DYNAMIC GREETING */

function updateGreeting(){

    const hour =
    new Date().getHours();

    let greeting = "";

    if(hour >= 5 && hour < 12){

        greeting = "Good Morning ☀️";

    }

    else if(hour >= 12 && hour < 17){

        greeting = "Good Afternoon 🌤️";

    }

    else if(hour >= 17 && hour < 21){

        greeting = "Good Evening 🌇";

    }

    else{

        greeting = "Good Night 🌙";

    }

    if(greetingText){

        greetingText.textContent =
        greeting + "";

    }

}

updateGreeting();

/* Refresh greeting every minute */

setInterval(updateGreeting,60000);



/* ==========================================================
   LIQUID GLASS NAVIGATION
========================================================== */

const navBar = document.getElementById("navbar");

const navLiquid = document.querySelector(".nav-liquid");

const navItems =
document.querySelectorAll("#navbar a");

function moveLiquid(target){

    if(!target || !navLiquid) return;

    navLiquid.style.width =
    target.offsetWidth + "px";

    navLiquid.style.left =
    target.offsetLeft + "px";

}

window.addEventListener("load",function(){

    if(navItems.length>0){

        navItems[0].classList.add("active");

        moveLiquid(navItems[0]);

    }

});

navItems.forEach(function(item){

    item.addEventListener("click",function(){

        navItems.forEach(function(link){

            link.classList.remove("active");

        });

        item.classList.add("active");

        moveLiquid(item);

    });

});



