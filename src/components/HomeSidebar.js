import React from 'react';
import Link from 'gatsby-link';

const HomeSidebar = () => (
  <div className="home__sidebar">
    <div className="home__sidebar-box">
      <h3 className="home__sidebar-box-heading">Overview</h3>

      <div className="home__sidebar-box-info-box">
        <h4 className="home__sidebar-box-subheading">Education</h4>
        <p>BSc Children's Nursing</p>
        <p>King's College London</p>
      </div>

      <div className="home__sidebar-box-info-box">
        <h4 className="home__sidebar-box-subheading">Work Experience</h4>
        <p>Evelina London Children's Hospital</p>
        <p>University Hospital Lewisham</p>
        <p>Royal Manchester Children's Hospital</p>
        <p>Girlguiding UK</p>
        <p>TeamUp</p>
      </div>

      <div className="home__sidebar-box-info-box">
        <h4 className="home__sidebar-box-subheading">Location</h4>
        <p>London, GB</p>
      </div>
    </div>
    <div className="home__sidebar-box skills">
      <h2 className="home__sidebar-box-main-heading">My Skills</h2>
      <ul className="home__sidebar-box-skill-list">
        <li className="home__sidebar-box-skill-item">Patient Centered Care</li>
        <li className="home__sidebar-box-skill-item">Rapport Building</li>
        <li className="home__sidebar-box-skill-item">Initiative</li>
        <li className="home__sidebar-box-skill-item">Professionalism</li>
        <li className="home__sidebar-box-skill-item">Evidence Based Practice</li>
        <li className="home__sidebar-box-skill-item">Critical Thinking</li>
        <li className="home__sidebar-box-skill-item">Teamwork</li>
        <li className="home__sidebar-box-skill-item">A-E Nursing Assessment</li>
        <li className="home__sidebar-box-skill-item">Nursing Process</li>
        <li className="home__sidebar-box-skill-item">Reflective Working</li>
        <li className="home__sidebar-box-skill-item">Communication</li>
      </ul>
    </div>
  </div>
);

export default HomeSidebar;
