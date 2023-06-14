var Teste = '';
var vetorTeste = [];
var stringTeste = "";
var vazio = '';
var ResultadoButton='';

const toggleButton = document.getElementById('checkbox');

const corpo2 = document.getElementById('corpo2');
let iscorpo2Visible = false;

const taskbar = document.getElementById('taskbar');
let isTaskbarVisible = false;



toggleButton.addEventListener('click', () => {
  if (isTaskbarVisible) {
    taskbar.style.display = 'none';
    isTaskbarVisible = false;
  } else {
    taskbar.style.display = 'block';
    isTaskbarVisible = true;
  }
});


toggleButton.addEventListener('click', () => {
  if (iscorpo2Visible) {
    corpo2.style.display = 'none';
    iscorpo2Visible = false;
  } else {
    corpo2.style.display = 'block';
    iscorpo2Visible = true;
  }
});

function Aprovado(){
  ResultadoButton="Aprovado"
}

function Reprovado(){
  ResultadoButton="Reprovado"
}

function EnviarTeste(){
    var NomeDoTeste = document.getElementById("idNomeTeste").value;
    var OqueSeraFeito = document.getElementById("idOqueseraFeitoNoTeste").value;
    var ResultadoEsperado = document.getElementById("idResultadoEsperado").value;

    if((NomeDoTeste && OqueSeraFeito && ResultadoEsperado && ResultadoButton) != ""){
        Teste = ["Nome Do Teste: " + NomeDoTeste + "<br>Oque será feito: " + OqueSeraFeito + "<br>Resultado esperado: " + ResultadoEsperado+"<br>Resultado:"+ResultadoButton+"<br>"];
	
    vetorTeste.push(Teste);
    
    mostrarTeste()

    limpaTxt()
       
    }
    else{

        alert("Comprete todos os campos!!!")
    }
}

function mostrarTeste(){
	
	stringTeste = vetorTeste.join("<br>");
   
    var lblMostrarTeste = document.getElementById("mostrarTestes");
    lblMostrarTeste.innerHTML = stringTeste;

}

function limpaTxt(){
    NomeDoTeste = document.getElementById("idNomeTeste").value = "";
    OqueSeraFeito = document.getElementById("idOqueseraFeitoNoTeste").value = "";
    ResultadoEsperado = document.getElementById("idResultadoEsperado").value = "";
    ResultadoButton=''
}
