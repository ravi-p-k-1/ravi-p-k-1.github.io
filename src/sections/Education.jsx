import educationData from '../assets/data/education.json';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import '../assets/styles/education.css';

export default function Education() {
  const parseDate = (dateValue) => {
    const [year, month, day] = dateValue.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  const formatDate = (dateValue) => {
    return parseDate(dateValue).toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    });
  }

  return (
    <div className='section' id='education'>
      <SectionHeading index='05' title='Education' />
      <div className='section-content'>
        <div className='education-list'>
          {
            educationData.map((education, index) => {
              const startDate = formatDate(education.startDate);
              const endDate = formatDate(education.endDate);

              return (
                <ScrollReveal
                  as='div'
                  key={`${education.college}-${index}`}
                  className='education-card'
                  delay={Math.min(index * 0.08, 0.24)}
                >
                  <div className='education-header'>
                    <div>
                      <div className='college-name'>{education.college}</div>
                      <div className='college-location'>{education.location}</div>
                    </div>
                    <div className='education-status'>{education.status}</div>
                  </div>
                  <div className='education-degree'>
                    {education.degree} in {education.major}
                  </div>
                  <div className='education-meta'>
                    <span>{startDate} - {endDate}</span>
                  </div>
                  {education.gpa?.score && (
                    <div className='education-gpa'>
                      <span>
                        GPA: {education.gpa.score}
                        {education.gpa.equivalent && (
                          <em>{education.gpa.equivalent}</em>
                        )}
                      </span>
                      {education.gpa.originalScore && !education.gpa.equivalent && (
                        <span>{education.gpa.originalScore}</span>
                      )}
                    </div>
                  )}
                </ScrollReveal>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
