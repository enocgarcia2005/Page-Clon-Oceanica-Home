const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right")
      carouselContainer = document.querySelector("#carousel-container"),
      carouselItems = document.querySelectorAll(".carousel-item");

      btnLeft.addEventListener("click", e => moveToLeft())
      btnRight.addEventListener("click", e => moveToRight())

      let operation = 0
      let widthImg = 100 / carouselItems.length
      let count = 0

      function moveToRight(){
        if(count < carouselItems.length - 1){
            operation += widthImg
            count++
            animateCarousel(operation)
        }
      }

      function moveToLeft(){
        if(count > 0){
            operation -= widthImg
            count--
            animateCarousel(operation)
        }
      }

      function animateCarousel(operation){
        carouselContainer.style.transform = `translate(-${operation}%)`
        carouselContainer.style.transition = "all ease .6s"
      }