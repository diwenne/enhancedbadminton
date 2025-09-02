// src/pages/Coaches.tsx

// --- COACH IMAGES ---
import Jack from '../assets/coaches/jack.png';
import Diwen from '../assets/coaches/diwen.png';
import Austin from '../assets/coaches/austin.png';
import Callista from '../assets/coaches/callista.png';
import Justin from '../assets/coaches/justin.png';

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
import nmsag from '../assets/certificates/nmsag.png';

// ---------- Types ----------
type SectionKey = 'headCoach' | 'competitionCoaches' | 'skillsCoaches' | 'seniorCoaches';

type Certification = { file: string; caption: string };

type Coach = {
  name: string;
  icon: string | null;
  flair?: string;
  subtitle: string;
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
      image: Jack,
      description:
        'A former professional with over 15 years of experience, Jack is dedicated to building a center of badminton excellence and fostering top-tier talent.',
      certifications: [
        { file: chpc, caption: 'Chartered Professional Coach' },
        { file: acd, caption: 'Advanced Coaching Diploma' },
        { file: nccp, caption: 'NCCP Level 3 Certified' },
        { file: bwf, caption: 'Badminton World Federation Coach' },
        { file: ahrc, caption: 'Australian Human Rights Commission Recognized Child Protection Certificate' },
        { file: asc, caption: 'Australian Sports Commission Community Coaching General Principals Certificate' },
        { file: au, caption: 'Bachelor of Science at Andrews University' },
        { file: ba, caption: 'Badminton Australia Registered Coach' },
        { file: bc, caption: 'Badminton Canada Certified Coach' },
        { file: bec, caption: 'Badminton Europe Confederation Certified Staff' },
        { file: ipc, caption: 'International Paralympic Committee Para Sport Coach' },
        { file: pfa, caption: 'Physical Fitness Association of Hong Kong China Assessment Leader Certification' },
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
      subtitle: 'Skills Coach',
      image: Justin,
      description:
        'Justin connects wonderfully with our youngest athletes, using games and creative drills to instill a lifelong love for the sport of badminton.',
      certifications: [{ file: nccp, caption: 'NCCP Provincial Level 2 Coach' }],
    },
    {
      name: 'Callista',
      icon: null,
      flair: '🇨🇦🇹🇼',
      subtitle: 'Skills Coach',
      image: Callista,
      description:
        'Callista excels at creating a positive and encouraging environment for intermediate players looking to transition to competitive play.',
      certifications: [
        { file: nmsag, caption: '2024 National Middle School Athletic Games 4th Place' },
        { file: bc, caption: '2025 YONEX BC Junior Elite Mixed Doubles 3rd Place' },
      ],
    },
  ],
  // Keep empty array if you want to render the title later, or remove this key entirely.
  seniorCoaches: [],
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
    <div className="container">
      <div className="page-header">
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

                  <p className="coach-subtitle-text">{coach.subtitle}</p>
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
  );
}

export default Coaches;