import { useEffect, useState } from "react";
const projects = [
  {
    title: "Cricket Squad Selection",
    image: "/squad.jpg",
    text:
      "Developed a machine learning-based squad selection system using Python and scikit-learn. The model analyzed over 10,000 player statistics and historical match data to recommend optimized team lineups. Achieved a 30% improvement in selection accuracy by leveraging classification algorithms and performance metrics. Built in Jupyter with Pandas for data processing and visualization.",
    link: "https://github.com/hardeekhd/cricket-squad-selection",
    tech: ["Python", "Pandas", "Sklearn", "Jupyter"]
  },
  {
    title: "IPL Stats Analysis Dashboard",
    image: "/IPL.jpg",
    text:
      "Conducted end-to-end data analysis on 15 seasons of Indian Premier League (IPL) matches using Python and Power BI. Extracted trends in team performance, player efficiency, and win probabilities. Built dynamic dashboards used by 20+ users to visualize insights, and integrated MySQL for scalable data storage. The project improved strategic decision-making for fantasy league predictions.",
    link: "https://github.com/hardeekhd/ipl-stats-analysis",
    tech: ["Power BI", "Data Analysis", "Python", "MySQL"]
  },
  {
    title: "PitchPulse - IPL Insights Platform",
    image: "/pitchpulse.jpg",
    text:
      "A data-driven platform providing IPL match insights, fantasy tools, and real-time stats. Integrated APIs, PostgreSQL backend, and dynamic visualizations. Designed with scalability and performance in mind using the full MERN-like stack minus MongoDB.",
    link: "https://github.com/hardeekhd/pitchpulse",
    tech: ["React", "PostgreSQL", "Express", "Node.js"]
  },
  {
    title: "Paws of Hope - Animal Welfare Platform",
    image: "/paws.jpg",
    text:
      "Designed and built a full-stack responsive website for an animal rescue initiative. Integrated sections for pet adoption listings, donation forms, volunteer registration, and educational content. Included a dark/light theme toggle, structured navigation, and custom gallery. Prioritized accessibility and SEO using semantic HTML and structured metadata. Entirely built with HTML, CSS, and vanilla JavaScript.",
    link: "https://github.com/hardeekhd/paws-of-hope",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Animal Rescue Awareness Website",
    image: "/animal.jpg",
    text:
      "Created a single-page web experience to raise awareness about animal rescue efforts. Used Tailwind CSS for a modern, responsive UI and added scroll-triggered animations to enhance storytelling. Embedded real rescue stories, mission highlights, contact form, and a YouTube video to drive engagement. Improved volunteer sign-ups and reduced bounce rate by delivering clear, purpose-driven messaging.",
    link: "https://github.com/hardeekhd/animal-rescue",
    tech: ["HTML", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "FlexFit Fitness Club",
    image: "/gym.jpg",
    text:
      "Developed a marketing website for a local gym with a focus on performance, responsiveness, and engagement. Used Tailwind CSS to ensure cross-device compatibility and smooth layout structure. The site increased customer inquiries by 35% by featuring interactive sections like trainer bios, transformation galleries, and contact CTAs. Designed for conversion and fast load times.",
    link: "https://github.com/hardeekhd/gym-site",
    tech: ["Tailwind CSS", "HTML", "JavaScript"]
  },
  {
    title: "FlexFit Fitness App",
    image: "/flexfit.jpg",
    text:
      "Created a web and mobile-ready fitness tracking app that offers AI-driven workout suggestions, calorie intake logging, and progress tracking. Users can set fitness goals, log meals, and track completed workouts in a personalized dashboard. Built using PHP and MySQL on the backend with a responsive HTML/CSS/JavaScript frontend. Designed for flexibility, ease of use, and performance.",
    link: "https://github.com/hardeekhd/flexfit-app",
    tech: ["PHP", "MySQL", "HTML", "JavaScript", "CSS"]
  },
  {
    title: "Gold's Gym Landing Page",
    image: "/goldsgym.jpg",
    text:
      "Designed a single-page responsive website for Gold’s Gym with smooth navigation and interactive sections including Join Now, Plan Comparison, Contact, and a BMI calculator. Integrated form validation, membership plan logic, and real-time BMI analysis using vanilla JavaScript. Enhanced usability through theme-consistent styling and call-to-action buttons, focused on user engagement and conversion.",
    link: "https://github.com/hardeekhd/goldsgym-landing",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Shoplio - Modern eCommerce Platform",
    image: "/shoplio.jpg",
    text:
      "Built a full-stack eCommerce application with React frontend and Node.js backend. Features include JWT-based auth, product management, user roles (admin/user), cart, orders, and analytics dashboard. PostgreSQL used for scalable data handling with secure APIs.",
    link: "https://github.com/hardeekhd/shoplio",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"]
  },
  {
    title: "GlowMart - E-commerce Dashboard",
    image: "/glowmart.png",
    text:
      "Built a modern, real-time dashboard for GlowMart, a fictional e-commerce platform. The dashboard provides analytics on product sales, customer activity, and order status using Chart.js. Built with React and Tailwind CSS, it supports dynamic updates and responsive design. Helped reduce manual reporting effort by 60% through automated charting and visual insights.",
    link: "https://github.com/hardeekhd/ecommerce-dashboard",
    tech: ["PHP", "HTML", "JavaScript","CSS"]
  }
];


function Projects() {
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => {
      card.classList.add("opacity-0", "transition-opacity", "duration-700");
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section
      id="projects"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A curated collection of projects demonstrating my problem-solving skills,
          technical expertise, and user-centered design approach.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => {
          const isExpanded = expanded[index];
          const maxLength = 180;

          return (
            <div
              key={index}
              tabIndex={0}
              className="project-card border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 focus:outline-none"
            >
              <div className="p-4">
                <img
                  src={proj.image}
                  alt={proj.title || "Project image"}
                  className="w-full h-48 object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {proj.title}
                </h3>

                <p className="text-gray-400 text-sm mb-2">
                  {isExpanded || proj.text.length <= maxLength
                    ? proj.text
                    : `${proj.text.slice(0, maxLength)}...`}
                </p>

                {proj.text.length > maxLength && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-purple-400 text-xs hover:text-purple-300 underline"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                )}

                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {proj.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300 underline"
                >
                  View Source →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
