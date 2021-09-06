// Quotes module

import { SERVER } from "/server/config.js";
const quotesContainer = document.querySelector(".quotes");
let quoteCardTemp = "";

function loadJSON() {
  fetch(`${SERVER}/server/data/quotes.json`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((quote) => loadQuoteCards(quote));
    });
}

function loadQuoteCards(quote) {
  quoteCardTemp = `  
    <div class="quote quote-card">
        <div class="quote-category ${quote.category}">${quote.category}</div>
        <q>
            ${quote.content}
        </q>
        <div class="quote-identity">
            <div class="quote-identity__image">
                <img src="${SERVER}/assets/img/qouter-1.jpg" alt="" />
            </div>
            <div class="quote-identity__name">${quote.author}</div>
        </div>
        <div class="quote-actions">
            <i class="">Like</i>
            <i class="">Share</i>
            <i class="">Note</i>
        </div>
    </div>`;
  loadHTMLQuotes(quoteCardTemp);
}

function loadHTMLQuotes(quoteCardTemp) {
  quotesContainer.innerHTML += quoteCardTemp;
}

loadJSON();

// End of Quotes module

// menu toggling
const menuToggle = document.querySelector(".menu-toggle");
const sideView = document.querySelector(".side_grid");

menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  sideView.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
