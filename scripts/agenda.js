const cidade = document.querySelector('.cidade');
const dia = document.querySelector('.dia');
const mes = document.querySelector('.mes');
const setas = document.querySelector('.setas');
const ano = document.querySelector('.ano');
let btn = document.getElementById('botao')
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


carregar(0,"2024");