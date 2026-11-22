import Navbar from "../components/Navbar";
import Typing from "../components/Typing";
import Reveal from "../components/Reveal";
import ProjectShots from "../components/ProjectShots";
import {
  profile, skills, experience, projects, achievements, education,
} from "../data/content";

function Title({ num, children }) {
  return (
    <h2 className="section-title">
      <span className="num">{num}.</span>
      {children}
    </h2>
  );
}

export default function Home() {
  const initials = profile.name.split(" ").map((n) => n[0]).join("");

  return (
    <>
      <Navbar />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="hello">Hi, my name is</p>
              <h1>{profile.name}.</h1>
              <h2>
                <Typing
                  words={[
                    "Full Stack Software Engineer",
                    "MERN Stack Developer",
                    "React & Next.js Developer",
                    "React Native Mobile App Developer",
                    "Node.js & Express Backend Developer",
                    "ASP.NET Core & C# Developer",
                    "REST API & Database Designer",
                    "Web & Mobile Solutions Builder",
                  ]}
                />
              </h2>
              <p className="lead">{profile.tagline}</p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">View Projects</a>
                <a className="btn" href={profile.cv} download>Download CV</a>
                <a className="btn" href="#contact">Contact Me</a>
              </div>
              <div className="socials">
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                <a href={`mailto:${profile.email}`}>Email</a>
              </div>
            </div>
            <div className="avatar-wrap">
              <div className="avatar">
                {profile.photo ? <img src={profile.photo} alt={`Photo of ${profile.name}`} /> : initials}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="container">
            <Reveal>
              <Title num="01">About Me</Title>
              <div className="about-grid">
                <div>
                  {profile.about.map((p) => <p key={p}>{p}</p>)}
                </div>
                <div className="code-card">
                  <div className="bar"><i /><i /><i /></div>
                  <dl>
                    {profile.facts.map((f) => (
                      <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <Reveal>
              <Title num="02">Skills</Title>
              <div className="skill-grid">
                {skills.map((s) => (
                  <div className="skill-card" key={s.group}>
                    <h3>{s.group}</h3>
                    <div className="tags">
                      {s.items.map((i) => <span className="tag" key={i}>{i}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <Reveal>
              <Title num="03">Things I've Built</Title>
              <div className="project-grid">
                {projects.map((p) => (
                  <article className="project" key={p.title}>
                    {p.images?.length ? (
                      <ProjectShots images={p.images} title={p.title} />
                    ) : (
                      <div className="shot">
                        {p.image ? <img src={p.image} alt={`${p.title} screenshot`} /> : <span>screenshot coming soon</span>}
                      </div>
                    )}
                    <div className="project-body">
                      <span className="kind">{p.kind}</span>
                      <h3>{p.title}</h3>
                      {p.badge && <span className="badge">{p.badge}</span>}
                      <p>{p.description}</p>
                      <div className="tags">
                        {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                      </div>
                      <div className="project-links">
                        {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                        {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="container">
            <Reveal>
              <Title num="04">Where I've Worked</Title>
              <div className="timeline">
                {experience.map((j) => (
                  <div className="job" key={j.company}>
                    <div className="job-head">
                      <h3>{j.role} <span>@ {j.company}</span></h3>
                      <span className="period">{j.period}</span>
                    </div>
                    <p className="loc">{j.location}</p>
                    <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ACHIEVEMENTS + EDUCATION */}
        <section id="education">
          <div className="container">
            <Reveal>
              <Title num="05">Education & Achievements</Title>
              <div className="two-col">
                <div className="panel">
                  <h3 className="sub">// education</h3>
                  {education.map((e) => (
                    <div className="item" key={e.school}>
                      <h4>{e.school}</h4>
                      <div className="meta">{e.period} · {e.note}</div>
                      <p>{e.degree}</p>
                    </div>
                  ))}
                </div>
                <div className="panel">
                  <h3 className="sub">// achievements</h3>
                  {achievements.map((a) => (
                    <div className="item trophy" key={a.title}>
                      <h4>🏆 {a.title}</h4>
                      <p>{a.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="container">
            <Reveal>
              <Title num="06">Get In Touch</Title>
              <p>
                I'm open to full-time roles, freelance projects and collaborations.
                If you have an idea or an opening, my inbox is always open.
              </p>
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phoneLink}`}>{profile.phone}</a>
                <span>{profile.location}</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
