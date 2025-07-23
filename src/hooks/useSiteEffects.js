import { useEffect } from "react";

export function useSiteEffects() {
  useEffect(() => {
    const cleanupFns = [];
    const isDesktop = window.innerWidth >= 640;

    const nav = document.querySelector("nav");

    // ✅ Hide <nav> on mobile screens
    if (nav && window.innerWidth < 768) {
      nav.style.display = "none";
    }

    // 1. Smooth Scroll via nav buttons (Desktop only)
    if (isDesktop && nav) {
      const navClickHandler = (e) => {
        if (e.target.tagName === "BUTTON") {
          const target = e.target.textContent.trim().toLowerCase();
          const section = document.getElementById(target);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }
      };
      nav.addEventListener("click", navClickHandler);
      cleanupFns.push(() => nav.removeEventListener("click", navClickHandler));
    }

    // 2. Typing Effect
    const typingTarget = document.querySelector("#about .typing-text");
    const roles = ["Web Developer ", "Data Analyst ", "Programmer "];
    let roleIndex = 0, charIndex = 0, isDeleting = false, typingTimeout;

    const type = () => {
      const current = roles[roleIndex];
      if (typingTarget) {
        typingTarget.textContent = current.substring(0, charIndex);
      }

      if (!isDeleting && charIndex < current.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      typingTimeout = setTimeout(type, isDeleting ? 130 : 200);
    };

    if (typingTarget) type();
    cleanupFns.push(() => clearTimeout(typingTimeout));

    // 3. Navbar Scroll Effect (Desktop only)
    if (isDesktop && nav) {
      const handleScroll = () => {
        nav.classList.toggle("bg-[#050414]", window.scrollY > 10);
        nav.classList.toggle("shadow-lg", window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      cleanupFns.push(() => window.removeEventListener("scroll", handleScroll));
    }

    // 4. CV Alert
    const cvBtn = document.querySelector("a[href*='drive.google']");
    const cvClickHandler = () => alert("Your CV will open in a new tab.");
    if (cvBtn) {
      cvBtn.addEventListener("click", cvClickHandler);
      cleanupFns.push(() => cvBtn.removeEventListener("click", cvClickHandler));
    }

    // 5. Section Fade-in using IntersectionObserver
    const fadeInObserver = (selector, animationClass) => {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            entry.target.style.opacity = "1";
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("opacity-0", "transition-opacity", "duration-1000");
        observer.observe(el);
      });
    };
    fadeInObserver("section", "animate-fadeIn");

    // 6. Profile Image Hover 3D
    const profile = document.querySelector(".border-purple-700");
    if (profile) {
      const handleMouseMove = (e) => {
        const rect = profile.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -25;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 25;

        profile.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        profile.style.boxShadow = `
          0 25px 80px rgba(130, 69, 236, 0.5),
          inset 0 0 20px rgba(168, 85, 247, 0.3)
        `;
      };

      const handleMouseLeave = () => {
        profile.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
        profile.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        profile.style.boxShadow = "none";
      };

      profile.style.transition = "transform 0.15s ease-out, box-shadow 0.15s ease-out";
      profile.addEventListener("mousemove", handleMouseMove);
      profile.addEventListener("mouseleave", handleMouseLeave);
      cleanupFns.push(() => {
        profile.removeEventListener("mousemove", handleMouseMove);
        profile.removeEventListener("mouseleave", handleMouseLeave);
      });
    }

    // 7. Skills Card 3D Hover
    const skillCards = document.querySelectorAll("#skills .bg-gray-900");
    skillCards.forEach(card => {
      const skillsGrid = card.querySelector(".grid");
      if (!skillsGrid) return;

      let inner = card.querySelector(".card-inner");
      if (!inner) {
        inner = document.createElement("div");
        inner.className = "card-inner";
        inner.appendChild(skillsGrid);
        card.appendChild(inner);
      }

      card.style.perspective = "1000px";
      inner.style.transition = "transform 0.25s ease";
      inner.style.transformStyle = "preserve-3d";
      card.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";

      const onMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -20;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 20;

        card.style.transform = "scale(1.05)";
        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = `
          0 25px 60px rgba(130, 69, 236, 0.45),
          inset 0 0 10px rgba(168, 85, 247, 0.2)
        `;
      };

      const onMouseLeave = () => {
        card.style.transform = "scale(1)";
        inner.style.transform = "rotateX(0deg) rotateY(0deg)";
        card.style.boxShadow = "none";
      };

      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
      cleanupFns.push(() => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    // 8. Navbar Active Link Highlight (Desktop only)
    if (isDesktop && nav) {
      const navButtons = document.querySelectorAll("nav button");
      const sections = document.querySelectorAll("section[id]");
      const highlightNav = () => {
        let current = "";
        sections.forEach(section => {
          const offset = section.offsetTop - 150;
          if (window.scrollY >= offset && window.scrollY < offset + section.offsetHeight) {
            current = section.id;
          }
        });
        navButtons.forEach(btn => {
          btn.classList.remove("text-purple-500");
          if (btn.textContent.trim().toLowerCase() === current) {
            btn.classList.add("text-purple-500");
          }
        });
      };
      window.addEventListener("scroll", highlightNav);
      cleanupFns.push(() => window.removeEventListener("scroll", highlightNav));
    }

    // 9. Footer Year
    const yearSpan = document.querySelector("#footer-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 10. Back to Top visibility
    const toggleBackToTop = () => {
      const backToTop = document.getElementById("backToTop");
      if (backToTop) {
        const shouldShow = window.scrollY > 300;
        backToTop.classList.toggle("opacity-100", shouldShow);
        backToTop.classList.toggle("pointer-events-none", !shouldShow);
      }
    };
    window.addEventListener("scroll", toggleBackToTop);
    cleanupFns.push(() => window.removeEventListener("scroll", toggleBackToTop));

    // 11. Footer Nav Scroll
    document.querySelectorAll(".footer-link").forEach(btn => {
      const handleClick = () => {
        const targetId = btn.getAttribute("data-target");
        const section = document.getElementById(targetId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      };
      btn.addEventListener("click", handleClick);
      cleanupFns.push(() => btn.removeEventListener("click", handleClick));
    });

    // 12. Education Fade In
    fadeInObserver("#education .sm\\:max-w-md", "animate-fadeInUp");

    // 13. Timeline Toggle
    const toggleCard = function () {
      const targetId = this.getAttribute("data-target");
      const card = document.getElementById(targetId);
      if (!card) return;
      document.querySelectorAll("#education [id$='-card']").forEach(c => {
        c.classList.add("hidden", "opacity-0");
        c.classList.remove("scale-100", "opacity-100");
      });
      card.classList.remove("hidden");
      card.classList.add("scale-100", "opacity-100");
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    document.querySelectorAll("[data-target]").forEach(circle => {
      circle.setAttribute("tabindex", "0");
      circle.addEventListener("click", toggleCard);
      circle.addEventListener("keypress", e => {
        if (e.key === "Enter") toggleCard.call(circle);
      });
      cleanupFns.push(() => {
        circle.removeEventListener("click", toggleCard);
        circle.removeEventListener("keypress", toggleCard);
      });
    });

    // 14. ESC to Close Timeline Cards
    const escListener = (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll("#education [id$='-card']").forEach(c => {
          c.classList.add("hidden");
        });
      }
    };
    document.addEventListener("keydown", escListener);
    cleanupFns.push(() => document.removeEventListener("keydown", escListener));

    return () => cleanupFns.forEach((fn) => fn());
  }, []);
}
