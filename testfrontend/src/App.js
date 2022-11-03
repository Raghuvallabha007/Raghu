import React from 'react';
import './App.css';
import {
  BrowserRouter , Routes, Route
} from "react-router-dom";
import MyNotes from './Screens/MyNotes/MyNotes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './Screens/LandingPage/LandingPage';

const App = () => (
  <BrowserRouter>
    <Header />
      <main>
      <Routes>
          <Route path="/" element={<LandingPage />} exact/>
          <Route path="/mynotes" element={<MyNotes />} exact/>
        </Routes>
      </main>
    <Footer />
  </BrowserRouter>
)

export default App;
