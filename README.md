# Tandemly 🎥👨‍🏫

Tandemly is a real-time **peer-to-peer learning platform** that empowers users to **teach and learn new skills** through live video sessions, collaborative communication, and secure authentication. Built using the **MERN stack**, Tandemly integrates modern web technologies like **WebRTC**, **Socket.io**, and **OAuth** to create a seamless and scalable remote learning experience.

---

## 🚀 Features

- 🔗 **Live Video Calling** — Real-time 1-on-1 or group video sessions powered by WebRTC.
- 📡 **Real-Time Signaling** — Lightning-fast connection setup and messaging via Socket.io.
- 🔐 **Secure Authentication** — JWT-based login and OAuth integrations with Google and GitHub.
- 🧑‍🤝‍🧑 **Peer Learning Ecosystem** — Connect with others to share skills, teach, or join sessions.
- 📱 **Responsive Design** — Fully mobile-compatible and user-friendly UI built with React.js.

---

## 🛠️ Tech Stack

| Technology       | Description                            |
|------------------|----------------------------------------|
| **MongoDB**      | NoSQL database for storing user/session data |
| **Express.js**   | Backend framework for routing & APIs   |
| **React.js**     | Frontend UI with hooks & component design |
| **Node.js**      | JavaScript runtime for the backend     |
| **Socket.io**    | Real-time signaling for video/chat     |
| **WebRTC**       | Peer-to-peer media communication       |
| **JWT**          | Secure session-based authentication    |
| **OAuth 2.0**    | Third-party login via Google & GitHub  |

---

## 📁 Folder Structure

```bash
tandemly/
├── client/                 # React frontend
│   ├── src/
│   └── public/
├── server/                 # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── socket/
├── .env
├── package.json
└── README.md


⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/hardikbatra07/Tandemly.git
cd Tandemly


2. Set Up Environment Variables
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GITHUB_CLIENT_ID=your_github_client_id


3. Install Dependencies
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install


4. Run the Application
Open two terminals:
# Terminal 1: Run the React frontend
cd client
npm start

# Terminal 2: Run the Express backend
cd server
nodemon server.js

