const slidesPlugin = (active) => {
  const slides = document.querySelectorAll(".slide");

  slides[active].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  const clearActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  };
};
slidesPlugin(2);
