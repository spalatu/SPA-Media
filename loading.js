gsap.registerPlugin();

const loadingScreen = document.querySelector('.loading-screen');
const logo = loadingScreen.querySelector('svg');

gsap.timeline()
    .to(logo, {
        opacity: 1,
        duration: 0,
    })
    .to(logo, {
        duration: 0.75,  // updated duration
        opacity: 1,
    })
    .to(logo, {
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
        delay: 0.5
    })
    .to(loadingScreen, {
        duration: 1,
        y: "-100%",
        ease: "power2.inOut",
        onComplete: () => loadingScreen.remove()
    });