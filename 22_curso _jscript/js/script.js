// ARRAYS
// const diaSemana = ['domingo',"segunda", "terça", 'quarta', 'quinta', 'sexta', 'sabado']
// 
// const data = new Date();
// const diaSemanaHoje = data.getDay();
// console.log(`Hoje é dia ${diaSemana[diaSemanaHoje]}`);

//
const tabela = document.querySelector("#tabela_body");

const produtos = [
    {nome:caneta, preco: 1.00, quantidade: 5},
    {nome:lapis, preco: 2.00, quantidade: 5},
    {nome:roupa, preco: 100, quantidade: 5},
    {nome:computador, preco: 1000, quantidade: 5}
];

produtos.forEach((item) => {
    tabela.innerHTML = `<tr>
     <td>${produtos[item].nome}</td>
     <td></td>
     <td></td>
 </tr>`
})