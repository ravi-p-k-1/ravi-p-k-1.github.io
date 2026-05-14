import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';

const sliderImages = require.context('../assets/images/slider-images', false, /\.(png|jpe?g|svg|webp)$/);

function getImageSrc(photo) {
    const photoName = typeof photo === 'string' ? photo.trim() : '';

    if (!photoName) {
        return '';
    }

    if (/^(https?:|data:|\/)/.test(photoName)) {
        return photoName;
    }

    try {
        return sliderImages(`./${photoName}`);
    } catch {
        return '';
    }
}

function normalizeSlide(item) {
    const photo = item.photo || item.image || item.src || '';
    const name = item.name || item.title || 'Project';
    const description = Array.isArray(item.description)
        ? item.description.join(' ')
        : item.description || item.review || '';
    const meta = [item.position, item.relation].filter(Boolean).join(' | ');
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
        meta,
        imageFit: item.imageFit,
        imagePosition: item.imagePosition,
        alt: item.alt || name
    };
}

export default function Slider({ data = [], showPlaceholder = false }) {
    const [sliderIndex, setSliderIndex] = useState(0);
    const slides = useMemo(() => {
        return data.map(normalizeSlide).filter((item) => item.photo || showPlaceholder);
    }, [data, showPlaceholder]);

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
                            <div className='slide' key={`${item.name}-${index}`} aria-hidden={sliderIndex !== index}>
                                <div className='slide-header'>
                                    {item.photo ? (
                                        <img
                                            src={item.photo}
                                            alt={item.alt}
                                            style={{
                                                objectFit: item.imageFit,
                                                objectPosition: item.imagePosition
                                            }}
                                        />
                                    ) : (
                                        <div className='slide-image-placeholder' aria-label={`${item.name} profile placeholder`}>
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                    )}
                                    <div className='slide-title'>
                                        <h3>{item.name}</h3>
                                        {item.meta && <div className='slide-meta'>{item.meta}</div>}
                                    </div>
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
