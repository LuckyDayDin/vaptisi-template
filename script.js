/* 🎬 ON LOAD (intro sequence) */
window.addEventListener("load", () => {

  const roar = document.getElementById("roar");
  const music = document.getElementById("music");

  /* 🔊 Lion roar */
  if (roar) {
    roar.volume = 1;
    roar.play().catch(() => {
      console.log("Autoplay blocked (click needed)");
    });
  }

  /* 🎵 Background music */
  setTimeout(() => {
    if (music) {
      music.volume = 0.6;
      music.play().catch(() => {
        console.log("Music blocked");
      });
    }
  }, 1500);

  /* 📩 Show form μετά το intro */
  setTimeout(() => {
    const main = document.getElementById("main");
    if (main) {
      main.style.display = "block";
    }
  }, 6000);

});


/* 💾 SAVE GUEST */
function save() {

  const nameInput = document.getElementById("name");
  const peopleInput = document.getElementById("people");

  const name = nameInput.value.trim();
  const people = peopleInput.value;

  if (!name || !people) {
    alert("Συμπλήρωσε όλα τα πεδία!");
    return;
  }

  let guests = JSON.parse(localStorage.getItem("guests")) || [];

  guests.push({
    name: name,
    people: Number(people),
    date: new Date().toLocaleString()
  });

  localStorage.setItem("guests", JSON.stringify(guests));

  alert("✅ Αποθηκεύτηκε!");

  /* καθάρισμα input */
  nameInput.value = "";
  peopleInput.value = "";
}


/* 📊 GET STATS (για μελλοντικό admin page) */
function getStats() {

  let guests = JSON.parse(localStorage.getItem("guests")) || [];

  let totalPeople = 0;

  guests.forEach(g => {
    totalPeople += g.people;
  });

  return {
    totalGuests: guests.length,
    totalPeople: totalPeople,
    list: guests
  };
}


/* 🔐 SIMPLE ADMIN CHECK (optional future use) */
function checkAdmin(password) {
  const adminPass = "1234"; // άλλαξέ το

  return password === adminPass;
}
