/* =================================
        LOADER ANIMATION
================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);
    }

});




/* =================================
        CUSTOM NEON CURSOR
================================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");


// Check desktop only

const isDesktop = window.innerWidth > 768;


if (cursorDot && cursorRing && isDesktop) {


    let mouseX = 0;
    let mouseY = 0;


    let ringX = 0;
    let ringY = 0;



    // Mouse position tracking

    document.addEventListener("mousemove", (event) => {


        mouseX = event.clientX;
        mouseY = event.clientY;


        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";


    });




    // Smooth ring movement

    function animateCursor() {


        ringX += (mouseX - ringX) * 0.15;

        ringY += (mouseY - ringY) * 0.15;


        cursorRing.style.left = ringX + "px";

        cursorRing.style.top = ringY + "px";


        requestAnimationFrame(animateCursor);

    }


    animateCursor();



    /* =============================
         Cursor Hover Effect
    ============================= */


    const hoverElements = document.querySelectorAll(
        "a, button, .project-card, .skill-card"
    );


    hoverElements.forEach((item) => {


        item.addEventListener("mouseenter", () => {


            cursorRing.style.transform =
                "scale(1.8)";


            cursorRing.style.borderColor =
                "#6a11cb";


        });



        item.addEventListener("mouseleave", () => {


            cursorRing.style.transform =
                "scale(1)";


            cursorRing.style.borderColor =
                "#00d4ff";


        });


    });

}




/* =================================
       SMALL INTERACTIVE EFFECT
================================= */


document.querySelectorAll(".btn")
.forEach(button => {


    button.addEventListener("click", () => {


        button.style.transform =
            "scale(0.95)";


        setTimeout(() => {


            button.style.transform =
                "";


        }, 150);


    });


});
/* =================================
        MOBILE NAVIGATION MENU
================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if (menuBtn && navLinks) {


    // Open / Close Menu

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    // Close menu after clicking link

    document.querySelectorAll(".nav-links a")
    .forEach(link => {


        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });


    });

}



/* =================================
          TYPING TEXT EFFECT
================================= */


const typingElement =
document.querySelector(".typing-text");


const typingWords = [

    "Embedded C/C++ Developer",
    "Microcontroller Programmer",
    "IoT System Developer",
    "Automation Engineer",
    "ESP32 & STM32 Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typingAnimation() {


    if (!typingElement)
        return;


    const currentWord =
    typingWords[wordIndex];


    if (!deleting) {


        typingElement.textContent =
        currentWord.substring(0, charIndex);


        charIndex++;


        if (charIndex >
        currentWord.length) {


            deleting = true;


            setTimeout(
                typingAnimation,
                1500
            );


            return;

        }


    } else {


        typingElement.textContent =
        currentWord.substring(0, charIndex);


        charIndex--;


        if (charIndex < 0) {


            deleting = false;


            wordIndex++;


            if (wordIndex >= typingWords.length) {


                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typingAnimation,
        deleting ? 60 : 100
    );

}


// Start typing

typingAnimation();




/* =================================
        PROFILE FLIP ON MOBILE
================================= */


const profileCard =
document.querySelector(".profile-card");


if (profileCard) {


    let flipped = false;


    profileCard.addEventListener(
        "click",
        () => {


        if (window.innerWidth <= 768) {


            flipped = !flipped;


            if (flipped) {


                profileCard.style.transform =
                "rotateY(180deg)";


            } else {


                profileCard.style.transform =
                "rotateY(0deg)";


            }


        }


    });


}




/* =================================
        ACTIVE NAVIGATION LINK
================================= */


const sections =
document.querySelectorAll("section");


const navItems =
document.querySelectorAll(".nav-links a");


window.addEventListener(
"scroll",
() => {


    let currentSection = "";


    sections.forEach(section => {


        const sectionTop =
        section.offsetTop - 150;


        if (scrollY >= sectionTop) {


            currentSection =
            section.getAttribute("id");


        }


    });



    navItems.forEach(link => {


        link.classList.remove("active");


        if (
        link.getAttribute("href")
        === "#" + currentSection
        ) {


            link.classList.add("active");


        }


    });


});


/* =================================
        PROJECT ACCORDION
================================= */

const accordions = 
document.querySelectorAll(".accordion");


accordions.forEach(button => {


    button.addEventListener("click", () => {


        const content =
        button.nextElementSibling;


        const icon =
        button.querySelector("span");


        // Close other projects

        accordions.forEach(otherButton => {


            if (otherButton !== button) {


                otherButton.classList.remove("active");


                otherButton.nextElementSibling
                .style.maxHeight = null;


                const otherIcon =
                otherButton.querySelector("span");


                if (otherIcon) {

                    otherIcon.textContent = "+";

                }


            }


        });



        // Toggle current project


        if (content.style.maxHeight) {


            content.style.maxHeight = null;


            if (icon) {

                icon.textContent = "+";

            }


        } else {


            content.style.maxHeight =
            content.scrollHeight + "px";


            if (icon) {

                icon.textContent = "−";

            }

        }


    });


});





/* =================================
            IMAGE SLIDER
================================= */


const sliders =
document.querySelectorAll(".slider");


sliders.forEach(slider => {


    const slides =
    slider.querySelectorAll(".slide");


    const prev =
    slider.querySelector(".prev");


    const next =
    slider.querySelector(".next");


    let current = 0;



    function showSlide(index) {


        slides.forEach(image => {


            image.classList.remove("active");


        });


        slides[index].classList.add("active");


    }


    // Initial Image


    if (slides.length > 0) {


        showSlide(current);

    }



    // Next Button


    if (next) {


        next.addEventListener("click",
        () => {


            current++;


            if (current >= slides.length) {


                current = 0;

            }


            showSlide(current);


        });


    }



    // Previous Button


    if (prev) {


        prev.addEventListener("click",
        () => {


            current--;


            if (current < 0) {


                current =
                slides.length - 1;

            }


            showSlide(current);


        });


    }


});






/* =================================
      SCROLL REVEAL ANIMATION
================================= */


const hiddenElements =
document.querySelectorAll(
".section, .project-card, .skill-card, .research-card, .certificate-card, .timeline-item"
);



const observer =
new IntersectionObserver(entries => {


    entries.forEach(entry => {


        if (entry.isIntersecting) {


            entry.target.classList.add("show");


        }


    });


},
{
    threshold: 0.15
});



hiddenElements.forEach(element => {


    element.classList.add("hidden");


    observer.observe(element);


});






/* =================================
      ACTIVE NAVBAR SCROLL EFFECT
================================= */


const navbar =
document.querySelector(".navbar");


window.addEventListener("scroll",
() => {


    if (window.scrollY > 50) {


        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,0.15)";


        navbar.style.background =
        "rgba(255,255,255,0.90)";


    }


    else {


        navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.08)";


        navbar.style.background =
        "rgba(255,255,255,0.65)";


    }


});






/* =================================
        IMAGE TOUCH SLIDER
        For Android Mobile
================================= */


sliders.forEach(slider => {


    let startX = 0;


    slider.addEventListener(
        "touchstart",
        (e) => {


            startX =
            e.touches[0].clientX;


        }
    );


    slider.addEventListener(
        "touchend",
        (e) => {


            const endX =
            e.changedTouches[0].clientX;


            const difference =
            startX - endX;


            if (Math.abs(difference) > 50) {


                const nextButton =
                slider.querySelector(".next");


                const prevButton =
                slider.querySelector(".prev");


                if (difference > 0) {


                    if (nextButton)
                    nextButton.click();


                }


                else {


                    if (prevButton)
                    prevButton.click();


                }


            }


        }
    );


});





/* =================================
            END OF FILE
================================= */

console.log(
"🚀 Arpit Embedded Portfolio Loaded Successfully"
);