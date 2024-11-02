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

const arr = [["home", "#mainheader"], ["book preview", "#bookPrev"], ["author", "#author"], ["result", "#result"], ["download book", "#download"]]
function addNavbar() {
  for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++){
      for(k = 0; k < i; j++){
        const li = document.createRange().createContextualFragment(`
          
          <li><a href="${arr[j][i]}">${arr[j][k]}</a></li>
          
          `)
          const lista = document.querySelector('.lista')
          lista.append(li)
      }
    }
  }
  }
  
  const arr2 = [
    ["home", "#mainheader"],
    ["book preview", "#bookPrev"],
    ["author", "#author"],
    ["result", "#result"],
    ["download book", "#download"]
  ];
  
  function addNavbar2() {
    const lista = document.querySelector('.lista'); // Seleccionar la lista una vez
    
    arr2.forEach(item => {
      const li = document.createElement('li'); // Crear el elemento <li>
      const a = document.createElement('a'); // Crear el elemento <a>
      
      a.href = item[1]; // Asignar el href
      a.textContent = item[0]; // Asignar el texto
      li.appendChild(a); // Añadir <a> a <li>
      lista.appendChild(li); // Añadir <li> a la lista
    });
  }
  
  //addNavbar()
  addNavbar2(); // Llamar a la función para añadir el menú

