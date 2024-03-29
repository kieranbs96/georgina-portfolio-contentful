import React from 'react';

export default function HomeSidebar({ data }) {
  const home = data;

  return (
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
          {home?.mySkills.map((i) => {
            return (
              <li className="home__sidebar-box-skill-item" key={i}>
                {i}
              </li>
            );
          })}
        </ul>
      </div>
      <iframe src="https://open.spotify.com/embed/playlist/1oc8kUxQtscHVIu59LhNA1" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
    </div>
  );
}
