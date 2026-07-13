"use strict";

/*==========================================================
    ASHUTOSH RANJAN PORTFOLIO

    MAIN.JS
==========================================================*/



/*==========================================================
    DOM READY
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initializePortfolio();

    }

);



/*==========================================================
    INITIALIZE
==========================================================*/

function initializePortfolio(){

    pageLoader();

    scrollProgress();

    backToTop();

    navbarScroll();

    smoothScrolling();

    mobileNavigation();

    activeNavigation();

    revealElements();

    animateCounters();

    animateProgressBars();

    typingAnimation();

    galleryFilter();

    contactForm();

    mouseGlow();

}



/*==========================================================
    PAGE LOADER
==========================================================*/

function pageLoader(){

    const loader = document.querySelector(".page-loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.classList.add("loaded");

        setTimeout(()=>{

            loader.style.display="none";

        },600);

    });

}



/*==========================================================
    SCROLL PROGRESS
==========================================================*/

function scrollProgress(){

    const progress =

        document.querySelector(".scroll-progress");

    if(!progress) return;

    window.addEventListener(

        "scroll",

        ()=>{

            const total =

                document.documentElement.scrollHeight -

                window.innerHeight;

            const percent =

                (window.scrollY/total)*100;

            progress.style.width =

                percent+"%";

        }

    );

}



/*==========================================================
    BACK TO TOP
==========================================================*/

function backToTop(){

    const button =

        document.getElementById("scrollTop");

    if(!button) return;

    window.addEventListener(

        "scroll",

        ()=>{

            if(window.scrollY>500){

                button.classList.add("show");

            }

            else{

                button.classList.remove("show");

            }

        }

    );

    button.addEventListener(

        "click",

        ()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    );

}



/*==========================================================
    NAVBAR
==========================================================*/

function navbarScroll(){

    const navbar =

        document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener(

        "scroll",

        ()=>{

            if(window.scrollY>60){

                navbar.classList.add("scrolled");

            }

            else{

                navbar.classList.remove("scrolled");

            }

        }

    );

}



/*==========================================================
    SMOOTH SCROLL
==========================================================*/

function smoothScrolling(){

    document

    .querySelectorAll('a[href^="#"]')

    .forEach(anchor=>{

        anchor.addEventListener(

            "click",

            event=>{

                const target=

                document.querySelector(

                    anchor.getAttribute("href")

                );

                if(!target) return;

                event.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        );

    });

}



/*==========================================================
    MOBILE MENU
==========================================================*/

function mobileNavigation(){

    const menu =

        document.getElementById("mobileMenu");

    const nav =

        document.querySelector(".nav-links");

    if(!menu || !nav) return;

    menu.addEventListener(

        "click",

        ()=>{

            nav.classList.toggle("active");

            menu.classList.toggle("open");

        }

    );

}

/*==========================================================
    ACTIVE NAVIGATION
==========================================================*/

function activeNavigation(){

    const sections =

        document.querySelectorAll("section[id]");

    const links =

        document.querySelectorAll(".nav-links a");

    if(!sections.length || !links.length) return;

    window.addEventListener(

        "scroll",

        throttle(()=>{

            let current = "";

            sections.forEach(section=>{

                const top =

                    section.offsetTop - 140;

                const height =

                    section.offsetHeight;

                if(

                    window.scrollY >= top &&

                    window.scrollY < top + height

                ){

                    current = section.id;

                }

            });

            links.forEach(link=>{

                link.classList.remove("active");

                if(

                    link.getAttribute("href") ===

                    "#" + current

                ){

                    link.classList.add("active");

                }

            });

        },100)

    );

}



/*==========================================================
    SCROLL REVEAL
==========================================================*/

function revealElements(){

    const elements =

        document.querySelectorAll(

            ".reveal,.reveal-left,.reveal-right,.reveal-scale,.timeline-item"

        );

    if(!elements.length) return;

    const observer =

        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add("active");

                        observer.unobserve(

                            entry.target

                        );

                    }

                });

            },

            {

                threshold:.15

            }

        );

    elements.forEach(

        element=>observer.observe(element)

    );

}



/*==========================================================
    COUNTERS
==========================================================*/

function animateCounters(){

    const counters =

        document.querySelectorAll(

            "[data-counter]"

        );

    if(!counters.length) return;

    const observer =

        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(!entry.isIntersecting) return;

                    const element =

                        entry.target;

                    const target =

                        parseInt(

                            element.dataset.counter,

                            10

                        );

                    let current = 0;

                    const increment =

                        Math.max(

                            1,

                            Math.ceil(target/120)

                        );

                    const timer =

                        setInterval(()=>{

                            current += increment;

                            if(current >= target){

                                current = target;

                                clearInterval(timer);

                            }

                            element.textContent = current;

                        },16);

                    observer.unobserve(element);

                });

            },

            {

                threshold:.5

            }

        );

    counters.forEach(

        counter=>observer.observe(counter)

    );

}



/*==========================================================
    SKILL PROGRESS
==========================================================*/

function animateProgressBars(){

    const bars =

        document.querySelectorAll(

            ".progress-bar"

        );

    if(!bars.length) return;

    const observer =

        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(!entry.isIntersecting) return;

                    const bar =

                        entry.target;

                    const value =

                        bar.dataset.progress ||

                        "90";

                    bar.style.width =

                        value + "%";

                    observer.unobserve(bar);

                });

            },

            {

                threshold:.3

            }

        );

    bars.forEach(

        bar=>observer.observe(bar)

    );

}



/*==========================================================
    TYPING EFFECT
==========================================================*/

function typingAnimation(){

    const element =

        document.getElementById(

            "typingText"

        );

    if(!element) return;

    const words = [

        "Full Stack Developer",

        "Python Developer",

        "Flask Developer",

        "Frontend Developer",

        "AI Enthusiast",

        "IT Undergraduate"

    ];

    let word = 0;

    let character = 0;

    let deleting = false;

    function type(){

        const text =

            words[word];

        if(!deleting){

            character++;

        }

        else{

            character--;

        }

        element.textContent =

            text.substring(

                0,

                character

            );

        if(

            !deleting &&

            character === text.length

        ){

            deleting = true;

            setTimeout(type,1600);

            return;

        }

        if(

            deleting &&

            character === 0

        ){

            deleting = false;

            word =

                (word+1)%words.length;

        }

        setTimeout(

            type,

            deleting ? 45 : 90

        );

    }

    type();

}



/*==========================================================
    THROTTLE
==========================================================*/

function throttle(

    callback,

    delay

){

    let waiting = false;

    return function(){

        if(waiting) return;

        callback.apply(

            this,

            arguments

        );

        waiting = true;

        setTimeout(

            ()=>{

                waiting = false;

            },

            delay

        );

    };

}

/*==========================================================
    GALLERY FILTER
==========================================================*/

function galleryFilter(){

    const buttons =

        document.querySelectorAll(

            ".gallery-filter button"

        );

    const items =

        document.querySelectorAll(

            ".gallery-item"

        );

    if(!buttons.length || !items.length) return;

    buttons.forEach(button=>{

        button.addEventListener(

            "click",

            ()=>{

                buttons.forEach(

                    btn=>btn.classList.remove("active")

                );

                button.classList.add("active");

                const filter =

                    button.dataset.filter;

                items.forEach(item=>{

                    const category =

                        item.dataset.category;

                    if(

                        filter==="all" ||

                        filter===category

                    ){

                        item.style.display="block";

                        requestAnimationFrame(()=>{

                            item.style.opacity="1";

                            item.style.transform="scale(1)";

                        });

                    }

                    else{

                        item.style.opacity="0";

                        item.style.transform="scale(.9)";

                        setTimeout(()=>{

                            item.style.display="none";

                        },250);

                    }

                });

            }

        );

    });

}



/*==========================================================
    CONTACT FORM
==========================================================*/

function contactForm(){

    const form =

        document.getElementById(

            "contactForm"

        );

    if(!form) return;

    form.addEventListener(

        "submit",

        event=>{

            event.preventDefault();

            const name =

                form.querySelector(

                    'input[name="name"]'

                );

            const email =

                form.querySelector(

                    'input[name="email"]'

                );

            const message =

                form.querySelector(

                    "textarea"

                );

            if(

                !name.value.trim() ||

                !email.value.trim() ||

                !message.value.trim()

            ){

                alert(

                    "Please complete all required fields."

                );

                return;

            }

            const emailPattern =

                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(

                !emailPattern.test(

                    email.value

                )

            ){

                alert(

                    "Please enter a valid email address."

                );

                return;

            }

            alert(

                "Thank you! Your message has been recorded."

            );

            form.reset();

        }

    );

}



/*==========================================================
    MOUSE GLOW
==========================================================*/

function mouseGlow(){

    const glow =

        document.querySelector(

            ".mouse-glow"

        );

    if(!glow) return;

    document.addEventListener(

        "mousemove",

        throttle(event=>{

            glow.style.left =

                event.clientX + "px";

            glow.style.top =

                event.clientY + "px";

        },8)

    );

}



/*==========================================================
    FLOATING PARTICLES
==========================================================*/

function createParticles(){

    const hero =

        document.querySelector(".hero");

    if(!hero) return;

    for(

        let i=0;

        i<18;

        i++

    ){

        const particle =

            document.createElement("span");

        particle.className="particle";

        const size =

            Math.random()*8+4;

        particle.style.width=

            size+"px";

        particle.style.height=

            size+"px";

        particle.style.left=

            Math.random()*100+"%";

        particle.style.bottom="-20px";

        particle.style.background=

            "rgba(255,255,255,.18)";

        particle.style.animationDuration=

            (10+Math.random()*12)+"s";

        particle.style.animationDelay=

            (Math.random()*6)+"s";

        hero.appendChild(

            particle

        );

    }

}



/*==========================================================
    MOBILE NAVIGATION
==========================================================*/

function closeMobileMenu(){

    const links =

        document.querySelectorAll(

            ".nav-links a"

        );

    const menu =

        document.getElementById(

            "mobileMenu"

        );

    const nav =

        document.querySelector(

            ".nav-links"

        );

    links.forEach(link=>{

        link.addEventListener(

            "click",

            ()=>{

                nav.classList.remove(

                    "active"

                );

                menu.classList.remove(

                    "open"

                );

            }

        );

    });

}



/*==========================================================
    KEYBOARD ACCESSIBILITY
==========================================================*/

function keyboardAccessibility(){

    document.addEventListener(

        "keydown",

        event=>{

            if(

                event.key==="Escape"

            ){

                document

                .querySelector(

                    ".nav-links"

                )

                ?.classList.remove(

                    "active"

                );

            }

        }

    );

}



/*==========================================================
    LAZY LOADING
==========================================================*/

function lazyImages(){

    const images =

        document.querySelectorAll(

            "img[data-src]"

        );

    if(!images.length) return;

    const observer =

        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(

                        !entry.isIntersecting

                    ) return;

                    const image =

                        entry.target;

                    image.src=

                        image.dataset.src;

                    image.removeAttribute(

                        "data-src"

                    );

                    observer.unobserve(

                        image

                    );

                });

            },

            {

                threshold:.15

            }

        );

    images.forEach(

        image=>observer.observe(image)

    );

}



/*==========================================================
    INITIALIZE EXTRA FEATURES
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        createParticles();

        closeMobileMenu();

        keyboardAccessibility();

        lazyImages();

    }

);

/*==========================================================
    THEME PREFERENCE
==========================================================*/

function initializeTheme(){

    const savedTheme =

        localStorage.getItem("portfolio-theme");

    if(savedTheme==="dark"){

        document.body.classList.add("dark");

    }

}



/*==========================================================
    CURRENT YEAR
==========================================================*/

function currentYear(){

    const year =

        document.getElementById(

            "currentYear"

        );

    if(!year) return;

    year.textContent =

        new Date().getFullYear();

}



/*==========================================================
    NAVBAR SHOW / HIDE
==========================================================*/

function navbarVisibility(){

    const navbar =

        document.querySelector(

            ".navbar"

        );

    if(!navbar) return;

    let previous =

        window.pageYOffset;

    window.addEventListener(

        "scroll",

        throttle(()=>{

            const current =

                window.pageYOffset;

            if(

                current>150 &&

                current>previous

            ){

                navbar.style.transform=

                    "translate(-50%,-140%)";

            }

            else{

                navbar.style.transform=

                    "translate(-50%,0)";

            }

            previous=current;

        },60)

    );

}



/*==========================================================
    ACTIVE SECTION OBSERVER
==========================================================*/

function observeSections(){

    const sections =

        document.querySelectorAll(

            "section[id]"

        );

    const options={

        threshold:.45

    };

    const observer=

        new IntersectionObserver(

            entries=>{

                entries.forEach(entry=>{

                    if(entry.isIntersecting){

                        entry.target.classList.add(

                            "section-visible"

                        );

                    }

                });

            },

            options

        );

    sections.forEach(

        section=>observer.observe(section)

    );

}



/*==========================================================
    DEBOUNCE
==========================================================*/

function debounce(

    callback,

    delay

){

    let timer;

    return function(){

        clearTimeout(timer);

        timer=setTimeout(

            ()=>{

                callback.apply(

                    this,

                    arguments

                );

            },

            delay

        );

    };

}



/*==========================================================
    WINDOW RESIZE
==========================================================*/

window.addEventListener(

    "resize",

    debounce(()=>{

        document.body.classList.add(

            "resizing"

        );

        clearTimeout(

            window.resizeTimer

        );

        window.resizeTimer=

            setTimeout(()=>{

                document.body.classList.remove(

                    "resizing"

                );

            },250);

    },120)

);



/*==========================================================
    PAGE VISIBILITY
==========================================================*/

document.addEventListener(

    "visibilitychange",

    ()=>{

        if(document.hidden){

            document.body.classList.add(

                "page-hidden"

            );

        }

        else{

            document.body.classList.remove(

                "page-hidden"

            );

        }

    }

);



/*==========================================================
    IMAGE FALLBACK
==========================================================*/

document

.querySelectorAll("img")

.forEach(image=>{

    image.onerror=function(){

        this.style.opacity=".4";

        this.alt="Image unavailable";

    };

});



/*==========================================================
    PERFORMANCE
==========================================================*/

window.addEventListener(

    "load",

    ()=>{

        requestAnimationFrame(()=>{

            document.body.classList.add(

                "loaded"

            );

        });

    }

);



/*==========================================================
    ERROR HANDLER
==========================================================*/

window.addEventListener(

    "error",

    event=>{

        console.warn(

            "Portfolio Warning:",

            event.message

        );

    }

);



/*==========================================================
    FINAL INITIALIZATION
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        initializeTheme();

        currentYear();

        navbarVisibility();

        observeSections();

    }

);



/*==========================================================
    MAIN.JS COMPLETED
==========================================================*/

