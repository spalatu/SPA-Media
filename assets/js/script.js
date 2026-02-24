document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar-links a");
  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        "--line-width": "100%",
        duration: 0.5,
        ease: "power3.out"
      });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        "--line-width": "0%",
        duration: 0.5,
        ease: "power3.inOut"
      });
    });
  });

  const yourDogName = document.getElementById("your-dog");
  const bestDog = document.getElementById("best-dog");

  if (yourDogName && bestDog) {
    yourDogName.addEventListener("input", (event) => {
      console.log("input change", event.target.value);
      bestDog.innerText = "YOUR DOG " + event.target.value + " IS THE BEST!!";

      if (event.target.value == "") {
        bestDog.innerText = "";
      }
    });
  }
});