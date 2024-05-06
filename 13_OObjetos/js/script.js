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