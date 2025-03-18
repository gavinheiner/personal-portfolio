import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ProjectDetail from './components/ProjectDetail';


const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App
