# 🧠✨ Pensieve – A Magical Memory and Mood Tracker

Pensieve is an interactive web application inspired by Dumbledore’s legendary memory bowl from the Harry Potter universe. Just like in the wizarding world, this app lets users store, revisit, and analyze their most meaningful memories, categorized by mood and type. With a whimsical UI and intuitive features, Pensieve bridges emotion and technology to create a reflective, magical journaling experience.


_Store your thoughts. Track your moods. Relive your magic._

---

## 🚀 Features

- 📝 **Memory Logging**: Add memories as text, voice, or image.
- 😊 **Mood Tracker**: Assign moods to memories using emoji-based or category selection.
- 🧠 **Sentiment Analysis (AI)**: Auto-detect mood from text using NLP.
- 📊 **Data Visualization**: View mood trends and categories over time.
- 🔒 **User Authentication**: Signup, login, change password securely.
- 🗂️ **Custom Categories**: Users can add new categories for memories.
- 📍 **Real-time Updates** *(Upcoming)*: See updates instantly across devices.
- 🎨 **Magical UI/UX**: Inspired by the world of Harry Potter – magical glass effects, fonts, and theme.

---

## 🛠️ Tech Stack

| Frontend           | Backend            | Database         | Others              |
|--------------------|--------------------|------------------|---------------------|
| React (Vite)
| Node.js + Express  | MongoDB (Mongoose) | JWT Auth           |
| Tailwind CSS       | REST API           |                  | D3.js (Visuals)     |
| Framer Motion      |                   |                  | WebRTC (Voice memos)|
| React Router       |                   |                  | Thunder Client (API Testing) |

---

## 📁 Folder Structure

pensieve/
├── client/       # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│   └── public/
├── server/       # Node.js Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── index.js
└── README.md

“I use the Pensieve. One simply siphons the excess thoughts from one’s mind, pours them into the basin, and examines them at one’s leisure.” – Albus Dumbledore

This app is a digital interpretation of that magical basin – your own private Pensieve for reflection and mindfulness.

Let me know your final deployed URL and GitHub repo, and I’ll update the README with clickable links!


## 🌐 API Endpoints

### 🔐 Auth Routes
| Method | Route              | Description              |
|--------|-------------------|--------------------------|
| POST   | `/api/auth/signup` | Register a new user     |
| POST   | `/api/auth/signin` | Login existing user     |
| PUT    | `/api/auth/changepassword/:id` | Update user password |
| GET    | `/api/auth/`       | Get all users           |

### 📓 Memory Routes
| Method | Route                  | Description                   |
|--------|------------------------|-------------------------------|
| POST   | `/api/memories/`       | Create a new memory           |
| GET    | `/api/memories/`       | Get all memories              |
| PUT    | `/api/memories/:id`    | Update a memory               |
| DELETE | `/api/memories/:id`    | Delete a memory               |

### 🎭 Mood Routes
| Method | Route               | Description              |
|--------|---------------------|--------------------------|
| POST   | `/api/moods/`       | Add a new mood           |
| GET    | `/api/moods/`       | Get all moods            |

### 🗂️ Category Routes
| Method | Route                 | Description             |
|--------|-----------------------|-------------------------|
| POST   | `/api/categories/`    | Create new category     |
| GET    | `/api/categories/`    | Fetch all categories    |

---

## 🧪 Thunder Client Collection

All endpoints are tested using **Thunder Client**. A `.thunder-collection.json` is available in the root directory for import.

---



🔍 Full-text search for memories

📱 PWA and mobile support

🌍 Real-time multi-user experience

🧙 Inspiration
This project is inspired by the Pensieve from Harry Potter, designed to be a digital equivalent of a magical memory pool. It blends emotional journaling with technical innovation, built as a capstone project with love and imagination.


💬 Special thanks to Kalvium mentors and peers

Backend deployment link  ---   https://capstonemoulyaa-2.onrender.com 

