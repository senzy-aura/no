import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Save user to localStorage (simple demo, not secure for real apps)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === username)) {
      setError('Username already exists.');
      return;
    }
    // Create a custom profile for the user
    const profile = {
      username,
      password,
      createdAt: new Date().toISOString(),
      avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(username)}`,
      bio: '',
      favorites: [],
      orders: []
    };
    users.push(profile);
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    alert('Registration successful! You can now log in.');
    navigate('/login');
  };

  return (
    <div style={{maxWidth:400,margin:'2rem auto',background:'#fff',borderRadius:'1.2rem',boxShadow:'0 4px 18px rgba(127,83,172,0.07)',padding:'2.5rem 1.5rem'}}>
      <h2 style={{color:'#7f53ac',fontWeight:800,marginBottom:'1.2rem'}}>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} style={{width:'100%',marginBottom:10,padding:8}} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{width:'100%',marginBottom:10,padding:8}} />
        {error && <div style={{color:'red',marginBottom:10}}>{error}</div>}
        <button type="submit" style={{width:'100%',background:'#7f53ac',color:'#fff',padding:10,border:'none',borderRadius:6,fontWeight:700}}>Register</button>
      </form>
    </div>
  );
}
