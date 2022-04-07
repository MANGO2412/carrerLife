
import { getCommit, saveCommit } from './database.js'
export const list = document.getElementById('list-commit');

window.addEventListener("load", async ()=>{
  getCommit()
})




//eventos del formulario
const eventForm = (idTag)=>{
    const form = document.getElementById(idTag);
 
     form.addEventListener('submit',(e)=>{
       e.preventDefault();
 
 
       if(form["nameForm"].value.length> 2 && form["commitForm"].value.length > 10){
         saveCommit(form["nameForm"].value,form["commitForm"].value);
         
         form.reset()
       }else{
         alert("los inputs de tu formulario estan incompero")
       }
       
    })
 }

 eventForm('form1');