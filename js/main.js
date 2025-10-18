
const activeBtn = document.getElementById("activeBtn")

const list = document.getElementById("extensionsListsGrid");
const allBtn = document.getElementById("allBtn");

 let allCards = []
 let activeCards = []
    let inactiveCards = []

        console.log(allCards)
        console.log(activeCards)

async function loadData() {
  try {
    const response = await fetch("data.json");

    const data = await response.json();

    data.forEach((item) => {

       
        


      const card = document.createElement("div");

      card.classList.add("listCards");
      card.innerHTML = `<div class="upperContainer"><img class="imgCard" src="${item.logo}">
      <div class="h2p"><h2 class="h2Card">${item.name}</h2> <p class="pCard"> ${item.description}</p></div></div>`;

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("removeBtn");
      removeBtn.textContent = "remove";

      const labelForToggleBtn = document.createElement("label");
      labelForToggleBtn.classList.add("toggleBtn");
      labelForToggleBtn.innerHTML = `<input type="checkbox"> <span class="slider"></span> `;

      const divBottomContainer = document.createElement("div");

      divBottomContainer.classList.add("divBottomContainer");

      

      divBottomContainer.append(removeBtn, labelForToggleBtn);
      card.append(divBottomContainer);


       allCards.push(card)
       list.append(card)

       
      


    });
  } catch (err) {
    console.error("Something went wrong", err);
  }
}




loadData();
