const result = document.getElementById('result');
const listItems = []
async function getData() {
  const res = await fetch('https://rickandmortyapi.com/api/character')

  const  { results }  = await res.json()

results.forEach(user => {
  for(i = 0; i < 5; i++){
    if(user.id == i){
  const li = document.createElement('li')
  listItems.push(li)
  console.log(listItems)

  li.innerHTML = `
      <img src="${user.image}" alt="${user.name}">
      <div class="user-info">
        <h4>${user.name} </h4>
      </div>
    `

    result.appendChild(li)
}
}
  })
}

  getData()

