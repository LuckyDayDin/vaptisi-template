import { db, collection, addDoc } from "./firebase.js";

/* 🎬 INTRO → APP */
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 6000);

/* 💾 SAVE */
window.save = async function () {

  const nameInput = document.getElementById("name");
  const peopleInput = document.getElementById("people");
  const btn = document.getElementById("saveBtn");

  const name = nameInput.value.trim();
  const people = parseInt(peopleInput.value);

  if (name.length < 2) {
    alert("Βάλε σωστό όνομα!");
    return;
  }

  if (isNaN(people) || people <= 0 || people > 20) {
    alert("Βάλε σωστό αριθμό (1-20)");
    return;
  }

  btn.disabled = true;
  btn.innerText = "Αποθήκευση...";

  try {
    await addDoc(collection(db, "guests"), {
      name,
      people,
      date: new Date().toLocaleString()
    });

    alert("✅ Καταχωρήθηκε!");

    nameInput.value = "";
    peopleInput.value = "";

  } catch (e) {
    alert("❌ Σφάλμα");
  }

  btn.disabled = false;
  btn.innerText = "Αποθήκευση";
};
