const cursor = document.querySelector('.custom-cursor');

// Smooth follow with GSAP
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.25,
    ease: "power2.out"
  });
});

// Link hover effect
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('link-hover'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('link-hover'));
});