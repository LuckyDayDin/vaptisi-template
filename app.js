
import { db, collection, addDoc } from "./firebase.js";

/* 🎬 START BUTTON */
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

startBtn.onclick = () => {

  music.play(); // 🎵 ξεκινάει μουσική

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 5000);
};

/* 💾 SAVE */
window.save = async function () {

  const name = document.getElementById("name").value.trim();
  const people = parseInt(document.getElementById("people").value);
  const btn = document.getElementById("saveBtn");

  if (name.length < 2) return alert("Βάλε όνομα");
  if (!people || people < 1) return alert("Βάλε άτομα");

  btn.disabled = true;

  try {
    await addDoc(collection(db, "guests"), {
      name,
      people,
      date: new Date().toLocaleString()
    });

    alert("✅ Έτοιμο!");
  } catch {
    alert("❌ error");
  }

  btn.disabled = false;
};
