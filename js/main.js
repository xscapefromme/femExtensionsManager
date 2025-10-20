
const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const inactiveBtn = document.getElementById("inactiveBtn")



const list = document.getElementById("extensionsListsGrid");


let allCards = [];
let activeCards = [];
let inactiveCards = [];

console.log(allCards);
console.log([...activeCards])
console.log(activeCards.length)
console.log([...inactiveCards])
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


        const allToggleBtns = document.querySelectorAll('input')
       

    

    

    const allCheckedToggle = document.querySelectorAll(
    '.toggleBtn input:checked')

    console.log(allCheckedToggle)

    allToggleBtns.forEach((btn) => {
        const btnIndex = [...allToggleBtns].indexOf(btn)
        console.log(btnIndex)
        btn.addEventListener('change', () => {  
            console.log('clicked')
            if(btn.checked){
                const copied = allCards.slice(btnIndex, btnIndex + 1)
                activeCards.push(copied[0])

                console.log([...activeCards])
            }else {
            
             inactiveCards.push(inactiveCopied)

            }

        })
    })

  
    
    

  } catch (err) {
    console.error("Something went wrong", err);
  }

  
}




allBtn.addEventListener('click', () => {
    allBtn.classList.add('active')
    activeBtn.classList.remove('active')
    inactiveBtn.classList.remove('active')

   
    list.append(...allCards)

})

 
activeBtn.addEventListener('click', () => {
    activeBtn.classList.add('active')
    allBtn.classList.remove('active')
    inactiveBtn.classList.remove('active')

    list.innerHTML = ''
    list.append(...activeCards)

})

 



inactiveBtn.addEventListener('click', () => {
    allBtn.classList.remove('active')
    activeBtn.classList.remove('active')
    inactiveBtn.classList.add('active')

    list.innerHTML = ''
    list.append(...inactiveCards)

})








loadData();