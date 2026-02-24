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

  function calculateQuote() {
    var name = document.getElementById("client-name").value;
    var entity = document.getElementById("entity-type").value;
    var team = document.getElementById("team-size").value;
    var exp = document.getElementById("experience").value;
    var result = document.getElementById("quote-result");

    if (name != "" && entity != "" && team != "" && exp != "") {
      var price = 1000;

      if (entity == "agency") {
        price = price + 500;
      } else if (entity == "business") {
        price = price + 300;
      } else if (entity == "influencer") {
        price = price + 200;
      }

      if (team == "small") {
        price = price + 200;
      } else if (team == "medium") {
        price = price + 500;
      } else if (team == "large") {
        price = price + 1000;
      }

      if (exp == "mid") {
        price = price * 1.2;
      } else if (exp == "senior") {
        price = price * 1.5;
      }

      result.innerText = "ESTIMATED QUOTE: $" + Math.round(price);
      result.classList.add("valid");
    } else {
      result.innerText = "PLEASE COMPLETE ALL FIELDS";
      result.classList.remove("valid");
    }
  }

  const nameInput = document.getElementById("client-name");
  if (nameInput) {
    document.getElementById("client-name").addEventListener("input", calculateQuote);
    document.getElementById("entity-type").addEventListener("input", calculateQuote);
    document.getElementById("team-size").addEventListener("input", calculateQuote);
    document.getElementById("experience").addEventListener("input", calculateQuote);
  }
});