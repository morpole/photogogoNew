

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});



// Define an array of question objects
const questionsData = [
  {
    title: "EU/irish prints & digital",
    text: "Set of 6 35x45mm prints and pre-checked digital image sent to your email.",
    image: "./photos/adultTemplate.jpg"
  },
  {
    title: "US passport/visa photos",
    text: "Set of 2x2 passport photos & digital image sent to your email.",
    image: "./photos/babyTemplate.jpg"
  },
  {
    title: "canada passport & visa photos",
    text: "Set of 5x7cm prints & digital image sent to your email.",
    image: "./photos/canadaTemplate.png"
  },
  {
    title: "china passport/visa photos",
    text: "Set of China passport photos & digital image sent to your email.",
    image: "./photos/chinaTemplate.jpg"
  },
  {
    title: "schengen visa photos",
    text: "Set of Schengen visa photos & digital image sent to your email.",
    image: "./photos/chinaTemplate.jpg"
  },
  {
    title: "baby passport/visa photos",
    text: "Set of baby passport photos & digital image sent to your email.",
    image: "./photos/babyTemplate.jpg"
  },
  {
    title: "india passport/visa photos",
    text: "Set of 2x2 passport photos & digital image sent to your email.",
    image: "./photos/babyTemplate.jpg"
  },
  {
    title: "critical skills visa photos",
    text: "Set of Ireland critical skills photos & digital image sent to your email.",
    image: "./photos/babyTemplate.jpg"
  },
];

// Get the questions container
const questionsContainer = document.querySelector('.questions');

// Dynamically generate HTML for questions
questionsData.forEach(question => {
  const questionHTML = `
    <article class="question">
      <div class="question-title">
        <p>${question.title}</p>
        <button type="button" class="question-btn">
          <span class="plus-icon">
            <i class="far fa-plus-square"></i>
          </span>
          <span class="minus-icon">
            <i class="far fa-minus-square"></i>
          </span>
        </button>
      </div>
      <div class="question-text">
        <p>${question.text}</p>
        <img src="${question.image}" alt="${question.title}" width="100%" height="100%">
      </div>
    </article>
  `;

  // Append the question HTML to the questions container
  questionsContainer.innerHTML += questionHTML;
});

// Attach event listeners to the dynamically generated buttons
const questionButtons = document.querySelectorAll('.question-btn');

questionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const question = button.closest('.question');
    question.classList.toggle('show-text');
  });
});
