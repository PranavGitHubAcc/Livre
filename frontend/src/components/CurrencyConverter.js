// src/components/CurrencyConverter.js
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(0);
  const [srcCurrency, setSrcCurrency] = useState('USD');
  const [destCurrency, setDestCurrency] = useState('INR');

  const conversionRates = {
    'USD_INR': 83.74,
    'USD_EUR': 0.85,
    'USD_GBP': 0.75,
    'USD_USD': 1,
    'EUR_INR': 91.50,
    'EUR_EUR': 1,
    'EUR_USD': 1.18,
    'EUR_GBP': 1.18,
    'GBP_INR': 106.75,
    'GBP_USD': 1.33,
    'GBP_GBP': 1,
    'GBP_EUR': 0.85,
    'INR_INR' : 1,
    'INR_EUR' : 1/91.50,
    'INR_GBP' : 1/106.75,
    'INR_USD' : 1/83.74,
  };

  const convertCurrency = () => {
    const key = `${srcCurrency}_${destCurrency}`;
    const conversionRate = conversionRates[key] || 1; 
    setConverted(amount * conversionRate);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      
      <div className='CurrencyConverter'>
        <Dropdown onSelect={(eventKey) => setSrcCurrency(eventKey)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {srcCurrency}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
            <Dropdown.Item eventKey="EUR">EUR</Dropdown.Item>
            <Dropdown.Item eventKey="GBP">GBP</Dropdown.Item>
            <Dropdown.Item eventKey="INR">INR</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown onSelect={(eventKey) => setDestCurrency(eventKey)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {destCurrency}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
            <Dropdown.Item eventKey="EUR">EUR</Dropdown.Item>
            <Dropdown.Item eventKey="GBP">GBP</Dropdown.Item>
            <Dropdown.Item eventKey="INR">INR</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Enter amount in ${srcCurrency}`}
        />
        <button onClick={convertCurrency}>Convert</button>
      </div>
      <p>Converted Amount: {destCurrency} {converted.toFixed(2)}</p>
    </div>
  );
}

export default CurrencyConverter;
