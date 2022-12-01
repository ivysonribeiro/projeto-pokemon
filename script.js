var formulário = document.querySelector('form')

formulário.addEventListener('submit', function(e){

    //Bloqueia o refresh da página
e.preventDefault()

//url da pesquisa
let urlForm = " https://pokeapi.co/api/v2/pokemon/";

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

fetch(urlForm)
  .then(resposta => resposta.json())
  .then(function(data){
    console.log(data)
    html + 'nome:' + maiuscula(data.name) + '<br>'
    html = html + 'type:' + maiuscula(data.types[0].type.name)
    resposta.innerHTML = html

    imagem.innerHTML = "<img src= '"+ data.sprites.front_default +"'><img src= '"+ data.sprites.back_default +"'>"
  })
  .catch(function(err){
    if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
        html = 'Pokémon não encontrado!😒'
    } else{
        html = 'Erro:' + err
    }
    resposta.innerHTML = html
  })

});

function maiuscula(val){
    return val[0].toUpperCase()
    + val.substr(1)
}