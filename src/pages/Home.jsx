import React from 'react';
import './Home.css'; 
function Home() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to BookVault Library</h1>
        <p>Your gateway to a world of knowledge and imagination. Discover our collection of books from celebrated authors and explore new genres and stories.</p>
      </header>

      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book">
          <h3>Book of the Month</h3>
          <p><strong>Title:</strong> The Great Adventure</p>
          <p><strong>Author:</strong> Jane Doe</p>
          <p><strong>Description:</strong> An enthralling journey through time and space, perfect for readers seeking adventure and excitement.</p>
        </div>
        <div className="book">
          <h3>Editor's Pick</h3>
          <p><strong>Title:</strong> Mystery Unveiled</p>
          <p><strong>Author:</strong> John Smith</p>
          <p><strong>Description:</strong> A gripping mystery novel with twists and turns that will keep you on the edge of your seat.</p>
        </div>
      </section>

      <section className="library-services">
        <h2>Our Services</h2>
        <ul>
          <li><strong>Book Lending:</strong> Borrow books from our extensive collection with ease.</li>
          <li><strong>Reading Rooms:</strong> Enjoy a quiet space for reading and studying.</li>
          <li><strong>Events:</strong> Join us for author talks, book clubs, and special events.</li>
          <li><strong>Online Catalog:</strong> Access our library catalog and reserve books online.</li>
        </ul>
      </section>
      <div className="footer-content">
        <h3>Take a membership</h3>
        <form action="/submit-suggestion" method="post">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="suggestion">Intrested reading area's</label>
          <textarea id="suggestion" name="suggestion" rows="4" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BookVault Library. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
