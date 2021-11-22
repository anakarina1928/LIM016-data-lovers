const functionAll = (array, countries) => {

  //const newCountry = [];
  return array.filter(athlete => athlete.team === countries);//el array de atletas que pertenecen a un pais

    //console.table(person, 'hola'); //para filtrar toda la tabla de datos
    //newCountry.push(person.team);
    
    //console.log(person.team, 'holi'); //para filtrar por categorias   

  //noRepeatCountry = new Set (newCountry);//El SET es para que no se repitan los países
  

  //console.log(newCountry);
    //PARA ORDENAR LOS PAÍSES DE LA A - Z
    
  //console.log(noRepeatCountry);
}
const genderAll = (array) => {
  //const newCountry = [];
  //return array.filter(gen2 => gen2.gender===gender); 
  const newArrGender = array.map(gen2 => {
    return gen2.gender;  
  });
    return new Set(newArrGender);
}

const allCountries = (countries) =>{ //SELECT --- Como coloco opciones en un select dinamico
  const newArrCountries = countries.map(newTeam =>{
   return newTeam.team;
  });
    return new Set(newArrCountries); //devuelve una coleccion de valores únicos
  //return console.log(typeof new Set(newArrCountries)); 
  
}


/*exporto mi funcion para usarla en otro partes de la aplicacion*/ 
// Este funcion recive 3 parametros, el primero es un Array de Athletas
// El segundo parametro es una funcion de comparacion que va a utilizar el metodo sort, de Array para ordernar.
// el tercer parametro se usara para ordenar de manera ascendente o descendente, este parametro es de tipo booleano: 
// Si es true entonces el ordenamiento sera ascendente, si es false entonces sera descendente
export const sortData = (data, sortBy, sortOrder) =>{
    
    if (sortOrder) {
        return data.sort(sortBy);/*con el metodo sort hago una ordenacion alfabetica. Con sortBy (funcion 
            de comparacion) ordenara bajo un criterio*/
    } else {
        return data.sort(sortBy).reverse();
    }
   
   }

  export const computeData = (datos, medal) =>{
    const arrayOfTeam =[];
    const deportes= datos.filter(athletes => athletes.medal === medal  )
      for (let i= 0; i < deportes.length; i ++){
        arrayOfTeam.push(deportes[i].team)
      }
      const teamOfSilver = [];
      for (let j=0; j < arrayOfTeam.length; j++){
        const totalSilverTeam = arrayOfTeam[j] + " " + arrayOfTeam.filter(team => team === arrayOfTeam[j]).length
        teamOfSilver.push(totalSilverTeam)
      }
      const uniqueTeam = new Set (teamOfSilver)
      //console.log(uniqueTeam);
   }

   export  {
    functionAll,
    allCountries,
    genderAll
  }




