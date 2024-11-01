const resul = document.getElementById('result');
const listItems = []
async function getData() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
  
    const { results } = await res.json()
    console.log( { results })
    console.log(typeof(results))
    const restultMap = results.map(elemento => Object.entries(elemento))
    const resultsSlice = restultMap.slice(0,2)
    //console.log(restultMap)
    //console.log(typeof(restultMap))
    // Clear results
    //result.innerHTML = ''
const claves = Object.keys(results)
for(i = 0; i < claves.length; i++){
let clave = claves[i]
console.log(results[clave])
}
  
    results.forEach(user => {
      const li = document.createElement('li')
      for(i = 0; i <= resultsSlice.length; i++){
    
        listItems.push(li)
    
        li.innerHTML = `
            <img src="${user.image}" alt="${user.name}">
             <div class="user-info">
               <h4>${user.name}</h4>
            </div>
          `
    
          result.appendChild(li)
      }
    })
  }

  getData()

