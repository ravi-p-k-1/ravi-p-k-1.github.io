import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/slider.css';

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
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const slides = useMemo(() => {
        return data.map(normalizeSlide).filter((item) => item.photo || showPlaceholder);
    }, [data, showPlaceholder]);

    if (!slides.length) {
        return null;
    }

    const goTo = (nextIndex, dir) => {
        setDirection(dir);
        setIndex(nextIndex);
    };

    const handlePrev = () => goTo(index === 0 ? slides.length - 1 : index - 1, -1);
    const handleNext = () => goTo(index === slides.length - 1 ? 0 : index + 1, 1);

    const current = slides[index];

    return (
        <div className='slider' aria-roledescription='carousel'>
            <div className='slider-viewport'>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={`${current.name}-${index}`}
                        className='slide'
                        initial={{ opacity: 0, x: direction * 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -20 }}
                        transition={{ duration: 0.32, ease: 'easeOut' }}
                    >
                        <div className='slide-header'>
                            {current.photo ? (
                                <img
                                    src={current.photo}
                                    alt={current.alt}
                                    style={{
                                        objectFit: current.imageFit,
                                        objectPosition: current.imagePosition
                                    }}
                                />
                            ) : (
                                <div className='slide-image-placeholder' aria-label={`${current.name} profile placeholder`}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            )}
                            <div className='slide-title'>
                                <h3>{current.name}</h3>
                                {current.meta && <div className='slide-meta'>{current.meta}</div>}
                            </div>
                        </div>
                        <div className='slide-content'>
                            {current.description && <p>{current.description}</p>}
                            {current.links.length > 0 && (
                                <div className='slide-links' aria-label={`${current.name} links`}>
                                    {current.links.map((link) => (
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
                    </motion.div>
                </AnimatePresence>
            </div>

            {slides.length > 1 && (
                <div className='slider-controls'>
                    <button type='button' className='slider-nav-btn' onClick={handlePrev} aria-label='Previous slide'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className='slider-dots'>
                        {slides.map((slide, dotIndex) => (
                            <button
                                key={`${slide.name}-${dotIndex}`}
                                type='button'
                                className={`slider-dot ${dotIndex === index ? 'is-active' : ''}`}
                                onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                                aria-label={`Go to slide ${dotIndex + 1}`}
                            />
                        ))}
                    </div>
                    <button type='button' className='slider-nav-btn' onClick={handleNext} aria-label='Next slide'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            )}
        </div>
    )
}
