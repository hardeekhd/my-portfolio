import '../style.css';
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false); // prevent hydration issues

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
    // Hydration fix (runs only on client)
    setHydrated(true);

    // Initial mobile check
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    // Toggle dark mode
    document.documentElement.classList.toggle("dark", darkMode);

    // Scroll section observer
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
  }, [darkMode, hydrated]);

  // 🚫 Hide entire header if mobile and hydrated
  if (!hydrated || isMobile) return null;

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
      padding: "1rem 5vw",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(5, 4, 20, 0.8)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #29293c",
      zIndex: 50
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "transform 0.3s ease"
    },
    link: {
      cursor: "pointer",
      transition: "all 0.3s ease",
      margin: "0 0.5rem",
      fontSize: "1rem"
    },
    socialIcon: {
      color: "#ccc",
      fontSize: "1.25rem",
      marginLeft: "0.75rem",
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
      <div style={{ backgroundColor: "#050414", position: "relative", height: "100%" }}>
        <div style={styles.blob}></div>
      </div>
      <div style={styles.gridOverlay}></div>

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
          <ul style={{
            display: "flex",
            gap: "1.5rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "#ccc",
            marginLeft: "1rem",
            listStyleType: "none"
          }}>
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

          {/* Right Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-200" />
              )}
            </button>

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
        </nav>
      </div>
    </>
  );
}

export default Header;
