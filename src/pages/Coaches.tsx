// src/pages/Coaches.tsx

// --- COACH IMAGES ---
import Jack from '../assets/coaches/jack.png';
import Diwen from '../assets/coaches/diwen.png';
import Austin from '../assets/coaches/austin.png';
import Justin from '../assets/coaches/justin.png';
import Wilfred from '../assets/coaches/wilfred.jpg';

// --- CERTIFICATION LOGOS ---
import nccp from '../assets/certificates/nccp.png';
import bwf from '../assets/certificates/bwf.png';
import acd from '../assets/certificates/acd.png';
import ahrc from '../assets/certificates/ahrc.png';
import asc from '../assets/certificates/asc.png';
import au from '../assets/certificates/au.png';
import ba from '../assets/certificates/ba.png';
import bc from '../assets/certificates/bc.png';
import bec from '../assets/certificates/bec.png';
import chpc from '../assets/certificates/chpc.png';
import ipc from '../assets/certificates/ipc.png';
import pfa from '../assets/certificates/pfa.png';
import bbc from '../assets/certificates/bbc.png';
import bcwg from '../assets/certificates/bcwg.png';


// ---------- Types ----------
type SectionKey = 'headCoach' | 'competitionCoaches' | 'skillsCoaches' | 'seniorCoaches';

type Certification = { file: string; caption: string };

type Coach = {
  name: string;
  icon: string | null;
  flair?: string;
  subtitle: string;          // main role line
  subtitles?: string[];      // extra lines under the name (optional)
  image: string;
  description: string;
  certifications: Certification[];
};

// ---------- Data ----------
const coachSections: Record<SectionKey, Coach[]> = {
  headCoach: [
    {
      name: 'Jack Ho, ChPC',
      icon: null,
      flair: '🇨🇦🇭🇰🇨🇳🇯🇵',
      subtitle: 'Founder & Head Coach',
      // ✅ New extra subtitles
      subtitles: [
        '🇨🇦 Trainer of Canadian Para National and Paralympic Athletes',
        '🇮🇪 Former Trainer of Irish National Youth Athletes',
      ],
      image: Jack,
      description:
        'A former professional with over 15 years of experience, Jack is dedicated to building a center of badminton excellence and fostering top-tier talent.',
      certifications: [
        { file: chpc, caption: 'Chartered Professional Coach (ChPC)' },
        { file: acd, caption: 'Advanced Coaching Diploma (ACD)' },
        { file: bwf, caption: 'Badminton World Federation Coach (BWF)' },
        { file: ipc, caption: 'International Paralympic Committee Para Sport Coach (IPC)' },

        { file: bec, caption: 'Badminton Europe Confederation Certified Staff (BEC)' },
        { file: bc, caption: 'Badminton Canada Certified Coach (BCAN)' },
        { file: nccp, caption: 'NCCP Level 3 Certified (NCCP)' },
        { file: ba, caption: 'Badminton Australia Registered Coach (BAus)' },

        { file: au, caption: 'Bachelor of Science at Andrews University (AU)' },
        { file: asc, caption: 'Australian Sports Commission Community Coaching General Principals Certificate (ASC)' },
        { file: ahrc, caption: 'Australian Human Rights Commission Recognized Child Protection Certificate (AHRC)' },
        { file: pfa, caption: 'Physical Fitness Association of Hong Kong China Assessment Leader Certification (PFA)' },
      ],
    },
  ],
  competitionCoaches: [
    {
      name: 'Diwen',
      icon: null,
      flair: '🇨🇦🇨🇳',
      subtitle: 'Competition Coach',
      image: Diwen,
      description:
        'Specializing in advanced tactical analysis and high-intensity conditioning, Diwen helps competitive players gain a critical edge over their opponents.',
      certifications: [
        { file: nccp, caption: 'NCCP Provincial Level 2 Coach' },
        { file: bbc, caption: '2025 Provincial A Champion' },
      ],
    },
    {
      name: 'Austin',
      icon: null,
      flair: '🇨🇦🇭🇰🇨🇳',
      subtitle: 'Competition Coach',
      image: Austin,
      description:
        "With a keen eye for detail, Austin focuses on refining players' form, footwork, and shot precision to build a strong, reliable foundation.",
      certifications: [
        { file: nccp, caption: 'NCCP Regional Level 1 Coach' },
        { file: bbc, caption: '2024 Provincial B Champion' },
      ],
    },
  ],
  skillsCoaches: [
    {
      name: 'Justin',
      icon: null,
      flair: '🇨🇦🇹🇼',
      subtitle: 'Skills Coach (Singles)',
      image: Justin,
      description:
        'Justin connects wonderfully with our youngest athletes, using games and creative drills to instill a lifelong love for the sport of badminton.',
      certifications: [{ file: nccp, caption: 'NCCP Provincial Level 2 Coach' }],
    },
  ],
  seniorCoaches: [
    {
      name: 'Wilfred',
      icon: null,
      flair: '🇨🇦',
      subtitle: 'Senior Coach',
      image: Wilfred,
      description:
        'With extensive experience in competitive badminton, Wilfred brings a wealth of knowledge and expertise to help players of all levels improve their game.',
      certifications: [
        { file: nccp, caption: 'NCCP Level 2 Comp-Intro Provincial (Level 2) Coach' },
        { file: bcwg, caption: 'Former BC Winter Games Zone Head Coach' },
      ],
    },
  ],
};

// Nice titles for each section
const sectionTitles: Record<SectionKey, string> = {
  headCoach: 'Head Coach',
  competitionCoaches: 'Competition Coaches',
  skillsCoaches: 'Skills & Development Coaches',
  seniorCoaches: 'Senior Coaches',
};

// ---------- Component ----------
function Coaches() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section page-banner" style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2a4d7c 100%)",
        color: "white",
        padding: "5rem 2rem 4rem 2rem",
        textAlign: "center",
        minHeight: "auto"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            padding: ".5rem 1rem",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "999px",
            fontSize: ".85rem",
            fontWeight: 700,
            letterSpacing: ".1em",
            marginBottom: "1.5rem"
          }}>
            OUR TEAM
          </div>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 900,
            margin: "0 0 1.5rem 0",
            lineHeight: 1.1
          }}>
            Meet Our Coaching Team
          </h1>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            opacity: 0.95,
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Dedicated professionals passionate about helping you achieve your badminton goals
          </p>
        </div>
      </section>

      <div className="container">
      <div className="page-header" style={{ display: "none" }}>
        <h1 className="section-heading">Meet Our Coaching Team</h1>
        <p className="page-subtitle">
          Dedicated professionals passionate about helping you achieve your badminton goals.
        </p>
      </div>

      {(Object.entries(coachSections) as [SectionKey, Coach[]][])
        .filter(([, coaches]) => coaches.length > 0) // hide empty sections like seniorCoaches
        .map(([key, coaches]) => (
          <section className="coach-section" key={key}>
            <h2 className="coach-section-title">{sectionTitles[key]}</h2>

            <div className="coaches-grid">
              {coaches.map((coach) => (
                <div className="coach-card" key={coach.name + coach.subtitle}>
                  <img src={coach.image} alt={`Coach ${coach.name}`} className="coach-photo" />

                  <div className="coach-header">
                    {coach.icon && <img src={coach.icon} alt="Coach icon" className="coach-icon" />}
                    <h3 className="coach-name">{coach.name}</h3>
                  </div>

                  {coach.flair && <p className="coach-flair">{coach.flair}</p>}

                  {/* Main subtitle */}
                  <p className="coach-subtitle-text">{coach.subtitle}</p>

                  {/* Extra subtitles (if any) */}
                  {coach.subtitles?.map((line, i) => (
                    <p className="coach-subtitle-extra" key={coach.name + '-sub' + i}>
                      {line}
                    </p>
                  ))}

                  <p className="coach-description">{coach.description}</p>

                  <div className="coach-certifications">
                    {coach.certifications.map((cert) => (
                      <div className="cert-item" key={cert.caption} data-caption={cert.caption}>
                        <img
                          src={cert.file}
                          alt={`${cert.caption} certification logo`}
                          className="cert-logo-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default Coaches;