const atfImages = [
    "url('images/boxing0.jpg')", 
    "url('images/boxing1.jpg')", 
    "url('images/boxing2.jpg')", 
    "url('images/boxing3.jpg')"];

let curentAtfImageIndex = 0;

function showNextAtfImage() {
    curentAtfImageIndex = (curentAtfImageIndex + 1) % atfImages.length;
    let atfElement = document.querySelector("#atf");
    atfElement.style.backgroundImage = atfImages[curentAtfImageIndex];
}

setInterval(showNextAtfImage, 3000);