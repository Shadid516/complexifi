// src/About.jsx
import React from 'react';

function About() {
  return (
    <div className="container">
      <h1 className="text-center">About Complexifi</h1>
      <p className="text-center">
      Complexifi is a resource platform with a complementary VSCode extension to encourage developers.
      </p>
      <p className="text-center">
        Our mission is to provide developers with the tools and insights they need to elevate their coding practices. Whether you're a seasoned professional or just starting your coding journey, Complexifi can help you streamline your workflow and improve the quality of your code.
      </p>
      <p className="text-center">
        This project is the result of a collaborative effort by our dedicated team:
        <span class= "name">
          <a href="https://www.linkedin.com/in/ahmad-mansour-192766209" target="_blank" rel="noopener noreferrer"> Ahmad Mansour</a>,
          <a href="https://www.linkedin.com/in/houssamsalehalrifaii/" target="_blank" rel="noopener noreferrer"> Houssam AlRifaii</a>,
          <a href="https://www.linkedin.com/in/shadi-al-masry-489458165/" target="_blank" rel="noopener noreferrer"> Shadi Al-Masry</a>,
        </span>
         Together, we combined our diverse skills and expertise to bring Complexifi to life.
      </p>
      <p className="text-center">
        Join us on this journey to build better software, one line of code at a time. Connect with us on LinkedIn to stay updated on our work and future projects.
      </p>
    </div>
  );
}

export default About;
