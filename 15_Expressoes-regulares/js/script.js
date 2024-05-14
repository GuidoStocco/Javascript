//Expressoes regulares
// New RegExp ou /.../

const reg1 = new RegExp('marinho');

console.log(reg1.test('Guido marinho stocco'));
console.log(reg1.test("não tem o marinho"));

let text = "meu nome é guido marinho stocco";

console.log(reg1.test(text));


//conjunto utilizando o []
const reg2 = /12345/;

console.log(reg2.test('o conjunto tem o número 6?'));
console.log(reg2.test('o conjunto tem o número 2?'));

const reg3 = /0-9/; // jeito certo de fazer

console.log(reg3.test('temos o numero 9'))