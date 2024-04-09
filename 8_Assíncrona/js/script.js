/*
console.log("Ainda não executou");

setTimeout(function(){
    console.log("Requisição Assíncrona");
}, 2000);

console.log("Ainda não executou");


// FUNÇÃO setInterval

console.log("Ainda não executou 2");

//setTimeout(function(){
//    console.log("Intervalo Assíncrono");
//}, 3000);

console.log("Ainda não executou 2");


// PROMISES

const promessa = Promise.resolve(24 + 24);

console.log("Algum código");

promessa.then((value) => {
    console.log(`A soma é ${value}`)
});

console.log("Outro código");
*/

// async function

async function somaComDelay(a, b){
    return a + b
};

somaComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é ${value}`)
});



// async await
function resolveComDelay(){
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve("Resolveu a promise")
        }, 2000)
    })
}