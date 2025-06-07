import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  //write your code here
  function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateExcuse() {
  const who = ['My lights', 'My dog', 'My parents', 'My girlfriend'];
  const action = ['ate', 'destroyed', 'burned', 'threw away'];
  const what = ['my homework', 'my work', 'my hopes', 'my dynasty'];
  const when = ['yesterday', 'last night', 'last week', 'this morning'];

  const excuse = `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(what)} ${getRandomItem(when)}.`;

  document.getElementById("excuse").innerText = excuse;
} 

window.onload = generateExcuse;