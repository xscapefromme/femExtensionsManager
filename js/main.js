const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const inactiveBtn = document.getElementById("inactiveBtn");

const list = document.getElementById("extensionsListsGrid");

let allCards = [];

console.log(allCards);

let checkedStatus = [
  { id: 0, checked: false },
  { id: 1, checked: false },
  { id: 2, checked: false },
  { id: 3, checked: false },
  { id: 4, checked: false },
  { id: 5, checked: false },
  { id: 6, checked: false },
  { id: 7, checked: false },
  { id: 8, checked: false },
  { id: 9, checked: false },
  { id: 10, checked: false },
  { id: 11, checked: false },
];

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
      labelForToggleBtn.innerHTML = `<input class="toggleBtn" type="checkbox"> <span class="slider"></span> `;

      const divBottomContainer = document.createElement("div");

      divBottomContainer.classList.add("divBottomContainer");

      divBottomContainer.append(removeBtn, labelForToggleBtn);
      card.append(divBottomContainer);

      allCards.push(card);
      list.append(card);
    });

    function filteringCards() {
      activeBtn.addEventListener("click", () => {
        activeBtn.classList.add("active");
        allBtn.classList.remove("active");
        inactiveBtn.classList.remove("active");
        const activeCards = allCards.filter(
          (card) => card.querySelector("input").checked
        );

        list.innerHTML = "";
        list.append(...activeCards);
        console.log("click");
      });

      inactiveBtn.addEventListener("click", () => {
        allBtn.classList.remove("active");
        activeBtn.classList.remove("active");
        inactiveBtn.classList.add("active");

        const inactiveCards = allCards.filter(
          (card) => !card.querySelector("input").checked
        );
        list.innerHTML = "";
        list.append(...inactiveCards);
        console.log("clicked!");
      });
    }

    filteringCards();

    function setCheckedStatus() {
      let toggleBtns = document.querySelectorAll("input");
      
      

      toggleBtns.forEach((toggleBtn, index) => {
        
        toggleBtn.addEventListener("change", () => {

          

           checkedStatus[index].checked = toggleBtn.checked
          localStorage.setItem(
                    "logCheckedStatus",
            JSON.stringify(checkedStatus)
          );
          
          console.log("clicked!!!", index);
          console.log("checked value:", toggleBtn.checked);
          
          
         const savedStatus = JSON.parse(localStorage.getItem("logCheckedStatus")) || checkedStatus;
          
        });
      });

    }

    setCheckedStatus();

   
    

  } catch (err) {
    console.error("Something went wrong", err);
  }
}

allBtn.addEventListener("click", () => {
  allBtn.classList.add("active");
  activeBtn.classList.remove("active");
  inactiveBtn.classList.remove("active");

  list.append(...allCards);
});

loadData();

