export class Student {
    nombre: string;
    apellidos: string;
    dni: string;
    poblacion: string;
    sexo: string;
    hobbies: Array<string> = [];

    constructor(
        nombre: string,
        apellidos: string,
        dni: string,
        poblacion: string,
        sexo: string,
        hobbies: Array<string>
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.poblacion = poblacion;
        this.sexo = sexo;
        this.hobbies = hobbies;
    }
}
