// Array e Iteradores
const estoque = ['arroz', 'feijao', 'macarrão', 'açucar', 'batata', '']
const preco = [3.50, 5, 3.50, 2, 2.50, 0]

// forEach
/*estoque.forEach((valor, index, array ) => {
    console.log(valor, index)
}); */

// map
const retornoMap = estoque.map((valor, index, array) => {
    return `${valor} ${index}`
});