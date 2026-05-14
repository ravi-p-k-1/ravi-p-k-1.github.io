import reviewsData from '../assets/data/reviews.json';
import Slider from '../components/Slider';
import '../assets/styles/reviews.css';

export default function Reviews() {
  return (
    <div className='section' id='reviews'>
      <div className='section-title'>
        Reviews
      </div>
      <div className='section-content'>
        <div className='reviews-section'>
          <Slider data={reviewsData} showPlaceholder />
        </div>
      </div>
    </div>
  )
}
