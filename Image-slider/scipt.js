      //Constants
      const slides = document.querySelectorAll(".slide");
      let slideIndex = 0;
      let intervallId = null;

      // Load all the content then initialize the slider
      document.addEventListener("DOMContentLoaded", initializeSlider());

      //Functions
      function initializeSlider() {
        // avoiding image not found err
        if (slides.length > 0) {
          slides[slideIndex].classList.add("displaySlide");
          intervallId = setInterval(nextSlide, 1000);
        }
      }

      function showSlide(index) {

        if (index >= slides.length){
          slideIndex = 0;
        } else if(index < 0) {
          slideIndex = slides.length - 1;
        }
        
        slides.forEach((slide) => {
          slide.classList.remove("displaySlide");
        });
        slides[slideIndex].classList.add("displaySlide");
      }

      function prevSlide() {
        clearInterval(intervallId);
        slideIndex--;
        showSlide(slideIndex);
      };

      function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
      }