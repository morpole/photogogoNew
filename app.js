

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  
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



// Array of quotes
const quotes = [
  {"quote": '" Graham took passport photos of my 7 week old. Id tried myself 100s of photos and failed to get the baby to look at the camera with the appropriate white backdrop. He got the baby to sit on side of my knee and for me to hold the babys head and then checked the photo was acceptable on the passport page and I had the digital image in no time. Highly recommend for baby passport pics!! Graham is super nice and chatty too "', 
   "author": 'Sinéad Fynes'
  },
  {"quote": '" It was an amazing experience. I had a walk in to get my US VISA passport photo clicked. The whole process took me about 5 - 10mins where I received my hard copies and a soft copy together at the cost of €15. Hopefully, I will return to this place to get my professional pics clicked 🙂 Thank you for the great work you do👍 Cheers 🙂 … "',
   "author": 'Swapnil Gawai'
  },
  {"quote": '" Excellent service! Went in to get my passport photo taken and was very pleased with the quality of the photo. I had difficulty uploading my digital copy online but Graham was more than happy to help me until we figured it out. Couldnt say a better word about the place. Will definitely recommend to friends and family. "',
  "author": 'Hannah Shackley'
  },
  {"quote": '"Very fast and professional service. I needed a photo for an American Visa, they also send you the digital version. Im so satisfied by the result, considering that I usually look very bad in pictures. Highly recommend"',
  "author": 'Veronica Caringal'
  },
  {
    "quote": '"Graham was amazing! Needed to get a passport picture for our new born! Most of the shops told me they are not doing it, but Graham was superb and we got the pic on no time!!! Highly recommended and thank you again Graham!"',
    "author": 'Florian Holzneckt'
  },
  {
    "quote": '"Outstanding service. The owner was able to quickly help in adjusting our photos to meet specific requirements in"',
    "author": 'Alessandro Ristori'
  }
];

// Get quote container and text element
const quoteContainer = document.getElementById("quoteContainer");
const quoteText = document.getElementById("quoteText");
const authorText = document.getElementById("authorText");

// Initialize index and display first quote
let index = 0;
quoteText.textContent = quotes[index].quote;
authorText.textContent = "- " + quotes[index].author;


// Function to scroll quotes
function scrollQuotes() {
  index = (index + 1) % quotes.length; // Increment index and loop
  quoteText.textContent = quotes[index].quote;
  authorText.textContent = "- " + quotes[index].author;
}

// Scroll quotes every 5 seconds
setInterval(scrollQuotes, 12000);



// Define an array of service objects
const servicesData = [
  {
    title: "EU/irish passport/visa",
    text: "Set of 6 35x45mm prints and pre-checked digital image sent to your email.",
    image: "./photos/irishTemplate.jpg"
  },
  {
    title: "US passport/visa",
    text: "Set of 2x2 passport photos & digital image sent to your email.",
    image: "./photos/usaTemplate.jpg"
  },
  {
    title: "china passport/visa",
    text: "Set of 33x48mm passport photos & digital image sent to your email.",
    image: "./photos/chinaTemplate.jpg"
  },
  {
    title: "canada passport/visa",
    text: "Set of 5x7cm or 35x45mm prints with photographer signature & digital image sent to your email.",
    image: "./photos/canadaTemplate.jpg"
  },
  {
    title: "india passport/visa",
    text: "Set of 2x2 inch (50x50mm) passport photos & digital image sent to your email.",
    image: "./photos/indiaTemplate.jpg"
  },
  {
    title: "schengen visa",
    text: "Set of Schengen visa photos & digital image sent to your email.",
    image: "./photos/schengenTemplate.jpg"
  },
  {
    title: "baby passport/visa",
    text: "Set of baby passport photos & digital image sent to your email.",
    image: "./photos/babyTemplate.jpg"
  },
  {
    title: "irish critical skills visa",
    text: "Set of Ireland critical skills photos & digital image sent to your email.",
    image: "./photos/criticalSkillsTemplate.jpg"
  },
  {
    title: "irish citizenship",
    text: "Set of Irish citizenship photos & digital images sent to your email.",
    image: "./photos/irishCitizenshipTemplate.jpg"
  },
  {
    title: "safe pass",
    text: "Set of Irish safe pass photos.",
    image: "./photos/safePassTemplate.jpg"
  },
  {
    title: "taxi PSV licence",
    text: "Set of three 10x7cm prints.",
    image: "./photos/taxiLicenceTemplate.jpg"
  },
  {
    title: "corporate profile/ online resume",
    text: "Set of digital headshots for online resume or full length for airline interviews.",
    image: "./photos/corporateProfileTemplate.jpg"
  },
];

// Get the services container
const servicesContainer = document.querySelector('.services');

// Dynamically generate HTML for services
servicesData.forEach(service => {
  const serviceHTML = `
    <article class="service">
      <div class="service-title">
        <p>${service.title}</p>
        <button type="button" class="service-btn">
          <span class="plus-icon">
            <i class="far fa-plus-square"></i>
          </span>
          <span class="minus-icon">
            <i class="far fa-minus-square"></i>
          </span>
        </button>
      </div>
      <div class="service-text">
        <p>${service.text}</p>
        <img src="${service.image}" alt="${service.title}" width="100%" height="100%">
      </div>
    </article>
  `;

  // Append the service HTML to the services container
  servicesContainer.innerHTML += serviceHTML;
});

// Attach event listeners to the dynamically generated buttons
const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const service = button.closest('.service');
    service.classList.toggle('show-text');
  });
});






