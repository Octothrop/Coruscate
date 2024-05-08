import React from 'react';
import Footer from './Footer'; // Assuming the Footer component file is named 'Footer.js'
import './home.css';

function HomePage() {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Our Website!</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>We are a company dedicated to providing awesome products/services.</p>
        </section>
        <section>
          <h2>Our Products/Services</h2>
          <ul>
            <li>Product/Service 1</li>
            <li>Product/Service 2</li>
            <li>Product/Service 3</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>Reach out to us at example@example.com or call us at 123-456-7890.</p>
        </section>
      </main>
      <Footer /> {/* Integrating the Footer component */}
    </div>
  );
}

export default HomePage;
