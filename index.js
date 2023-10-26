// slideshow

const slides = document.querySelectorAll(".slide")
const nextButton = document.getElementById("nextButton")
var counter = 0;
var slideInterval;

slides.forEach(
    (slides, index) => {
        slides.style.left = `${index * 100}%`
    }
)



const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

function autoSlide() {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImage();
}

slideInterval = setInterval(autoSlide, 3000);


// form validation


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.querySelector("#name").value;
        const email = contactForm.querySelector("#email").value;
        const phone = contactForm.querySelector("#phone").value;
        const message = contactForm.querySelector("#message").value;

        if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "") {
            alert("Please fill out all required fields.");
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
        } else if (!isValidPhone(phone)) {
            alert("Please enter a valid phone number.");
        } else {

            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });


    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }


    function isValidPhone(phone) {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phone);
    }
});


