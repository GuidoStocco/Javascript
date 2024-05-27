// PROGRAMAÇÃO ASSÍNCRONA

// callbacks com setTimeOut
console.log("1")

//setTimeout(function() {
 //   console.log("5")
//}, 2000);

console.log("1")


// Promise
/*
let promessa = Promise.resolve(5 + 5);

console.log("outros códigos"); // códigos aleatórios

console.log(promessa);

promessa.then(
    (value) => {return value + 10})
    .then((value) => {console.log(value)}
);

// Promise com falha
// usamos o catch
let promessaErrada = Promise.resolve(new Error("Aconteceu um erro"));

promessaErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("Erro: " + reason));     

*/

// REJECT
/*
function rejeitado(num){
    return new Promise((resolve,reject) =>{
        if(num == 2){
            resolve(console.log(`O número é ${num}`))
        } else{
            reject(new Error("Falhou"))
        }
    });
};

rejeitado(2);
rejeitado(3);
*/


//Resolvendo várias promises
//com o método all, podemos resolver várias promessas de uma vez só
const p = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve(10)
    }, 5000);
})

const p1 = Promise.resolve(10);

const p2 = new Promise((resolve, reject) =>{
    resolve(10)
});

Promise.all([p,p1,p2]).then((values) => console.log(values));


// async function
async function somar(a, b) {
    return a + b ;
};

somar(2, 2).then((value) => {
    console.log(value);
});



//  await - esperar uma promise ser resolvida para apresentar os resultados
function multiplicar(c, d){
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(c*d);
        }, 4000);
    });
};

async function multiply(b,c,d) {
    let x = multiplicar(c,d)
    let y = b;

    return await x * y;
};

multiply(8,2,6).then((value) => console.log(value));



// generators
function* criadorId(){
    let id = 0;
    while(true){
        yield id++
    };
};

let criarId = criadorId();

console.log(criarId.next().value);
console.log(criarId.next().value);
console.log(criarId.next().value);

console.log(criarId);
