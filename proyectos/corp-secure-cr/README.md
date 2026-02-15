# 🔐 Corp-Secure CR

Aplicación web corporativa de mensajería segura con autenticación mediante Google.

Este proyecto está enfocado en el desarrollo del frontend y la integración con Firebase Authentication utilizando OAuth 2.0 (Login con Google).

---

## 🎯 Objetivo del Proyecto

Desarrollar una interfaz web profesional, minimalista y responsive que permita:

- Autenticación segura con Google
- Gestión de sesión de usuario
- Interfaz estilo “Matrix Roja” (corporativa)
- Base preparada para futuras funcionalidades de cifrado

---

## 🏗️ Alcance Actual

Este proyecto actualmente incluye:

- Frontend con HTML5 y CSS3
- Diseño responsive (Mobile First)
- Integración con Firebase Authentication
- Inicio de sesión con Google (OAuth 2.0)
- Manejo automático de sesión
- Cierre de sesión seguro

No incluye aún:
- Base de datos
- Persistencia de mensajes
- Cifrado real
- Backend personalizado

---

## 🧠 Arquitectura Implementada

Frontend (HTML + CSS + JS)
        ⬇
Firebase Authentication
        ⬇
Google OAuth 2.0

La autenticación es gestionada completamente por Firebase, lo que permite:

- Validación segura del usuario
- Manejo automático de tokens
- Gestión de sesión sin backend propio

---

## 🔐 Flujo de Autenticación

1. Usuario accede a la aplicación
2. Selecciona "Iniciar sesión con Google"
3. Google valida credenciales
4. Firebase recibe el token de autenticación
5. Se establece sesión activa
6. Se muestra la interfaz principal

---

## 🎨 Diseño UI – Matrix Roja Corporativa

### Paleta de colores

- Fondo: #000000
- Rojo principal: #FF0033
- Rojo secundario: #CC0029
- Tipografía: Monospace (estilo terminal corporativo)

### Principios de diseño

- Minimalismo
- Alto contraste
- Enfoque tecnológico
- Estética segura y profesional

---

## 📱 Responsive Design

La aplicación está optimizada para:

- 📱 Móviles
- 📲 Tablets
- 💻 Escritorio

Se utiliza enfoque Mobile First con media queries.

---

## 🚀 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript ES6
- Firebase Authentication
- Google OAuth 2.0

---

## 📌 Estado del Proyecto

🟢 Documentación base definida  
🟢 Arquitectura de autenticación definida  
🟡 Frontend en construcción  

---

## 🔭 Próximas Mejoras (Fuera del Alcance Actual)

- Implementación de cifrado con Web Crypto API
- Persistencia con Firestore
- Roles de usuario
- Arquitectura backend personalizada
- Deploy en Firebase Hosting

---

## 👨‍💻 Autor

Marco Somarribas  
Estudiante de Ingeniería en Desarrollo de Software  
Enfoque: Seguridad, Arquitectura Web y Soluciones Corporativas


---

## 🏗️ Diagrama de Arquitectura

### 🔹 Vista General

┌──────────────────────────┐
│        Usuario           │
│  (Navegador Web)         │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      Frontend Web       │
│ HTML + CSS + JavaScript │
│ (Corp-Secure CR UI)     │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│  Firebase Authentication │
│  (Gestión de sesión)     │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      Google OAuth 2.0    │
│  (Validación identidad)  │
└──────────────────────────┘
