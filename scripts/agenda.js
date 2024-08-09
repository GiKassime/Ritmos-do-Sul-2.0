const cidade = document.querySelector('.cidade');
const dia = document.querySelector('.dia');
const mes = document.querySelector('.mes');
const setas = document.querySelector('.setas');
const ano = document.querySelector('.ano');
let btn = document.getElementById('botao')
const locais = [
    "Ginásio Poliesportivo", "Maracanã", "Teatro Guaíra",
    "Allianz Parque", "Mineirão", "Arena do Grêmio",
    "Centro de Eventos", "Arena Fonte Nova", "Estádio Nacional",
    "Arena da Amazônia", "Classic Hall", "Arena das Dunas", "Beira-Mar",
    "Mangueirão", "Goiânia Arena", "Autódromo", "Pedra da Cebola"
];

const cidades = [
    "Guarulhos - SP", "Rio de Janeiro - RJ", "Curitiba - PR", 
    "São Paulo - SP", "Belo Horizonte - MG", "Porto Alegre - RS",
    "Fortaleza - CE", "Salvador - BA", "Brasília - DF", 
    "Manaus - AM", "Recife - PE", "Natal - RN", "Florianópolis - SC",
    "Belém - PA", "Goiânia - GO", "Campo Grande - MS", "Vitória - ES"
];
const dias = ["09", "23", "31", "05", "18", "11", "27", "15", "03", "20", "14", "08", "22", "10", "30", "16", "25"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio"];
var x = 0
var anoo = "2024"
function voltar(){
    x -=1
    if (x < 0) {
        x = dias.length -1;
    }
    if(x < 12){
        anoo = "2024"
    }else{
        anoo = "2025"

    }
    carregar(x,anoo);
    
  //aqui é só pra dar uma diferenciada e colocar ano, como n tem todos os meses e tals vou colocar pela quantidade que tem no array
        
}
function avancar(){
   
    x +=1;
    if (x >= dias.length) {
        x = 0;
    }
    if(x < 12){
        anoo = "2024"
    }else{
         anoo = "2025"
    }
    carregar(x,anoo);
}

function carregar(x, anoo){
    dia.innerHTML = dias[x];
    cidade.innerHTML = cidades[x];
    mes.innerHTML = meses[x];
    ano.innerHTML = anoo;
}

function abrirAviso(){
    aviso.showModal()
    var mensagem = "O show em "+ cidades[x]+" ocorrera no dia "+ dias[x]+" de "+meses[x]+" de "+anoo+"<p style='color:#d7e414'>"+locais[x]+"</p><p>VENHA ESCUTAR A MELHOR BANDA SERTANEJA DA AMÉRICA LATINHA <span>RITMOS DO SUL</span></p>";
    document.getElementById("aviso").innerHTML = mensagem;
}
carregar(0,"2024");