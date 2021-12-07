import {
  functionAll,
  filterBySportFunc,
  filterByTeamFunc,
  filterByGender,
  sortData,
  sortByName,
  sortByAge,
  computeData,
  allCountries,
  allSport,
  genderAll,
  sortByTotalMedals,
  computeDataTwo

} from '../src/data.js';

describe('probando la funcion functionAll', () => {

  const arrayTest = [{
    "name": "Tijana Bogdanovi",
    "gender": "F",
    "sport": "Taekwondo",
    "team": "Serbia",
  },
  {
    "name": "Andreea Boghian",
    "gender": "F",
    "sport": "Rowing",
    "team": "Romania",
  },
  {
    "name": "Thibault Colard",
    "gender": "M",
    "sport": "Rowing",
    "team": "France",
  }];

  it('deberia retornar cuantos atletas por el pais "France', () => {

    let result = functionAll(arrayTest, filterByTeamFunc('France'));
    expect(result).toHaveLength(1);
  });


  it('deberia retornar cuantos  atletas del deporte Rowing', () => {

    let result = functionAll(arrayTest, filterBySportFunc('Rowing'));
    expect(result).toHaveLength(2);

  });

  it('deberia retornar solo atletas del genero femenino ', () => {

    let result = functionAll(arrayTest, filterByGender('F'));

    expect(result).toHaveLength(2);

  });

});

describe('probando new set', () => {


  it('debe retornar string sin repetecion #1', () => {
    let arrayTest = [{ "team": "Serbia" }, { "team": "Romania" }, { "team": "France" }, { "team": "France" }, { "team": "France" }];
    let result = allCountries(arrayTest)
    expect(result.size).toEqual(3)
    expect(result.has('Romania')).toBeTruthy()

  })

  it('debe retornar string sin repetecion #2', () => {
    let arrayTest = [{ "sport": "futbol" }, { "sport": "futbol" }, { "sport": "ballet" }, { "sport": "ballet" }, { "sport": "ballet" }];
    let result = allSport(arrayTest)
    expect(result.size).toEqual(2)
    expect(result.has('ballet')).toBeTruthy()

  })
  it('debe retornar string sin repetecion #3', () => {
    let arrayTest = [{ "gender": "F" }, { "gender": "F" }, { "gender": "M" }];
    let result = genderAll(arrayTest)
    expect(result.size).toEqual(2)
    expect(result.has('M')).toBeTruthy()

  })

})

describe('probando la funcion sortData', () => {

  let arrayTest = [{
    "name": "Robson Donato Conceio",
    "age": 25,
  },
  {
    "name": "Julio",
    "age": 95,
  },
  {
    "name": "Sally Conway",
    "age": 50,
  }];


  it('deberia ordenar atletas de manera descendente', () => {

    let arrayExpected = [{
      "name": "Sally Conway",
      "age": 50,
    },
    {
      "name": "Robson Donato Conceio",
      "age": 25,
    },
    {
      "name": "Julio",
      "age": 95,
    }]
    let result = sortData(arrayTest, sortByName, false);

    expect(result).toStrictEqual(arrayExpected);

  });

  it('deberia ordenar por edad ascendente a los atletas', () => {

    let arrayExpected = [{
      "name": "Robson Donato Conceio",
      "age": 25,
    },
    {
      "name": "Sally Conway",
      "age": 50,
    },
    {
      "name": "Julio",
      "age": 95,

    }]
    let result = sortData(arrayTest, sortByAge, true);

    expect(result).toStrictEqual(arrayExpected);

  });


  it('deberia retornar 0 cuando se tenga el mismo nombre ', () => {

    let result = sortByName({ "name": "Julio" }, { "name": "Julio" });

    expect(result).toEqual(0);

  });

  it('deberia retornar 0 cuando se tenga la misma edad', () => {

    let result = sortByAge({ "age": "29" }, { "age": "29" });

    expect(result).toEqual(0);

  });

  it('debe ordenar de manera ascendente todos los totales', () => {
    let arrayTest = [{ "total": 10, }, { "total": 90, }, { "total": 30, }];
    let arrayExpected = [{ "total": 90, }, { "total": 30, }, { "total": 10, }];

    let result = arrayTest.sort(sortByTotalMedals);
    expect(result).toEqual(arrayExpected);
  })
  
  it('deberia retornar 0 cuando se tenga la misma edad', () => {

    let result = sortByTotalMedals({ "total": "2" }, { "total": "2" });

    expect(result).toEqual(0);

  });

});

describe('probando la funcion computeData y computeDataTwo', () => {
  const arrayTest = [ {"team": "United States","medal": "Gold"},
                      {"team": "United States","medal": "Gold"},
                      {"team": "United States","medal": "Gold"},
                      {"team": "United States","medal": "Bronze"},
                      {"team": "United States","medal": "Silver"},
                      ];

  it('deberia indicar cuantas medallas de oro, plata y Bronce gano USA', () => {

    let result = computeData(arrayTest);

    expect(result[0].gold).toEqual(3);
    expect(result[0].silver).toEqual(1);
    expect(result[0].bronce).toEqual(1);
    expect(result[0].total).toEqual(5);

  });

  it('deberia indicar cuantas medallas de oro, plata y Bronce gano USA #2', () =>{

    let result = computeDataTwo(arrayTest);

    expect(result[0].gold).toBe(3);
    expect(result[0].silver).toBe(1);
    expect(result[0].bronce).toBe(1);
    expect(result[0].total).toBe(5);
  })

});



