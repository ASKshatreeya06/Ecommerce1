var changeN = 0;
function change() {

    var heartIcon = document.querySelector('.fa-heart');

    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid');

    // if (changeN % 2 == 0) {
    //     changeN++
    //     document.querySelector('.fa-heart').classList.remove('.fa-regular');
    //     document.querySelector('.fa-heart').classList.toggle('.fa-solid');
        
       
        
    //     console.log("hit fa-heart" + changeN)
       
    // } else {
    //     changeN--
    //     document.querySelector('.fa-heart').classList.add('.fa-heart_color');
    //     console.log("hit fa-heart" + changeN)
    // }
}

const slides = document.querySelectorAll(".card1");

var counter = 0;

console.log(slides)

slides.forEach(
    (card, index) => {

        card.style.left = `${index * 300}px`

    }
);

function leftMove() {
    if (counter > 0) {
        counter--;
    }
    slideImage(counter);
}
const wView = () => {
    var y = window.matchMedia("(max-width:590)");

    if (y.matches) {
        wd = 1;
        rightMove(wd);
        console.log(wd)
    } else {
        wd = 6;
        rightMove(wd);
        console.log(wd)
    }
}
function rightMove() {
    if (counter < (slides.length - wd)) {
        counter++;

        console.log(counter)
    }
    slideImage(counter);
}

function slideImage() {
    var x = window.matchMedia("(max-width:590px)");
    if (x.matches) {
        slides.forEach(
            (card) => {

                card.style.transform = `translateX(-${counter * 350}px)`


            }
        );
        console.log("if");
    } else {
        slides.forEach(
            (card) => {

                card.style.transform = `translateX(-${counter * 210}px)`


            }
        );
        console.log("else");
    }
}

window.addEventListener('load', () => { setTimeout(() => { slideImage(); wView(); }, 1000) });

