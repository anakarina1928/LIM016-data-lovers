import {computeData, sortData, functionAll, allCountries, genderAll } from "./data.js";
import datos from "./data/athletes/athletes.js";
//console.log(functionAll(datos));
const arrayAthletes = datos.athletes;//aqui guardo la data de todos los atletas
//----------------SELECTOR DINÁMICO PARA EL FILTRO DE PAÍSES----------------
//Para esconder y mostrar las opciones
/*const select = document.querySelector('.select');
select.addEventListener('click', function(){
    document.getElementById('options').classList.toggle('active');   


  });*/
  let noRepeatCountry = [];
  let z = functionAll(datos.athletes, datos.athletes[5]);
  //console.log(z);

  
 /* function addCountries (){
    let listOfCountries = document.getElementById('listOfCountries');
    
    let elementNew = document.createElement('li');
    let printCountries = document.createTextNode('string');

    listOfCountries.appendChild(elementNew);
    elementNew.appendChild(printCountries);
  }
  console.log(addCountries);*/

  //console.log(allCountries(datos.athletes)); 
  let containerTeam = document.querySelector('.containerTeam'); //Form team
  let a = Array.from(allCountries(datos.athletes));//convertir una funcion en array
  for (let i = 0; i<a.length; i++) {
  let optionTeam = document.createElement('option');
  optionTeam.value = a[i]; //allCountries(datos.athletes);
  optionTeam.innerHTML = a[i]; //allCountries(datos.athletes);
  containerTeam.team.appendChild(optionTeam);
  //console.log(optionTeam, 'hola');
  }
  let containerGender = document.querySelector('.containerGender');//form gender
  let g = Array.from(genderAll(arrayAthletes));
  for (let x = 0; x<g.length; x++) {
  let optionGender = document.createElement('option');
  optionGender.value= g[x];
  optionGender.innerHTML = g[x];
  containerGender.gender.appendChild(optionGender);
  console.log(optionGender, 'ay');
  }
   
  //console.log(functionAll(datos.athletes, ));