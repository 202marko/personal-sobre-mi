// =============================
// 🔥 Importaciones de Firebase
// =============================
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";


// =============================
// 🔐 Configuración de Firebase
// =============================
const firebaseConfig = {
  apiKey: "AIzaSyCRswJ9QJssofS7fs-G3WjlKo1xWP07mcE",
  authDomain: "cifrado-de-mensaje.firebaseapp.com",
  projectId: "cifrado-de-mensaje",
  storageBucket: "cifrado-de-mensaje.firebasestorage.app",
  messagingSenderId: "188550777243",
  appId: "1:188550777243:web:7e3a0a1a8806202529f93e"
};


// =============================
// 🚀 Inicializar Firebase
// =============================
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


// =============================
// ⏳ Esperar a que cargue el DOM
// =============================
document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // 🔘 Elementos del DOM
  // =============================
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // =============================
  // 🔑 Login con Google
  // =============================
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
    });
  }

  // =============================
  // 🚪 Logout
  // =============================
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    });
  }

});


const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");

// =============================
// 👁 Detectar estado de sesión
// =============================
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
  } else {
    loginSection.style.display = "block";
    dashboardSection.style.display = "none";
  }
});
