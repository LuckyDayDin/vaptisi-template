const SCRIPT_URL = "ΒΑΛΕ_ΕΔΩ";
const ADMIN_PASS = "1234";

function start(){
document.getElementById('main').style.display='block';

let roar=document.getElementById('roar');
let music=document.getElementById('music');

roar.play();
roar.onended=()=>music.play();
}

function save(){
let name=document.getElementById('name').value;
let people=document.getElementById('people').value;
let attend=document.querySelector('input[name="attend"]:checked');

if(!name || !people || !attend){
alert("Συμπλήρωσε όλα!");
return;
}

fetch(SCRIPT_URL,{
method:"POST",
body: JSON.stringify({
name:name,
people:people,
attend:attend.value
})
})
.then(()=>alert("Καταχωρήθηκε! 🎉"))
.catch(()=>alert("Σφάλμα"));
}

function openAdmin(){
document.getElementById("login").style.display="flex";
}

function checkPass(){
let p=document.getElementById("pass").value;

if(p===ADMIN_PASS){
document.getElementById("login").style.display="none";
loadData();
}else{
alert("Λάθος password");
}
}

function loadData(){
fetch(SCRIPT_URL)
.then(res=>res.json())
.then(data=>{

let html="";
let total=0;
let yes=0;

data.slice(1).forEach(row=>{
let name=row[0];
let attend=row[1];
let people=parseInt(row[2])||0;

if(attend==="Ναι"){
yes++;
total+=people;
}

html+=`${name} - ${attend} (${people})<br>`;
});

html+=`<hr>✅ Έρχονται: ${yes}`;
html+=`<br>👥 Σύνολο ατόμων: ${total}`;

document.getElementById("adminPanel").style.display="block";
document.getElementById("data").innerHTML=html;

});
}
