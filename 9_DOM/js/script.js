// MOVENDO-SE PELO DOM
/*
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
*/

// Selecionando por Tags getElementsByTagName

const listItems = document.getElementsByTagName("li")
console.log(listItems);


// Selecionando o elemento pelo ID
const title = document.getElementById("tittle");
console.log(title);


// Selecionand elemento por CLASSES
const listProduct = document.getElementsByClassName("product");
console.log(listProduct);