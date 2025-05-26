import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['My Lights', 'My Dog', 'My Parents', 'My Girlfriend']; 
  let action = ['ate', 'destroyed', 'burned', 'threw away'];
  let homework = ['my homework', 'my work', 'my hopes', 'my dinasty']; 
  let when = ['yesterday', 'last Night', 'last week', 'this morning']; 

  let randomwho = Math.floor(Math.random() * who.length); 
  let randomaction = Math.floor(Math.random() * action.length); 
  let randomhomework = Math.floor(Math.random() * homework.length); 
  let randomwhen = Math.floor(Math.random() * when.length); 

  document.getElementById("excuse").innerText = who[randomwho] + " " + action[randomaction] + " " + homework[randomhomework] + " " + when[randomwhen];
}

