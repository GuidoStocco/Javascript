// let nota1 = 7;
// let nota2 = 7;
// let resultado = (nota1 + nota2) / 2;

// if(resultado >= 7){
//     console.log("Você foi aprovado!")
// } else{
//     console.log("Voce foi reprovado!")
// };


// // Juros
// function jurosFinal(valor, taxa, total){
//     const juros = valor * taxa * total;
    
//     console.log(`juros no valor de ${total} meses é de ${juros}`)
// };

// jurosFinal(2000, 0.03, 12);


// // Exercícios
// // usando o splice
// const cargos = ["fullstack", "front-end", 'backend', 'mobile']

// const cargoRemovido = cargos.splice(2,1)

// console.log(cargoRemovido);
// console.log(cargos)


// //desafio

// const carrinho = [
//     {
//         nome: "arroz",
//         preco: 7.00
//     },
//     {
//         nome: "feijão",
//         preco: 10.00
//     },
//     {
//         nome: "oleo",
//         preco: 8.00
//     }
// ];

// let totalCarrinho = 0;

// carrinho.forEach((item) => {
//     totalCarrinho = totalCarrinho + item.preco;
// });

// console.log(`O total do seu carrinho é: ${totalCarrinho}`)

// // Lista de contatos

// const listaContato = [
//     {nome: "Guido", telefone: '739999999'},
//     {nome: "Ravena", telefone: '739999999'},
//     {nome: "Felipe", telefone: '739999999'}
// ];

// function buscaContato(nomePessoa, contatos) {

//     if(!nomePessoa) {
//         console.log("O nome da pessoa é obrigatório!")
//         return "";
//     }

//     const contatoPessoas = listaContato.find((contato) => {
//         return contato.nome === nomePessoa;
//     })

//     if(!contatoPessoas){
//         return "Essa pessoa não está na lista de contato"
//     }

//     return `O ${nomePessoa} tem o telefone: ${contatoPessoas.telefone}`

// };

// const buscaGuido = buscaContato("pedro", listaContato);

// console.log(buscaGuido)


// ATIVIDADE

function criarPilha(){
    let elementos = [];

    function adicionar(elemento){
        elementos.push(elemento)
    };

    function pilhaVazia() {
        return elementos.length === 0;
    }

    function tamanho(){
        if(pilhaVazia()){
            return "A pilha está vazia"
        }

        return elementos.length;                                                 
    }

    function topoPilha(){
        if(pilhaVazia()){
            return "A pilha está vazia"
        }

        return elementos[elementos.length -1]
    }

    return{
        adicionar,
        tamanho,
        pilhaVazia,
        topoPilha,
    }
};

let pilha = criarPilha();

pilha.adicionar("10")
pilha.adicionar("20")