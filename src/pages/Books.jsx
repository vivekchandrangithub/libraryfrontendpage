import React from 'react';
import './Books.css'; 

function Books() {
  return (
    <div className="books-page">
      <h1>Our Book Collection</h1>
      <p>Explore the remarkable works of some of the most celebrated authors in Malayalam literature. Our collection includes a variety of genres and styles, reflecting the richness of their contributions.</p>
      
      <section className="author-books">
        <h2>MT Vasudevan Nair</h2>
        <div className="book">
          <h3>Kaalam (Time)</h3>
          <p><strong>Description:</strong> A profound novel that explores the human condition through the lens of time. It is celebrated for its rich narrative and deep philosophical insights.</p>
          <p><strong>Genre:</strong> Literary Fiction</p>
          <p><strong>Published:</strong> 1984</p>
          <p><strong>Notable Award:</strong> Jnanpith Award (1995)</p>
        </div>
        <div className="book">
          <h3>Naalukettu (The House with Four Walls)</h3>
          <p><strong>Description:</strong> A classic novel depicting the socio-cultural dynamics of a traditional Nair family in Kerala. It delves into themes of family, tradition, and personal freedom.</p>
          <p><strong>Genre:</strong> Family Saga</p>
          <p><strong>Published:</strong> 1958</p>
          <p><strong>Notable Award:</strong> Kerala Sahitya Akademi Award (1959)</p>
        </div>
      </section>

      <section className="author-books">
        <h2>Subhash Chandran</h2>
        <div className="book">
          <h3>Manushyanu Oru Aamukham (A Preface to Man)</h3>
          <p><strong>Description:</strong> An acclaimed novel that intricately portrays the human psyche and societal norms. It is known for its narrative style and deep character exploration.</p>
          <p><strong>Genre:</strong> Contemporary Fiction</p>
          <p><strong>Published:</strong> 2011</p>
          <p><strong>Notable Award:</strong> Kerala Sahitya Akademi Award (2012)</p>
        </div>
        <div className="book">
          <h3>Oru Deshathinte Katha (The Story of a Country)</h3>
          <p><strong>Description:</strong> A gripping tale that examines the socio-political landscape of Kerala through a narrative that is both engaging and thought-provoking.</p>
          <p><strong>Genre:</strong> Social Fiction</p>
          <p><strong>Published:</strong> 2009</p>
          <p><strong>Notable Award:</strong> Noma Concours for Publishing (2009)</p>
        </div>
      </section>

      <section className="author-books">
        <h2>ONV Kurup</h2>
        <div className="book">
          <h3>Smarakasilakal (The Stone Monuments)</h3>
          <p><strong>Description:</strong> A collection of poignant poems reflecting ONV Kurup’s mastery in capturing the essence of human emotions and experiences.</p>
          <p><strong>Genre:</strong> Poetry</p>
          <p><strong>Published:</strong> 1992</p>
          <p><strong>Notable Award:</strong> Sahitya Akademi Award (1992)</p>
        </div>
        <div className="book">
          <h3>Nadapratithishta (Recognition of Music)</h3>
          <p><strong>Description:</strong> This work explores the relationship between poetry and music, showcasing Kurup’s unique ability to intertwine the two art forms.</p>
          <p><strong>Genre:</strong> Poetic Essays</p>
          <p><strong>Published:</strong> 1980</p>
          <p><strong>Notable Award:</strong> Kerala Sahitya Akademi Award (1980)</p>
        </div>
      </section>

      <section className="author-books">
        <h2>Kunjunni Mash</h2>
        <div className="book">
          <h3>Balaprasadam (Children’s Offerings)</h3>
          <p><strong>Description:</strong> A delightful collection of poems and stories aimed at children, capturing the innocence and simplicity of childhood with charm and warmth.</p>
          <p><strong>Genre:</strong> Children's Literature</p>
          <p><strong>Published:</strong> 1970</p>
          <p><strong>Notable Award:</strong> Kerala Sahitya Akademi Award (1971)</p>
        </div>
        <div className="book">
          <h3>Kunjunni Mashinte Kavithakal (Poems of Kunjunni Mash)</h3>
          <p><strong>Description:</strong> A compilation of Kunjunni Mash’s most beloved poems, celebrated for their simplicity and depth, resonating with both children and adults.</p>
          <p><strong>Genre:</strong> Poetry</p>
          <p><strong>Published:</strong> 1985</p>
          <p><strong>Notable Award:</strong> Jnanpith Award (1984)</p>
        </div>
      </section>
      <div className="footer-content">
        <h3>Suggest a book</h3>
        <form action="/submit-suggestion" method="post">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="author-name">Book's Name:</label>
          <input type="text" id="author-name" name="author-name" required />
          
          <label htmlFor="suggestion">Suggestion Details:</label>
          <textarea id="suggestion" name="suggestion" rows="4" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Books;
