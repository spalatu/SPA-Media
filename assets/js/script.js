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
});