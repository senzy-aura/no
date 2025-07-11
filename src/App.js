import './App.css';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Account from './Account';
import ProductDetails from './ProductDetails';

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 'Rs. 85,000', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Mobile Phone', price: 'Rs. 60,000', img: 'https://i.pinimg.com/1200x/5b/d8/93/5bd893c5ec4277bc4cff54fbb3e79afb.jpg' },
    { id: 3, name: 'Sneakers', price: 'Rs. 3,500', img: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Backpack', price: 'Rs. 1,800', img: 'https://images.unsplash.com/photo-1550253594-356b2f788907?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, name: 'Sun Glasses', price: 'Rs. 1,200', img: 'https://images.unsplash.com/photo-1659696338630-3f0d22e5d448?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, name: 'Bluetooth Speaker', price: 'Rs. 2,200', img: 'https://i.pinimg.com/736x/80/60/0b/80600b7071ca88fe016b58700f784e91.jpg  ' },
    { id: 7, name: 'Handfree', price: 'Rs. 700', img: 'https://i.pinimg.com/474x/e7/e0/c1/e7e0c1687041cd1711b4dbe8ec949a32.jpg' },
    { id: 8, name: 'Laptop Stand', price: 'Rs. 1,200', img: 'https://i.pinimg.com/736x/1c/42/09/1c42099caad4515f9f9e9cc8a4166ef4.jpg' },
    { id: 9, name: 'Wireless Mouse', price: 'Rs. 800', img: 'https://i.pinimg.com/1200x/f9/20/06/f920067f7d78218df227e9faaf7529ea.jpg' },
    { id: 10, name: 'Travel Mug', price: 'Rs. 500', img: 'https://i.pinimg.com/736x/55/a6/05/55a605ee47f8b473a249d0154f548920.jpg' },
    { id: 11, name: 'Tablet', price: 'Rs. 35,000', img: 'https://i.pinimg.com/736x/4d/a5/c1/4da5c12ff0d3b83348b11d9237a6c42c.jpg' },
    { id: 12, name: 'DSLR Camera', price: 'Rs. 95,000', img: 'https://i.pinimg.com/1200x/5a/b1/18/5ab118727f5f36ebe5d9014fdf20178f.jpg' },
    { id: 13, name: 'Gaming Console', price: 'Rs. 70,000', img: 'https://i.pinimg.com/1200x/cd/43/67/cd43672a63f6356bd4199d4ae6d1d480.jpg' },
    { id: 14, name: 'Smart TV', price: 'Rs. 55,000', img: 'https://i.pinimg.com/1200x/d4/42/f0/d442f0261699b560f484a4e303d62c8a.jpg' },
    { id: 15, name: 'Wireless Earbuds', price: 'Rs. 2,500', img: 'https://i.pinimg.com/736x/e7/e0/c1/e7e0c1687041cd1711b4dbe8ec949a32.jpg' },
    { id: 16, name: 'Power Bank', price: 'Rs. 1,500', img: 'https://i.pinimg.com/736x/8a/76/1f/8a761f944a45b223ad18c1e8d7acaedb.jpg' },
    { id: 17, name: 'Smart Light', price: 'Rs. 600', img: 'https://i.pinimg.com/736x/cb/87/23/cb87230c2c39ca3f1ea515ae5e96a47f.jpg' },
    { id: 18, name: 'VR Headset', price: 'Rs. 12,000', img: 'https://i.pinimg.com/736x/5c/50/80/5c508012bce89b5e50f6b1f45facaea7.jpg' },
    { id: 19, name: 'Desk Lamp', price: 'Rs. 900', img: 'https://i.pinimg.com/736x/15/cc/aa/15ccaacc59e60cbd204585acda858328.jpg' },
    { id: 20, name: 'Portable Fan', price: 'Rs. 700', img: 'https://i.pinimg.com/736x/c3/38/9f/c3389f21200002c8e8b595c17f387d0a.jpg' },
    { id: 21, name: 'Action Camera', price: 'Rs. 12,000', img: 'https://i.pinimg.com/736x/fa/90/32/fa9032ab46c48d319623399b444a4d1a.jpg' },
    { id: 22, name: 'Coffee Maker', price: 'Rs. 4,000', img: 'https://i.pinimg.com/736x/f1/6c/1b/f16c1b144d7bd6119b17786e3353b12e.jpg' },
    { id: 23, name: 'Smart Plug', price: 'Rs. 1,200', img: 'https://i.pinimg.com/736x/c9/db/d3/c9dbd3f093ddf777904497fd19244c58.jpg' },
    { id: 24, name: 'Router', price: 'Rs. 2,500', img: 'https://i.pinimg.com/1200x/48/ea/1f/48ea1f3996ed1c66781c2158ed9f83ff.jpg' },
    { id: 25, name: 'Tripod', price: 'Rs. 1,500', img: 'https://i.pinimg.com/736x/6e/fd/42/6efd42f53adfe1536a9eb334d9f679ca.jpg' },
    { id: 26, name: 'Smart Watch', price: 'Rs. 8,000', img: 'https://i.pinimg.com/736x/3b/7a/25/3b7a25b829711e5e20a697f55eb76f48.jpg' },
    { id: 27, name: 'Graphic Tablet', price: 'Rs. 9,000', img: 'https://i.pinimg.com/736x/a7/58/2a/a7582ad4b14d201fbafc9d80aa3cb869.jpg' },
    { id: 28, name: 'Mini Projector', price: 'Rs. 7,000', img: 'https://i.pinimg.com/736x/39/73/71/3973713b3cef6756c527d1e636ff591e.jpg' },
  ];

  const deals = [
    { id: 'd1', name: 'Smart Clip Camera', price: 'Rs. 6,500', img: 'https://i.pinimg.com/1200x/7e/96/6f/7e966ffc1443600a32ad83a4f066f736.jpg' },
    { id: 'd2', name: 'Wireless Charger', price: 'Rs. 9,800', img: 'https://i.pinimg.com/736x/48/45/50/484550a1982cb6b5b0fd336d401563c1.jpg' },
    { id: 'd3', name: 'Reusable Straw Set', price: 'Rs. 2,200', img: 'https://i.pinimg.com/1200x/cc/b6/95/ccb6953094e6d70b861a35e9ba1eb513.jpg' },
    { id: 'd4', name: 'Charge Link Cable', price: 'Rs. 1,400', img: 'https://i.pinimg.com/1200x/d0/47/4d/d0474d29cbdc39db6c7b0fd13107af48.jpg' },
    { id: 'd5', name: 'Stream Mic Mini', price: 'Rs. 1,900', img: 'https://i.pinimg.com/1200x/d1/a9/50/d1a95074134faed0a886a1e4974cede5.jpg' },
    { id: 'd6', name: 'Easy Cast Dongle', price: 'Rs. 5,500', img: 'https://i.pinimg.com/1200x/d8/b7/e4/d8b7e45a3a32b4c6dc6a486f8e7982fb.jpg' },
    { id: 'd7', name: 'Tilt View Stand', price: 'Rs. 3,800', img: 'https://i.pinimg.com/1200x/6d/69/d1/6d69d18bbc1fe49e502c2221373eafbd.jpg' },
    { id: 'd8', name: 'Glow Pad Mouse', price: 'Rs. 1,600', img: 'https://i.pinimg.com/1200x/26/26/54/2626545a045dc50bb2bc3fbd8ae3dc35.jpg' },
    { id: 'd9', name: 'Cooling Fan For Mobile', price: 'Rs. 10,000', img: 'https://i.pinimg.com/1200x/f6/a5/0e/f6a50e4ef9575cd194c8ac2535daf53b.jpg' },
    { id: 'd10', name: 'Webcam', price: 'Rs. 1,100', img: 'https://i.pinimg.com/1200x/99/a6/5c/99a65cdcf5f9bdd359aea78af69bed03.jpg' },
    { id: 'd11', name: 'LightPulse Therapy Lamp', price: 'Rs. 700', img: 'https://i.pinimg.com/736x/61/ca/30/61ca30f10b457dd91e31550bc13d0c11.jpg' },
    { id: 'd12', name: 'TempTrack Smart Thermometer', price: 'Rs. 400', img: 'https://i.pinimg.com/736x/79/b2/b5/79b2b59f4a6d616c867227c70b312a2d.jpg' },
  
   
  ];

  // Auth state
  const [user, setUser] = React.useState(() => {
    return JSON.parse(localStorage.getItem('loggedInUser')) || null;
  });

  // Login function
  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem('loggedInUser', JSON.stringify(found));
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  // Register function
  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === username)) return false;
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    const logged = { username };
    setUser(logged);
    localStorage.setItem('loggedInUser', JSON.stringify(logged));
    return true;
  };

  return (
    <div className="App">
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path= "/" element={
          <main className="simple-home">
            <h1 className="welcome-title">Welcome</h1>
            <div className="products-grid">
              {products.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="product-card">
                    <img src={product.img} alt={product.name} className="product-img" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                    <button className="buy-btn">Buy Now</button>
                    <button className="add-cart-btn" onClick={e => { e.preventDefault(); alert(`Added ${product.name} to cart!`); }}>
                      <span role="img" aria-label="cart">🛒</span> Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Testimonials Section */}
            <section className="testimonials-section" style={{margin:'3rem auto 2rem',maxWidth:'900px',background:'#f8f6fc',borderRadius:'1.2rem',boxShadow:'0 2px 12px rgba(127,83,172,0.07)',padding:'2.5rem 1.5rem'}}>
              <h2 style={{color:'#7f53ac',fontWeight:800,marginBottom:'1.2rem',fontSize:'2rem',textAlign:'center'}}>What Our Customers Say</h2>
              <div className="testimonials-grid" style={{display:'flex',flexWrap:'wrap',gap:'1.5rem',justifyContent:'center'}}>
                <div className="testimonial-card" style={{background:'#fff',borderRadius:'1rem',padding:'1.2rem 1.5rem',boxShadow:'0 2px 8px rgba(127,83,172,0.08)',maxWidth:'320px',flex:'1 1 250px'}}>
                  <p style={{fontStyle:'italic',color:'#444'}}>"Amazing service and super fast delivery! The products are top quality. Will shop again!"</p>
                  <div style={{marginTop:'1rem',fontWeight:600,color:'#7f53ac'}}>— Muhammad Saif</div>
                </div>
                <div className="testimonial-card" style={{background:'#fff',borderRadius:'1rem',padding:'1.2rem 1.5rem',boxShadow:'0 2px 8px rgba(127,83,172,0.08)',maxWidth:'320px',flex:'1 1 250px'}}>
                  <p style={{fontStyle:'italic',color:'#444'}}>"Senzyy has the best deals and their support team is so helpful. Highly recommended!"</p>
                  <div style={{marginTop:'1rem',fontWeight:600,color:'#7f53ac'}}>— Saeed Khan</div>
                </div>
                <div className="testimonial-card" style={{background:'#fff',borderRadius:'1rem',padding:'1.2rem 1.5rem',boxShadow:'0 2px 8px rgba(127,83,172,0.08)',maxWidth:'320px',flex:'1 1 250px'}}>
                  <p style={{fontStyle:'italic',color:'#444'}}>"Loved the product quality and packaging. The website is easy to use and looks great!"</p>
                  <div style={{marginTop:'1rem',fontWeight:600,color:'#7f53ac'}}>— Bilal Akram</div>
                </div>
              </div>
            </section>
          </main>
        } />
        <Route path="/shop" element={<div style={{padding:'2rem',textAlign:'center'}}><h1>Shop</h1><p>Browse all our products here soon!</p></div>} />
        <Route path="/deals" element={
          <main className="simple-home">
            <h1 className="welcome-title">Deals</h1>
            <div className="products-grid">
              {deals.map(product => (
                <div className="product-card" key={product.id}>
                  <img src={product.img} alt={product.name} className="product-img" />
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-price">{product.price}</p>
                  <button className="buy-btn">Buy Now</button>
                  <button className="add-cart-btn" onClick={() => alert(`Added ${product.name} to cart!`)}>
                    <span role="img" aria-label="cart">🛒</span> Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </main>
        } />
        <Route path="/about" element={
          <main className="about-animated" style={{maxWidth:'900px',margin:'0 auto',padding:'0 1rem'}}>
            <div className="about-hero">
              <h1 className="about-title">
                <span className="about-gradient-text">About Senzyy</span>
                <span className="about-underline"></span>
              </h1>
              <p className="about-hero-desc">The New Era Of E-Commerce Is Here.</p>
            </div>
            <section className="about-section">
              <div className="about-cards">
                <div className="about-card fade-in-up" style={{animationDelay:'0.1s'}}>
                  <h2>Our Story</h2>
                  <p>Senzyy is a modern e-commerce platform dedicated to bringing you the latest and most innovative gadgets, accessories, and lifestyle products at unbeatable prices. Founded by passionate tech enthusiasts, our mission is to make smart living accessible to everyone.</p>
                </div>
                <div className="about-card fade-in-up" style={{animationDelay:'0.3s'}}>
                  <h2>Why Shop With Us?</h2>
                  <ul>
                    <li>Curated selection of trending and quality products</li>
                    <li>Fast and reliable shipping across the globe</li>
                    <li>Secure payment options and buyer protection</li>
                    <li>Friendly customer support ready to help you</li>
                    <li>Regular deals and exclusive offers for our community</li>
                  </ul>
                </div>
                <div className="about-card fade-in-up" style={{animationDelay:'0.5s'}}>
                  <h2>Our Vision</h2>
                  <p>We believe technology should empower and inspire. At Senzyy, we’re committed to delivering not just products, but experiences that make your everyday life smarter, easier, and more enjoyable.</p>
                </div>
              </div>
              <div className="about-visuals">
                <div className="about-bubble about-bubble1"></div>
                <div className="about-bubble about-bubble2"></div>
                <div className="about-bubble about-bubble3"></div>
              </div>
            </section>
          </main>
        } />
        <Route path="/contact" element={
          <main className="contact-page" style={{maxWidth:'500px',margin:'2.5rem auto',background:'#fff',borderRadius:'1.2rem',boxShadow:'0 4px 18px rgba(127,83,172,0.07)',padding:'2.5rem 1.5rem'}}>
            <h1 className="contact-title" style={{color:'#7f53ac',fontWeight:800,marginBottom:'1.2rem'}}>Contact Us</h1>
            <p style={{fontSize:'1.1rem',color:'#333',marginBottom:'1.5rem'}}>We'd love to hear from you! Fill out the form below or email us at <a href="mailto:permnent5939@gmail.com" style={{color:'#ffb347',textDecoration:'underline'}}>info@senzyy.com</a>.</p>
            <p style={{fontSize:'1.05rem',color:'#7f53ac',marginBottom:'1.2rem',fontWeight:500}}>
              Our Team Replies To All Messages Within <span style={{color:'#ffb347',fontWeight:700}}>6 hours</span>.
            </p>
            <form className="contact-form" autoComplete="off" action="https://formspree.io/f/manjrnek" method="POST">
              <input className="contact-input" type="text" name="name" placeholder="Your Name" required />
              <input className="contact-input" type="email" name="email" placeholder="Your Email" required />
              <textarea className="contact-input" name="message" placeholder="Your Message" rows="4" required></textarea>
              <button className="contact-btn" type="submit">Send Message</button>
            </form>
            <div className="contact-socials" style={{marginTop:'2rem'}}>
              <span style={{fontWeight:600,color:'#7f53ac'}}>Follow us:</span>
              <a href="https://instagram.com/senzy_ff_" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Instagram" style={{fontSize:'1.7em',verticalAlign:'middle',marginLeft:'0.7em',textDecoration:'none'}}>
                <span role="img" aria-label="Instagram">📸</span>
              </a>
              <a href="https://youtube.com/@Senzy_King" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="YouTube" style={{fontSize:'1.7em',verticalAlign:'middle',marginLeft:'0.7em',textDecoration:'none'}}>
                <span role="img" aria-label="YouTube">📺</span>
              </a>
              <a href="https://tiktok.com/@senzy_ff_" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="TikTok" style={{fontSize:'1.7em',verticalAlign:'middle',marginLeft:'0.7em',textDecoration:'none'}}>
                <span role="img" aria-label="TikTok">🎵</span>
              </a>
            </div>
          </main>
        } />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" element={<Register register={register} />} />
        <Route path="/account" element={<Account user={user} logout={logout} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
