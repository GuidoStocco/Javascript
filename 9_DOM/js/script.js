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


// Selecionando elementos por querySeletorAll
const listProducts = document.querySelectorAll(".product");
console.log(listProducts);

// querySeletor
const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);


// insertBefore

const p = document.createElement("p");

const header = title.parentElement

header.insertBefore(p, title);