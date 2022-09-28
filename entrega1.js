class Usuario {

  constructor(nombre,apellido,Libros,mascotas){
    this.nombre = nombre,
    this.apellido = apellido,
    this.Libros = Libros,
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
    this.Libros.push(libroNuevo)
  }

  getBookNames(){
    const nombre = (Libros) => {
      return Libros.nombre
    }

    const salida = Libros.map(nombre)
    console.log("Libros: " + salida);

  }
}

const Libros = [
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

const usuario = new Usuario("Katia","Acosta",Libros,mascotas)
usuario.getFullName();
usuario.countMascotas();
usuario.addBook("nombreLibroNuevo", "autorLibroNuevo"); 
usuario.getBookNames();
usuario.addBook("nombreLibroNuevo2", "autorLibroNuevo2"); 
usuario.getBookNames();





