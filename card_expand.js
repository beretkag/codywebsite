let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  // kattintás a kártyán → expand
  cards[i].addEventListener("click", () => {
    ExpandCard(i);
  });

  // kattintás a bezáró gombon → előbb minimize, és ne buborékoljon tovább
  const closeBtn = cards[i].querySelector(".closeBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", e => {
      e.stopPropagation();   // MEGAKADÁLYOZZA, hogy a card click is fusson
      MinimizeCard();
    });
  }
}

function ExpandCard(index) {
  for (let i = 0; i < cards.length; i++) {
    if (i === index){
        cards[i].classList.add("expandedCard");
    }
    else{
        cards[i].classList.remove("expandedCard");
    }
  }
}

function MinimizeCard() {
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("expandedCard");
  }
}