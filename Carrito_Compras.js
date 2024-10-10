document.write('<h3>Mostrando carrito</h3>');
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor(){
        this.carrito = [];
    }

    agregarProducto(producto){
        document.write('Se agrega el producto: '+producto.nombre + ' y tiene un precio de: '+producto.precio, '<br>');
        this.carrito.push(producto);
    }

    eliminarProducto(nombre){
        let index = 0;
        this.carrito.forEach( producto => {
            if (producto.nombre == nombre){
                this.carrito.splice(index, 1);
            }
            index++;
        })
    }

    CalcularTotal(){
        let total = 0;
        let descuento = 0;
        this.carrito.forEach( producto => {
            total += producto.precio;
        })

        document.write('El precio total de los productos es: '+total, '<br>');
        if(total > 3000){
            descuento = total*0.10;
            total -= descuento;
            document.write('Tiene un descuento de: '+descuento, '<br>');
            document.write('Precio luego de aplicar el descuento: '+total, '<br>');
        }
        let igv = parseFloat((total * 0.18).toFixed(2));
        document.write('El IGV es: '+igv, '<br>');
        total += igv;
        document.write('El total final: '+total, '<br>');
    }

    mostrarProductos(){
        document.write('<b>Se muestra un listado con los productos del carrito</b>', '<br>');
        let indice = 1;
        this.carrito.forEach(producto =>{
            document.write(`Producto ${indice}: ${producto.nombre}, Precio: ${producto.precio}`, '<br>');
            indice++;
        })
    }
}

const carrito1 = new Carrito();

const Producto1 = new Producto("Arroz", 20);
const Producto2 = new Producto("Azucar", 30);
const Producto3 = new Producto("Harina", 40);
const Producto4 = new Producto("Agua", 4000);


carrito1.agregarProducto(Producto1);
carrito1.agregarProducto(Producto2);
carrito1.agregarProducto(Producto3);
carrito1.agregarProducto(Producto4)
carrito1.mostrarProductos();
carrito1.CalcularTotal();

carrito1.eliminarProducto("Arroz");

carrito1.mostrarProductos();
