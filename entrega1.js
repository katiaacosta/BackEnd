class Usuario {

  constructor(nombre,apellido,libros,mascotas){
    this.nombre = nombre,
    this.apellido = apellido,
    this.libros = libros,
    this. mascotas = mascotas
  } 

  getFullName(){
    console.log(this.nombre + " " + this.apellido);
  }

  countMascotas(){
    console.log("Cantidad de mascotas: " + this.mascotas.length);

  }

  addBook(nom, au){
    const libroNuevo = {
      nombre : nom,
      autor : au
    }
    this.libros.push(libroNuevo)
  }

  getBookNames(){
    const nombre = (libros) => {
      return libros.nombre
    }

    const salida = libros.map(nombre)
    console.log("libros: " + salida);

  }
}

const libros = [
  {
    nombre: "El arte de la doma clasica",
    autor: "Pepito1"
  },
  {
    nombre: "El arte",
    autor: "Pepito2"
  },
  {
    nombre: "El gato negro",
    autor: "Pepito3"
  },
  {
    nombre: "Cien años de soledad",
    autor: "Pepito4"
  },
  {
    nombre: "Metamorfosis",
    autor: "Pepito5"
  },
  {
    nombre: "Orgullo y prejuicio",  
    autor: "Pepito6"
  }
];

const mascotas = ["gato", "perro", "conejo"];

const usuario = new Usuario("Katia","Acosta",libros,mascotas)
usuario.getFullName();
usuario.countMascotas();
usuario.addBook("nombreLibroNuevo", "autorLibroNuevo"); 
usuario.getBookNames();
usuario.addBook("nombreLibroNuevo2", "autorLibroNuevo2"); 
usuario.getBookNames();





