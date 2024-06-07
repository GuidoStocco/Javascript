let nota1 = 7;
let nota2 = 7;
let resultado = (nota1 + nota2) / 2;

if(resultado >= 7){
    console.log("Você foi aprovado!")
} else{
    console.log("Voce foi reprovado!")
};


// Juros
function jurosFinal(valor, taxa, total){
    const juros = valor * taxa * total;
    
    console.log(`juros no valor de ${total} meses é de ${juros}`)
};

jurosFinal(2000, 0.03, 12);


// Exercícios
// usando o splice
const cargos = ["fullstack", "front-end", 'backend', 'mobile']

const cargoRemovido = cargos.splice(2,1)

console.log(cargoRemovido);
console.log(cargos)