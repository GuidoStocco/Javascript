class Banco{
    constructor(saldo,){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }


};

let contaBanco = new Banco(0);
console.log(contaBanco)

contaBanco.deposito(1300);
console.log(contaBanco.saldo)

contaBanco.saque(600);
console.log(contaBanco.saldo)


//
class Carrinho{
    constructor(itens, qtd, valor){
        this.itens = itens;
        this.qtd = qtd;
        this.valor = valor;
    };

    addItem(item){

        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valor += item.preco * item.qtd;
    }


    removeItem(item){

    }

};

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "camisa",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({id:1, nome:"camisa", qtd:2, preco: 20});

console.log(carrinho);

carrinho.addItem({id:3, nome:"Bone", qtd:1, preco: 15});

console.log(carrinho);




//
class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    };

    set novaRua(novaRua){
        this.rua = novaRua;
    }

}

let endereco = new Endereco("José joaquim Seabra", "Centro", "Prado", "Bahia");
console.log(endereco);

endereco.novaRua = "Pedro Brás";
console.log(endereco);



//
class Carro{
    constructor (marca, cor, gasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo; // adicionado para medir o consumo do carro
    }

    dirigir(km){
        let litroConsumido = km / this.consumo;

        this.gasolina -= litroConsumido;
    };

    abastecer(l){
        this.gasolina += l;
    }


};

let carro = new Carro("Fiat", "Branco", 100, 15);
console.log(carro);

carro.dirigir(100);
console.log(carro);

carro.abastecer(10);
console.log(carro);



//
class Conta{
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    };

    deposito(valor){
        this.saldoCC += valor;
    };

    saque(valor){
        this.saldoCC -= valor
    };

    transferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor; 
    };

    transferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor; 
    };

    jurosDeAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }

};

let conta = new Conta(1000, 5000, 1);
console.log(conta);

conta.saque(1000);
console.log(conta);

conta.deposito(3000);
console.log(conta)

conta.transferenciaCP(2000);
console.log(conta);

conta.transferenciaCC(500);
console.log(conta)


conta.jurosDeAniversario();
console.log(conta)


//