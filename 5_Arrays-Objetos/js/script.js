/*// ARRAYS
const lista = [1, 2, 3, 4, 5]
console.log(lista);
console.log(typeof lista);

// PROPRIEDADES

const number = [5, 3, 4];

console.log(number.length);

console.log(number["length"]);

const myName = "Guido";

console.log(myName.length);
console.log(myName["length"]);

// MÉTODOS

const otherNumbers = [1, 2, 3];

const allNumbers = number.concat(otherNumbers);
console.log(allNumbers);
//

const txt = "GUIDO";

console.log(txt.toLowerCase());

// OBJETOS 

const person = {
    name: "Guido",
    age: 24,
    job: "Programador",
};
console.log(person);
console.log(person.name);

// MAIS SOBRE OBJETOS

const obj = {
    a: "teste",
    b: true,
};
console.log(obj);
//
const obj2 = {
    c: ["Guido"],
};
Object.assign(obj2, obj);
console.log(obj2);

// CONHECENDO MELHOR OS OBJETOS

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.entries(obj));

// MUTAÇÃO

const a = {
    name: "Guido",
};
const b = a;
console.log(a);
console.log(b);
console.log(a === b);

a.age = 31;
console.log(b); 
*/

// LOOP EM ARRAY

const users = ["guido", "mateus", "joão", "miguel"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

// PUSH AND POP

const array = ['a', 'b', 'c'];
array.push('d');
console.log(array);

array.pop();
console.log(array);

// SHIFT UNSHIFT

const letters = ["a", "b", "c"];
const letter = letters.shift();
console.log(letters);

letters.unshift("z", "s");
console.log(letters);


// indexOf e lastIndexOf

const myElements = ['morango', 'pêra', 'maça', 'abacate', 'uva'];
console.log(myElements.indexOf('pêra'));
console.log(myElements.lastIndexOf('uva'));