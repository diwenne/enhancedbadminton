// src/pages/Coaches.tsx

// --- COACH IMAGES ---
import Jack from '../assets/coaches/jack.png';
import Diwen from '../assets/coaches/diwen.png';
import Austin from '../assets/coaches/austin.png';
import Callista from '../assets/coaches/callista.png';
import Jessica from '../assets/coaches/jessica.png';
import Justin from '../assets/coaches/justin.png';

// --- CERTIFICATION LOGOS ---
// All your certification logos are imported as variables
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



// --- REMOVED ---
// The 'certificationLogos' lookup object is no longer needed.

// --- COACH DATA ARRAY ---
// STEP 1: Manage your coach info here.
// The 'file' property now directly uses the imported variable name from above.
const coachesData = [
  {
    name: 'Jack, ChPC',
    image: Jack,
    description: 'Head Coach & Founder. A former professional with over 20 years of experience, Jack is dedicated to building a center of badminton excellence and fostering top-tier talent.',
    certifications: [
      { file: nccp, caption: 'NCCP Level 3 Certified' },
      { file: bwf, caption: 'Badminton World Federation Coach' },
      { file: acd, caption: 'Advanced Coaching Diploma' },
      { file: ahrc, caption: 'Australian Human Rights Commission Recognized Child Protection Certificate' },
      { file: asc, caption: 'Australian Sports Commission Community Coaching General Principals Certificate' },
      { file: au, caption: 'Bachelor of Science at Andrews University' },
      { file: ba, caption: 'Badminton Australia Registered Coach' },
      { file: bc, caption: 'Badminton Canada Certified Coach' },
      { file: bec, caption: 'Badminton Europe Confederation Certified Staff' },
      { file: chpc, caption: 'Badminton World Federation Coach' },
      { file: ipc, caption: 'International Paralympic Committee Para Sport Coach' },
      { file: pfa, caption: 'Physical Fitness Association of Hong Kong China Assessment Leader Certification' },
    ],
  },
  {
    name: 'Diwen',
    image: Diwen,
    description: 'Performance Coach. Specializing in advanced tactical analysis and high-intensity conditioning, Diwen helps competitive players gain a critical edge over their opponents.',
    certifications: [
      { file: nccp, caption: 'NCCP Provincial Level 2 Coach' },
      { file: bbc, caption: '2025 Provincial A Champion' },

    ],
  },
  {
    name: 'Austin',
    image: Austin,
    description: "Technical Coach. With a keen eye for detail, Austin focuses on refining players' form, footwork, and shot precision to build a strong, reliable foundation.",
    certifications: [
      { file: nccp, caption: 'NCCP Regional Level 1 Coach' }
    ],
  },
  {
    name: 'Callista',
    image: Callista,
    description: 'Development Coach. Callista excels at creating a positive and encouraging environment for intermediate players looking to transition to competitive play.',
    certifications: [
      { file: nccp, caption: '2024 National Middle School Athletic Games 4th Place' },
      { file: bc, caption: '2025 YONEX BC Junior Elite Mixed Doubles 3rd Place' }
    ],
  },
  {
    name: 'Justin',
    image: Justin,
    description: 'Junior Coach. Justin connects wonderfully with our youngest athletes, using games and creative drills to instill a lifelong love for the sport of badminton.',
    certifications: [
      { file: nccp, caption: 'NCCP Provincial Level 2 Coach' }
    ],
  },
];


function Coaches() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="section-heading">Meet Our Coaching Team</h1>
        <p className="page-subtitle">Dedicated professionals passionate about helping you achieve your badminton goals.</p>
      </div>
      <div className="coaches-grid">
        {coachesData.map((coach) => (
          <div className="coach-card" key={coach.name}>
            <img src={coach.image} alt={`Coach ${coach.name}`} className="coach-photo" />
            <h3>{coach.name}</h3>
            <p>{coach.description}</p>
            <div className="coach-certifications">
              {coach.certifications.map((cert) => (
                <div className="cert-item" key={cert.file} data-caption={cert.caption}>
                  {/* STEP 2: The 'src' attribute now directly uses cert.file */}
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
    </div>
  );
}

export default Coaches;