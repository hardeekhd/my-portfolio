function Certifications() {
  const certs = [
    {
      title: "Web Development Bootcamp",
      issuer: "Satguru Institute of Technology, Nagpur",
      period: "Jun 2022 - Jul 2022",
      file: "../web_dev.pdf",
    },
    {
      title: "Python Programming",
      issuer: "AI Adventures, Pune",
      period: "Feb 2024 - Jun 2024",
      file: "../python.pdf",
    },
    {
      title: "Data Science & Machine Learning",
      issuer: "AI Adventures, Pune",
      period: "Feb 2024 - Jun 2024",
      file: "../data_analysis.pdf",
    },
    {
      title: "AI Tools & ChatGPT Workshop",
      issuer: "Be10x (Online)",
      period: "Dec 2024",
      file: "../ai_tools.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="certifications-heading">
        <h2>CERTIFICATIONS</h2>
        <div style={{ width: '8rem', height: '4px', backgroundColor: '#8245ec', margin: '1rem auto' }}></div>
        <p>Courses and workshops that expanded my skill set.</p>
      </div>

      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p style={{ fontSize: '0.9rem', color: '#999' }}>{cert.period}</p>
            <a href={cert.file} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
