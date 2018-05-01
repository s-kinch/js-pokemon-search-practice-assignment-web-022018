pokemon.forEach(poke => poke["flipped"] = false)

document.addEventListener("DOMContentLoaded", function() {
//
// 
// const container = document.getElementById("pokemon-container")
// const input = document.getElementById("pokemon-search-input")
//   input.addEventListener('input', function(e){
//     if (input.value === ""){
//       container.innerHTML = `<p><center>There are no Pokémon here</center></p>`
//     } else {
//       renderAll(input.value)
//     }
//   })
//
//
//
//
// function renderAll(input){
//   console.log("yeah")
//   container.innerHTML = pokemon.filter(poke => poke.name.includes(input)).map(poke => {return render(poke)}).join("")
//
//
// }
//
// function render(input){
//
//
// }























  const input = document.getElementById('pokemon-search-input')


  input.addEventListener('input', function() {
    if (input.value === ""){
      document.getElementById('pokemon-container').innerHTML = "<center>There are no Pokémon here</center>"
    } else {
      pokemon.forEach(poke => poke.flipped = false)
      renderAll(input.value)
    }
  })

  document.getElementById('pokemon-container').addEventListener('click', function(e){
    if (e.target.className === "center-text flip-image"){
      poke = pokemon.find(poke => poke.name === e.target.dataset.pokename)
      poke.flipped = !poke.flipped
      renderAll(input.value)
    }
  })

  function render(poke) {
    sprite = poke.flipped ? poke.sprites.back : poke.sprites.front
    return `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${poke.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src=${sprite}>
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename=${poke.name} data-action="flip-image">flip card</p>
        </div>
      </div>`

  }

  function renderAll(input){
    document.getElementById('pokemon-container').innerHTML = pokemon.filter(poke => poke.name.includes(input)).map(poke => {
      return render(poke)
    }).join("")
  }

  //


})
