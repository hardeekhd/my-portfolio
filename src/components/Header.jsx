import '../style.css';
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SunIcon, MoonIcon, XIcon, MenuIcon } from "@heroicons/react/outline";

function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    "About",
    "Education",
    "Projects",
    "Skills",
    "Certifications",
    "Achievements",
    "Contact"
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    // Active section tracking
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
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
      zIndex: 50
    },
    logo: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease"
    },
    link: {
      cursor: "pointer",
      transition: "all 0.3s ease"
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
    }
  };

  return (
    <>
      {/* Background */}
      <div style={{ backgroundColor: "#050414", position: "relative", height: "100%" }}>
        <div style={styles.blob}></div>
      </div>
      <div style={styles.gridOverlay}></div>

      {/* Nav */}
      <div style={{ paddingTop: "5rem", position: "relative" }}>
        <nav style={styles.navContainer}>
          {/* Logo */}
          <div
            style={styles.logo}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05) rotate(-1deg)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0)")}
          >
            <span style={{ color: "#8245ec" }}>&lt;</span>
            <span style={{ color: "#fff", marginLeft: 2 }}>Hardeek</span>
            <span style={{
              color: "#a855f7",
              fontWeight: "900",
              fontSize: "1.6rem",
              margin: "0 6px",
              transform: "rotate(-10deg)",
              display: "inline-block",
              lineHeight: "1"
            }}>/</span>
            <span style={{ color: "#fff" }}>Khadilkar</span>
            <span style={{ color: "#8245ec" }}>&gt;</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  ...styles.link,
                  color: activeSection === item.toLowerCase() ? "#a855f7" : "#ccc",
                  fontWeight: activeSection === item.toLowerCase() ? "bold" : 500
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#bb86fc";
                  e.currentTarget.style.textShadow = "0 0 6px #8245ec";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = activeSection === item.toLowerCase() ? "#a855f7" : "#ccc";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Icons & Mobile */}
          <div className="flex items-center gap-3">
            {/* Dark Mode */}
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-200" />
              )}
            </button>

            {/* Social */}
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

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <XIcon className="h-6 w-6 text-purple-400" />
              ) : (
                <MenuIcon className="h-6 w-6 text-purple-400" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0e0e1a] text-white z-40 shadow-lg px-6 py-4 space-y-4 transition-all">
            {navItems.map((item) => (
              <div
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setMobileOpen(false);
                }}
                className={`cursor-pointer text-base font-medium ${
                  activeSection === item.toLowerCase() ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
