function Education() {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-12 items-start relative">
        {/* Timeline icons */}
        <div className="flex flex-col items-center space-y-10 sm:mt-10">
          <div className="education-icon" data-target="bit-card">
            <img src="../bit.jpeg" alt="BIT" />
          </div>
          <div className="education-icon" data-target="mount-card">
            <img src="../mount.png" alt="Mount" />
          </div>
          <div className="education-icon" data-target="dchs-card">
            <img src="../dchs.png" alt="DCHS" />
          </div>
        </div>

        {/* Cards container with reveal effect */}
        <div className="flex-1 space-y-10 w-full sm:w-2/3">
          {/* BIT */}
          <div className="sm:max-w-md opacity-0 transition-all duration-1000">
            <div
              id="bit-card"
              className="hidden transition-all duration-500 origin-left scale-95 opacity-0"
            >
              <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img src="../bit.jpeg" alt="BIT" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Bachelor of Technology - B.Tech</h3>
                    <h4 className="text-md text-gray-300">Ballarpur Institute of Technology, Ballarpur</h4>
                    <p className="text-sm text-gray-500 mt-2">Jan 2021 - Jun 2024</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold">Grade: 7.49 CGPA</p>
                <p className="mt-4 text-gray-400">
                  I have completed my B.Tech in Computer Science and Engineering at BIT. I gained a strong foundation in
                  programming, data structures, algorithms, DBMS, web development, and participated in various technical events.
                </p>
              </div>
            </div>
          </div>

          {/* Mount */}
          <div className="sm:max-w-md opacity-0 transition-all duration-1000">
            <div
              id="mount-card"
              className="hidden transition-all duration-500 origin-left scale-95 opacity-0"
            >
              <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img src="../mount.png" alt="Mount" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Maharashtra State Board (XIIth)</h3>
                    <h4 className="text-md text-gray-300">Mount Science Jr. College, Ballarpur</h4>
                    <p className="text-sm text-gray-500 mt-2">July 2018 - Jun 2020</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold">Grade: 58%</p>
                <p className="mt-4 text-gray-400">
                  I studied Computer Science at Mount Science Jr. College and built a strong academic base in logical thinking,
                  programming fundamentals, and theory of computation.
                </p>
              </div>
            </div>
          </div>

          {/* DCHS */}
          <div className="sm:max-w-md opacity-0 transition-all duration-1000">
            <div
              id="dchs-card"
              className="hidden transition-all duration-500 origin-left scale-95 opacity-0"
            >
              <div className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img src="../dchs.png" alt="DCHS" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Maharashtra State Board (Xth)</h3>
                    <h4 className="text-md text-gray-300">Dilasagram Convent High School, Ballarpur</h4>
                    <p className="text-sm text-gray-500 mt-2">July 2017 - Jun 2018</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold">Grade: 77%</p>
                <p className="mt-4 text-gray-400">
                  I completed my class 10th education from DCHS with a strong academic record and focus on discipline,
                  mathematics, and science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
