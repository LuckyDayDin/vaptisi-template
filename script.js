
import { db, collection, addDoc } from "./firebase.js";

/* 🎬 INTRO */
window.addEventListener("load", () => {

  const roar = document.getElementById("roar");
  const music = document.getElementById("music");

  if (roar) {
    roar.volume = 1;
    roar.play().catch(() => {});
  }

  setTimeout(() => {
    if (music) {
      music.volume = 0.6;
      music.play().catch(() => {});
    }
  }, 1500);

  setTimeout(() => {
    const main = document.getElementById("main");
    if (main) main.style.display = "block";
  }, 5000);
});


/* 💾 SAVE (Firebase) */
async function save() {

  const name = document.getElementById("name").value.trim();
  const people = document.getElementById("people").value;

  if (!name || !people) {
    alert("Συμπλήρωσε όλα τα πεδία!");
    return;
  }

  try {
    await addDoc(collection(db, "guests"), {
      name: name,
      people: Number(people),
      date: new Date().toLocaleString()
    });

    alert("✅ Καταχωρήθηκε!");

    document.getElementById("name").value = "";
    document.getElementById("people").value = "";

  } catch (error) {
    console.error(error);
    alert("❌ Σφάλμα αποθήκευσης");
  }
}
