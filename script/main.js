import {event1} from './events.js'


//primer evento
let nameCards = ["kaleb","Miguel","Gael","Manuel"];
let src = ["./mult/images/kaleb.jpg","./mult/images/Miguel.jpg","./mult/images/received_769655671105785.jpeg","./mult/images/Manuel.jpg"];
let txt = [
  `
   <ul class="format">
     <li>Nombre: Kaleb Suarez</li>
     <li>Edad: 18</li>
     <li>Carrera: Area de desarrollo de Software Multiplataforma</li>
   </ul>
  `,
  `<ul class="format">
  <li>Nombre: Miguel Aranda</li>
  <li>Edad: 18</li>
  <li>Carrera: Area de desarrollo de Software Multiplataforma</li>
  </ul>`,
  `
  <ul class="format">
  <li>Nombre: Gael Breton</li>
  <li>Edad: 18</li>
  <li>Carrera: Area de desarrollo de Software Multiplataforma</li>
  </ul>
  `,
  ` <ul class="format">
   <li>Nombre: Manuel Gomez</li>
   <li>Edad: 18</li>
   <li>Carrera: Area de desarrollo de Software Multiplataforma</li>
  </ul>`
]
for(let i=0; i<= nameCards.length; i++){
  event1(nameCards[i],src[i],txt[i]);
}