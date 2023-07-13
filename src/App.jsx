/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const url= 'https://api.api-ninjas.com/v1/quotes?category=';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        headers: { 'X-Api-Key': '5HL9hRtaEdLF5JZ1uf1J2w==q76pY7PjSeCRJ836'},
      });
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {data ? (
    <div id="quote-box">
    <div id="text">{data[0].quote}</div>
    <div id="author">{data[0].author}</div>
    <div>
      <button type="submit" onClick={fetchData} id="new-quote">New Quote</button>
    </div>
    <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
    </div>
      ) : (
        <></> // loading data
      )}
    </div>
  );
}

export default App

