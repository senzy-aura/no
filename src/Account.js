
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Account({ user, logout }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div style={{maxWidth:500,margin:'2rem auto',background:'#fff',borderRadius:'1.2rem',boxShadow:'0 4px 18px rgba(127,83,172,0.07)',padding:'2.5rem 1.5rem'}}>
      <div style={{display:'flex',alignItems:'center',gap:'1.2rem',marginBottom:'1.5rem'}}>
        <img src={user.avatar || 'https://api.dicebear.com/7.x/identicon/svg?seed=default'} alt="avatar" style={{width:70,height:70,borderRadius:'50%',border:'2px solid #7f53ac',background:'#f8f6fc'}} />
        <div>
          <h2 style={{color:'#7f53ac',fontWeight:800,marginBottom:'0.3rem'}}>Welcome, {user.username}!</h2>
          <div style={{color:'#888',fontSize:'0.97em'}}>Joined: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</div>
        </div>
      </div>
      <div style={{marginBottom:'1.2rem'}}>
        <strong>Bio:</strong>
        <div style={{marginTop:'0.3rem',color:'#444'}}>{user.bio || <span style={{color:'#bbb'}}>No bio set.</span>}</div>
      </div>
      <div style={{marginBottom:'1.2rem'}}>
        <strong>Favorites:</strong>
        <div style={{marginTop:'0.3rem',color:'#444'}}>
          {user.favorites && user.favorites.length > 0 ? (
            <ul style={{paddingLeft:18}}>
              {user.favorites.map((fav, i) => <li key={i}>{fav}</li>)}
            </ul>
          ) : (
            <span style={{color:'#bbb'}}>No favorites yet.</span>
          )}
        </div>
      </div>
      <div style={{marginBottom:'1.2rem'}}>
        <strong>Orders:</strong>
        <div style={{marginTop:'0.3rem',color:'#444'}}>
          {user.orders && user.orders.length > 0 ? (
            <ul style={{paddingLeft:18}}>
              {user.orders.map((order, i) => <li key={i}>Order #{order.id || i+1}</li>)}
            </ul>
          ) : (
            <span style={{color:'#bbb'}}>No orders yet.</span>
          )}
        </div>
      </div>
      <div style={{marginBottom:'1.5rem'}}>
        <strong>Settings:</strong>
        <div style={{marginTop:'0.3rem',color:'#444'}}>
          <button style={{marginRight:10,padding:'7px 18px',borderRadius:6,border:'1px solid #7f53ac',background:'#f8f6fc',color:'#7f53ac',fontWeight:600,cursor:'pointer'}}>Edit Profile</button>
          <button style={{padding:'7px 18px',borderRadius:6,border:'1px solid #ffb347',background:'#fff8e1',color:'#ffb347',fontWeight:600,cursor:'pointer'}} onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

