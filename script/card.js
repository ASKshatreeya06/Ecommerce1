const slides = document.querySelectorAll(".card");
var counter = 0;
console.log(slides)

slides.forEach(
    (card, index) => {

        card.style.left = `${index * 300}px`

    }
);

function leftMove() {
    if (counter >0 ) {
    counter--;
}
    slideImage(counter);
}
function rightMove() {
    if (counter < (slides.length-7)) {
        counter++;

        console.log(counter)
    }
    slideImage(counter);
}

function slideImage() {
    slides.forEach(
        (card) => {

            card.style.transform = `translateX(-${counter * 280}px)`

        }
    );
}