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

// appendChild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);


// replaceChild

const h2 = document.createElement("h2")

h2.textContent = "Meu novo título"

header.replaceChild(h2, title);

console.log(h2);


// creatTextNode

const myText = document.createTextNode("Um novo texto com textnode")

const h3 = document.createElement("h3")

h3.appendChild(myText);

mainContainer.appendChild(h3)
console.log(h3)

const mySecondText = document.createTextNode("texto em branco")
const h4 = document.createElement("h4")
h4.appendChild(mySecondText)
header.appendChild(h4)


// Trabalhando com Atributos

const firstLink = navLinks.querySelector("a")

firstLink.setAttribute("href", "https:www.google.com.br")

firstLink.setAttribute("target", "_blank")


// Altura e Largura offsetWidth e offsetHeight

const footer = document.querySelector("footer")
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

