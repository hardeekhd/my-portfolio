function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hardeek Khadilkar
          </h2>

          {/* ✅ Typing effect target */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="typing-text text-[#8245ec] inline-block"></span>
            <span className="text-[#8245ec] ml-1 animate-blink">|</span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over 1 year of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>

          <a
            href="../Hardeek_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background:
                "linear-gradient(90deg, rgb(130, 69, 236), rgb(168, 85, 247))",
              boxShadow:
                "rgb(130, 69, 236) 0px 0px 2px, rgb(130, 69, 236) 0px 0px 2px, rgb(130, 69, 236) 0px 0px 40px",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right: Profile image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            style={{
              willChange: "transform",
              transition: "1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
              transform:
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.05, 1.05, 1.05)",
            }}
          >
            <img
              src="../profile.jpg"
              alt="Hardeek Khadilkar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
