const titulonovo = document.getElementById("titulocontrole");
const descricaonova = document.getElementById("descricao");
let listaControlesNovos = document.getElementsByClassName("lista-controles-novos");

let listaRecados = [];

function convertcontroleToLi(controle){
    return `
    <li class="controle-novo">
        <h4 class="titulo-controle">${controle.titulo}</h4>
        <p class="descricao-controle">${controle.descricao}</p>
        
        <div class="status">

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label descricao-recado" for="flexRadioDefault1">
                    Lido
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label descricao-recado" for="flexRadioDefault1">
                    Importante
                </label>
                </div>

        </div>
    </li>
    `
}

function criarNovoTitulo(){
    const controle = {
        titulo: titulonovo.value,
        descricao: descricaonova.value,
        situacao: "Novo"
   };   
    listaControles.push(controle);
       listaControlesNovos.innerHTML += convertControleToLi(controle);
       titulonovo.value = "";
       descricao.value = "";
}
console.log(listaControles);

