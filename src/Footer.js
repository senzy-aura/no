import React from 'react';
import './Footer.css';


import { useState } from 'react';


const Footer = () => {

  const [showscienceModal, setShowscienceModal] = useState(false);
  const [showdevicesModal, setShowdevicesModal] = useState(false);
  const [showinvestorrelationsModal, setShowinvestorrelationsModal] = useState(false);
  const [showaboutusModal, setShowaboutusModal] = useState(false);
  const [showblogModal, setShowblogModal] = useState(false);
  const [showcareersModal, setShowcareersModal] = useState(false);
  const [showselfpublishModal, setShowselfpublishModal] = useState(false);
  const [showadvertiseyourproductsModal, setShowadvertiseyourproductsModal] = useState(false);
  const [showbecomeanaffiliateModal, setShowbecomeanaffiliateModal] = useState(false);
  const [showsellappsModal, setShowsellappsModal] = useState(false);
  const [showsellonbusinessModal, setShowsellonbusinessModal] = useState(false);
  const [showsellproductsModal, setShowsellproductsModal] = useState(false);
  const [showcurrencyconverterModal, setShowcurrencyconverterModal] = useState(false);
  const [showreloadyourbalanceModal, setShowreloadyourbalanceModal] = useState(false);
  const [showshopwithpointsModal, setShowshopwithpointsModal] = useState(false);
  const [showbcModal, setShowbcModal] = useState(false);
  const [showhlpModal, setShowhlpModal] = useState(false);
  const [showShippingModal, setShowShippingModal] = useState(false);
  const [showrarModal, setShowrarModal] = useState(false);
  const [showAllOrders, setShowAllOrders] = useState(false);
const [showAccountModal, setShowAccountModal] = useState(false);
const [showOrdersModal, setShowOrdersModal] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{cursor: 'pointer'}}>Back to top</div>
      <div className="footer-main">
        <div className="footer-col">
          <h3>Get to Know Us</h3>
          <ul>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowcareersModal(true)}>Careers</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowblogModal(true)}>Blog</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowaboutusModal(true)}>About Us</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowinvestorrelationsModal(true)}>Investor Relations</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowdevicesModal(true)}>Devices</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowscienceModal(true)}>Science</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Make Money with Us</h3>
          <ul>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowsellproductsModal(true)}>Sell Products</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowsellonbusinessModal(true)}>Sell on Business</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowsellappsModal(true)}>Sell Apps</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowbecomeanaffiliateModal(true)}>Become an Affiliate</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowadvertiseyourproductsModal(true)}>Advertise Your Products</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowselfpublishModal(true)}>Self-Publish</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Payment Products</h3>
          <ul>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowbcModal(true)}>Business Card</li> 
            <li style={{ cursor: 'pointer' }} onClick={() => setShowshopwithpointsModal(true)}>Shop With Points</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowreloadyourbalanceModal(true)}>Reload Your Balance</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowcurrencyconverterModal(true)}>Currency Converter</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Let Us Help You</h3>
          <ul>
            <li style={{cursor:'pointer'}} onClick={() => setShowOrdersModal(true)}>Your Orders</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowShippingModal(true)}>Shipping Rates</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowrarModal(true)}>Returns and Replacements</li>
            <li style={{ cursor: 'pointer' }} onClick={() => setShowhlpModal(true)}>Help</li>
          </ul>
        </div>
      </div>

      
  {/* Modal for Your Orders */}
{showOrdersModal && (
  <div className="footer-modal-overlay" onClick={() => { setShowOrdersModal(false); setShowAllOrders(false); }}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => { setShowOrdersModal(false); setShowAllOrders(false); }}
      >
        &times;
      </button>
      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Your Orders</h2>
      <p style={{ color: '#555', fontSize: '1em' }}>
        Here you can review your recent orders, track shipments, and manage returns or exchanges. Stay updated with your purchase status all in one place.
      </p>
      <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.2em' }}>
        <li>Order #12345 - Delivered</li>
        <li>Order #12346 - In Transit</li>
        <li>Order #12347 - Processing</li>
      </ul>
      <button
        style={{
          backgroundColor: '#7f53ac',
          color: '#fff',
          padding: '0.5em 1em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
        onClick={() => setShowAllOrders(true)}
      >
        View All Orders
      </button>

      {showAllOrders && (
        <div style={{ marginTop: '1em', color: '#444' }}>
          <h3>All Orders</h3>
          <p>Here is a full list of your orders with details and tracking info.</p>
          <ul>
            <li>Order #12340 - Delivered on 2025-06-20</li>
            <li>Order #12341 - Delivered on 2025-06-25</li>
            <li>Order #12342 - Cancelled</li>
            <li>Order #12343 - Processing</li>
          </ul>
          <button
            style={{
              marginTop: '0.5em',
              backgroundColor: '#aaa',
              color: '#222',
              border: 'none',
              borderRadius: '6px',
              padding: '0.3em 0.8em',
              cursor: 'pointer',
            }}
            onClick={() => setShowAllOrders(false)}
          >
            Close All Orders
          </button>
        </div>
      )}
    </div>
  </div>
)}

{/* Modal for Shipping Rates */}
{showShippingModal && (
  <div className="footer-modal-overlay" onClick={() => setShowShippingModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowShippingModal(false)}>&times;</button>
      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Shipping Rates</h2>
      <p style={{ color: '#555', fontSize: '1em' }}>
        We offer competitive and transparent shipping rates worldwide. Shipping costs depend on the destination, package weight, and delivery speed. Below are some estimated rates for popular regions:
      </p>
      <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.2em', color: '#333' }}>
        <li><b>United States:</b> $5.00 standard / $15.00 expedited</li>
        <li><b>Canada:</b> $7.00 standard / $20.00 expedited</li>
        <li><b>Europe:</b> $10.00 standard / $25.00 expedited</li>
        <li><b>Asia:</b> $12.00 standard / $30.00 expedited</li>
        <li><b>Other Regions:</b> Calculated at checkout based on location and weight</li>
      </ul>
      <p style={{ color: '#555', fontSize: '0.9em' }}>
        Please note that customs fees or taxes may apply depending on your country's regulations.
      </p>
    </div>
  </div>
)}

{/* Modal for Returns & Replacements */}
{showrarModal && (
  <div className="footer-modal-overlay" onClick={() => setShowrarModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowrarModal(false)}>&times;</button>
      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Returns & Replacements</h2>
      <p style={{ color: '#555', fontSize: '1em' }}>
        We want you to be completely satisfied with your purchase. If for any reason you're not happy, our Returns & Replacements policy makes it easy to return or exchange items within 14 days of delivery.
      </p>
      <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.2em', color: '#333' }}>
        <li>Easy Returns: Simply initiate a return request online, and we'll guide you through the process.</li>
        <li>Quick Replacements: If your item arrived damaged or defective, we’ll replace it at no extra cost.</li>
        <li>Refunds: Once we receive your returned item, refunds are processed promptly to your original payment method.</li>
        <li>Exclusions: Some items may be non-returnable for hygiene or safety reasons; these will be clearly noted on the product page.</li>
      </ul>
      <p style={{ color: '#555', fontSize: '0.9em' }}>
       For full details, please visit our Returns & Replacements policy page or contact our support team — we’re here to help!
      </p>
    </div>
  </div>
)}


{/* Modal for Help */}
{showhlpModal && (
  <div className="footer-modal-overlay" onClick={() => setShowhlpModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowhlpModal(false)}
      >
        &times;
      </button>

      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Help & Support</h2>

      <p style={{ color: '#555', fontSize: '1em' }}>
        Need assistance? We're here to help. Explore our Help Center for answers to common questions about orders, shipping, payments, and returns. You can also get in touch with our support team for personalized assistance.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#444', lineHeight: '1.6' }}>
        <li><b>Order Issues:</b> Track packages, report problems, or request changes.</li>
        <li><b>Shipping Info:</b> Learn about delivery times, rates, and delays.</li>
        <li><b>Returns & Refunds:</b> Start a return or check refund status.</li>
        <li><b>Payment Support:</b> Manage payment methods or troubleshoot errors.</li>
        <li><b>Technical Help:</b> Report bugs or get help with using the site.</li>
      </ul>

      <p style={{ fontSize: '0.95em', color: '#666' }}>
        Still need help? <b>Contact us</b> via chat or email and we’ll get back to you as soon as possible.
      </p>
      
    </div>
  </div>
)}
{/* Modal for Business Card */}
{showbcModal && (
  <div className="footer-modal-overlay" onClick={() => setShowbcModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowbcModal(false)}>&times;</button>
      <h2>Business Card</h2>
      <p>
        Our Business Card offers exclusive benefits designed to help you save and earn rewards every time you shop. Enjoy special financing options, cashback on purchases, and early access to deals tailored just for cardholders.
      </p>
      <p>
        Whether you're a frequent buyer or just getting started, the Business Card makes your shopping experience smoother and more rewarding. Apply today and unlock a world of convenience and savings!
      </p>
    </div>
  </div>
)}

{/* Modal for Shop With Points */}
{showshopwithpointsModal && (
  <div className="footer-modal-overlay" onClick={() => setShowshopwithpointsModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowshopwithpointsModal(false)}
      >
        &times;
      </button>
      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Shop With Points</h2>
      <p style={{ color: '#555', fontSize: '1em' }}>
        Use your accumulated reward points to pay for eligible items during checkout. 
        This feature helps you save money by redeeming points you've earned through past purchases or promotions.
      </p>
      <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.2em', color: '#333' }}>
        <li>Earn points on every purchase.</li>
        <li>Redeem points directly at checkout.</li>
        <li>No expiration on points for active accounts.</li>
        <li>Use points for discounts or free products.</li>
      </ul>
      <p style={{ color: '#555', fontSize: '0.9em' }}>
        Start earning and redeeming points today to make the most out of your shopping experience!
      </p>
    </div>
  </div>
)}

{/* Modal for Reload Your Balance */}
{showreloadyourbalanceModal && (
  <div className="footer-modal-overlay" onClick={() => setShowreloadyourbalanceModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowreloadyourbalanceModal(false)}
      >
        &times;
      </button>
      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Reload Your Balance</h2>
      <p style={{ color: '#555', fontSize: '1em' }}>
        Add funds to your account wallet quickly and securely. Reloading your balance helps you shop with ease, making payments faster without needing to enter your card information every time.
      </p>
      <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.2em', color: '#333' }}>
        <li>Instantly add funds using your preferred payment method.</li>
        <li>Manage your balance and transaction history in your account.</li>
        <li>Use your balance to pay for eligible purchases seamlessly.</li>
        <li>Safe and secure transactions guaranteed.</li>
      </ul>
      <p style={{ color: '#555', fontSize: '0.9em' }}>
        Keep your balance topped up and enjoy a smooth shopping experience every time!
      </p>
    </div>
  </div>
)}


{/* Modal for Currency Converter */}
{showcurrencyconverterModal && (
  <div className="footer-modal-overlay" onClick={() => setShowcurrencyconverterModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowcurrencyconverterModal(false)}
      >
        &times;
      </button>
      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Currency Converter</h2>
      <p style={{ color: '#555', fontSize: '1em' }}>
        Use our Currency Converter to view current exchange rates and convert prices easily between multiple currencies. This tool helps you make informed buying decisions by showing costs in your local currency.
      </p>
      <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.2em', color: '#333' }}>
        <li>Real-time exchange rates updated regularly.</li>
        <li>Convert product prices to your preferred currency instantly.</li>
        <li>Supports multiple popular currencies worldwide.</li>
        <li>Helps you understand the exact cost before checkout.</li>
      </ul>
      <p style={{ color: '#555', fontSize: '0.9em' }}>
        Please note that currency conversion rates may vary slightly at payment due to financial institution fees.
      </p>
    </div>
  </div>
)}

{/* Modal for Sell Products */}
{showsellproductsModal && (
  <div className="footer-modal-overlay" onClick={() => setShowsellproductsModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowsellproductsModal(false)}
      >
        &times;
      </button>
      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Sell Your Products</h2>
      <p style={{ color: '#444', fontSize: '1.1em', fontWeight: '500', lineHeight: '1.5' }}>
  Ready to grow your business? Selling your products on our platform gives you access to millions of potential customers worldwide.
</p>

      <ul style={{ paddingLeft: '1.2em', color: '#555', lineHeight: '1.6' }}>
        <li><strong>Easy Setup:</strong> List your products quickly with our simple tools.</li>
        <li><strong>Wide Reach:</strong> Showcase your items to a global audience.</li>
        <li><strong>Seller Support:</strong> Access dedicated support to help your business succeed.</li>
        <li><strong>Secure Payments:</strong> Enjoy hassle-free transactions with trusted payment systems.</li>
        <li><strong>Analytics & Insights:</strong> Track your sales and customer trends to optimize your growth.</li>
      </ul>
      <p style={{ color: '#666', fontSize: '0.95em' }}>
        Join thousands of successful sellers who are turning their products into profits. <strong>Start selling today!</strong>
      </p>
      <button
        style={{
          backgroundColor: '#7f53ac',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          // Add your "start selling" logic here or redirect
          alert('Redirecting to Seller Signup Page...');
        }}
      >
        Get Started
      </button>
    </div>
  </div>
)}


{/* Modal for Sell on Business */}
{showsellonbusinessModal && (
  <div className="footer-modal-overlay" onClick={() => setShowsellonbusinessModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowsellonbusinessModal(false)}>&times;</button>
      <h2 style={{ marginTop: 0, color: '#5a2a83' }}>Sell On Business</h2>
      <p style={{ color: '#444', fontSize: '1em', lineHeight: '1.5' }}>
        Unlock new opportunities by selling directly to businesses! Our platform connects you with corporate clients looking for bulk purchases and ongoing partnerships.
      </p>
      
      <ul style={{ paddingLeft: '1.2em', color: '#333', marginBottom: '1.2em' }}>
        <li><b>Bulk Order Discounts:</b> Offer competitive pricing for larger quantities.</li>
        <li><b>Trusted Business Clients:</b> Access verified companies and organizations.</li>
        <li><b>Streamlined Invoicing:</b> Simplify billing with tailored invoicing options.</li>
        <li><b>Dedicated Support:</b> Get assistance focused on your business needs.</li>
      </ul>
      <p style={{ color: '#555', fontSize: '0.9em' }}>
        Start selling on business today and watch your enterprise grow with trusted partnerships and bulk sales.
      </p>
      <button
        style={{
          backgroundColor: '#5a2a83',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => alert('Redirecting to Sell On Business sign-up...')}
      >
        Get Started
      </button>
    </div>
  </div>
)}

{/* Modal for Sell Apps */}
{showsellappsModal && (
  <div className="footer-modal-overlay" onClick={() => setShowsellappsModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowsellappsModal(false)}>&times;</button>
      <h2 style={{ marginTop: 0, color: '#2874a6' }}>Sell Apps</h2>
      <p style={{ color: '#444', fontSize: '1em', lineHeight: '1.5' }}>
        Have a great app? Sell it on our platform and connect with a huge audience looking for quality apps in every category.
      </p>
      <ul style={{ paddingLeft: '1.2em', color: '#333', marginBottom: '1.2em' }}>
        <li><b>Easy Upload:</b> Quickly publish your apps with our simple submission process.</li>
        <li><b>Wide Reach:</b> Access millions of users worldwide.</li>
        <li><b>Secure Payments:</b> Reliable payouts and transparent fees.</li>
        <li><b>Marketing Tools:</b> Promote your apps with built-in advertising options.</li>
      </ul>
      <p style={{ color: '#555', fontSize: '0.9em' }}>
        Join thousands of developers turning their passion into profit. Start selling your apps today!
      </p>
      <button
        style={{
          backgroundColor: '#2874a6',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => alert('Redirecting to Sell Apps sign-up...')}
      >
        Start Selling
      </button>
    </div>
  </div>
)}

{/* Modal for Become an Affiliate */}
{showbecomeanaffiliateModal && (
  <div className="footer-modal-overlay" onClick={() => setShowbecomeanaffiliateModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowbecomeanaffiliateModal(false)}
      >
        &times;
      </button>

      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Become an Affiliate</h2>

      <p style={{ color: '#444', fontSize: '1.1em', fontWeight: '500', lineHeight: '1.5' }}>
        Want to earn passive income? Join our Affiliate Program and get paid every time someone shops through your referral link.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#555', lineHeight: '1.6' }}>
        <li><strong>High Commissions:</strong> Earn up to 20% on every successful sale.</li>
        <li><strong>Real-Time Tracking:</strong> Monitor clicks, conversions, and payouts in your dashboard.</li>
        <li><strong>Instant Approval:</strong> Start promoting right after sign-up.</li>
        <li><strong>Global Reach:</strong> Share products with a worldwide audience.</li>
        <li><strong>Marketing Assets:</strong> Access banners, links, and promo tools.</li>
      </ul>

      <p style={{ color: '#666', fontSize: '0.95em' }}>
        Whether you're a blogger, influencer, or just love sharing — turn your audience into earnings. <strong>Start promoting today!</strong>
      </p>

      <button
        style={{
          backgroundColor: '#7f53ac',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          // Redirect or handle sign-up logic
          alert('Redirecting to Affiliate Sign-Up Page...');
        }}
      >
        Join the Program
      </button>
    </div>
  </div>
)}


{/* Modal for Advertise Your Product */}
{showadvertiseyourproductsModal && (
  <div className="footer-modal-overlay" onClick={() => setShowadvertiseyourproductsModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowadvertiseyourproductsModal(false)}
      >
        &times;
      </button>

      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Advertise Your Product</h2>

      <p style={{ color: '#444', fontSize: '1.1em', fontWeight: '500', lineHeight: '1.5' }}>
        Boost your sales by promoting your products directly to customers who are ready to buy. Our advertising tools help you stand out and convert traffic into profit.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#555', lineHeight: '1.6' }}>
        <li><strong>Targeted Campaigns:</strong> Reach the right audience based on interests and shopping behavior.</li>
        <li><strong>Flexible Budget:</strong> Set daily or lifetime budgets with full control over your spend.</li>
        <li><strong>Performance Insights:</strong> Track impressions, clicks, and conversions in real time.</li>
        <li><strong>Ad Formats:</strong> Use banners, sponsored listings, or carousel ads to showcase your brand.</li>
        <li><strong>Increased Visibility:</strong> Appear on high-traffic pages and search results.</li>
      </ul>

      <p style={{ color: '#666', fontSize: '0.95em' }}>
        Start advertising today and turn visibility into revenue. <strong>Grow smarter, not harder.</strong>
      </p>

      <button
        style={{
          backgroundColor: '#7f53ac',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          // Replace with redirect logic or route
          alert('Redirecting to Advertiser Setup Page...');
        }}
      >
        Start Advertising
      </button>
    </div>
  </div>
)}


{/* Modal for Self-Publish */}
{showselfpublishModal && (
  <div className="footer-modal-overlay" onClick={() => setShowselfpublishModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowselfpublishModal(false)}
      >
        &times;
      </button>

      <h2 style={{ marginTop: 0, color: '#7f53ac' }}>Self-Publish Your Work</h2>

      <p style={{ color: '#444', fontSize: '1.1em', fontWeight: '500', lineHeight: '1.5' }}>
        Got a story to tell or knowledge to share? Self-publishing on our platform empowers authors, creators, and educators to reach a global audience with ease — no gatekeepers, no delays.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#555', lineHeight: '1.6' }}>
        <li><strong>Easy Upload:</strong> Publish eBooks, guides, or courses in just a few steps.</li>
        <li><strong>Global Reach:</strong> Share your work with readers and learners across the world.</li>
        <li><strong>100% Ownership:</strong> You keep control of your rights and your content.</li>
        <li><strong>Earn Royalties:</strong> Get paid for every download, view, or sale — instantly.</li>
        <li><strong>Tools for Success:</strong> Access promotional tools, analytics, and audience insights.</li>
      </ul>

      <p style={{ color: '#666', fontSize: '0.95em' }}>
        Whether you're an aspiring author, expert, or creative — your voice matters. <strong>Start publishing and make your mark today!</strong>
      </p>

      <button
        style={{
          backgroundColor: '#7f53ac',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          // Add your redirect or route logic here
          alert('Redirecting to Self-Publish Signup Page...');
        }}
      >
        Self-Publish Now
      </button>
    </div>
  </div>
)}

{/* Modal for Careers */}
{showcareersModal && (
  <div className="footer-modal-overlay" onClick={() => setShowcareersModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowcareersModal(false)}>&times;</button>
      
      <h2 style={{ marginTop: 0, color: '#0c2e8a' }}>Careers at Senzyy</h2>

      <p style={{ fontSize: '1.05em', color: '#444', lineHeight: '1.6' }}>
        At <strong>Senzyy</strong>, we’re building more than a company — we’re shaping the future of commerce. If you're bold, driven, and excited by innovation, this is where you belong.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#555', marginBottom: '1.4em', lineHeight: '1.6' }}>
        <li><b>🚀 Meaningful Work:</b> Your code, your designs, your decisions — they make a difference.</li>
        <li><b>🌍 Global Impact:</b> Help millions of users shop smarter and grow their businesses.</li>
        <li><b>🌱 Career Growth:</b> Learn fast. Move fast. Lead faster.</li>
        <li><b>🤝 Diverse Teams:</b> Collaborate with creative minds from across the globe.</li>
        <li><b>💡 Innovative Culture:</b> We encourage bold ideas and celebrate what’s next.</li>
      </ul>

      <p style={{ fontSize: '0.95em', color: '#666' }}>
        Whether you're an engineer, a designer, a marketer, or a problem-solver — we want to hear from you.
      </p>

      <button
        style={{
          backgroundColor: '#0c2e8a',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          alert('Redirecting to Careers Page...');
          // Optionally redirect to careers page here
        }}
      >
        Explore Open Roles
      </button>
    </div>
  </div>
)}


{/* Modal for Blog */}
{showblogModal && (
  <div className="footer-modal-overlay" onClick={() => setShowblogModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowblogModal(false)}>&times;</button>

      <h2 style={{ marginTop: 0, color: '#2a7ae2' }}>Discover Our Blog</h2>

      <p style={{ fontSize: '1.05em', color: '#444', lineHeight: '1.6' }}>
        Dive into the latest trends, expert insights, and inspiring stories from Senzyy’s community. Our blog is your go-to source for knowledge, innovation, and growth.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#555', marginBottom: '1.4em', lineHeight: '1.6' }}>
        <li><b>🔥 Industry Trends:</b> Stay ahead with the freshest news and market shifts.</li>
        <li><b>🛠 Tips & Tutorials:</b> Master your craft with practical advice and how-tos.</li>
        <li><b>🌟 Success Stories:</b> Get inspired by real stories from sellers, affiliates, and creators.</li>
        <li><b>💡 Thought Leadership:</b> Explore innovative ideas shaping the future of commerce.</li>
      </ul>

      <p style={{ fontSize: '0.95em', color: '#666' }}>
        Whether you’re a beginner or a pro, our blog fuels your journey with actionable insights and inspiration.
      </p>

      <button
        style={{
          backgroundColor: '#2a7ae2',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          alert('Redirecting to Blog Page...');
          // Replace with real redirect if you have a blog page
          // window.location.href = '/blog';
        }}
      >
        Visit the Blog
      </button>
    </div>
  </div>
)}

{/* Modal for About Us */}
{showaboutusModal && (
  <div className="footer-modal-overlay" onClick={() => setShowaboutusModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button className="footer-modal-close" onClick={() => setShowaboutusModal(false)}>&times;</button>

      <h2 style={{ marginTop: 0, color: '#1e90ff' }}>About Senzyy</h2>

      <p style={{ fontSize: '1.1em', color: '#333', lineHeight: '1.6', fontWeight: '500' }}>
        At Senzyy, we believe in the power of connection, innovation, and opportunity. Founded with a mission to empower creators, entrepreneurs, and dreamers worldwide, we are more than a platform — we’re a community.
      </p>

      <p style={{ color: '#555', lineHeight: '1.5' }}>
        Our journey began with a simple idea: to create a space where anyone can grow, succeed, and transform their passion into prosperity. Every feature, every tool, and every experience is designed with you in mind — because your success is our success.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#444', marginBottom: '1.5em', lineHeight: '1.6' }}>
        <li><strong>Trusted Platform:</strong> Safe, secure, and reliable services for all users.</li>
        <li><strong>Global Reach:</strong> Connecting you with millions of customers worldwide.</li>
        <li><strong>Innovative Solutions:</strong> Cutting-edge technology powering your growth.</li>
        <li><strong>Dedicated Support:</strong> We’re here to guide you every step of the way.</li>
      </ul>

      <p style={{ fontSize: '0.95em', color: '#666' }}>
        Join us on this incredible journey. Together, we’re shaping the future of commerce, creativity, and community. Welcome to Senzyy — where your potential meets endless opportunity.
      </p>

      <button
        style={{
          backgroundColor: '#1e90ff',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          alert('Redirecting to About Us Page...');
          // Replace with actual redirection if available
          // window.location.href = '/about';
        }}
      >
        Learn More
      </button>
    </div>
  </div>
)}

{/* Modal for Investor Relations */}
{showinvestorrelationsModal && (
  <div className="footer-modal-overlay" onClick={() => setShowinvestorrelationsModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowinvestorrelationsModal(false)}
      >
        &times;
      </button>

      <h2 style={{ marginTop: 0, color: '#2c3e50' }}>Investor Relations</h2>

      <p style={{ fontSize: '1.1em', color: '#222', lineHeight: '1.6', fontWeight: '600' }}>
        At Senzyy, we are committed to building long-term value through innovation, transparency, and strategic growth.
      </p>

      <p style={{ color: '#444', lineHeight: '1.5' }}>
        Our vision is to revolutionize the way entrepreneurs and creators connect with global markets. With a proven track record of steady growth, cutting-edge technology, and a passionate team, Senzyy stands at the forefront of a thriving digital economy.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#333', marginBottom: '1.5em', lineHeight: '1.6' }}>
        <li><strong>Strong Financial Performance:</strong> Consistent growth with scalable business models.</li>
        <li><strong>Innovation-Driven:</strong> Investing in technology that powers tomorrow’s marketplace.</li>
        <li><strong>Global Expansion:</strong> Expanding footprint across emerging and established markets.</li>
        <li><strong>Transparent Governance:</strong> Clear, ethical, and accountable leadership.</li>
      </ul>

      <p style={{ fontSize: '0.95em', color: '#555' }}>
        Join us as we create value not only for our customers but for our investors and partners. Together, we are shaping the future of commerce and opportunity.
      </p>

      <button
        style={{
          backgroundColor: '#2c3e50',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          alert('Redirecting to Investor Relations Page...');
          // Replace with your actual link or logic
          // window.location.href = '/investors';
        }}
      >
        Learn More
      </button>
    </div>
  </div>
)}

{/* Modal for Devices */}
{showdevicesModal && (
  <div className="footer-modal-overlay" onClick={() => setShowdevicesModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowdevicesModal(false)}
      >
        &times;
      </button>

      <h2 style={{ marginTop: 0, color: '#1a73e8' }}>Discover Our Devices</h2>

      <p style={{ fontSize: '1.1em', color: '#222', lineHeight: '1.6', fontWeight: '600' }}>
        Empower your lifestyle with cutting-edge devices designed to keep you connected, productive, and inspired wherever you go.
      </p>

      <p style={{ color: '#444', lineHeight: '1.5' }}>
        From sleek wearables to powerful smart gadgets, our devices combine innovative technology with intuitive design — crafted to deliver seamless performance and elevate your everyday experiences.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#333', marginBottom: '1.5em', lineHeight: '1.6' }}>
        <li><strong>Innovative Technology:</strong> Stay ahead with the latest in smart device advancements.</li>
        <li><strong>Seamless Connectivity:</strong> Effortlessly sync across all your platforms and devices.</li>
        <li><strong>Elegant Design:</strong> Devices that look as good as they perform.</li>
        <li><strong>Durability & Reliability:</strong> Built to withstand your dynamic lifestyle.</li>
      </ul>

      <p style={{ fontSize: '0.95em', color: '#555' }}>
        Experience the future of technology today — engineered to enhance every moment of your life.
      </p>

      <button
        style={{
          backgroundColor: '#1a73e8',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          alert('Redirecting to Devices Page...');
          // Replace with your actual redirect or logic
          // window.location.href = '/devices';
        }}
      >
        Explore Devices
      </button>
    </div>
  </div>
)}

{/* Modal for Science */}
{showscienceModal && (
  <div className="footer-modal-overlay" onClick={() => setShowscienceModal(false)}>
    <div className="footer-modal" onClick={e => e.stopPropagation()}>
      <button
        className="footer-modal-close"
        onClick={() => setShowscienceModal(false)}
      >
        &times;
      </button>

      <h2 style={{ marginTop: 0, color: '#0b3d91' }}>Advancing Science & Innovation</h2>

      <p style={{ fontSize: '1.1em', color: 'white', lineHeight: '1.6', fontWeight: '1000' }}>
  At the forefront of discovery, we harness the power of science to transform ideas into realities that shape the future.
</p>


      <p style={{ color: '#444', lineHeight: '1.5' }}>
        Through rigorous research, cutting-edge technology, and bold experimentation, we push the boundaries of knowledge to unlock solutions for the world’s greatest challenges.
      </p>

      <ul style={{ paddingLeft: '1.2em', color: '#333', marginBottom: '1.5em', lineHeight: '1.6' }}>
        <li><strong>Innovative Research:</strong> Driving breakthroughs across multiple scientific disciplines.</li>
        <li><strong>Collaborative Discovery:</strong> Partnering with experts to accelerate innovation worldwide.</li>
        <li><strong>Sustainable Solutions:</strong> Pioneering technologies that protect our planet.</li>
        <li><strong>Empowering Curiosity:</strong> Inspiring the next generation of scientists and thinkers.</li>
      </ul>

      <p style={{ fontSize: '0.95em', color: '#555' }}>
        Join us as we explore, innovate, and ignite the future through science.
      </p>

      <button
        style={{
          backgroundColor: '#0b3d91',
          color: '#fff',
          padding: '0.6em 1.2em',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1em',
          fontWeight: '600',
        }}
        onClick={() => {
          alert('Redirecting to Science Initiatives...');
          // Replace with your actual redirect or logic
          // window.location.href = '/science';
        }}
      >
        Learn More
      </button>
    </div>
  </div>
)}



      <div className="footer-bottom">
        <div className="footer-logo">Senzyy</div>
        <div className="footer-options">
          <select>
            <option>Language</option>
            <option>English</option>
            <option>Urdu</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
              <option>Japanese</option>
              <option>Chinese</option>
              <option>Russian</option>
              <option>Arabic</option>
          </select>
          <select>
            <option>PKR - Pakistani Rupee</option>
            <option>USD - US Dollar</option>
            <option>EUR - Euro</option>
              <option>INR - Indian Rupee</option>
              <option>CAD - Canadian Dollar</option>
              <option>JPY - Japanese Yen</option>
              <option>AUD - Australian Dollar</option>
              <option>CNY - Chinese Yuan</option>
              <option>RUB - Russian Ruble</option>
              <option>NZD - New Zealand Dollar</option>
              <option>SGD - Singapore Dollar</option>
          </select>
          <select>
            <option>Region</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>Pakistan</option>
              <option>Germany</option>
             <option>France</option>
              <option>India</option>
              <option>Japan</option>
              <option>Sri Lanka</option>
              <option>Bangladesh</option>
            
              
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
