//selecionar elemento
// const numberInput = document.getElementById("number");
// 
// const apagar = document.getElementById("apagar");
// const tabuada = document.querySelector("#tabuada");
// 
// 
// let tabuadaHtml = '';
// 
// function
// function calcular() {
    // const inputValue = numberInput.value;
// 
    // for(let i = 1; i <= 10; i++){
        // tabuadaHtml += `${i} x ${inputValue} = ${i * inputValue} <br>`
    // }
    // 
    // tabuada.innerHTML = tabuadaHtml
// 
    // 
// }
// 
// calcular();
// 
// 
// 
// 

// somar
// function somar(a,b){
    // return a + b;
// };
// 
// console.log(somar(5,5));

const arr = [1,2,3,'alo',true];

const arr1 = arr.filter((el, i, _arr) => {
    return typeof el === 'number'
});

console.log(arr1);

