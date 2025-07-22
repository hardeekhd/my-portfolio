import '../style.css';
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // For better icons

function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = [
    "About", "Education", "Projects",
    "Skills", "Certifications", "Achievements", "Contact"
  ];

  return (
    <>
      {/* Background blob */}
      <div style={{ backgroundColor: "#050414", position: "relative", height: "100%" }}>
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "#a855f7", borderRadius: "9999px",
          opacity: 0.25, filter: "blur(100px)", animation: "pulse 6s ease-in-out infinite",
          zIndex: -10
        }}></div>
      </div>

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(to right, #ffffff0f 1px, transparent 1px), linear-gradient(to bottom, #ffffff0f 1px, transparent 1px)",
        backgroundSize: "16px 24px",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        zIndex: 0
      }}></div>

      {/* Navigation Bar */}
      <div style={{ paddingTop: "5rem", position: "relative" }}>
        <nav style={{
          position: "fixed", top: 0, width: "100%", padding: "1rem 7vw",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          background: "rgba(5, 4, 20, 0.8)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid #29293c", boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          zIndex: 50
        }}>
          {/* Logo */}
          <div
            style={{
              fontSize: "1.25rem", fontWeight: "bold", display: "flex",
              alignItems: "center", cursor: "pointer", transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) rotate(-1deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0)")}
          >
            <span style={{ color: "#8245ec", animation: "pulse 2s infinite" }}>&lt;</span>
            <span style={{ color: "#fff", marginLeft: 2 }}>Hardeek</span>
            <span style={{ color: "#8245ec" }}>/</span>
            <span style={{ color: "#fff" }}>Khadilkar</span>
            <span style={{ color: "#8245ec" }}>&gt;</span>
          </div>

          {/* Nav Links */}
          <ul className="nav-links" style={{ display: mobileMenuOpen ? 'flex' : undefined }}>
            {navItems.map((item) => (
              <li
                key={item}
                style={{ cursor: "pointer", transition: "0.3s", color: "#ccc" }}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setMobileMenuOpen(false); // close menu on click
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#bb86fc";
                  e.currentTarget.style.textShadow = "0 0 6px #8245ec";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ccc";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="https://github.com/hardeekhd" target="_blank" style={{ color: "#ccc" }}><FaGithub /></a>
            <a href="https://linkedin.com/in/hardeek-khadilkar-0098681b7" target="_blank" style={{ color: "#ccc" }}><FaLinkedin /></a>

            {/* Hamburger Menu Toggle */}
            <div className="md:hidden" onClick={() => setMobileMenuOpen(prev => !prev)}>
              {mobileMenuOpen ? <FiX size={24} color="#8245ec" /> : <FiMenu size={24} color="#8245ec" />}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
