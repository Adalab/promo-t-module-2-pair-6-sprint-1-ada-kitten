"use strict";

// traernos la lista de los gatos
const listElement = document.querySelector(".js-list");

// poner los gatos en objetos
const kittenDataList = [
 {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastasio",
  desc: " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "Siames",
},

 {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo Hola",
  race: "Sphynx",
},
 {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon",
},
];

// Dar una variable a cada dato de cada gato y sustituirla en la lista

// const kittenOneImg = 'https://dev.adalab.es/gato-siames.webp';
// const kittenOneName = 'Anastasio';
// const kittenOneDescription = ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente. Hola.';
// const kittenOneRace = 'Siames';
// const kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src="${kittenOneImg}"
//     alt="siames-cat"
//   />
//   <h3 class="card_title">${kittenOneName}</h3>
//   <h4 class="card_race">${kittenOneRace}</h4>
//   <p class="card_description">
//     ${kittenOneDescription}
//   </p>
// </article>
// </li>`;
// const kittenTwoImg = 'https://dev.adalab.es/sphynx-gato.webp';
// const kittenTwoName = 'Fiona';
// const kittenTwoDescription = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo Hola';
// const kittenTwoRace = 'Sphynx';

// const kittenTwo = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src="${kittenTwoImg}"
//     alt="siames-cat"
//   />
//   <h3 class="card_title">${kittenTwoName}</h3>
//   <h4 class="card_race">${kittenTwoRace}</h4>
//   <p class="card_description">
//     ${kittenTwoDescription}
//   </p>
// </article>
// </li>`;

// const kittenThreeImg = 'https://dev.adalab.es/maine-coon-cat.webp';
// const kittenThreeName = 'Cielo';
// const kittenThreeDescription = ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
// const kittenThreeRace = 'Maine Coon';

// const kittenThree = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src="${kittenThreeImg}"
//     alt="siames-cat"
//   />
//   <h3 class="card_title">${kittenThreeName}</h3>
//   <h4 class="card_race">${kittenThreeRace}</h4>
//   <p class="card_description">
//     ${kittenThreeDescription}
//   </p>
// </article>
// </li>`;

//  Añadir a la constante listaElement  cada li de cada gato.
// listElement.innerHTML = kittenOne;
// listElement.innerHTML += kittenTwo;
// listElement.innerHTML += kittenThree;

const input_search_desc = document.querySelector(".js_in_search_desc");
const descrSearchText = input_search_desc.value;

// if( kittenOneDescription.includes(descrSearchText) ) {
//  listElement.innerHTML = kittenOne;
// }

// if( kittenTwoDescription.includes(descrSearchText) ) {
//  listElement.innerHTML += kittenTwo;
// }

// if( kittenThreeDescription.includes(descrSearchText) ) {
//  listElement.innerHTML += kittenThree;
// }

const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMessageError = document.querySelector(".js-label-error");

// btnAdd.addEventListener('click', () => {
// const valueDesc = inputDesc.value;
// const valuePhoto = inputPhoto.value;
// const valueName = inputName.value;

// if (valueDesc === '' || valuePhoto === '' || valueName === '') {
//   //completa el código
//   labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"
// } else {
//   //completa el código

// }
// });

const btnCancel = document.querySelector(".js-button-cancel");
const sctForm = document.querySelector(".js-new-form");
const addLogo = document.querySelector(".js-add-logo");
const menuNav = document.querySelector(".js-menunav");

// btnCancel.addEventListener('click', (event) => {
// sctForm.classList.toggle('collapsed');
// });

// cancelar el formulario de añadir
const cancelNewKitten = (event) => {
  event.preventDefault();
  sctForm.classList.toggle("collapsed");
};
btnCancel.addEventListener("click", cancelNewKitten);

// addLogo.addEventListener('click', (event) => {

// sctForm.classList.toggle('collapsed');

// });

// Hacer una funcion para el boton de añadir y le asignamos un evento
menuNav.addEventListener("click", handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (sctForm.classList.contains("collapsed")) {
    sctForm.classList.remove("collapsed");
  } else {
    sctForm.classList.add("collapsed");
  }
}

//modifica el evento para cumplir una función manejadora
btnAdd.addEventListener("click", addNewKitten);

function addNewKitten(event) {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    //completa el código
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {
    //completa el código
    labelMessageError.innerHTML = "";
  }
}

// crear cards con gatos
const inputRace = document.querySelector(".js-input-race");

const cat1 = renderKitten(
  kittenDataList[0].image,
  kittenDataList[0].desc,
  kittenDataList[0].name,
  kittenDataList[0].race
);
const cat2 = renderKitten(
  kittenDataList[1].image,
  kittenDataList[1].desc,
  kittenDataList[1].name,
 kittenDataList[1].race
);
const cat3 = renderKitten(
  kittenDataList[2].image,
  kittenDataList[2].desc,
  kittenDataList[2].name,
  kittenDataList[2].race
);

function renderKitten(url, desc, name, race) {
  const list = `<li class="card">
      <article>
            <img
      class="card_img"
     src="${url}"
      alt="siames-cat"
    />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
    ${desc}
    </p>
  </article>
  </li>`;
  return list;
}

//listElement.innerHTML = cat1;
//listElement.innerHTML += cat2;
//listElement.innerHTML += cat3;

// filtrar por descripcion

const buttonSearch = document.querySelector(".js-button-search");

// const input_search_desc = document.querySelector('.js_in_search_desc');
// const descrSearchText = input_search_desc.value;
const input_search_race = document.querySelector(".js_in_search_race");
const labelMsg = document.querySelector(".js-label-msg");

//function filterkitten(event) {
//  event.preventDefault();
//  const valueRace = input_search_race.value;
//  const valueDescripcion = input_search_desc.value;
//  if (valueDescripcion === "" || valueRace === "") {
//    labelMsg.innerHTML = "tienes que rellenar algún campo";
//  }
//  if (kittenData_1.desc.includes(descrSearchText)) {
//    listElement.innerHTML += cat1;
//  }
//  if (kittenData_2.desc.includes(descrSearchText)) {
//   listElement.innerHTML += cat2;
//  }
//  if (kittenData_3.desc.includes(descrSearchText)) {
//    listElement.innerHTML += cat3;
//  }
//}

buttonSearch.addEventListener("click", filterkitten);

// function renderRace (event) {
//      event.preventDefault();
//   const valueRace = input_search_race.value;
//   if ( valueRace === ''){
//     labelMsg.innerHTML = "uy que despiste, no sabemos su raza";
//   }
//   else {
//    inputRace.innerHTML = valueRace;
//   }

// };
// buttonSearch.addEventListener('click', renderRace);


function renderKittenList(kittenDataList) {
  for ( const iterarGatos of kittenDataList){
  listElement.innerHTML += renderKitten(iterarGatos.image,iterarGatos.desc, iterarGatos.name, iterarGatos.race );
}
}

renderKittenList(kittenDataList);

function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    //Completa el código
    //Comprueba si cada gatito contiene la descripción
    if (kittenItem.includes(descrSearchText)){
      listElement.innerHTML += renderKitten.desc;
    }
    //Si la contiene pintamos un gatito
    //utilizando la función renderKitten(kittenItem)
  }
}
