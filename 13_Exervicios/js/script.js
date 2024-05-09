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


