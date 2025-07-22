function Achievement() {
  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gray-950 text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS & INTERESTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A glimpse into my accomplishments and areas of passion.
        </p>
      </div>

      <div className="bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6">
        <ul className="list-disc list-inside space-y-4 text-gray-300 text-base leading-relaxed">
          <li>
            Applied advanced data analysis and machine learning techniques in real-world projects.
          </li>
          <li>
            Developed machine learning models optimizing team selection and predictive analysis.
          </li>
          <li>
            Created interactive dashboards in Power BI to enhance data-driven decision-making.
          </li>
          <li>
            Mastered full-stack web development, building responsive and dynamic applications.
          </li>
          <li>
            Ranked among the top 5% in a national-level coding competition.
          </li>
          <li>
            Passionate about AI innovations, blogging on data science trends, and exploring new technologies.
          </li>
          <li>
            Active in community engagement, volunteering for animal rescue initiatives and tech mentorship.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Achievement;
