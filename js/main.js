const list = document.getElementById("extensionsListsGrid")

async function loadData(){
    try {
        const response = await fetch('data.json')

        const data = await response.json()

        data.forEach(item => {
            const card = document.createElement('div')
            card.classList.add("listCards")
            card.innerHTML =  `<img src="${item.logo}"> <div class="textAlign"><h2>${item.name}</h2> <p> ${item.description}</p> </div>`


            list.append(card)
            console.log(card)
        })
    } catch(err){
        console.error('Something went wrong', err)
    }
}
loadData()