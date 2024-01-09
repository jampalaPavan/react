import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyExchange = () => {
  // State to store exchange rates
  const [exchangeRates, setExchangeRates] = useState([]);

  // Fetch exchange rates on component mount
  useEffect(() => {
    // API key for IEX Cloud (replace with your own key)
    const IEX_CLOUD_API_KEY = 'pk_4ae8586f91034a6ca4fec666aa27435c';
    
    // API URL for fetching exchange rates
    const exchangeApiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${IEX_CLOUD_API_KEY}`;

    // Function to fetch exchange rates
    const fetchExchangeRates = async () => {
      try {
        // Make API request using axios
        const exchangeResponse = await axios.get(exchangeApiUrl);

        // Update state with fetched exchange rates
        setExchangeRates(exchangeResponse.data);
      } catch (error) {
        // Log an error if fetching fails
        console.error('Error fetching exchange rates:', error);
      }
    };

    // Call the fetchExchangeRates function
    fetchExchangeRates();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="currency-exchange-container">
      <h2>Currency Exchange Rates</h2>
      <div className="exchange-rates">
        {/* Map through exchange rates and render each rate */}
        {exchangeRates.map((rate) => (
          <div key={rate.symbol} className="exchange-rate">
            <p>{`${rate.symbol}: ${rate.rate}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyExchange;
