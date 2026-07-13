"use strict";

/*==========================================================
    ASHUTOSH RANJAN PORTFOLIO

    THEMESWITCHER.JS
==========================================================*/



/*==========================================================
    DOM READY
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        initializeThemeSwitcher();

    }

);



/*==========================================================
    INITIALIZE
==========================================================*/

function initializeThemeSwitcher(){

    applySavedTheme();

    bindThemeButton();

    systemThemeWatcher();

    keyboardShortcut();

}



/*==========================================================
    APPLY SAVED THEME
==========================================================*/

function applySavedTheme(){

    const saved =

        localStorage.getItem(

            "portfolio-theme"

        );

    if(saved){

        setTheme(saved);

        return;

    }

    const prefersDark =

        window.matchMedia(

            "(prefers-color-scheme: dark)"

        ).matches;

    setTheme(

        prefersDark ? "dark" : "light"

    );

}



/*==========================================================
    SET THEME
==========================================================*/

function setTheme(theme){

    document.body.classList.remove(

        "dark",

        "light"

    );

    document.body.classList.add(theme);

    localStorage.setItem(

        "portfolio-theme",

        theme

    );

    updateThemeIcon(theme);

    dispatchThemeEvent(theme);

}



/*==========================================================
    TOGGLE
==========================================================*/

function toggleTheme(){

    const dark =

        document.body.classList.contains(

            "dark"

        );

    setTheme(

        dark ? "light" : "dark"

    );

}



/*==========================================================
    BUTTON
==========================================================*/

function bindThemeButton(){

    const button =

        document.getElementById(

            "themeToggle"

        );

    if(!button) return;

    button.addEventListener(

        "click",

        toggleTheme

    );

}



/*==========================================================
    UPDATE ICON
==========================================================*/

function updateThemeIcon(theme){

    const icon =

        document.querySelector(

            "#themeToggle i"

        );

    if(!icon) return;

    if(theme==="dark"){

        icon.className =

            "fa-solid fa-sun";

    }

    else{

        icon.className =

            "fa-solid fa-moon";

    }

}



/*==========================================================
    SYSTEM THEME
==========================================================*/

function systemThemeWatcher(){

    const media =

        window.matchMedia(

            "(prefers-color-scheme: dark)"

        );

    media.addEventListener(

        "change",

        event=>{

            if(

                localStorage.getItem(

                    "portfolio-theme"

                )

            ) return;

            setTheme(

                event.matches

                    ? "dark"

                    : "light"

            );

        }

    );

}



/*==========================================================
    KEYBOARD SHORTCUT
==========================================================*/

function keyboardShortcut(){

    document.addEventListener(

        "keydown",

        event=>{

            if(

                event.ctrlKey &&

                event.shiftKey &&

                event.key.toLowerCase()==="t"

            ){

                event.preventDefault();

                toggleTheme();

            }

        }

    );

}



/*==========================================================
    CUSTOM EVENT
==========================================================*/

function dispatchThemeEvent(theme){

    document.dispatchEvent(

        new CustomEvent(

            "themeChanged",

            {

                detail:{

                    theme

                }

            }

        )

    );

}



/*==========================================================
    ACCESSIBILITY
==========================================================*/

document.addEventListener(

    "themeChanged",

    event=>{

        const button =

            document.getElementById(

                "themeToggle"

            );

        if(!button) return;

        button.setAttribute(

            "aria-label",

            event.detail.theme==="dark"

            ? "Switch to Light Theme"

            : "Switch to Dark Theme"

        );

    }

);



/*==========================================================
    PAGE TRANSITION
==========================================================*/

document.addEventListener(

    "themeChanged",

    ()=>{

        document.body.classList.add(

            "theme-changing"

        );

        setTimeout(()=>{

            document.body.classList.remove(

                "theme-changing"

            );

        },350);

    }

);



/*==========================================================
    THEMESWITCHER.JS COMPLETED
==========================================================*/

