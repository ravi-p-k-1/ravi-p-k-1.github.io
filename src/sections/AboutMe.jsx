import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import '../assets/styles/aboutMe.css';

const stats = [
  { value: '120+', label: 'Interactive visualizations shipped' },
  { value: '90%', label: 'Faster app rendering delivered' },
  { value: '75%', label: 'Faster visualization delivery via automation' },
  { value: '70%', label: 'GraphQL query efficiency gained' }
];

export default function AboutMe() {
  return (
    <div className='section' id='aboutMe'>
      <SectionHeading index='01' title='About Me' />
      <div className='section-content'>
        <div className='about-grid'>
          <ScrollReveal className='about-copy' delay={0.05}>
            <p>
              I'm a Software Engineer and M.S. Computer Science student at the University of the
              Pacific (GPA: 3.96) with experience building full-stack web applications and
              AI-powered systems. My work spans React, TypeScript, Express.js, PostgreSQL,
              Retrieval-Augmented Generation (RAG), vector databases, and LLM orchestration, with
              a focus on developing intelligent applications that combine modern software
              engineering with generative AI. I enjoy solving complex problems by building
              scalable, data-driven systems that transform natural-language inputs into
              meaningful insights.
            </p>
            <p>
              Throughout my experience, I've developed 120+ interactive data visualizations,
              improved query performance by 70%, reduced visualization development time by 75%
              through automation, and optimized application performance by up to 90%. Recently, I
              built InsightIQ, an AI-powered economic insights platform that leverages RAG,
              semantic search, pgvector, and Gemini to retrieve relevant FRED economic series and
              generate grounded analyses from natural-language queries. My work emphasizes
              scalable system design, performance optimization, AI application development, and
              delivering reliable, user-focused software.
            </p>
          </ScrollReveal>

          <div className='about-stats'>
            {stats.map((stat, index) => (
              <ScrollReveal
                key={stat.label}
                className='about-stat'
                delay={0.1 + index * 0.08}
                y={16}
              >
                <span className='about-stat-value'>{stat.value}</span>
                <span className='about-stat-label'>{stat.label}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
