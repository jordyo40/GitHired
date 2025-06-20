// MakePost.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import pancakes from './assets/pancakes.png';
import logo from './assets/logo.png';
import './styles.css';

export default function MakePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    contractLength: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/make-post2', { state: formData });
  };

  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="logo-group">
          <img src={logo} alt="GitHired logo" className="logo-img" />
        </div>

        <nav className="nav">
          <NavLink to="/" className="nav-btn">Home</NavLink>
          <NavLink to="/make-post" className="nav-btn active">Make Post</NavLink>
          <NavLink to="/my-posts" className="nav-btn">My Posts</NavLink>
        </nav>

        <div className="search-container">
          <input type="text" placeholder="Search Bar" />
          <button className="search-clear">×</button>
        </div>

        <div className="avatar">
          <img src={pancakes} alt="profile" />
        </div>
      </header>

      <main className="content">
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <label>Job Title</label>
              <input type="text" name="title" required value={formData.title} onChange={handleChange} />
            </div>
            <div>
              <label>Company</label>
              <input type="text" name="company" required value={formData.company} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Contract Length</label>
              <input type="text" name="contractLength" required value={formData.contractLength} onChange={handleChange} />
            </div>
            <div>
              <label>Job Location</label>
              <input type="text" name="location" required value={formData.location} onChange={handleChange} />
            </div>
          </div>

          <label>Job Description</label>
          <textarea name="description" rows="6" required value={formData.description} onChange={handleChange} />

          <div className="form-actions">
            <button type="submit" className="next-btn">Next</button>
          </div>
        </form>
      </main>
    </div>
  );
}
