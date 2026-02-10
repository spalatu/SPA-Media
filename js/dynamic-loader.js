async function loadContent() {
    try {
        const response = await fetch('site-content.json');
        const data = await response.json();

        // --- Navbar ---
        document.getElementById('nav-location').textContent = data.navbar.location;
        document.getElementById('nav-email').textContent = data.navbar.email;

        // --- Hero Section ---
        document.getElementById('hero-project-label').innerHTML = `${data.hero.projectLabel}<p>${data.hero.projectTags}</p>`;
        document.getElementById('hero-title').textContent = data.hero.title;
        document.getElementById('hero-bg-video').src = data.hero.videoSource;
        document.getElementById('hero-showreel-video').src = data.hero.showreelVideo;

        // --- About Section ---
        document.getElementById('about-tagline').textContent = data.about.tagline;
        document.getElementById('about-heading').textContent = data.about.heading;
        document.getElementById('about-subheading').textContent = data.about.subheading;
        document.getElementById('about-image').src = data.about.imageSource;

        // --- Experience/Projects (Example of a list) ---
        const projectList2024 = document.getElementById('project-list-2024');
        projectList2024.innerHTML = ''; // Clear existing
        data.projects.year2024.forEach(proj => {
            projectList2024.innerHTML += `
                <div class="pritem">
                    <h3>${proj.name}</h3>
                    <h3 style="opacity: 0.75;">${proj.type}</h3>
                </div>`;
        });

        const projectList2025 = document.getElementById('project-list-2025');
        projectList2025.innerHTML = '';
        data.projects.year2025.forEach(proj => {
            projectList2025.innerHTML += `
                <div class="pritem">
                    <h3>${proj.name}</h3>
                    <h3 style="opacity: 0.75;">${proj.type}</h3>
                </div>`;
        });

        // --- Contact Section ---
        document.getElementById('contact-title').textContent = data.contact.title;
        document.getElementById('contact-heading').textContent = data.contact.heading;
        document.querySelector('.btn').textContent = data.contact.buttonText;

        console.log("Full site content loaded!");
    } catch (error) {
        console.error("Error loading content:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadContent);
