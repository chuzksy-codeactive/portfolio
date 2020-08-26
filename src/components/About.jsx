import React from 'react';

import '../styles/About.scss';

const About = () => (
  <div className="about">
    <div className="container">
      <div className="content">
        <img className="content-img" src="https://res.cloudinary.com/dcgwltbei/image/upload/v1579399709/painted_img.jpg" alt="passport" />
        <div className="main-content">
          <h5>What I do</h5>
          <p>
            I am a web developer and a programmer. I have learnt how to pickup new skills
             and toolset and then build with it. I perpetually work to improve my skills.
             I define myself by the work I want to do. I always teach myself new skills.
             I prefer to keep learning, continue challenging myself. Above all, I love what I do.
          </p>
          <h5>Languages I speak</h5>
          <div className="languages">
            <span className="badge badge-info">C#</span>
            <span className="badge badge-info">Javascript</span>
            <span className="badge badge-info">Typescript</span>
            <span className="badge badge-info">Sass</span>
            <span className="badge badge-info">HTML</span>
            <span className="badge badge-info">CSS</span>
            <span className="badge badge-info">SQL</span>
          </div>
          <h5>Technologies I use</h5>
          <div className="technology">
            <span className="badge badge-info">.NET Core</span>
            <span className="badge badge-info">ASP.NET Core</span>
            <span className="badge badge-info">EF Core</span>
            <span className="badge badge-info">Docker</span>
            <span className="badge badge-info">Dapper ORM</span>
            <span className="badge badge-info">AutoMapper</span>
            <span className="badge badge-info">Swagger</span>
            <span className="badge badge-info">MSSQL</span>
            <span className="badge badge-info">ReactJS</span>
            <span className="badge badge-info">Redux</span>
            <span className="badge badge-info">NodeJS</span>
            <span className="badge badge-info">ExpressJS</span>
            <span className="badge badge-info">MongoDB</span>
            <span className="badge badge-info">Sequelize</span>
            <span className="badge badge-info">PostgresSQL</span>
            <span className="badge badge-info">CSS Grid</span>
            <span className="badge badge-info">CSS Flex</span>
          </div>
          <h5>Development Tools</h5>
          <div className="devtools">
            <span className="badge badge-info">VS Code</span>
            <span className="badge badge-info">Visual Studio</span>
            <span className="badge badge-info">BitBucket</span>
            <span className="badge badge-info">Github</span>
            <span className="badge badge-info">Terminal</span>
          </div>
          <h5>Design Tools</h5>
          <div className="designtools">
            <span className="badge badge-info">Balsamiq Mockups</span>
            <span className="badge badge-info">Figma</span>
            <span className="badge badge-info">Invision</span>
          </div>
        </div>
        <div className="testimonials">
          <h3>Testimonials</h3>
          <p className="testimonial-subheading">People I have worked with have said some nice things...</p>
        </div>
        <div id="demo" className="carousel" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active" />
            <li data-target="#demo" data-slide-to="1" />
            <li data-target="#demo" data-slide-to="2" />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimony">
                <img src="https://res.cloudinary.com/dcgwltbei/image/upload/v1578656559/temitope.png" alt="passport" />
                <div className="quote">
                <i className="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                    Chika is someone that collaborates well with the team. He is the kind of programmer that works hard to get his job done. I look forward to working with him again.
                </div>
                <strong>Tope Albert</strong>
                <span>Software Developer. SystemOne, California</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimony">
                <img src="https://res.cloudinary.com/dcgwltbei/image/upload/v1578656787/timi.png" alt="passport" />
                <div className="quote">
                <i className="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                    I know Chika to be a developer that likes learning something new. Always motivated to build stuffs with what he has learnt. 
                </div>
                <strong>Olusola Oguntimehin</strong>
                <span>Software Developer. Snaps Media Inc. NY</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimony">
                <img src="https://res.cloudinary.com/dcgwltbei/image/upload/v1578656690/amarachi.png" alt="passport" />
                <div className="quote">
                <i className="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                    I remembered working with Chika, it's really a pleasure working with him. He has good communication skills and can easily pick up a new tech skill.
                </div>
                <strong>Amarachukwu Agbo</strong>
                <span>Technical Cordinator, Travela. Andela</span>
              </div>
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="collabo">
          <h3>I&apos;m so proud to have collaborated with some awesome companies</h3>
          <div className="collabo-work">
            <span className="badge badge-success">Prunedge, Lagos</span>
            <span className="badge badge-success">New Classrooms, New York</span>
            <span className="badge badge-success">Activo, Andela</span>
            <span className="badge badge-success">Converge, Andela</span>
            <span className="badge badge-success">Thorin, Andela</span>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-content">
        <h3>Chuzksy</h3>
        <p>
          Living, learning, & leveling up
          <br />
          one day at a time
        </p>
        <div className="myicons">
          <a href="https://linkedin.com/in/onuchukwu-chika" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" />
          </a>
          <a href="https://github.com/chuzksy-codeactive" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" />
          </a>
          <a href="https://twitter.com/chuzksy" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" />
          </a>
          <a href="mailto:chuzksy@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope" />
          </a>
        </div>
        <p className="copyright">
          Handcrafted by me
          {' '}
          <span><i className="fa fa-copyright" /></span>
          {' '}
          twentytwenty
        </p>
      </div>
    </div>
  </div>
);

export default About;