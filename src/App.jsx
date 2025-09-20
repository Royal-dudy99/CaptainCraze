import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CaptionGeneratorPage from './pages/CaptionGeneratorPage';
import HashtagGeneratorPage from './pages/HashtagGeneratorPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/caption-generator" element={<CaptionGeneratorPage />} />
        <Route path="/hashtag-generator" element={<HashtagGeneratorPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
