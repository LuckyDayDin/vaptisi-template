import { db, collection, addDoc } from "./firebase.js";

window.save = async function () {

  const name = document.getElementById("name").value.trim();
  const people = document.getElementById("people").value;

  if (!name || !people) {
    alert("Συμπλήρωσε όλα τα πεδία!");
    return;
  }

  await addDoc(collection(db, "guests"), {
    name: name,
    people: Number(people),
    date: new Date().toLocaleString()
  });

  alert("✅ Καταχωρήθηκε!");
};
