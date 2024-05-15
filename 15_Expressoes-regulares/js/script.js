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
                                  
const reg3 = /[0-9]/; // jeito certo de fazer
//confirmar se há números dentro da string
console.log(reg3.test("temos o numero "))
console.log(reg3.test("temos o numero 43"))


// caracteres especiais
const pontoRegex = /./ ;
//o ponto aceita tudo menos quebra de linha
console.log(pontoRegex.test('asd'))
console.log(pontoRegex.test('123'))
console.log(pontoRegex.test(' '))

const dRegex = /\d/; // [0-9]
//aceita qualquer digito
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("123dsad"))
