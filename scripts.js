// Objetos Literales
const nombres = "Javier Ignacio"
const apellido = "Gutiérrez"
const edad = 36
const padre ={
    nombre: "Guillermo Gutiérrez",
    edad: 62
}
const hermanos = ["Cristian", "Camila"]


const alumno = {
    nombres: "Javier Ignacio",
    apellidos: "Gutiérrez Gutiérrez",
    edad: 36,
    padre: {
        nombre: "Guillermo Gutiérrez",
        edad: 62
    },
    hermanos: ["Cristian", "Camila"],
    // Métodos del objeto
    presentarse(){
        console.log(`Hola, mi nombre es ${this.nombres} ${this.apellidos}, y tengo ${this.edad} años.`)
    }
}

const alumni = {
    nombres,
    apellido,
    edad,
    padre,
    hermanos
}


alumno.genero = "Masculino"
// alumno["genero"] = "Masculino"
alumno.edad = 37

console.log(alumno)
console.log(alumni)

// console.log(alumno["hermanos"])
// console.log(alumno.hermanos)

/*
A propiedades que ya tienen valor, si se los cambiamos, después de eso tienen el nuevo valor. En cambio
si añadimos una propiedad nueva con su valor, aparecerá siempre con el valor dado.
*/