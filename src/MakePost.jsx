// src/MakePost.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import pancakes from './assets/pancakes.png';
import logo from './assets/logo.png';
import './styles.css';

export default function MakePost() {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper">
      {/* ───────── Header */}
      <header className="header">
        <div className="logo-group">
          <img src={logo} alt="GitHired logo" className="logo-img" />
        </div>

        <nav className="nav">
          <NavLink to="/"          className="nav-btn">Home</NavLink>
          <NavLink to="/make-post" className="nav-btn active">Make Post</NavLink>
          <button className="nav-btn">My Posts</button>
          <button className="nav-btn">Saved Devs</button>
        </nav>

        <div className="search-container">
          <input type="text" placeholder="Search Bar" />
          <button className="search-clear">×</button>
        </div>

        <div className="avatar">
          <img src={pancakes} alt="profile" />
        </div>
      </header>

      {/* ───────── Form */}
      <main className="content">
        <form className="post-form" onSubmit={e => { e.preventDefault(); navigate('/'); }}>
          {/* Row 1 */}
          <div className="form-row">
            <div>
              <label>Job Title</label>
              <input type="text" required />
            </div>
            <div>
              <label>Company</label>
              <input type="text" required />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div>
              <label>Contract Length</label>
              <input type="text" required />
            </div>
            <div>
              <label>Job Location</label>
              <input type="text" required />
            </div>
          </div>

          <label>Job Description</label>
          <textarea rows="6" required />

          <div className="form-actions">
            <button type="submit" className="next-btn">Next</button>
          </div>
        </form>
      </main>
    </div>
  );
}
