var formulário = document.querySelector('form')

formulário.addEventListener('submit', function(e){

e.preventDefault()

let urlForm = " https://pokeapi.co/api/v2/pokemon/"

let nome = document.getElementById("name")

urlForm = urlForm + this.name.value

alert(urlForm)

})