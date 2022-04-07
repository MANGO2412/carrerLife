 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getFirestore,collection,addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"
 import {list} from './subMain.js';
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBaWesnF_sc5iHAWuIewaTUHCzQr1hOYME",
   authDomain: "project-carrerlife.firebaseapp.com",
   projectId: "project-carrerlife",
   storageBucket: "project-carrerlife.appspot.com",
   messagingSenderId: "1003562685346",
   appId: "1:1003562685346:web:466a34a65f0e7f03d7d8fb"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore();



 const saveCommit = (nameCommit,bodyCommit)=>{
    addDoc(collection(db,"commits"),{nameCommit,bodyCommit});
 }

const getCommit = ()=>{
  onSnapshot(collection(db,"commits"),(querySnapShot)=>{
    let txt = '';
     querySnapShot.forEach(element => {
       let dato = element.data();

       txt += `
       <li> 
          <h2> <img src="./../images/account.png" alt="cuenta"> ${dato.nameCommit}</h2>
          <p>${dato.bodyCommit}</p>
       </li>
       `;
     });

     list.innerHTML = txt;
  })
}
 



 export {saveCommit, getCommit}