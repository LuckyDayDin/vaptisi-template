// 📦 Τοπική αποθήκευση (χωρίς server)
let responses = JSON.parse(localStorage.getItem("responses")) || [];

// 🚀 INTRO + ΗΧΟΣ + ΕΜΦΑΝΙΣΗ
window.onload = () => {

  // κρύβει αρχικά τη φόρμα
  document.getElementById("main").style.display = "none";

  setTimeout(() => {

    // 🦁 ήχος λιονταριού
    let roar = document.getElementById("roar");
    if (roar) {
      roar.play().catch(() => {});
    }

    // 🎵 μουσική μετά
    setTimeout(() => {
      let music = document.getElementById("music");
      if (music) {
        music.play().catch(() => {});
      }
    }, 1500);

    // 👑 εμφάνιση περιεχομένου
    document.getElementById("main").style.display = "block";

  }, 4000);
};

// 📩 ΑΠΟΘΗΚΕΥΣΗ ΑΠΑΝΤΗΣΗΣ
function save() {

  let name = document.getElementById("name").value;
  let people = document.getElementById("people").value;
  let attend = document.querySelector('input[name="attend"]:checked');

  if (!name || !people || !attend) {
    alert("Συμπλήρωσε όλα τα πεδία!");
    return;
  }

  let data = {
    name: name,
    people: people,
    attend: attend.value
  };

  responses.push(data);

  // αποθήκευση στο browser
  localStorage.setItem("responses", JSON.stringify(responses));

  alert("Η απάντηση καταχωρήθηκε!");

  // καθάρισμα φόρμας
  document.getElementById("name").value = "";
  document.getElementById("people").value = "";
  document.querySelectorAll('input[name="attend"]').forEach(el => el.checked = false);
}

// 👑 ΑΝΟΙΓΜΑ ADMIN LOGIN
function openAdmin() {
  document.getElementById("login").style.display = "block";
}

// 🔐 PASSWORD CHECK
function checkPass() {

  let pass = document.getElementById("pass").value;

  if (pass === "1234") { // 👉 άλλαξέ το αν θες
    document.getElementById("login").style.display = "none";
    showData();
  } else {
    alert("Λάθος password!");
  }
}

// 📊 ΕΜΦΑΝΙΣΗ ΣΤΑΤΙΣΤΙΚΩΝ
function showData() {

  let panel = document.getElementById("adminPanel");
  let dataDiv = document.getElementById("data");

  panel.style.display = "block";

  if (responses.length === 0) {
    dataDiv.innerHTML = "<p>Δεν υπάρχουν απαντήσεις</p>";
    return;
  }

  let html = "";

  let totalYes = 0;
  let totalPeople = 0;

  responses.forEach(r => {

    if (r.attend === "Ναι") {
      totalYes++;
      totalPeople += parseInt(r.people);
    }

    html += `
      <div style="margin-bottom:10px; padding:10px; background:#eee;">
        <strong>${r.name}</strong><br>
        Άτομα: ${r.people}<br>
        Απάντηση: ${r.attend}
      </div>
    `;
  });

  html += `
    <hr>
    <strong>Σύνολο ΝΑΙ:</strong> ${totalYes}<br>
    <strong>Σύνολο Ατόμων:</strong> ${totalPeople}
  `;

  dataDiv.innerHTML = html;
}
