import { db, collection, addDoc, getDocs } from "./firebase.js";

/* 🎥 intro */
setTimeout(() => {
  document.getElementById("introVideo").style.display = "none";
}, 5000);

/* ✨ particles */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*3
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle="gold";
    ctx.fill();
    p.y -= 0.3;
    if(p.y<0) p.y = canvas.height;
  });
  requestAnimationFrame(animate);
}
animate();

/* 🦁 simba reveal */
window.addEventListener("scroll",()=>{
  if(window.scrollY > 200){
    document.querySelector(".simba").classList.add("show-simba");
  }
});

/* 🌍 language */
const texts = {
  gr:"Δήλωση Παρουσίας",
  en:"RSVP"
};

document.getElementById("lang").onchange = (e)=>{
  document.getElementById("title").innerText = texts[e.target.value];
};

/* 💾 save */
document.getElementById("saveBtn").onclick = async ()=>{
  const name = document.getElementById("name").value.trim();
  const people = parseInt(document.getElementById("people").value);
  const gift = document.getElementById("gift").value;

  if(name.length < 2) return alert("Βάλε όνομα");

  await addDoc(collection(db,"guests"),{
    name, people, gift,
    date:new Date().toLocaleString()
  });

  alert("✅ Καταχωρήθηκε!");
  loadGuests();
};

/* 📊 counter */
async function loadGuests(){
  const snap = await getDocs(collection(db,"guests"));
  let total=0;
  snap.forEach(doc=>{
    total += doc.data().people || 0;
  });
  document.getElementById("counter").innerText =
    `👥 Σύνολο: ${total}`;
}
loadGuests();

/* 🔐 admin */
window.openAdmin = async ()=>{
  if(prompt("Password") !== "1234") return;

  const list = document.getElementById("guestList");
  list.innerHTML="";

  const snap = await getDocs(collection(db,"guests"));

  snap.forEach(doc=>{
    const d = doc.data();
    const li = document.createElement("li");
    li.textContent = `${d.name} (${d.people}) - ${d.gift}`;
    list.appendChild(li);
  });

  document.getElementById("adminPanel").classList.remove("hidden");
};
/* 🦁 simba reveal */
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.getElementById("simba").classList.add("show-simba");
  }
});

/* 🎥 smooth intro fade */
setTimeout(() => {
  const video = document.getElementById("introVideo");
  video.style.transition = "opacity 2s";
  video.style.opacity = "0";

  setTimeout(() => {
    video.style.display = "none";
  }, 2000);
}, 4000);
