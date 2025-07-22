import '../style.css';
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const styles = {
    blob: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#a855f7",
      borderRadius: "9999px",
      opacity: 0.25,
      filter: "blur(100px)",
      animation: "pulse 6s ease-in-out infinite",
      zIndex: -10
    },
    gridOverlay: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(to right, #ffffff0f 1px, transparent 1px), linear-gradient(to bottom, #ffffff0f 1px, transparent 1px)",
      backgroundSize: "16px 24px",
      WebkitMaskImage:
        "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
      zIndex: 0
    },
    navContainer: {
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "1rem 7vw",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(5, 4, 20, 0.8)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #29293c",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      zIndex: 50
    },
    logo: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    navList: {
      display: "flex",
      gap: "2rem",
      fontSize: "0.875rem",
      color: "#ccc",
      fontWeight: 500,
    },
    link: {
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    socialIcon: {
      color: "#ccc",
      fontSize: "1.25rem",
      marginLeft: "1rem",
      transition: "all 0.3s ease"
    },
    iconHover: {
      transform: "scale(1.1)",
      color: "#bb86fc",
      textShadow: "0 0 6px #8245ec"
    },
    menuIcon: {
      color: "#8245ec",
      fontSize: "2rem",
      cursor: "pointer",
      transition: "transform 0.3s ease"
    }
  };

  // ✅ Added "Certifications" to the menu
  const navItems = [
    "About",
    "Education",
    "Projects",
    "Skills",
    "Certifications",
    "Achievements",
    "Contact"
  ];

  return (
    <>
      {/* Background blob */}
      <div style={{ backgroundColor: "#050414", position: "relative", height: "100%" }}>
        <div style={styles.blob}></div>
      </div>

      {/* Grid overlay */}
      <div style={styles.gridOverlay}></div>

      {/* Navigation Bar */}
      <div style={{ paddingTop: "5rem", position: "relative" }}>
        <nav style={styles.navContainer}>
          {/* Logo */}
          <div
            style={styles.logo}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) rotate(-1deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0)")}
          >
            <span style={{ color: "#8245ec", animation: "pulse 2s infinite" }}>&lt;</span>
            <span style={{ color: "#fff", marginLeft: 2 }}>Hardeek</span>
            <span style={{ color: "#8245ec" }}>/</span>
            <span style={{ color: "#fff" }}>Khadilkar</span>
            <span style={{ color: "#8245ec" }}>&gt;</span>
          </div>

          {/* Navigation Links */}
          <ul style={styles.navList} className="nav-links">
            {navItems.map((item) => (
              <li
                key={item}
                style={styles.link}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#bb86fc";
                  e.currentTarget.style.textShadow = "0 0 6px #8245ec";
                  e.currentTarget.style.letterSpacing = "1px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#ccc";
                  e.currentTarget.style.textShadow = "none";
                  e.currentTarget.style.letterSpacing = "0";
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://github.com/hardeekhd"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.iconHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.socialIcon)}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hardeek-khadilkar-0098681b7"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.iconHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.socialIcon)}
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={styles.menuIcon}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
