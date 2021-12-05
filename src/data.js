
//FILTRO GENERAL:
const functionAll = (array, condicion) => {
  return array.filter(condicion);
};

/* funcion para obtener un arreglo de solo paises, deportes y genero*/
const allCountries = (countries) => {
  const newArrCountries = countries.map(newTeam => {
    return newTeam.team
  });
  return new Set(newArrCountries);
}

const allSport = (sport) => {
  const newArrSport = sport.map(newTeam => {
    return newTeam.sport
  });
  return new Set(newArrSport);
}

const allTeams = (athletes) => {
  const allTeamsWithDuplicates = athletes.map(person => {
    return person.team
  });
  return new Set(allTeamsWithDuplicates);
}

const genderAll = (array) => {
  const newArrGender = array.map(gen2 => {
    return gen2.gender;
  });
  return new Set(newArrGender);

}
//FILTROS POR PAIS, DEPORTE, GENERO-
const filterByTeamFunc = (teamSelected) => {
  return (athlete) => athlete.team == teamSelected;
}

const filterBySportFunc = (sportSelected) => {
  return (athlete) => athlete.sport == sportSelected;
}

const filterByGender = (genderSelected) => {
  return (athlete) => athlete.gender == genderSelected;
}

//ORDENAR:
const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder) {//true
    return data.sort(sortBy);/*con el metodo sort hago una ordenacion alfabetica. Con sortBy (funcion 
            de comparacion) ordenara bajo un mi criterio*/
  } else {//false
    return data.sort(sortBy).reverse();
  }

}

const sortByName = (athlete1, athlete2) => {//ordeno atletas
  if (athlete1.name > athlete2.name) {
    /*si el primer elemento es mayor se colocara en una posicion
     despues del segundo*/
    return 1;
  }
  if (athlete1.name < athlete2.name) {
    return -1;
    /*si el lemento es menos que el segundo se resta y se coloca 
    en una posicion menor al segundo.*/
  }
  return 0;
  /* si los dos elementos son iguales se quedaran en la misma posicion*/
};

const sortByAge = (athlete1, athlete2) => {
  if (athlete1.age > athlete2.age) {
    return 1;
  }
  if (athlete1.age < athlete2.age) {
    return -1;
  }
  return 0;
};


const computeData = (datos) => {
  const mapCountry = new Map();
  //Aqui inicializamos nuetro mapa de paises con todas las medallas en cero 
  for (let i = 0; i < datos.length; i++) {
    const element = datos[i];
    if (!mapCountry.has(element.team)) { //retorna un booleano indicando si el elemento especificado existe en el objeto Set o no.

      const initValue = { silver: 0, gold: 0, bronze: 0, total: 0 }
      mapCountry.set(element.team, initValue); //creando por primera vez el set dentro del Map 
    }
  }

  //Aqui vamos a contar todas las medallas 

  for (let i = 0; i < datos.length; i++) {
    const element = datos[i];

    const country = mapCountry.get(element.team);
    if (element.medal === "Gold") {
      country.gold = country.gold + 1;
    }
    if (element.medal === "Bronze") {
      country.bronze = country.bronze + 1;
    }
    if (element.medal === "Silver") {
      country.silver = country.silver + 1;
    }
    country.total = country.total + 1;
    mapCountry.set(element.team, country) ///Aqui reemplazamos con el nuevo objeto 

  }

  //transformando el Map en un array de noc y total 
  const array = [];
  mapCountry.forEach((value, key) => {
    const totalMedalByNoc = {
      team: key,
      gold: value.gold,
      silver: value.silver,
      bronce: value.bronze,
      total: value.total
    };
    array.push(totalMedalByNoc);
    //console.log(totalMedalByNoc);
  })
  //Ordenando de mayor a menor el total de medallas por pais
  return array.sort(function (prev, next) {
    if (prev.total < next.total) {
      return 1;
    }
    if (prev.total > next.total) {
      return -1;
    } return 0;
  });
};

const computeDataTwo = (datos) => {
  const mapAthletes = new Map();
  for (let j = 0; j < datos.length; j++) {
    const element = datos[j];
    if (!mapAthletes.has(element.name)) { //probará su presencia en el objeto Set
      const initValueAthletes = {
        gold: 0,
        bronze: 0,
        silver: 0,
        total: 0
      }
      mapAthletes.set(element.name + " " + element.team, initValueAthletes) //El key es element.name y el value es todo lo q esta en la var initValueAthletes
      //console.log(mapAthletes);
    }
  }
  //Aqui vamos a contar todas las medallas 
  for (let j = 0; j < datos.length; j++) {
    const element = datos[j];
    const athletes = mapAthletes.get(element.name + " " + element.team);
    if (element.medal === "Gold") {
      athletes.gold = athletes.gold + 1;
    }
    if (element.medal === "Bronze") {
      athletes.bronze = athletes.bronze + 1;
    }
    if (element.medal === "Silver") {
      athletes.silver = athletes.silver + 1;
    }
    athletes.total = athletes.total + 1;
    mapAthletes.set(element.name + " " + element.team, athletes) ///Aqui reemplazamos con el nuevo objeto 
    //console.log(mapAthletes);
  }
  //transformando el Map en un array de atletas, pais y medallas  
  const arrayAthletes = [];
  mapAthletes.forEach((value, key) => {
    const totalMedalByAthletes = {
      name: key,
      gold: value.gold,
      silver: value.silver,
      bronce: value.bronze,
      total: value.total
    };
    arrayAthletes.push(totalMedalByAthletes);

  })
  //Ordenando de mayor a menor el total de medallas por atletas 
  return arrayAthletes.sort(function (prev, next) {
    if (prev.total < next.total) {
      return 1;
    }
    if (prev.total > next.total) {
      return -1;
    } return 0;
  });
}
//FUNCION QUE REFRESCA LA PAG 
function reload() {
  location.reload();
}
export {
  functionAll,
  allCountries,
  allSport,
  allTeams,
  sortData,
  sortByName,
  sortByAge,
  computeData,
  computeDataTwo,
  genderAll,
  filterByTeamFunc,
  filterBySportFunc,
  filterByGender,
  reload,
}
