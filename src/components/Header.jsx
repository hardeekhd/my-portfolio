import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const isMobile = screenWidth < 768;

  const navItems = [
    "About", "Education", "Projects",
    "Skills", "Certifications", "Achievements", "Contact"
  ];

  return (
    <>
      {/* Background blob */}
      <div style={{
        backgroundColor: "#050414",
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -10
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#a855f7",
          borderRadius: "9999px",
          opacity: 0.25,
          filter: "blur(100px)",
          animation: "pulse 6s ease-in-out infinite"
        }} />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage:
          "linear-gradient(to right, #ffffff0f 1px, transparent 1px), linear-gradient(to bottom, #ffffff0f 1px, transparent 1px)",
        backgroundSize: "16px 24px",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        zIndex: -9
      }} />

      {/* Navigation Bar */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: isMobile ? "1rem 5vw" : "1rem 7vw",
        background: "rgba(5, 4, 20, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #29293c",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 100,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? "1rem" : 0
      }}>
        {/* Logo */}
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) rotate(-1deg)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0)")}
        >
          <span style={{ color: "#8245ec" }}>&lt;</span>
          <span style={{ color: "#fff", marginLeft: 2 }}>Hardeek</span>
          <span style={{ color: "#8245ec" }}>/</span>
          <span style={{ color: "#fff" }}>Khadilkar</span>
          <span style={{ color: "#8245ec" }}>&gt;</span>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        {isMobile && (
          <div
            onClick={() => setMobileMenuOpen(prev => !prev)}
            style={{ cursor: "pointer", alignSelf: "flex-end" }}
          >
            {mobileMenuOpen
              ? <FiX size={24} color="#8245ec" />
              : <FiMenu size={24} color="#8245ec" />}
          </div>
        )}

        {/* Navigation Links */}
        <ul style={{
          display: isMobile ? (mobileMenuOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? "0.75rem" : "2rem",
          margin: 0,
          padding: 0,
          listStyle: "none",
          width: isMobile ? "100%" : "auto"
        }}>
          {navItems.map((item) => (
            <li
              key={item}
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                color: "#ccc"
              }}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase());
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
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

        {/* Social Links */}
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "flex-end",
          width: isMobile ? "100%" : "auto"
        }}>
          <a
            href="https://github.com/hardeekhd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc" }}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/hardeek-khadilkar-0098681b7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc" }}
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>

      {/* Padding to prevent content from hiding behind navbar */}
      <div style={{ paddingTop: "100px" }} />
    </>
  );
}

export default Header;
