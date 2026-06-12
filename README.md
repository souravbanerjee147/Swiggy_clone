✅✅✅✅✅✅✅✅✅✅✅✅ DONE ✅✅✅✅✅✅✅✅✅✅✅✅
# Swiggy_clone - Full-Stack Web Ecosystem


A performance-driven, responsive full-stack food delivery application built using modern web architecture. This project replicates the core user flow of Swiggy, featuring real-time data filtering, persistent state management, and a secure backend document management pipeline.

## 🚀 Architectural Core Features

* **Advanced State Engine:** Built with **Redux Toolkit** to handle complex client-side interactions, maintaining a unified, single source of truth across product selections and cart items configuration tracking.
* **Persistent Cart Pipeline:** Custom state normalization workflows that keep item choices, item counts, and restaurant context synchronized across browser sessions.
* **Dynamic Search & Filtering Matrix:** An optimized client-side filtering matrix allowing users to sort food options and restaurant entries cleanly on-the-fly.
* **Modular API Integration:** Connected to a robust asynchronous backend layer using **Node.js** and **Mongoose** to fetch restaurant documents out of a **MongoDB Atlas** cluster.
* **Atomic Component Architecture:** Styled entirely using responsive utility classes to guarantee fluid, pixel-perfect rendering across mobile, tablet, and ultra-wide desktop monitors.

---

## 🛠️ High-End Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend UI Engine** | React 19, JavaScript (ES6+), Redux Toolkit, HTML5 |
| **Styling Framework** | Tailwind CSS Framework Core Utilities |
| **Backend API Gateway**| Node.js Server Environment, Express.js Router App |
| **Database Repository**| MongoDB Atlas Cloud Document Store, Mongoose |
| **Development Tooling** | Vite Bundler, Git Version Control Core Ecosystem |

---

## 📦 Project Directory Structure

```
Swiggy_clone/
├── backend/
│   ├── controllers/     # Functional document processing logic
│   ├── middleware/      # middleware created by myself
│   ├── model/           # Strict Mongoose data schemas (Menu, Restaurants)
│   ├── routes/          # Express API route registration nodes
│   └── index.js         # Backend server boot entrypoint
└── frontend/
    ├── src/
    │   ├── assets/      # Static visual asset resources
    │   ├── component/   # Atomic UI elements (Header, RestaurantCard, Cart, body, etc)
    │   ├── App.jsx      # Main layout framework shell
    │   └── main.jsx     # Frontend execution mount sequencer
```

## 🛠️ Installation and Local Deployment Setup 
  1. Prerequisites
    Ensure you have Node.js (v18+ recommended) installed on your machine.
  
  2. Clone the Repository 
  
  ```
    git clone | (https://github.com/souravbanerjee147/Swiggy_clone.git)
    cd Swiggy_clone
    
  ```
  
  3. Setup the Backend Server
  
  ```
    cd backend
    npm init -y
    
  ```
    
  4. Launch the development server
  ```
     npm run dev
     
  ```

  5. Create your own mongoose project and set it up your own connection in /backend/index.js

  6. Setup the Frontend App
    Open a separate terminal instance at the root project directory level |
    
  ```
      cd frontend
      npm install
      npm run dev
      Open your browser and navigate to the display link at the localhost Port showing in your frontend terminal
      
   ```


## 💡 Engineering Highlights Covered
  Atomic Design Layout Principles: Modularized massive viewports down into cleanly testable, reusable child component layers (RestaurantCard.jsx, CartItem.jsx).
  
  State Immutability Protection: Utilized Redux slices to prevent unwanted memory mutations while updating deeply nested array items inside the shopping cart database objects.
  
  Cross-Origin Configuration Rules (CORS): Implemented clean security headers integration allowing the frontend browser wrapper to run async fetch operations against the local port 8080 backend layer without tripping browser safety blocks.


## 👤 Developer Profile

Name: Sourav Banerjee
GitHub: @souravbanerjee147
Specialization: Full-Stack Web Development / Software Engineering
