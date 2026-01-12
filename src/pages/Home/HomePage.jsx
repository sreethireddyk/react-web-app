import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Find Your Dream Property</h1>
        <p>Buy, Rent & Invest in verified properties across India</p>
      </section>

      {/* SEARCH BAR */}
      <section className="search-bar">
        <select>
          <option>Property Type</option>
          <option>Apartment</option>
          <option>Family Home</option>
          <option>Office</option>
          <option>Villa</option>
        </select>

        <input type="text" placeholder="Enter City" />
        <button>Search</button>
      </section>

      {/* PROPERTY TYPE FILTER */}
      <section className="property-type">
        <button className="active">Show All</button>
        <button>Apartment</button>
        <button>Family Home</button>
        <button>Office</button>
        <button>Villa</button>
      </section>

      {/* SORT SECTION */}
      <section className="sort-section">
        <select>
          <option>Sort By</option>
          <option>Date: New to Old</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </section>

      {/* PROPERTY GRID */}
      <section className="property-grid">
        <div className="property-card">
          <img src="https://via.placeholder.com/400x250" alt="Apartment" />
          <span className="tag">For Sale</span>
          <h3>2 BHK Apartment</h3>
          <p className="price">₹50 Lakhs · 1200 sqft</p>
          <p className="location">Hyderabad</p>
          <button>View Details</button>
        </div>

        <div className="property-card">
          <img src="https://via.placeholder.com/400x250" alt="Villa" />
          <span className="tag rent">For Rent</span>
          <h3>Luxury Villa</h3>
          <p className="price">₹40,000 / month</p>
          <p className="location">Bangalore</p>
          <button>View Details</button>
        </div>

        <div className="property-card">
          <img src="https://via.placeholder.com/400x250" alt="Office" />
          <span className="tag">For Sale</span>
          <h3>Office Space</h3>
          <p className="price">₹1.2 Cr · 2200 sqft</p>
          <p className="location">Gachibowli</p>
          <button>View Details</button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

