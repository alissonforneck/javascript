export class Conta{
    constructor(saldoInicial,cliente,agencia){
        if (this.constructor == Conta){
            throw new Error ("Voce não deveria instanciar um objeto do tipo Conta diretamente pois essa é uma classe abstrata")
        }
        this.saldoInicial = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(nomeCliente){
        if(nomeCliente instanceof(Cliente)){
            this._cliente = nomeCliente
        }
    }
    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    //metodo abstrato
    saque(valor){
        throw new Error('O método Sacar da conta é abstrato')
    }
    _saque(valor, taxa){
        let valorSacado = valor * taxa
        if(this._saldo >= valor){
            this._saldo -= valorSacado
            return valorSacado
        }return 0
    }

    deposito(valor){
        if(valor <= 0 ) return
            this._saldo = valor
    }

    transferir(valor, conta){
        const valorTransferido = this.saque(valor)
        conta.deposito(valorTransferido)
    }
    teste(){
        console('Testand o funcionamento do super, estou na conta')
    }
}