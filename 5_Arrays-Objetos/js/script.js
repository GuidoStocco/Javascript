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
/*
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

// MÉTODO DE ARRAY SLICE

const metodoSlice = ['a', 'b', 'c', 'd', 'e', 'f'];

const testeSlice = metodoSlice.slice(2, 4);

console.log(testeSlice);

console.log(metodoSlice);

const testeSlice2 = metodoSlice.slice(2, 4 + 1);

console.log(testeSlice2);

// ForEach

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) =>{
    console.log(`o número é ${numero}`);
});
*/

// INCLUDES
/*
const brands = ["bmw", "fiat", "nissan"];

console.log(brands.includes("fiat"));
console.log(brands.includes("honda"));

if(brands.includes("bmw")){
    console.log("há carros da marca BMW!")
};

// REVERSE

const inverte = [1, 2, 3, 4, 5];

inverte.reverse();

console.log(inverte);
*/

// MÉTODOS DE STRING: TRIM
/*
const trimTest = " testando \n ";
console.log(trimTest);
console.log(trimTest.trim());

// padStart

const testePadStart = "1";
const number = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(number);

// SPLIT

const testeSplit = 'o rato roeu a roupa do rei de roma';
const arrayDaFrase = testeSplit.split(' ');
console.log(arrayDaFrase);

// Join
const testeSplit2 = arrayDaFrase.join(' ');
console.log(testeSplit2);

const itemsPraComprar = ['Mouse', 'Teclado', 'Monitor'];

const comprar = `Precisamos comprar: ${itemsPraComprar.join(', ')}.`;
console.log(comprar);

// Repeat

const testeRepeat = 'Repetindo ';
console.log(testeRepeat.repeat(5));
*/
// 

// REST OPERATOR / REST PARAMETERS
/*
const somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i < args.length; i++) {
        total += args[i]
    }

    return total;
};

console.log(somaInfinita(1, 2, 3));

// for of

const somaInfinita2 = (...args) => {

    let total = 0

    for(num of args) {
        total += num;
    }
    return total;
};
console.log(somaInfinita2(1, 23, 412));

// DESTRUCTURING EM OBJETOS

const userDetails = {
    firstName:'Guido',
    lastName: 'Stocco',
    job: 'Programador'
}
const {firstName, lastName, job} = userDetails
console.log(firstName, lastName, job);
// RENOMEAR VARIÁVEIS
const {firstName: primeironome} = userDetails;
console.log(firstName);

// DESTRUCTURING EM ARRAYS

const myList = ['carro', 'moto', 'quadriciculo']
const[veiculoA, veiculoB, veiculoC] = myList
console.log(veiculoA, veiculoB, veiculoC);
*/

