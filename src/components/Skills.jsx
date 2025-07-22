const skillData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", src: "../html-CfI0Cw-d.png", alt: "HTML logo" },
      { name: "CSS", src: "../css-BDv6rEn7.png", alt: "CSS logo" },
      { name: "SASS", src: "../sass-DcIBNIKX.png", alt: "SASS logo" },
      { name: "JavaScript", src: "../javascript-Bh7ioiOO.png", alt: "JavaScript logo" },
      { name: "React JS", src: "../reactjs-LYxsbuPE.png", alt: "React JS logo" },
      { name: "Angular", src: "data:image/png;base64,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", alt: "Angular logo" },
      { name: "Next JS", src: "../nextjs-RkI80A9j.png", alt: "Next JS logo" },
      { name: "Tailwind CSS", src: "../tailwindcss-CCkYV0vR.png", alt: "Tailwind CSS logo" },
      { name: "Material UI", src: "../materialui-COLpx5Sm.png", alt: "Material UI logo" },
      { name: "Bootstrap", src: "../bootstrap-DnBAHoRv.png", alt: "Bootstrap logo" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", src: "../nodejs-BctxLIqp.png", alt: "Node JS logo" },
      { name: "Express JS", src: "../express-CnNYXM05.png", alt: "Express JS logo" },
      { name: "MySQL", src: "../mysql-WUjZbfAJ.png", alt: "MySQL logo" },
      { name: "MongoDB", src: "../mongodb-Dz5Ie_AU.png", alt: "MongoDB logo" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", src: "../c-CwQ4eILz.png", alt: "C logo" },
      { name: "C++", src: "../cpp-DiyJqP-z.png", alt: "C++ logo" },
      { name: "Java", src: "../java-Cr8sluZA.png", alt: "Java logo" },
      { name: "Python", src: "../python-BIwUd1eo.png", alt: "Python logo" },
      { name: "JavaScript", src: "../javascript-Bh7ioiOO.png", alt: "JavaScript logo" },
      { name: "TypeScript", src: "../typescript-pf-J0Iah.png", alt: "TypeScript logo" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", src: "../git-BClPRNCD.png", alt: "Git logo" },
      { name: "GitHub", src: "../github-DabB8wTb.png", alt: "GitHub logo" },
      { name: "VS Code", src: "../vscode-DI9n3a0r.png", alt: "VS Code logo" },
      { name: "Postman", src: "../postman-DSxPNzLU.png", alt: "Postman logo" },
      { name: "Vercel", src: "../vercel-B3cpfMqI.png", alt: "Vercel logo" },
      { name: "Netlify", src: "../netlify-CdgZKT40.png", alt: "Netlify logo" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Sticky Title */}
      <div className="sticky top-0 z-10 bg-gray-950/90 backdrop-blur-md py-6 px-4 shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold text-center">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-wrap gap-10 py-12 justify-between">
        {skillData.map(({ title, skills }) => (
          <div
            key={title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {skills.map(({ name, src, alt }) => (
                <div
                  key={name}
                  className="w-full h-16 sm:h-20 flex flex-col items-center justify-center space-y-1 bg-transparent border-2 border-gray-700 rounded-2xl transition hover:border-purple-500"
                >
                  <img src={src} alt={alt} className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-xs sm:text-sm text-gray-300">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Skills;
