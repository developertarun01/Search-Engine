// Website Details
const website = [
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Call Expedia | 24/7 Customer Support | Call Now. Easy flight ticket booking, Flight ticket changes, Flight ticket cancellation over the call. Call Now.",
        numberDisplay: "(877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Expedia | Flight Booking Desk | Call Now. Book your flight, Ticket changes, Ticket cancellation over the call.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Call Expedia | 24/7 Customer Support | Call Now. Easy flight ticket booking, Flight ticket changes, Flight ticket cancellation over the call.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Expedia Travel | 24/7 Reservation Support | Wave Service Charge. Expedia Airlines Flight Reservations Over The Call.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Call 1800 Expedia | Customer Support Number | Flight tickets on call. Flight ticket booking, changes, and cancellation over the call.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "1800 Expedia | Book Expedia Flight | Book flights on call. Expedia Airlines Flight Manage Booking Over The Call.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Call Expedia | Call To Book Flight | 24/7 Flight Booking Support. Expedia Airlines Flight Ticket Cancellations and Rebooking Over The Call.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Expedia Phone Number | Booking, Changes, Cancellation | Call Us Now. Explore destinations, compare prices, and book flights, hotels, or packages on Expedia.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Call Expedia | Book Your Flight Ticket | Call to Book Flight. Look for exclusive offers, discounts and promo codes on Expedia for your next trip.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Expedia Group Booking | Flight Booking Online | Call to Book Flight. Personalized recommendations, exclusive discounts, and 24/7 support.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Expedia | Travel Made Easy | Book Now. New flight booking, ticket changes, and ticket cancellations over the call.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    },
    {
        image: "./assets/images/globe.png",
        name: "Expedia",
        url: "https://www.callfare.com/expedia",
        description: "Call Expedia | Book with Confidence | Call us to book your flight. Book your flight, manage ticket changes, and cancellations easily.",
        numberDisplay: "+1 (877) 290-1852",
        numberCall: "8772901852"
    }
];

// DOM elements
const sec2Container = document.querySelector(".sec2-inner");
const searchInput = document.querySelector("#search");

// Function to render cards
function renderCards(data) {
    sec2Container.innerHTML = "";

    data.forEach((item) => {
        sec2Container.innerHTML += `
        <div class="sec2-card">
            <div class="sec2-up flex-center">
                <div class="sec2-up-logo">
                    <img src="${item.image}" alt="Company Logo">
                </div>
                
                    <div class="sec2-up-content">
                        <div class="sec2-up-name">
                            <p><b>${item.name}</b></p>
                        </div>
                        <a href="${item.url}" target="_blank">
                        <div class="sec2-up-url">${item.url}</div></a>
                    </div>
                
            </div>

            <div class="sec2-center">
                <h3 class="mt-10"><a href="${item.url}" target="_blank"><span>${item.name}</span></a></h3>
                <p class="mt-10">${item.description}</p>
            </div>

            <div class="sec2-right ml-10">
                <hr>
                <p>
                    <i class="fa-solid fa-phone-volume fa-shake fa-sm mr-10"></i>
                    <a href="tel:${item.numberCall}">${item.numberDisplay}</a>
                </p>
                <hr>
            </div>
        </div>
        `;
    });
}

// Initial render (shows all cards)
renderCards(website);

// Search Functionality
searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();

    const filtered = website.filter((item) =>
        item.name.toLowerCase().includes(query) ||
        item.url.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    renderCards(filtered);
});
