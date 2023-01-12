import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {useRef, useState} from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs , doc, setDoc} from 'firebase/firestore/lite';
import Main from "./pages/main";
import Home from "./pages/home";
const firebaseConfig = {
  apiKey: "AIzaSyDi9NYR6V6HPq-aiDl-s8uIaj_pu24VFUA",
  authDomain: "meet--em.firebaseapp.com",
  projectId: "meet--em",
  storageBucket: "meet--em.appspot.com",
  messagingSenderId: "82799390152",
  appId: "1:82799390152:web:c240b72359293e874a64fd",
  measurementId: "G-5TG5S3MJ57"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Initialize webRTC


const servers = {
  iceServers: [
    {
      urls: [
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302"
      ]
    }
  ],
  iceCandidatePoolSize: 10
}

const peerConnection = new RTCPeerConnection(servers)

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/meet/:id" element={<Main/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
