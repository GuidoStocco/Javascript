// PROGRAMAÇÃO ASSÍNCRONA

// callbacks com setTimeOut
console.log("1")

//setTimeOut(function() {
 //   console.log("5")
//}, 2000);

console.log("1")


// Promise
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