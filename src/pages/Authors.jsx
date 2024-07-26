import React from 'react';
import './Authors.css';

function Authors() {
  return (
    <div className="authors-page">
      <h1>Meet Our Authors</h1>
      <p id='firstp'>Discover the brilliant minds behind our vast collection of books. Each author brings their unique voice and perspective, enriching our library with a diverse range of genres and stories.</p>
      
      <h2>Author Spotlight</h2>
      <div className="author-spotlight">
        <img src="https://i.pinimg.com/474x/6f/f1/52/6ff152ecb91982c89c5250639900ffd8.jpg" alt="Author Name" />
        <div>
          <h3>Discover our famous and most valuable authors</h3>
        </div>
      </div>
      
      <h2>Featured Authors</h2>
      <ul className="featured-authors">
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/MT_VASUDEVAN_NAIR.jpg" alt="image of mt vasudevan nair"/>
          <h3>MT VASUDEVAN NAIR</h3>
          <p>M.T. Vasudevan Nair is a celebrated Indian author, screenwriter, and film director known for his contributions to Malayalam literature and cinema.</p>
        </li>
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Novelist_Subhash_Chandran_from_Kerala%2C_India.jpg" alt="Author Name" />
          <h3>SUBHASH CHANDRAN</h3>
          <p>Subhash Chandran is an acclaimed Indian writer and novelist, renowned for his works in Malayalam literature, including the award-winning novel "Manushyanu Oru Aamukham."</p>
        </li>
        <li>
          <img src="https://th-i.thgim.com/public/migration_catalog/article14043835.ece/alternates/FREE_1200/19TVF_O.N.V_KURUP" alt="Author Name" />
          <h3>ONV KURUPP</h3>
          <p>O.N.V. Kurup was a distinguished Indian poet and lyricist, celebrated for his profound contributions to Malayalam literature and music.</p>
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWe2ZuyyV5gRuma9h6aDMr9-nTWUuZUAs9c4D4qaAOsxiSYOSXD7akEyhK6o4qqxxEYzD2qRM9dsfx7C1o93GLl7Y2QU8K_v4azhX-w" alt="Author Name" />
          <h3>KUNJUNNI MASH</h3>
          <p>Kunjunni Mash was a beloved Indian poet known for his simple yet profound Malayalam poetry, which resonated deeply with children and adults alike.</p>
        </li>
      </ul>
      <div className="footer-content">
        <h3>Suggest an Author</h3>
        <form action="/submit-suggestion" method="post">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="author-name">Author's Name:</label>
          <input type="text" id="author-name" name="author-name" required />
          
          <label htmlFor="suggestion">Suggestion Details:</label>
          <textarea id="suggestion" name="suggestion" rows="4" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Authors;
