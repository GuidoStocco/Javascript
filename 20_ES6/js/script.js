// Filter
// método de array para filtrar dados baseados em alguma condição que estabelecemos

const arr = [1,2,3,4,5];

const highArr = arr.filter((n) => {
    if(n >= 3){
        return n;
    }
});

console.log(highArr);
//

const users = [
    {nome:"guido", avalible:true},
    {nome:"pedro", avalible:false},
    {nome:"joao", avalible:false},
    {nome:"ravena", avalible:true},
];

const usersAvalible = users.filter((user) =>{
    return user.avalible;
});
//negação false usando !
const notUsersAvalible = users.filter((user) =>{
    return !user.avalible;
});


console.log(usersAvalible)
console.log(notUsersAvalible)



// Map
// é um método de array que percorre todos os elementos
const produtos = [
    {name: 'Camisa', price: 10.99, category:'roupas'},
    {name: 'ferro de passar', price: 50.99, category:'eletro'},
    {name: 'fogao', price: 400, category:'eletro'},
    {name: 'calça', price: 30.99, category:'roupas'}
]

produtos.map((produto) => {
    if(produto.category === 'roupas'){
        produtos.comDesconto = true
    }
});

console.log(produtos)


// Destructuring em objetos e array
const frutas = ["Maça", "Laranja", 'Melão'];

const [nada, fruta2, fruta3] = frutas;
console.log(nada)
console.log(fruta3)
//
// destructuring em objetos

const pessoa = {
    nome: "guido",
    idade: 24,
    profissao: "desenvolvedor"
};

const {nome, idade, profissao: dev} = pessoa

console.log(dev)
console.log(idade)