import { db, collection, addDoc } from "./firebase.js";

window.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const music = document.getElementById("music");
  const saveBtn = document.getElementById("saveBtn");

  /* 🎬 START */
  startBtn.onclick = () => {

    music.play().catch(() => {});

    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("app").classList.remove("hidden");
    }, 4000);
  };

  /* 💾 SAVE */
  saveBtn.onclick = async () => {

    const name = document.getElementById("name").value.trim();
    const people = parseInt(document.getElementById("people").value);

    if (name.length < 2) return alert("Βάλε όνομα");
    if (!people || people < 1) return alert("Βάλε άτομα");

    saveBtn.disabled = true;

    try {
      await addDoc(collection(db, "guests"), {
        name,
        people,
        date: new Date().toLocaleString()
      });

      alert("✅ Καταχωρήθηκε!");
    } catch (e) {
      console.error(e);
      alert("❌ Firebase error");
    }

    saveBtn.disabled = false;
  };

});
