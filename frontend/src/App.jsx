import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyConverter from './components/CurrencyConverter';
import LanguageTranslator from './components/LanguageTranslator';
import Journal from './components/Journal';

import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
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

                <Route path="/money-tracker" element={
                  <>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                  </>
                } />

                <Route path="/" element={<Navigate to="/money-tracker" />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
