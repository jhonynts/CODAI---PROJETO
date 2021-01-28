var nome ="Jonata Ramos" // RESPONSÁVEL POR ALTERAR NOME E CARGO, RESPECTIVAMENTE //
var cargo ="Desenvolvedor"

// ESSE TRECHO DE COD. ESTAMOS PEGANDO ELEMENTOS DO HTML // 
var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml (nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml (cargo) {
    cargoHtml.innerHTML = cargo;
}
function logarNome() {
    console.log(nome); 
}

// FUNÇÃO DO CLICK NOS BOTÕES //
function clickNoSobre () {
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}


function clickNoProjetos() {
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);


                            