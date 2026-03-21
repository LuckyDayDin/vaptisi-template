import { db, collection, addDoc } from "./firebase.js";

window.save = async function () {

  const nameInput = document.getElementById("name");
  const peopleInput = document.getElementById("people");
  const btn = document.querySelector("button");

  const name = nameInput.value.trim();
  const people = parseInt(peopleInput.value);

  /* ❌ VALIDATION */
  if (name.length < 2) {
    alert("Βάλε σωστό όνομα!");
    return;
  }

  if (isNaN(people) || people <= 0 || people > 20) {
    alert("Βάλε σωστό αριθμό ατόμων (1-20)");
    return;
  }

  /* 🚫 Αποφυγή spam click */
  btn.disabled = true;
  btn.innerText = "Αποθήκευση...";

  try {
    await addDoc(collection(db, "guests"), {
      name: name,
      people: people,
      date: new Date().toLocaleString()
    });

    alert("✅ Καταχωρήθηκε!");

    // καθάρισμα πεδίων
    nameInput.value = "";
    peopleInput.value = "";

  } catch (error) {
    console.error("Firebase error:", error);
    alert("❌ Σφάλμα! Δοκίμασε ξανά.");
  }

  /* 🔓 Ενεργοποίηση ξανά */
  btn.disabled = false;
  btn.innerText = "Αποθήκευση";
};
