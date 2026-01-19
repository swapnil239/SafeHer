const sosBtn = document.getElementById("sosBtn");
const statusMessage = document.getElementById("statusMessage");
sosBtn.addEventListener("click", () => {
  const time = new Date().toLocaleTimeString();

  //UI message
  statusMessage.style.display = "block";
  statusMessage.innerHTML =
    "📍 Location shared successfully<br>" +
    "🚨 Help is being notified<br>" +
    "<small>Time: " + time + "</small>";

    // Firebase save
    saveSOS(time);

    // DIRECT CALL (This is this key line)
    window.location.href = "tel: 112";
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCUaCem9l4wykI4vHQAWpCV4WyyZZGFCfs",
    authDomain: "safeher-ba3d0.firebaseapp.com",
    projectId: "safeher-ba3d0",
    storageBucket: "safeher-ba3d0.firebasestorage.app",
    messagingSenderId: "156368977864",
    appId: "1:156368977864:web:c9e4ee3631794caeb08afd",
    measurementId: "G-VL4HFC65JN"
    };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db =  getFirestore(app);
  async function saveSOS(time) {
  try {
    await addDoc(collection(db, "sosAlerts"), {
      alert: "SOS Triggered",
      time: time,
      status: "Emergency",
    });
    console.log("SOS saved to Firebase");
  } catch (e) {
    console.error("Error saving SOS", e);
  }
}



