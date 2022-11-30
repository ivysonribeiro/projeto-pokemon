var formulário = document.querySelector('form')

formulário.addEventListener('submit', function(e){

    //Bloqueia o refresh da página
e.preventDefault()

//url da pesquisa
let urlForm = " https://pokeapi.co/api/v2/pokemon/"

//valor do input name
let nome = document.getElementById("name")

//Concatena a url com o input
urlForm = urlForm + this.name.value

//Transforma os valores em minúsculas
urlForm = urlForm.toLocaleLowerCase()

//ID content
let resposta = document.getElementById('content')

//ID imgpokemom
let imagem = document.getElementById('imgpokemon')

//resposta em HTML
let html = ''
alert(urlForm)

})