// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <Link to="/loginRegister" className="button">Login/Register</Link>
      <Link to="/ticketList" className="button">View Ticket List</Link>
      <Link to="/userDashboard" className="button">User Dashboard</Link>
      <Link to="/techSupport" className="button">Tech Support</Link>
    </header>
  );
}

function TrendingTickets() {
  const trending = [
    'Concert: The Rock Stars Live',
    'Sports: Local Football Finals',
    'Theater: Shakespeare Classics',
    'Festival: Food and Wine Extravaganza',
    'Movie: Latest Blockbuster Premiere'
  ];

  return (
    <div className="trending">
      <h2>Trending Tickets</h2>
      <ul>
        {trending.map((ticket, index) => (
          <li key={index}>{ticket}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <p>© 2023 Ticket Booking App. All rights reserved.</p>
      <div className="map">
        <p>Our Location: 123 Ticket Lane, Event City</p>
      </div>
    </footer>
  );
}

function App() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setDateTime(now.toLocaleDateString('en-GB', options));
    };

    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <h1>Welcome to Ticket Booking App</h1>
          <p>Your one-stop solution for booking tickets conveniently and efficiently!</p>
          <TrendingTickets />
          <div className="datetime">{dateTime}</div>
        </main>
        <Footer />
      </div>

      <Routes>
        <Route path="/loginRegister" element={<div>Login/Register Page</div>} />
        <Route path="/ticketList" element={<div>Ticket List Page</div>} />
        <Route path="/userDashboard" element={<div>User Dashboard Page</div>} />
        <Route path="/techSupport" element={<div>Tech Support Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
