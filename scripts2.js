// Función Constructora (Constructor)

function Usuario(nombres, apellidos, correo, activo) {
    this.nombres = nombres,
    this.apellidos = apellidos,
    this.correo = correo,
    this.activo = activo
}

const Javier = new Usuario("Javier", "Gutiérrez", "ggutierrez.javier@gmail.com", true)
const Vae = new Usuario("Vae", "Kul", "vae@gmail.com", true)

console.log(Javier)
console.log(Vae)
