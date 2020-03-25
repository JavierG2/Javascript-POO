class Usuario {
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
    }

    presentarse() {
        return `Hola, soy ${this.nombres} y mi correo es ${this.correo}`
    }

    // Métodos getters y setters
    // GET => Obtener
    // SET => Otorgar

    getNombres() {
        return this.nombres
    }
    getApellidos() {
        return this.apellidos
    }
    getCorreo() {
        return this.correo
    }
    getActivo() {
        return this.activo
    }

    setApellidos(nuevosApellidos) {
        this.apellidos = nuevosApellidos
    }
}

// HERENCIA
class Profesor extends Usuario {
    constructor(n, a, c, ac, cd, calificacion) {
        super(n, a, c, ac)
        this.cursosDictados = cd
        this.calificacion = calificacion
    }
}

class Alumno extends Usuario {
    constructor(nombres, apellidos, correo, activo, cursosTomados) {
        super(nombres, apellidos, correo, activo)
        this.cursosTomados = cursosTomados
    }
}

const javier = new Alumno("Javier", "Gutiérrez", "ggutierrez.javier@gmail.com", true, ["HTML", "CSS", "JS"]) // Instanciar un nuevo objeto
const vae = new Profesor("Vae", "Kul", "vae@gmail.com", true, ["BD", "Java"], 10)

/*
// Javier y Vae son instancias de la clase Usuario
console.log(javier)
console.log(vae)
*/

console.log(vae.presentarse())