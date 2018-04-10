document.addEventListener("DOMContentLoaded", function() {

  const input = document.getElementById('pokemon-search-input')


  input.addEventListener('input', function() {
    if (input.value === ""){
      document.getElementById('pokemon-container').innerHTML = "<center>There are no Pokémon here</center>"
    }   else {
     document.getElementById('pokemon-container').innerHTML = pokemon.filter(poke => poke.name.includes(input.value)).map(poke => {
      return render(poke)
    }).join("")}
  })

  document.getElementById('pokemon-container').addEventListener('click', function(){

  })

  function render(poke) {
    return `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${poke.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src=${poke.sprites.front}>
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename=${poke.name} data-action="flip-image">flip card</p>
        </div>
      </div>`

  }


})
