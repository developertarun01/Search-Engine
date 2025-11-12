// DOM elements
const sec2SponceredCard = document.querySelector(".sec2-sponcered-card");
const searchInput = document.querySelector("#search");
const navCenterCross = document.querySelector(".nav-center-cross");
const address = document.getElementById("address");
const resultsFor = document.querySelector('.results-for');

// Navbar 
const allData = [];
// Search functionality
searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    resultsFor.style.display = "block"
    resultsFor.innerHTML = `Result for <span>${query}</span>`;
    navCenterCross.style.display = "block";

    const filteredSponsered = sponseredWebsite.filter(
        (item) =>
            item.name.toLowerCase().includes(query) ||
            item.url.toLowerCase().includes(query) ||
            item.desc.toLowerCase().includes(query)
    );

    // When searching, show only the first two matches
    renderSponceredCard(filteredSponsered.slice(0, 2));
});

navCenterCross.addEventListener("click", () => {
    searchInput.value = "";
    resultsFor.style.display = "none"
    renderSponceredCard(sponseredWebsite.slice(0, 2)); // reset to first two again
});

// Section 2 
let todayDate = document.querySelectorAll(".today-date");

let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
});

todayDate.forEach((el) => {
    el.innerHTML = formattedDate;
})

// For Sponcered Website 
let sponseredWebsite = []; // will store data from JSON

// Fetch data from JSON file
fetch("./assets/data/sponseredWebsiteData.json")
    .then((res) => res.json())
    .then((data) => {
        sponseredWebsite = data;

        renderSponceredCard(sponseredWebsite.slice(0, 4));
    })
    .catch((err) => console.error("Error loading data:", err));

// Function to render cards
function renderSponceredCard(data) {
  sec2SponceredCard.innerHTML = "";

  data.forEach((item) => {
    // Randomly pick between 0 or 1
    const randomFormat = Math.random() < 0.5 ? 0 : 1;

    if (randomFormat === 0) {
      // First format
      sec2SponceredCard.innerHTML += `
        <div>
          <div class="sec2-up flex-center">
            <div class="sec2-up-logo">
              <img src="${item.logo}" alt="Company Logo">
            </div>
            <div class="sec2-up-content">
              <div class="sec2-up-name">
                <p><b>${item.name}</b></p>
              </div>
              <a class="flex sec2-3-dot" href="${item.url}" target="_blank">
                <div class="sec2-up-url">${item.url}</div> 
                <i class="fa-solid fa-ellipsis-vertical fa-sm"></i>
              </a>
            </div>
          </div>
          <div class="sec2-center">
            <h3 class="mt-10">
              <a href="${item.url}" target="_blank"><span>${item.name}</span></a>
            </h3>
            <p class="mt-10">${item.desc}</p>
          </div>
          <div class="sec2-right ml-10">
            <hr>
            <p>Call us Now: <a href="tel:${item.numCall}"><span>${item.numDisplay}</span></a></p>
            <hr>
          </div>
        </div>
      `;
    } else {
      // Second format
      sec2SponceredCard.innerHTML += `
        <div class="mb-10">
          <div class="sec2-up flex-center">
            <div class="sec2-up-logo">
              <img src="${item.logo}" alt="Company Logo">
            </div>
            <div class="sec2-up-content">
              <div class="sec2-up-name">
                <p><b>${item.name}</b></p>
              </div>
              <a class="flex sec2-3-dot" href="${item.url}" target="_blank">
                <div class="sec2-up-url">${item.url}</div> 
                <i class="fa-solid fa-ellipsis-vertical fa-sm"></i>
              </a>
            </div>
          </div>
          <div class="sec2-center">
            <h3 class="mt-10">
              <a href="${item.url}" target="_blank"><span>${item.name}</span></a>
            </h3>
            <p class="mt-10">${item.desc}</p>
          </div>
          <div class="sec2-right-diff mt-10 flex-center">
            <div class="sec2-right-diff-left">
              <span><i class="fa-solid fa-phone"></i></span>
            </div>
            <div class="sec2-right-diff-right">
              <p><a href="tel:${item.numCall}"><span><b>${item.numDisplay}</b></span></a></p>
              <p class="small"><a href="${item.url}">${item.url}</a></p>
            </div>
          </div>
        </div>
      `;
    }
  });
}

// Show Hide Sponsered 
const sec2ShowHide = document.querySelector(".sec2-show-hide");
sec2ShowHide.addEventListener("click", () => {
    if (sec2SponceredCard.style.display === "none") {
        // Show
        sec2SponceredCard.style.display = "block";
        sec2ShowHide.innerHTML = `<p>Hide Sponsored results &#9650;</p>`;
    } else {
        // Hide
        sec2SponceredCard.style.display = "none";
        sec2ShowHide.innerHTML = `<p>Show Sponsored results &#9660;</p>`;
    }
})

// sec2 Main Card 
let mainWebsite = [];
fetch("./assets/data/mainWebsiteData.json")
    .then((res) => res.json())
    .then((data) => {
        mainWebsite = data;

        renderMainCards(mainWebsite.slice(0, 2));
    })
    .catch((err) => console.error("Error of Main card Render: ", err));

const sec2MainCard = document.querySelector('.sec2-main-card');
function renderMainCards(data) {
    sec2MainCard.innerHTML = "";

    data.forEach((item) => {
        sec2MainCard.innerHTML += `
        <div class="flex mt-10">
        <div class="main-card-left">
                        <div class="sec2-up flex-center">
                            <div class="sec2-up-logo">
                                <img src="${item.logo}" alt="Company Logo">
                            </div>

                            <div class="sec2-up-content">
                                <div class="sec2-up-name">
                                    <p><b>${item.name}</b></p>
                                </div>
                                <a class="flex sec2-3-dot" href="${item.url}" target="_blank">
              <div class="sec2-up-url">${item.url}</div> 
              <i class="fa-solid fa-ellipsis-vertical fa-sm"></i>
            </a>
                            </div>

                        </div>

                        <div class="sec2-center">
                            <h3 class="mt-10"><a href="${item.url}"
                                    target="_blank"><span>${item.name}</span></a></h3>
                            <p class="mt-10">${item.desc}</p>
                        </div>

                        <div class="sec2-right ml-10 flex mt-10">
                            <div class="sec2-right-card ">
                                <p><a href="${item.url}"><span>${item.card1}</span></a></p>
                            </div>
                            <div class="sec2-right-card">
                                <p><a href="${item.url}"><span>${item.card2}</span></a></p>
                            </div>
                        </div>
                    </div>
                    <div class="main-card-right">
                        <img src="${item.image}" alt="Plane Image">
                    </div>
        </div>`
    })
}

// Fetch Normal Website Data
let normalWebsiteData = [];

fetch('./assets/data/normalWebsiteData.json')
    .then((res) => res.json())
    .then((data) => {
        normalWebsiteData = data;
        renderNormalData(normalWebsiteData.slice(0, 5));
    })
    .catch((err) => console.error("Error in fetching normal website data: ", err));

let sec2NormalCard = document.querySelector(".sec2-normal-card");
function renderNormalData(data) {
    sec2NormalCard.innerHTML = "";

    data.forEach((item) => {
        sec2NormalCard.innerHTML += `
        <div class="mt-20">
<div class="sec2-up flex-center">
                        <div class="sec2-up-logo">
                            <img src="${item.logo}" alt="Company Logo">
                        </div>

                        <div class="sec2-up-content">
                            <div class="sec2-up-name">
                                <p><b>${item.name}</b></p>
                            </div>
                            <a class="flex sec2-3-dot" href="${item.url}" target="_blank">
              <div class="sec2-up-url">${item.url}</div> 
              <i class="fa-solid fa-ellipsis-vertical fa-sm"></i>
            </a>
                        </div>

                    </div>

                    <div class="sec2-center">
                        <h3 class="mt-10"><a href="${item.url}"
                                target="_blank"><span>${item.name}</span></a></h3>
                        <p class="mt-10">${item.desc}</p>
                    </div>
        </div>`
    })
}


// Footer 
// Address fetching
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude: lat, longitude: lon } = position.coords;
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
                );
                const data = await response.json();
                address.innerHTML = data.display_name;
            } catch (err) {
                console.error("Error fetching address:", err);
            }
        },
        (error) => console.error("Geolocation error:", error.message)
    );
}