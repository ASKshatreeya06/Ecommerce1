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
//window.addEventListener('load', slideImage);
window.addEventListener('load', () => { setTimeout(() => { slideImage(); wView(); }, 1000) });

// window.addEventListener('load', slideImage);
// var x = window.matchMedia("(max-width:590px)");
// console.log(x)
// function slideImage(x) {

//     if (x.matches) {
//         slides.forEach(
//             (card) => {

//                 card.style.transform = `translateX(-${counter * 350}px)`


//             }
//         );
//         console.log("move * 350");
//     }else{
//         slides.forEach(
//             (card) => {

//                 card.style.transform = `translateX(-${counter * 250}px)`


//             }
//         );
//         console.log("move *250");
//     }
// }

// // second slider 
// const slides1 = document.querySelectorAll(".card1");

// var counter1 = 0;
// console.log(slides1)

// slides.forEach(
//     (card1, index) => {

//         card1.style.left = `${index * 300}px`

//     }
// );

// function leftMove1() {
//     if (counter1 > 0) {
//         counter1--;
//     }
//     slideImage1(counter1);
// }
// function rightMove1() {
//     if (counter1 < (slides1.length - 8)) {
//         counter1++;

//         console.log(counter1)
//     }
//     slideImage1(counter1);
// }

// function slideImage1() {
//     slides1.forEach(
//         (card1) => {

//             card1.style.transform = `translateX(-${counter1 * 280}px)`

//         }
//     );
// }