import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';

function parseDate(dateValue) {
  const [year, month, day] = dateValue.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(dateValue) {
  return parseDate(dateValue).toLocaleString('default', {
    month: 'long',
    year: 'numeric'
  });
}

function getCertificationIcon(certification) {
  const name = certification.name.toLowerCase();
  const issuer = certification.issuer.toLowerCase();

  if (issuer === 'udemy') {
    return {
      type: 'fontawesome',
      icon: faGraduationCap,
      label: 'Udemy'
    };
  }

  if (issuer.includes('aws') || issuer.includes('amazon web services') || name.includes('aws')) {
    return {
      type: 'devicon',
      className: 'devicon-amazonwebservices-plain-wordmark',
      label: 'AWS'
    };
  }

  if (certification.issuer === 'HackerRank') {
    return {
      type: 'fontawesome',
      icon: faHackerrank,
      label: 'HackerRank'
    };
  }

  return {
    type: 'fontawesome',
    icon: faGraduationCap,
    label: certification.issuer
  };
}

export default function CertificationCard({ certification }) {
  const icon = getCertificationIcon(certification);
  const certificateUrl = certification.links?.certificate;

  return (
    <article className='certification-card'>
      <div className='certification-icon' aria-label={icon.label} title={icon.label}>
        {
          icon.type === 'devicon'
            ? <i className={icon.className}></i>
            : <FontAwesomeIcon icon={icon.icon} />
        }
      </div>
      <div className='certification-card-content'>
        <div className='certification-header'>
          <div>
            <h3>{certification.name}</h3>
            <div className='certification-issuer'>{certification.issuer}</div>
          </div>
          <div className='certification-date'>
            {formatDate(certification.issueDate)}
          </div>
        </div>
        {
          certificateUrl && (
            <a
              className='certification-link'
              href={certificateUrl}
              target='_blank'
              rel='noreferrer'
            >
              View Certificate
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          )
        }
      </div>
    </article>
  )
}
