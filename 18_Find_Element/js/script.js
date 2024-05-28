// Encontrando elementos por Tag
console.log(document.getElementsByTagName('h1'));

// Encontrando elementos por Id
console.log(document.getElementById('#byid'))

//Encontrando elemento por Classname
console.log(document.getElementsByClassName('.paragrafo'));

// Encontrando elementos por querySelector

console.log(document.querySelector('h2'));



// Inserindo texto em um elemento
//criando nó de texto
let footerH2 = document.getElementById('#footerh2');

let texto = document.createTextNode('texto dentro do h2')

footerH2.appendChild(texto);



// CRIANDO UM EVENTO
// addEventoListener
