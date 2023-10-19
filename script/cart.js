function clickImage(smallImg){
    var fullImg = document.getElementById('image_box');
    fullImg.src = smallImg.src;
}
 


var count = 1;

function Add() {
    if (count <= 5) {
        count += 1;
    }else{
        document.getElementById('btn1').ariaDisabled;
    }
    console.log(count)
    displayUpdateCount(count);
}
function minus() {
    if (count > 1) {
        count -= 1;
        console.log(count);
        displayUpdateCount(count);
    } else {
        alert("count can not be less then one(1)")
    }
}


function displayUpdateCount(number) {

    document.getElementById("qnty").value=number;
    TotaldisplayPrice(number);

}

// let item = document.getElementById('btn1');
let item = 1;
function addCard() {
    if (item <= 5) {
        item += 1;
    } else {
        alert("maxmum 6 ordered placed")
    }
    itemDisplay(item);
};

function removeCard() {
    if (item > 1) {
        item -= 1;
        itemDisplay(item);
    }
}
function itemDisplay(item) {
    document.getElementById('items').innerText = `Total items (${item}) `

};

function TotaldisplayPrice(totalItem) {

    let x = parseInt(1000)
    let items = parseInt(totalItem) * x;
    console.log(items)
    discount(items)
    displayPrice(items);
};

function discount(items) {
    let discount = parseInt(10);
    document.getElementById('discound_price').innerHTML = `&#8377;${discount}`
    let discound_price = parseInt(items) - discount;
    displayDiscountedPrice(discound_price);

}
function displayPrice(items) {

    document.getElementById('price').innerHTML = `&#8377;${items}`

};
function displayDiscountedPrice(discound_price) {
    document.getElementById('Total_Price').innerHTML = `&#8377;${discound_price}`
}

function deleteCard(){
    document.querySelector('.delete').classList.remove('.container');
}
