
document.write('<h3>Mostrando acciones dentro de cuenta bancaria</h3>');
class cuentaBancaria{
    #saldo = 0;

    depositar(monto){
        document.write(`El monto a depositar es ${monto}`, '<br>');
        let itf = monto * 0.005;
        document.write(`El ITF es: ${itf}`, '<br>');
        this.#saldo = monto - itf;
        document.write(`Se depositó: ${this.#saldo}`, '<br>');
    }

    retirar(monto) {
        if (monto <= this.#saldo) {
            document.write(`El monto a retirar es ${monto}`, '<br>');
            let itf = monto * 0.005;
            document.write(`El ITF es: ${itf}`, '<br>');
            let retiro = monto - itf;
            this.#saldo -= retiro;
            document.write('Se retiró: '+retiro, '<br>');
        } else {
            document.write('Fondos Insuficientes', '<br>');
        }
    }

    verSaldo() {
        document.write(`<b>Saldo Actual:</b> ${this.#saldo}`, '<br>');
    }

}


const MiCuenta = new cuentaBancaria();

MiCuenta.depositar(200);
MiCuenta.verSaldo();
MiCuenta.depositar(300);
MiCuenta.verSaldo();
MiCuenta.retirar(156);
MiCuenta.verSaldo();
