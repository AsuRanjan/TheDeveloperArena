/*=========================================
   DEVNOVA SOLUTIONS - MAIN JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // 1. PAGE LOADER (Fades out when site is fully loaded)
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if(loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 600);
            }
        }, 500); 
    });

    // 2. SCROLL PROGRESS BAR (Updates width based on scroll depth)
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        if(progressBar) {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });

    // 3. STICKY NAVBAR (Adds glassmorphism blur when scrolling down)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if(header) {
            // Toggles the 'scrolled' CSS class when user scrolls past 50px
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // 4. MOBILE MENU TOGGLE (Opens/closes the hamburger menu on small screens)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Closes mobile menu automatically when a link is clicked
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 5. BACK TO TOP BUTTON (Shows button at bottom, smooth scrolls to top)
    const backToTopBtn = document.querySelector('.back-to-top');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 6. THEME TOGGLE ICON SETUP (Adds the moon/sun icon to your empty button)
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        
        themeBtn.addEventListener('click', () => {
            // Placeholder logic: toggles icon when clicked
            const currentIcon = themeBtn.querySelector('i');
            if (currentIcon.classList.contains('fa-moon')) {
                currentIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                currentIcon.classList.replace('fa-sun', 'fa-moon');
            }
        });
    }
});



// 7. FAQ ACCORDION LOGIC
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Toggle the answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.style.color = '#fff';
            } else {
                answer.style.display = 'block';
                question.style.color = '#00E5FF'; // Highlights the active question
            }
        });
    });

    












/*=========================================
   BACK TO TOP BUTTON LOGIC
=========================================*/
// 1. Select the button from the DOM
/*const backToTopBtn = document.querySelector('.back-to-top');

// 2. Listen for scroll events to show/hide the button
window.addEventListener('scroll', () => {
    // If the user scrolls down more than 300px, add the 'show' class
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        // Otherwise, remove it so the button hides
        backToTopBtn.classList.remove('show');
    }
});

// 3. Listen for clicks on the button
backToTopBtn.addEventListener('click', () => {
    // Tell the browser to scroll to the top (X: 0, Y: 0) smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

*/