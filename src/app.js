/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuse();
};
//Se declara las contantes
//1*
const who = ["The dog", "My grandma", "His turtle", "My bird"];
//2*
const action = ["ate", "peed", "crushed", "broke"];
//3*
const what = ["my homework", "the keys", "the car", "the computer"];
//4*
const when = [
  "before the class",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getItem(who) {
  const randomIndex = Math.floor(Math.random() * who.length);
  return who[randomIndex];
}

function getItem2(action) {
  const randomIndex = Math.floor(Math.random() * action.length);
  return action[randomIndex];
}

function getItem3(what) {
  const randomIndex = Math.floor(Math.random() * what.length);
  return what[randomIndex];
}

function getItem4(when) {
  const randomIndex = Math.floor(Math.random() * when.length);
  return when[randomIndex];
}

function excusa() {
  const whoItem = getItem(who);
  const actionItem = getItem(action);
  const whatItem = getItem(what);
  const whenItem = getItem(when);

  return whoItem + actionnItem + whatItem + whenItem;
}
