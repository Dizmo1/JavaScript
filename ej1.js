let edad=prompt("Introduce una edad: ");
let cadena;

if(edad>=18){
      cadena="Puedes conducir, tienes "+edad+" años"
}else{
      let faltan;
      faltan=18-edad;
      cadena="No puedes conducir, tienes "+edad+" años. Te faltan "+faltan+" años para poder conducir"
      console.log(faltan);
}

console.log(edad);