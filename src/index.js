document.addEventListener("DOMContentLoaded", function() {

  const input = document.getElementById('pokemon-search-input')
  input.addEventListener('input', function() {pokemon.filter(poke => poke.name.includes(input.value)).forEach(poke => console.log(poke.name))
})




})
