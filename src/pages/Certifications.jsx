import certificationsData from '../assets/data/certifications.json';
import CertificationCard from '../components/CertificationCard';
import '../assets/styles/certifications.css';

export default function Certifications() {
  return (
    <div className='section' id='certifications'>
      <div className='section-title'>
        Certifications
      </div>
      <div className='section-content'>
        <div className='certifications-grid'>
          {
            certificationsData.map((certification, index) => (
              <CertificationCard
                key={`${certification.name}-${index}`}
                certification={certification}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
