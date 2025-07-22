import { useEffect, useRef } from "react";
import { FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

function Footer() {
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Animate footer when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add("animate-fadeInUp", "opacity-100");
          observer.unobserve(footerRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      footerRef.current.classList.add("opacity-0");
      observer.observe(footerRef.current);
    }

    // Show/hide scroll-to-top button
    const toggleBackToTop = () => {
      const backToTop = document.getElementById("backToTop");
      if (backToTop) {
        const shouldShow = window.scrollY > 300;
        backToTop.classList.toggle("opacity-100", shouldShow);
        backToTop.classList.toggle("pointer-events-none", !shouldShow);
      }
    };

    window.addEventListener("scroll", toggleBackToTop);
    return () => window.removeEventListener("scroll", toggleBackToTop);
  }, []);

  return (
    <>
      <footer
        ref={footerRef}
        className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] transition-all duration-1000"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold text-purple-500">
            Hardeek Khadilkar
          </h2>

          <div className="flex justify-center mt-6 space-x-6 text-xl">
            <a
              href="https://www.linkedin.com/in/hardeek-khadilkar-0098681b7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/har_deek_13?igsh=MTYwa2VxbTEybzhsZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            © <span id="footer-year">2025</span> Hardeek Khadilkar. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to Top"
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 transform hover:scale-110 opacity-0 pointer-events-none"
      >
        <FaArrowUp />
      </button>

    </>
  );
}

export default Footer;
