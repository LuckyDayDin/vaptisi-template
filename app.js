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
import { db, collection, addDoc } from "./firebase.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

window.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const music = document.getElementById("music");
  const saveBtn = document.getElementById("saveBtn");

  const counterEl = document.getElementById("counter");

  /* 🎬 START */
  startBtn.onclick = () => {
    music.play().catch(()=>{});

    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("app").classList.remove("hidden");
      loadGuests(); // 🔥 load counter
    }, 4000);
  };

  /* 📊 LOAD COUNTER */
  async function loadGuests() {
    const snapshot = await getDocs(collection(db, "guests"));

    let total = 0;
    snapshot.forEach(doc => {
      total += doc.data().people || 0;
    });

    counterEl.innerText = `👥 Σύνολο: ${total} άτομα`;
  }

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

    alert(`🎉 Ευχαριστούμε ${name}!
Η παρουσία σου καταγράφηκε 🦁`);

    } catch (e) {
      alert("❌ error");
    }

    saveBtn.disabled = false;
  };

});
startBtn.onclick = () => {

  music.currentTime = 5; // ξεκινάει από συγκεκριμένο σημείο
  music.play().catch(()=>{});

  // ✨ τίτλος
  setTimeout(() => {
    document.querySelector(".title").style.opacity = 1;
  }, 2000);

  // 🦁 highlight simba
  setTimeout(() => {
    document.querySelector(".simba").style.filter =
      "drop-shadow(0 0 50px gold)";
  }, 3000);

  // 🎬 μετάβαση
  setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
  }, 6000);

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 7000);
};
startBtn.onclick = () => {

  music.currentTime = 5; // ξεκινάει από συγκεκριμένο σημείο
  music.play().catch(()=>{});

  // ✨ τίτλος
  setTimeout(() => {
    document.querySelector(".title").style.opacity = 1;
  }, 2000);

  // 🦁 highlight simba
  setTimeout(() => {
    document.querySelector(".simba").style.filter =
      "drop-shadow(0 0 50px gold)";
  }, 3000);

  // 🎬 μετάβαση
  setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
  }, 6000);

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  }, 7000);
};
