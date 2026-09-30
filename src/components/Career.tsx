import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in CSE</h4>
                <h5>Govt. Polytechnic College, Jalandhar</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing Diploma in Computer Science Engineering (5th Sem, Expected 2027). Focusing on core computer science, software development, data structures, and practical web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Manager & Web Dev</h4>
                <h5>Adi's Cafe & Stays</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Manage website and digital presence for a hospitality brand. Coordinate content planning, launch Meta/Instagram ads, and handle continuous deployment, digital workflows, and business solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed / Client Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivering full-stack business websites & web apps using AI-assisted workflows. Managing hosting, domains, payments, and ongoing maintenance (Stage & Steel, Bagecha Rewards, Athletic Edge).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
