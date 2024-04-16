// Array e Iteradores
const estoque = ['arroz', 'feijao', 'macarrão', 'açucar', 'batata', '']
const preco = [3.50, 5, 3.50, 2, 2.50, 0]

// forEach
//estoque.forEach((valor, index, array ) => {
  //  console.log(valor, index)
//}); 

// map
//const retornoMap = estoque.map((valor, index, array) => {
  //  return `${valor} ${index}`
//});

// reduce
//const total = preco.reduce((acc, valor, index, array) =>{
//    return acc + valor
//}, 0);;


// find - retorna todo valor q for true
//const resultado = estoque.find((valor, index, array) => {
  //  return  valor;
//});


// findindex - retorna o index desse valor
//const result = estoque.findIndex((valor, index, array) => {
 //  return  valor;
//});


// some - vai retorna um boolean, true ou false. Precisa ter um item para retorna true
const resultado1 = estoque.some((valor, index, array) => valor);

