fetch("assets/data/site-content.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        render(data);
    });

function render(content) {
    document.getElementById("nav-location").innerText = content.navbar.location;
    document.getElementById("nav-email").innerText = content.navbar.email;

    document.getElementById("hero-project-label").innerHTML = content.hero.projectLabel + "<p>" + content.hero.projectTags + "</p>";
    document.getElementById("hero-title").innerText = content.hero.title;
    document.getElementById("hero-bg-video").src = content.hero.videoSource;
    document.getElementById("hero-showreel-video").src = content.hero.showreelVideo;

    document.getElementById("about-tagline").innerText = content.about.tagline;
    document.getElementById("about-main-text").innerText = content.about.heading;
    document.getElementById("about-subheading").innerText = content.about.subheading;
    document.getElementById("about-image").src = content.about.imageSource;

    document.getElementById("contact-title").innerText = content.contact.title;
    document.getElementById("contact-heading").innerText = content.contact.heading;

    const list2024 = document.getElementById("project-list-2024");
    list2024.innerHTML = "";
    for (let i = 0; i < content.projects.year2024.length; i++) {
        const project = content.projects.year2024[i];
        list2024.innerHTML += '<div class="pritem"><h3>' + project.name + '</h3><h3 style="opacity: 0.75;">' + project.type + '</h3></div>';
    }

    const list2025 = document.getElementById("project-list-2025");
    list2025.innerHTML = "";
    for (let i = 0; i < content.projects.year2025.length; i++) {
        const project = content.projects.year2025[i];
        list2025.innerHTML += '<div class="pritem"><h3>' + project.name + '</h3><h3 style="opacity: 0.75;">' + project.type + '</h3></div>';
    }

    const randomImages = document.querySelectorAll(".fourimg img");
    for (let i = 0; i < randomImages.length; i++) {
        const randomNum = Math.floor(Math.random() * 500);
        randomImages[i].src = "https://loremflickr.com/800/1200/design?lock=" + (randomNum + i);
    }
}
