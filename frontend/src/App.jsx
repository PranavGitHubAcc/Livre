import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyConverter from './components/CurrencyConverter';
import LanguageTranslator from './components/LanguageTranslator';
import Journal from './components/Journal';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar />
          <main>
            <Routes>

              <Route path="/currency-converter" element={<CurrencyConverter />} />
              <Route path="/language-translator" element={<LanguageTranslator />} />
              <Route path="/journal" element={<Journal />} />

              <Route path="/" element={<Navigate to="/money-tracker" />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
