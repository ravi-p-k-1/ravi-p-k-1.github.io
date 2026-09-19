import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ index, title, align = 'left' }) {
  return (
    <ScrollReveal className={`section-heading section-heading-${align}`} y={16}>
      {index && <span className='section-index'>{index}</span>}
      <h2 className='section-title'>{title}</h2>
      <span className='section-title-bar' aria-hidden='true'></span>
    </ScrollReveal>
  );
}
