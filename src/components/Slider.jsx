import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const sliderImages = require.context('../assets/images/slider-images', false, /\.(png|jpe?g|svg|webp)$/);

function getImageSrc(photo) {
    if (!photo) {
        return '';
    }

    if (/^(https?:|data:|\/)/.test(photo)) {
        return photo;
    }

    try {
        return sliderImages(`./${photo}`);
    } catch {
        return photo;
    }
}

function normalizeSlide(item) {
    const photo = item.photo || item.image || item.src || '';
    const name = item.name || item.title || 'Project';
    const description = Array.isArray(item.description)
        ? item.description.join(' ')
        : item.description || '';
    const links = Object.entries(item.links || {})
        .filter(([, url]) => Boolean(url))
        .map(([label, url]) => ({
            label: label.charAt(0).toUpperCase() + label.slice(1),
            url
        }));

    return {
        ...item,
        photo: getImageSrc(photo),
        name,
        description,
        links,
        alt: item.alt || name
    };
}

export default function Slider({ data = [] }) {
    const [sliderIndex, setSliderIndex] = useState(0);
    const slides = useMemo(() => data.map(normalizeSlide).filter((item) => item.photo), [data]);

    if (!slides.length) {
        return null;
    }

    const handlePrev = () => {
        setSliderIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1);
    }
    
    const handleNext = () => {
        setSliderIndex((prev) => prev === slides.length - 1 ? 0 : prev + 1);
    }

  return (
    <div className='slider' aria-roledescription='carousel'>
        <div className='slider-prev'>
            <button type='button' onClick={handlePrev} aria-label='Previous slide'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </div>
        <div className='slider-content'>
            <div className='slider-track' style={{
                transform: `translateX(-${sliderIndex*100}%)`
            }}>
                {
                    slides.map((item, index) => {
                        return (
                            <div className='slide' key={`${item.photo}-${index}`} aria-hidden={sliderIndex !== index}>
                                <div className='slide-header'>
                                    <img src={item.photo} alt={item.alt} />
                                    <h3>{item.name}</h3>
                                </div>
                                <div className='slide-content'>
                                    {item.description && <p>{item.description}</p>}
                                    {item.links.length > 0 && (
                                        <div className='slide-links' aria-label={`${item.name} links`}>
                                            {item.links.map((link) => (
                                                <a
                                                    key={link.url}
                                                    href={link.url}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='slider-next'>
            <button type='button' onClick={handleNext} aria-label='Next slide'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    </div>
  )
}
