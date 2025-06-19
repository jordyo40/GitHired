// src/App.jsx
// Acts as both router hub AND entry bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage.jsx';
import MakePost from './MakePost.jsx';
import './styles.css';

function RouterHub() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/make-post" element={<MakePost />} />
      </Routes>
    </BrowserRouter>
  );
}

// Mount React to #root (index.html refers to this file)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterHub />
  </React.StrictMode>
);
