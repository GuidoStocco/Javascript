// ARRAYS
// const diaSemana = ['domingo',"segunda", "terça", 'quarta', 'quinta', 'sexta', 'sabado']
// 
// const data = new Date();
// const diaSemanaHoje = data.getDay();
// console.log(`Hoje é dia ${diaSemana[diaSemanaHoje]}`);

//
const tabela = document.querySelector("#tabela_body");

const produtos = [
    {nome:"caneta", preco: 1.00, quantidade: 5},
    {nome:'lapis', preco: 2.00, quantidade: 5},
    {nome:'roupa', preco: 100, quantidade: 5},
    {nome:'computador', preco: 1000, quantidade: 5}
];

for(let i = 0; i < produtos.length; i++){
    tabela.innerHTML += `<tr>
    <th>${produtos[i].nome}</th>
    <th>${produtos[i].preco.toFixed(2)}</th>
    <th>${produtos[i].quantidade}</th>
</tr>`
};
// 
// produtos.forEach(() => {
    // tabela.innerHTML += `<tr>
    // <td>${produtos.nome}</td>
    // <td>${produtos.preco}</td>
    // <td>${produtos.quantidade}</td>
// </tr>
// `
// })