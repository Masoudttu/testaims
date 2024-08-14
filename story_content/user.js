window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "BEGIN"; let currentDate = new Date().toLocaleString(); rand = Math.floor(Math.random() * 10000); localStorage.setItem('rand', rand); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, { method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow', body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script2 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Restarted"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand');let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script3 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q1 option1"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script4 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q1 option2"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script5 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q1 option3"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script6 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q1 option4"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script7 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q1 option5"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script8 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q2 optionI"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script9 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q2 optionII"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script10 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Q2 optionIII"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script11 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "True"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script12 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "False"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script13 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "inc"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script14 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec";
const player = GetPlayer();
let feedbackText = "cc"; 
let currentDate = new Date().toLocaleString(); 
let rand = localStorage.getItem('rand');

let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; 

fetch(url, {
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text: feedbackWithDateTime})
});
}

window.Script15 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = player.GetVar('TextEntry2'); let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',   mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });

}

window.Script16 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = player.GetVar('TextEntry1'); let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',   mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });

}

window.Script17 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Gold"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script18 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Apple"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script19 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Sky"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script20 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = player.GetVar('NumericEntry'); let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',   mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });

}

window.Script21 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Practice1 submit"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'}, redirect: 'follow', body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script22 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Practice1 incorrect"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

window.Script23 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbz921_fko6_Ugt66aMzK6xkg72IuL5kQ8i3br_0Mz_4gm46Fjy0RMmmaDcMRlG6Fgk0/exec"; const player = GetPlayer(); let feedbackText = "Practice1 Was Correct"; let currentDate = new Date().toLocaleString(); let rand = localStorage.getItem('rand'); let feedbackWithDateTime = rand + "-" + currentDate + ": " + feedbackText; fetch(url, {  method: 'POST',  mode: 'no-cors',   cache: 'no-cache',   headers: {'Content-Type': 'application/json'},  redirect: 'follow',  body: JSON.stringify({text: feedbackWithDateTime}) });
}

};
