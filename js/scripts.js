const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right");
(carouselContainer = document.querySelector("#carousel-container")),
    (carouselItems = document.querySelectorAll(".carousel-item")),
    (bullets = document.querySelectorAll(".bullet-item"));

btnLeft.addEventListener("click", (e) => moveToLeft());
btnRight.addEventListener("click", (e) => moveToRight());
bullets.forEach((element, i) => {
    bullets[i].addEventListener("click", (e) => configBullet(i));
});

let operation = 0;
let widthImg = 100 / carouselItems.length;
let count = 0;

function configBullet(position) {
    count = position;
    operation = count * widthImg;
    animateCarousel(operation);
    paintBullet(position);
    console.log(operation)
}

function moveToRight() {
    count++;
    if (count <= carouselItems.length - 1) {
        operation += widthImg;
        animateCarousel(operation);
        paintBullet(count);
        return;
    }
    count = 0;
    operation = 0;
    animateCarousel(operation);
    paintBullet(count);
}

function moveToLeft() {
    count--;
    if (count >= 0) {
        operation -= widthImg;
        animateCarousel(operation);
        paintBullet(count);
        return;
    }
    count = carouselItems.length - 1;
    operation = widthImg * count;
    paintBullet(count);
    animateCarousel(operation);
}

function animateCarousel(operation) {
    carouselContainer.style.transform = `translateX(-${operation}%)`;
    carouselContainer.style.transition = "all ease .6s";
}

function paintBullet(position) {
    bullets.forEach((element, i) => {
        bullets[i].classList.remove("actived");
    });
    bullets[position].classList.add("actived");
}
