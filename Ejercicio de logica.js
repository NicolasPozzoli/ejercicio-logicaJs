function findUniqueNumber(setNumbers) {
    //copia del array original
  const numbers = [...setNumbers];
  
    //variable para guardar el número único
  let uniqueNumber;
  
    //recorre el array y busca el número único
  for (let i = 0; i < numbers.length; i++) {
      let count = 0;
  
      //contador de apariciones del número actual
  for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
          count++;
        }
      }
  
      //si el número solo aparece una vez, actualiza la variable uniqueNumber
  if (count === 1) {
        uniqueNumber = numbers[i];
        break; 
  }
    }
  
    //devuelve el número único encontrado
  return uniqueNumber;
  }
  
  //EJEMPLO
  const input = [2, 2, 5, 4, 6, 5, 4];
  console.log(findUniqueNumber(input)); //en este ejemplo el numero 6 es el unico 
                                        //que no se repite
  