

const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const inactiveBtn = document.getElementById("inactiveBtn");
const list = document.getElementById("extensionsListsGrid");
const colorSwitchBtn = document.querySelector('.colorToggle')
let allCards = [];

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


    const toggleBtns = list.querySelectorAll('input.toggleBtn')
    const toggleBtnsArr = [...toggleBtns]



    let saved = JSON.parse(localStorage.getItem('logCheckedStatus'))
    

    if (saved){
      checkedStatus = saved
    } else {
      checkedStatus = []
    }


    toggleBtnsArr.forEach((toggleBtn, i) => {

      toggleBtn.checked = checkedStatus[i]?.checked ?? false;
      
      toggleBtn.addEventListener('change', () => {
        
        
        checkedStatus[i].checked = toggleBtn.checked
      localStorage.setItem('logCheckedStatus', JSON.stringify(checkedStatus))

      console.log("clicked!!!", i);
          console.log("checked value:", toggleBtn.checked);
    })
        });

    const deleteBtns = list.querySelectorAll(".removeBtn")
    const deleteBtnsArr = [...deleteBtns]
    

    deleteBtnsArr.forEach((deleteBtn) => {

      deleteBtn.addEventListener('click', () => {
        const card = deleteBtn.closest('.listCards')
        const index = allCards.indexOf(card)
        if(index !== -1){
          
         allCards.splice(index, 1)
        }
        
        console.log(allCards)
        
        card.remove()
      })
      
    })
        
    
    
applyTheme(toggleStatus[0].toggled)

  } catch (err) {
    console.error("Something went wrong", err);
  }
}



function filteringCards() {
      activeBtn.addEventListener("click", () => {
        activeBtn.classList.add("active");
        allBtn.classList.remove("active");
        inactiveBtn.classList.remove("active");
        const activeCards = allCards.filter((card) => card.querySelector("input").checked
         
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

      allBtn.addEventListener("click", () => {
  allBtn.classList.add("active");
  activeBtn.classList.remove("active");
  inactiveBtn.classList.remove("active");

  list.append(...allCards);
});
    }

 filteringCards();
   

    


//starting point 
let toggleStatus = [
  { toggled: false}
]


 
let saveToggleStatus = JSON.parse(localStorage.getItem('logColorToggle'))

if(saveToggleStatus){toggleStatus = saveToggleStatus}
     
  
    



colorSwitchBtn.addEventListener('click', () => {

      toggleStatus[0].toggled = !toggleStatus[0].toggled
    
   localStorage.setItem('logColorToggle', JSON.stringify(toggleStatus))
   applyTheme(toggleStatus[0].toggled)
})


function applyTheme(isLight){
  const body = document.querySelector('body')
  const listCards = document.querySelectorAll('.listCards')
 const mainHeader = document.querySelector('.mainHeader')
  const listH2s = document.querySelectorAll('h2')
  const h1 = document.querySelector('h1')
   const statusBtns = document.querySelectorAll('.buttonsContainer button')
  const listContainerPs = document.querySelectorAll('.listCards p')
  const listBtns = document.querySelectorAll('.listCards button')
  

  listH2s.forEach((listH2) => {
    listH2.classList.toggle('h2White', isLight)
  })
  
  listCards.forEach((card) => {
    card.classList.toggle('listCardsWhite', isLight)
    
  })


  listContainerPs.forEach((listParagraph) => {
    listParagraph.classList.toggle('listParagraphWhite', isLight)
  })


  listBtns.forEach((listBtn) => {
    listBtn.classList.toggle('listBtnWhite', isLight)
  })



  mainHeader.classList.toggle('mainHeaderWhite', isLight)
  h1.classList.toggle('h1White', isLight)
  body.classList.toggle('bodyWhite', isLight)


  
 
 
    statusBtns.forEach((statusBtn) => {
      statusBtn.classList.toggle('statusButtonWhite', isLight)
  })

 
   const isWhite =  colorSwitchBtn.classList.toggle('colorSwitchBtnWhite', isLight)

    if(isWhite){
      colorSwitchBtn.innerHTML = `<img class="imgCard" src="assets/images/icon-moon.svg">`
    }else {
      colorSwitchBtn.innerHTML = `<img class="imgCard" src="assets/images/icon-sun.svg">`
    }
}



loadData();