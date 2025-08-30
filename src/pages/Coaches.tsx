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



// --- REMOVED ---
// The 'certificationLogos' lookup object is no longer needed.

// --- COACH DATA ARRAY ---
// STEP 1: Manage your coach info here.
// The 'file' property now directly uses the imported variable name from above.
const coachesData = [
  {
    name: 'Jack',
    image: Jack,
    description: 'Head Coach & Founder. A former professional with over 20 years of experience, Jack is dedicated to building a center of badminton excellence and fostering top-tier talent.',
    certifications: [
      { file: nccp, caption: 'NCCP Level 3 Certified' },
      { file: bwf, caption: 'Badminton World Federation Coach' },
      { file: acd, caption: 'Badminton World Federation Coach' },
      { file: ahrc, caption: 'Badminton World Federation Coach' },
      { file: asc, caption: 'Badminton World Federation Coach' },
      { file: au, caption: 'Badminton World Federation Coach' },
      { file: ba, caption: 'Badminton World Federation Coach' },
      { file: bec, caption: 'Badminton World Federation Coach' },
      { file: chpc, caption: 'Badminton World Federation Coach' },
      { file: ipc, caption: 'Badminton World Federation Coach' },
      { file: pfa, caption: 'Badminton World Federation Coach' },
    ],
  },
  {
    name: 'Diwen',
    image: Diwen,
    description: 'Performance Coach. Specializing in advanced tactical analysis and high-intensity conditioning, Diwen helps competitive players gain a critical edge over their opponents.',
    certifications: [
      { file: nccp, caption: 'NCCP Level 2 Certified' },
    ],
  },
  {
    name: 'Austin',
    image: Austin,
    description: "Technical Coach. With a keen eye for detail, Austin focuses on refining players' form, footwork, and shot precision to build a strong, reliable foundation.",
    certifications: [
      { file: nccp, caption: 'NCCP Level 1 Certified' }
    ],
  },
  {
    name: 'Callista',
    image: Callista,
    description: 'Development Coach. Callista excels at creating a positive and encouraging environment for intermediate players looking to transition to competitive play.',
    certifications: [
      { file: nccp, caption: 'NCCP In Training' }
    ],
  },
  {
    name: 'Jessica',
    image: Jessica,
    description: 'Junior Coach. Jessica brings energy and fun to our youth programs, focusing on making the fundamentals of badminton engaging and accessible for young beginners.',
    certifications: [
      { file: nccp, caption: 'Junior Coach' }
    ],
  },
  {
    name: 'Justin',
    image: Justin,
    description: 'Junior Coach. Justin connects wonderfully with our youngest athletes, using games and creative drills to instill a lifelong love for the sport of badminton.',
    certifications: [
      { file: nccp, caption: 'Junior Coach' }
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