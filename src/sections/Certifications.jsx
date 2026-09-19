import certificationsData from '../assets/data/certifications.json';
import CertificationCard from '../components/CertificationCard';
import SectionHeading from '../components/SectionHeading';
import '../assets/styles/certifications.css';

export default function Certifications() {
  return (
    <div className='section' id='certifications'>
      <SectionHeading index='07' title='Certifications' />
      <div className='section-content'>
        <div className='certifications-grid'>
          {
            certificationsData.map((certification, index) => (
              <CertificationCard
                key={`${certification.name}-${index}`}
                certification={certification}
                index={index}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
