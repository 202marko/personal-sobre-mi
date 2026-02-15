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
// 🔘 Elementos del DOM
// =============================
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");


// =============================
// 🔑 Login con Google
// =============================
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
});


// =============================
// 🚪 Logout
// =============================
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
});


// =============================
// 👁 Detectar estado de sesión
// =============================
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario logueado:", user.displayName);
  } else {
    console.log("Usuario no autenticado");
  }
});
