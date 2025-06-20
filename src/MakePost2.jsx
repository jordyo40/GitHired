// MakePost2.jsx
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import pancakes from './assets/pancakes.png';
import './styles.css';

export default function MakePost2() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const allSkills = ['Frontend', 'Backend', 'Full Stack', 'DevOps', 'Database Design', 'Cloud Infrastructure', 'API Development', 'Mobile Development', 'UI/UX Design', 'Testing', 'Version Control', 'CI/CD', 'Security', 'Containerization', 'Code Review', 'Project Management'];
  const allLanguages = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'Go', 'Rust', 'PHP', 'Kotlin', 'Swift', 'Dart', 'SQL', 'Shell/Bash'];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) setSelectedSkills([...selectedSkills, skill]);
  };

  const addLanguage = (lang) => {
    if (!selectedLanguages.includes(lang)) setSelectedLanguages([...selectedLanguages, lang]);
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
        <div className="recommend-wrapper">
          {/* Skills */}
          <div className="recommend-column">
            <h2>Recommended Skills</h2>
            <select className="dropdown" onChange={(e) => addSkill(e.target.value)}>
              <option value="">Select Skill</option>
              {allSkills.map((skill, i) => (
                <option key={i} value={skill}>{skill}</option>
              ))}
            </select>
            <div className="recommend-box">
              {selectedSkills.map((skill, i) => (
                <div key={i} className="recommend-pill">{skill}</div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="recommend-column">
            <h2>Recommended Languages</h2>
            <select className="dropdown" onChange={(e) => addLanguage(e.target.value)}>
              <option value="">Select Language</option>
              {allLanguages.map((lang, i) => (
                <option key={i} value={lang}>{lang}</option>
              ))}
            </select>
            <div className="recommend-box">
              {selectedLanguages.map((lang, i) => (
                <div key={i} className="recommend-pill">{lang}</div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <button className="post-btn" onClick={() => navigate('/my-posts')}>Post</button>
    </div>
  );
}
