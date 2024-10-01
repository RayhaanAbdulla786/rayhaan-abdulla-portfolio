/**
 * @copyright 2024 Rayhaan Abdulla
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Projects Done',
    number: 5
  },
  {
    label: 'Years of experience',
    number: 1
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Rayhaan, A Cyber Security Analyst & A Website Developer. Still Looking For Experience But I Am A Hard Working Person And I Put Extra Attention On New Work That Needs To Be Learned, I Like Working With Html & CSS And Im Working On Learning New Programming Languages.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default About