import { db, collection, addDoc, getDocs } from "./firebase.js";

/* 🎥 INTRO FADE */
setTimeout(() => {
  const video = document.getElementById("introVideo");
  video.style.transition = "opacity 2s";
  video.style.opacity = "0";

  setTimeout(() => {
    video.style.display = "none";
  }, 2000);
}, 4000);

/* ✨ PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "gold";
    ctx.fill();

    p.y -= 0.3;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(animate);
}

animate();

/* 🦁 SIMBA */
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.getElementById("simba").classList.add("show-simba");
  }
});

/* 🌍 LANGUAGE */
const texts = {
  gr: "Δήλωση Παρουσίας",
  en: "RSVP"
};

document.getElementById("lang").addEventListener("change", (e) => {
  document.getElementById("title").innerText = texts[e.target.value];
});

/* 💾 SAVE */
async function save() {
  const name = document.getElementById("name").value.trim();
  const people = parseInt(document.getElementById("people").value);
  const gift = document.getElementById("gift").value;

  if (name.length < 2) {
    alert("Βάλε σωστό όνομα!");
    return;
  }

  if (isNaN(people) || people <= 0 || people > 20) {
    alert("Βάλε 1-20 άτομα");
    return;
  }

  try {
    await addDoc(collection(db, "guests"), {
      name,
      people,
      gift,
      date: new Date().toLocaleString()
    });

    alert("✅ Καταχωρήθηκε!");

    document.getElementById("name").value = "";
    document.getElementById("people").value = "";

    loadGuests();

  } catch (e) {
    console.error(e);
    alert("❌ Σφάλμα!");
  }
}

/* BUTTON */
document.getElementById("saveBtn").addEventListener("click", save);

/* 📊 COUNTER */
async function loadGuests() {
  const snap = await getDocs(collection(db, "guests"));

  let total = 0;

  snap.forEach(doc => {
    total += doc.data().people || 0;
  });

  document.getElementById("counter").innerText =
    `👥 Σύνολο: ${total}`;
}

loadGuests();

/* 🔐 ADMIN */
window.openAdmin = async () => {
  if (prompt("Password") !== "1234") return;

  const list = document.getElementById("guestList");
  list.innerHTML = "";

  const snap = await getDocs(collection(db, "guests"));

  snap.forEach(doc => {
    const d = doc.data();
    const li = document.createElement("li");
    li.textContent = `${d.name} (${d.people}) - ${d.gift}`;
    list.appendChild(li);
  });

  document.getElementById("adminPanel").classList.remove("hidden");
};
