// ORIENTAÇÃO A OBJETOS

// MÉTODOS
const gato = {
    miado: function() {
        console.log("Miauu")
    },
    pulo: function(){
        console.log("Pulou")
    }
};

gato.miado();
gato.pulo();


// MAIS SOBRE MÉTODOS
const cachorro = {
    raca: "SRD",
    latir: function() {
        console.log("au au")
    },
    pulo: function(){
        console.log("Pulou")
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
};

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca())



// PROTOTYPE
const pessoa = {
    pe: 2,
};

console.log(Object.getPrototypeOf(pessoa));


// MAIS SOBRE PROTOTYPE
let carro = {
    porta: 2,
};

let carroNovo = Object.create(carro);

console.log(carroNovo.porta);
console.log(Object.getPrototypeOf(carroNovo) === carro);



// CLASSES
let dog = {
    patas: 4,
    raca: "SRD",
    latir: function (){
        console.log("au au")
    }
};

let labrador = Object.create(dog);

labrador.latir();
labrador.raca = "labrador";

console.log(labrador.raca);
console.log(dog.raca);

let pastor = Object.create(dog); // Outro objecto a partir da classe que aproveita as propriedades do prototype
pastor.raca = "Pastor Alemão";

console.log(pastor.raca);



//Instanciando classes por função
function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
};
let pastorAlemao = criarCachorro("Pastor Alemão", 4, "Marrom");
console.log(pastorAlemao);
console.log(pastorAlemao.cor);