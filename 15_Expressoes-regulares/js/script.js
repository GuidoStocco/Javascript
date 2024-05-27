//Expressoes regulares
// New RegExp ou /.../
/*
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


// Operador not ^
const reg5 = /^asd/;
console.log(reg5.test('asd'))
console.log(reg5.test('123'))
console.log(reg5.test('asd da213'))


// Operador ?
const reg6 = /Abacax?i/;

console.log(reg6.test("Abacaxi"));
console.log(reg6.test("Abacai"));


const reg7 = /\d+\w?/

console.log(reg7.test('123'))
console.log(reg7.test('123 a'))
console.log(reg7.test('123 '))
console.log(reg7.test(' '))

*/
/*
// Ocorrência precisa {}
const reg8 = /\d{4,5}-\d{4}/;

console.log(reg8.test('4004-5050'))
console.log(reg8.test('99999-8080'))
console.log(reg8.test('999-999'))
console.log(reg8.test('99999-9'))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test('(73) 55555-4444'));
console.log(tel.test("(48) 9999-9999"));


//Método exec
const digitos = /\d+/;

console.log(digitos.exec("tem o numero 100"))
console.log(digitos.exec("tem o numero"))


//Método match
// Esse método não é muito utilizado
const frase = "O numero 100 estar aqui".match(/\d+/); 

console.log(frase);


//choice pattern
const palavra = /\w+: (Guido|Joao|Maria)/;

console.log(palavra.test("nome: Guido"))
console.log(palavra.test("nome: ravena"))
console.log(palavra.test("nome: Joao"))

*/
/*
// Validando Dóminios
//[?www.] para não precisar digitar o www uma expressao mais avançada
const dominio = /[?www.]\w+\.com|.com.br/;

console.log(dominio.test("www.google.com"))
console.log(dominio.test("www.horadecordar.com.br"))
console.log(dominio.test("www.horadecordar"))
console.log(dominio.test("horadecordar.com.br"))


//Validando email
//Filtrar se algo tiver muito errado, sendo assim utilizamos isso
const email = /\w+@\w+\.\w+/;

console.log(email.test("lleaguebr@gmail.com"))
console.log(email.test("guidomarinho6@gmail.com"))
console.log(email.test("guidomarinho6@gmail"))
console.log(email.test("gmail"))



//Validando datas de nascimento
//Validando datas brasileiras que usam barras não traços
const dataNascimento = /[0-9]{2}[/][0-9]{02}[/][0-9]{4}/;
const dtNascimento = /[0-31]{2}[/][0-12]{02}[/][1920-2020]{4}/; // evitar que as pessoas burlem

console.log(dataNascimento.test("15/02/2000"))
console.log(dataNascimento.test("5/2/2009"))
console.log(dataNascimento.test("5-2-2009"))
console.log(dataNascimento.test("5/2/00"))
console.log(dtNascimento.test("99/99/1999"))

*/



//ATIVIDADES
 
// 1- REGEX QUE SÓ ACEITA LETRAS MAIÚSCULAS
const regs1 = /[A-Z]/;
console.log(regs1.test("TEWSTANDIO")) // TRUE
console.log(regs1.test("testando")) // FALSE
console.log(regs1.test("123")) // FALSE


// 2- REGEX QUE SÓ ACEITE STRINGS TERMINADO COM ID
const regs2 = /\d+ID\b/; // ESSE b COM A BARRA SIGNIFICA QUE A STRING TERMINA COM ID
console.log(regs2.test("1233ID")) // TRUE
console.log(regs2.test("asdasdaID")) // FALSE
console.log(regs2.test("ID")) // FALSE


// 3 - REGEX QUE SÓ ACEITE A SEGUINTE EXPRESSÃO "MARCA: nomedamarca"
//Pode variar para outras marcas ULTILIZANDO CHOICE PATTERN
const regs3 = /Marca: (Nike|Adidas|Pulma|Asics)/;
console.log(regs3.test("Marca: Nike")) //TRUE
console.log(regs3.test("Marca: nike")) // FALSE POR CAUSA DO SENSITIVE TEM Q SER IGUAL



// 4 - REGEX QUE VALIDE UM ENDEREÇO DE IP
const regs4 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/; //um intervalo que vai aceita de 1 a 3
//[0-9]{3}[.][0-9]{1}[.][0-9]{2}/
console.log(regs4.test("123.1.1.2")) // TRUE
console.log(regs4.test("8.8.8.8")) // TRUE


// 5- REGEX QUE VALIDA NOMES DE USUÁRIOS NO SISTEMA
const regs5 = /^(?=.{3,16}$)[a-z0-9-_]/ // ^(?=.$) SÃO OQ O SITE NÃO VAI ACEITAR
console.log(regs5.test("guido2024")) // TRUE
console.log(regs5.test("guido_24")) // TRUE
console.log(regs5.test("ga")) // FALSE
console.log(regs5.test("12312313412412323131231")) // FALSE






//
const regNome = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(regNome.test("(73)99115-2207"));
console.log(regNome.test("99115-2207"));
console.log(regNome.test("739989-3525"));
console.log(regNome.test(" "));