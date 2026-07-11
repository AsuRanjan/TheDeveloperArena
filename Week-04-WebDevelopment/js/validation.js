/*=========================================
   DEVNOVA - FORM VALIDATION
=========================================*/

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevents the default page refresh

            // 1. Grab input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();
            
            // 2. Grab the submit button to manipulate its state later
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            // Regex patterns for validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            // 3. Validation Checks
            if (name === "") {
                alert("Please enter your full name.");
                return;
            }
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            if (message === "") {
                alert("Please enter details about your project in the message box.");
                return;
            }

            // 4. Premium UX Success State (Simulating form submission)
            const originalBtnText = submitBtn.innerText;
            
            // Change button to loading state
            submitBtn.innerText = "Sending...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.pointerEvents = "none"; // Prevents double-clicking

            // Simulate network delay (1.5 seconds)
            setTimeout(() => {
                // Success State
                submitBtn.innerText = "Message Sent Successfully!";
                submitBtn.style.background = "#00C896"; // DevNova Success Color
                submitBtn.style.color = "#ffffff";
                submitBtn.style.opacity = "1";
                
                // Clear the form
                contactForm.reset();

                // Revert button back to normal after 3.5 seconds
                setTimeout(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.style.background = ""; // Removes inline style to revert to CSS gradient
                    submitBtn.style.pointerEvents = "all";
                }, 3500);

            }, 1500);
        });
    }
});

