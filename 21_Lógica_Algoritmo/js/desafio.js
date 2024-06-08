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


//

function positivo(n1,n2,n3){
    
    if(!n1 == true && !n2 == true && !n3 == true ){
        return "Verdadeiro"
    } 
};

console.log(positivo(1,2,3))