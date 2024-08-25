import React from 'react';
import InputForm from './Inputform.jsx';
import { Link } from 'react-router-dom';

function Home() {
  return (
<div className="container mt-5">
  <h1 className="text-center mb-4">Boost Your Productivity with Our Reward System</h1>
  <p className="text-center mb-4">Track your progress, earn motivation rewards, and level up your coding skills.</p>
  <div className="text-center mb-4">
    <a href="#" className="btn btn-primary btn-lg">Download VS Code Extension (TBD)</a>
  </div>
  <p className="text-center">
    New to coding? Check out our comprehensive resources to help you get started: 
    <Link  to="/resources" >Beginner's Guide</Link>
  </p>
</div>
  );
}

export default Home;
