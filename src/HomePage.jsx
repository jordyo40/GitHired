// src/HomePage.jsx – landing page with candidate cards
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import pancakes from './assets/pancakes.png';
import logo from './assets/logo.png';

// demo data
const candidates = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  name: 'Name',
  skills: ['Backend', 'Frontend', 'Quality Assurance'],
  languages: ['Java', 'Python'],
  status: 'Pending',
  skillMatch: '90%',
}));

const linkClass = ({ isActive }) => (isActive ? 'nav-btn active' : 'nav-btn');

export default function HomePage() {
  return (
    <div className="app-wrapper">
      {/* ───────────────────────── Header */}
      <header className="header">
        <div className="logo-group">
          <img src={logo} alt="GitHired logo" className="logo-img" />
        </div>

        <nav className="nav">
          <NavLink to="/"          className={linkClass}>Home</NavLink>
          <NavLink to="/make-post" className={linkClass}>Make Post</NavLink>
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

      {/* ───────────────────────── Main */}
      <main className="content">
        <section className="candidates-grid">
          {candidates.map((c, i) => (
            <div key={c.id} className="candidate-wrapper">
              <h3 className="candidate-title">Candidate {i + 1}</h3>

              <div className="card">
                <div className="card-header">
                  <img src={pancakes} alt="avatar" className="candidate-img" />
                  <span className="candidate-name">{c.name}</span>
                </div>

                <p className="label">Skills: <span>{c.skills.join(', ')}</span></p>
                <p className="label">Languages: <span>{c.languages.join(' ')}</span></p>
                <p className="label">Status: <span>{c.status}</span></p>
                <p className="label">Skill Match: <span>{c.skillMatch}</span></p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
