//
function votacao(idade){
    if(idade >= 18 && idade <= 75){
        return `Você tem ${idade} e já está elegivel para votar`
    } else if(idade > 75){
        return "Voto facultativo"
    } else {
        return "Você é de menor"
    };
};


console.log(votacao(75));