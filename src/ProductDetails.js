import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const productData = [
  // This should match your products array in App.js
  {
    id: 1,
    name: 'Laptop',
    price: 'Rs. 85,000',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      'https://i.pinimg.com/736x/b8/4b/ec/b84becbe22670877b0a08bd78f81f971.jpg',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
    ],
    specs: ['Intel i7', '16GB RAM', '512GB SSD', '15.6" FHD'],
    details: 'This high-performance laptop is perfect for professionals and students. It features a powerful Intel i7 processor, 16GB RAM, and a fast 512GB SSD. The 15.6" FHD display offers vibrant visuals, making it ideal for work and entertainment.',
    reviews: [
      { user: 'Ayesha K.', text: 'Super fast and reliable laptop. Love it!' },
      { user: 'Bilal S.', text: 'Great value for the price.' }
    ]
  },
  {
    id: 2,
    name: 'Mobile Phone',
    price: 'Rs. 60,000',
    img: 'https://i.pinimg.com/736x/5b/d8/93/5bd893c5ec4277bc4cff54fbb3e79afb.jpg',
    images: [
      'https://i.pinimg.com/736x/75/0d/ad/750dad710f76cccd12e6fe0d163b7d65.jpg',
      'https://i.pinimg.com/736x/db/ce/d3/dbced3005684a434d52bad16424e419f.jpg',
      'https://i.pinimg.com/736x/5b/d8/93/5bd893c5ec4277bc4cff54fbb3e79afb.jpg'
    ],
    specs: ['Snapdragon 888', '8GB RAM', '128GB Storage', '6.5" AMOLED'],
    details: 'Experience the latest in mobile technology with this smartphone featuring a Snapdragon 888 processor, 8GB RAM, and 128GB storage. The 6.5" AMOLED display provides stunning visuals and vibrant colors.',
    reviews: [
      { user: 'Sara M.', text: 'Amazing camera quality!' },
      { user: 'Ali R.', text: 'Battery life could be better.' }
    ]
  },

  {
    id: 3,
    name: 'Sneakers',
    price: 'Rs. 3,500',
    img: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    specs: ['Comfort Fit', 'Breathable Mesh', 'Rubber Sole', 'Lightweight'],
    details: 'Step out in style and comfort with these breathable sneakers designed for all-day wear.',
    reviews: [
      { user: 'Arif.', text: 'Amazing Sneakers!' },
      { user: 'Hamid.', text: 'Good Quality' },
    ]
  },

   {
  id: 4,
  name: 'Urban Explorer Backpack',
  price: 'Rs. 1,800',
  img: 'https://images.unsplash.com/photo-1550253594-356b2f788907?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  images: [
    'https://images.unsplash.com/photo-1550253594-356b2f788907?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'data:image/jpeg;base64,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',
    'data:image/jpeg;base64,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'
  ],
  specs: [
    '30L Capacity',
    'Water-resistant material',
    'Padded laptop compartment (up to 15.6")',
    'Multiple organizer pockets',
    'Ergonomic padded shoulder straps'
  ],
  details: 'Durable and water-resistant backpack with a 30L capacity. Features a padded laptop compartment and multiple pockets for organized storage.',
  reviews: [
    { user: 'Sara M.', text: 'Perfect for my daily commute and very comfortable!' },
    { user: 'Ali R.', text: 'Looks great and fits all my essentials. Zippers could be smoother.' }
  ]
}

  // ...add more products as needed, each with a 'details' field
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find(p => p.id === Number(id));
  const [selectedImg, setSelectedImg] = useState(product ? product.img : '');
  const selectedIndex = product ? product.images.findIndex(img => img === selectedImg) : 0;

  const handlePrev = () => {
    if (product && selectedIndex > 0) {
      setSelectedImg(product.images[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (product && selectedIndex < product.images.length - 1) {
      setSelectedImg(product.images[selectedIndex + 1]);
    }
  };

  if (!product) return <div style={{ padding: '2rem' }}>Product not found.</div>;

  return (
    <div className="product-details-page" style={{ maxWidth: '700px', margin: '2rem auto', background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 18px rgba(127,83,172,0.07)', padding: '2.5rem 1.5rem' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1.5rem', background: 'none', border: 'none', color: '#7f53ac', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>&larr; Back</button>
      <h1 style={{ color: '#7f53ac', fontWeight: 800, marginBottom: '1.2rem' }}>{product.name}</h1>
      <div style={{ fontSize: '1.1rem', color: '#333', marginBottom: '1.2rem' }}>{product.details}</div>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 250px' }}>
          <img src={selectedImg} alt={product.name} style={{ width: '100%', borderRadius: '1rem', marginBottom: '1rem' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.7rem' }}>
            <button onClick={handlePrev} disabled={selectedIndex === 0} style={{ padding: '0.3rem 1rem', borderRadius: '0.5rem', border: '1px solid #7f53ac', background: selectedIndex === 0 ? '#eee' : '#fff', color: '#7f53ac', cursor: selectedIndex === 0 ? 'not-allowed' : 'pointer', fontWeight: 700 }}>&larr; Prev</button>
            <button onClick={handleNext} disabled={selectedIndex === product.images.length - 1} style={{ padding: '0.3rem 1rem', borderRadius: '0.5rem', border: '1px solid #7f53ac', background: selectedIndex === product.images.length - 1 ? '#eee' : '#fff', color: '#7f53ac', cursor: selectedIndex === product.images.length - 1 ? 'not-allowed' : 'pointer', fontWeight: 700 }}>Next &rarr;</button>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={product.name + "-" + i}
                style={{
                  width: '60px', height: '60px', objectFit: 'cover', borderRadius: '0.5rem', border: selectedImg === img ? '2px solid #7f53ac' : '1.5px solid #eee', cursor: 'pointer', opacity: selectedImg === img ? 1 : 0.7
                }}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>
        </div>
        <div style={{ flex: '2 1 300px' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffb347', marginBottom: '0.7rem' }}>{product.price}</div>
          <h3 style={{ margin: '1rem 0 0.5rem', color: '#7f53ac' }}>Specifications</h3>
          <ul style={{ marginBottom: '1.2rem', color: '#444' }}>
            {product.specs.map((spec, i) => <li key={i}>{spec}</li>)}
          </ul>
          <button className="add-cart-btn" style={{ marginBottom: '1.5rem' }}>Add to Cart</button>
          <h3 style={{ margin: '1.5rem 0 0.5rem', color: '#7f53ac' }}>Customer Reviews</h3>
          <div>
            {product.reviews.map((r, i) => (
              <div key={i} style={{ background: '#f8f6fc', borderRadius: '0.7rem', padding: '0.7rem 1rem', marginBottom: '0.7rem' }}>
                <strong>{r.user}:</strong> <span style={{ color: '#444' }}>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
