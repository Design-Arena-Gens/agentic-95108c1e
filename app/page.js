'use client'

import { useState } from 'react'

export default function Home() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      brand: 'TechGear',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500'
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      brand: 'TechGear',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    },
    {
      id: 3,
      name: 'USB-C Hub Adapter',
      brand: 'ConnectPro',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500'
    },
    {
      id: 4,
      name: '4K Action Camera',
      brand: 'VisionTech',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500'
    },
    {
      id: 5,
      name: 'Portable Power Bank',
      brand: 'ChargePro',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500'
    },
    {
      id: 6,
      name: 'Gaming Headset RGB',
      brand: 'GameTech',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500'
    },
    {
      id: 7,
      name: 'Mechanical Keyboard',
      brand: 'KeyMaster',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
    },
    {
      id: 8,
      name: 'Wireless Mouse Pro',
      brand: 'ClickTech',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500'
    }
  ]

  const categories = [
    { name: 'Audio', icon: '🎧', count: '250+ items' },
    { name: 'Wearables', icon: '⌚', count: '180+ items' },
    { name: 'Cameras', icon: '📷', count: '120+ items' },
    { name: 'Accessories', icon: '🔌', count: '500+ items' },
    { name: 'Gaming', icon: '🎮', count: '300+ items' },
    { name: 'Smart Home', icon: '🏠', count: '200+ items' }
  ]

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            Free shipping on orders over $50 | Shop now and save up to 30%
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <nav className="nav-wrapper">
              <a href="/" className="logo">TechGear</a>
              <ul className="nav-links">
                <li><a href="#shop">Shop</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className="nav-actions">
                <button className="icon-btn">🔍</button>
                <button className="icon-btn">👤</button>
                <button className="icon-btn">
                  🛒
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Discover the Latest Tech Gadgets</h1>
          <p>Premium quality electronics and accessories for the modern lifestyle</p>
          <a href="#shop" className="btn">Shop Now</a>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle">Find exactly what you're looking for</p>
          </div>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Handpicked selection of our best sellers</p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <div className="product-brand">{product.brand}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button onClick={addToCart} className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Free delivery on orders over $50. Get your gadgets delivered to your doorstep.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Your payment information is protected with industry-leading encryption.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">↩️</div>
              <h3>30-Day Returns</h3>
              <p>Not satisfied? Return any product within 30 days for a full refund.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Our customer support team is always here to help with any questions.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Shop</h4>
              <ul className="footer-links">
                <li><a href="#audio">Audio</a></li>
                <li><a href="#wearables">Wearables</a></li>
                <li><a href="#cameras">Cameras</a></li>
                <li><a href="#accessories">Accessories</a></li>
                <li><a href="#deals">Deals</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#warranty">Warranty</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px'}}>
                Subscribe to get exclusive deals and updates
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TechGear. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  )
}
