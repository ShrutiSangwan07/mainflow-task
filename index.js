const slides = document.querySelectorAll(".slide")
const nextButton = document.getElementById("nextButton")
var counter = 0;
var slideInterval;

slides.forEach(
    (slides,index) => {
        slides.style.left =`${index *100}%`
    }
)



const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter *100}%)`
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
