class Persona10{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        document.write(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`, '<br>');
    }
}

class Estudiante10 extends Persona10{
    constructor(nombre, edad){
        super(nombre, edad);
        this.notas = [];
    }

    agregarNota(nota){
        if (nota <= 20 && nota >= 0){
            this.notas.push(nota);
        } else {
            document.write('Error, nota inválida', '<br>');
        }
    }

    calcularPromedio(){
        let promedio = 0, notatotal = 0;
        this.notas.forEach(nota =>{
            notatotal += nota;
        })
        promedio = notatotal/(this.notas.length);
        document.write(`El promedio es: ${promedio}`, '<br>');
    }

    imprimirNotas(){
        document.write('<h3>Listado de las notas y el promedio </h3>')
        this.saludar();
        let i = 1;
        this.notas.forEach(nota =>{
            document.write(`Nota${i}: ${nota}`, '<br>');
            i++;
        })
    }
}

const new_estudiante = new Estudiante10("Andres", 19);

new_estudiante.agregarNota(16);
new_estudiante.agregarNota(17);
new_estudiante.agregarNota(13);
new_estudiante.agregarNota(14);
new_estudiante.agregarNota(15);
new_estudiante.imprimirNotas();
new_estudiante.calcularPromedio();