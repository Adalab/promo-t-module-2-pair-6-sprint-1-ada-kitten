'use strict'

<<<<<<< HEAD
const listElement = document.querySelector ('.js-list'); 
const kittenOne = `<li class="card">
=======
const listElement = document.querySelector('.js-list'); 
const kittenOne = <li class="card">
>>>>>>> 35469beca2870f664e4d94f871b9f6665cba3db3
            <article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"/>
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">Siamés</h4>
              <p class="card_description">
                Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.
              </p>
            </article>
          </li>`;
const kittenOneImg = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastasio';
const kittenOneDescription = ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siames';

const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description">
              Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.
            </p>
          </li>`;
const kittenTwoImg = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDescription = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo';
const kittenTwoRace = 'Sphynx';

const kittenThree = `<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description">
              Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.
            </p>
          </li>`;
const kittenThreeImg = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDescription = ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

listElement.innerHTML = kittenOne; 
listElement.innerHTML += kittenTwo; 
listElement.innerHTML += kittenThree; 

listElement.innerHTML = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenOneImg}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenOneName}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
    ${kittenOneDescription}
  </p>
</article>
</li>
<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenTwoImg}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenTwoName}</h3>
  <h4 class="card_race">${kittenTwoRace}</h4>
  <p class="card_description">
    ${kittenTwoDescription}
  </p>
</article>
</li>
<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenThreeImg}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenThreeName}</h3>
  <h4 class="card_race">${kittenThreeRace}</h4>
  <p class="card_description">
    ${kittenThreeDescription}
  </p>
</article>
</li>`