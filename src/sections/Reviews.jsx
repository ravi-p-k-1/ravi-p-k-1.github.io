import reviewsData from '../assets/data/reviews.json';
import Slider from '../components/Slider';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import '../assets/styles/reviews.css';

export default function Reviews() {
  return (
    <div className='section' id='reviews'>
      <SectionHeading index='06' title='Reviews' />
      <div className='section-content'>
        <ScrollReveal className='reviews-section' delay={0.05}>
          <Slider data={reviewsData} showPlaceholder />
        </ScrollReveal>
      </div>
    </div>
  )
}
