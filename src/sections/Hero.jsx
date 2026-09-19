import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import contacts from '../assets/data/contacts.json';
import '../assets/styles/hero.css';

const roles = [
  'full-stack web apps',
  'AI-powered systems',
  'MCP tools & agents',
  'data-driven platforms'
];

const floatingBadges = [
  { label: 'React', style: { top: '6%', left: '4%' } },
  { label: 'TypeScript', style: { top: '18%', left: '78%' } },
  { label: 'Node.js', style: { top: '58%', left: '2%' } },
  { label: 'PostgreSQL', style: { top: '78%', left: '70%' } },
  { label: 'Claude Agent SDK', style: { top: '2%', left: '46%' } },
  { label: 'MCP', style: { top: '86%', left: '30%' } }
];

function useTypedRoles(words, prefersReducedMotion) {
  const [text, setText] = useState(prefersReducedMotion ? words[0] : '');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const current = words[wordIndex % words.length];
    const speed = deleting ? 35 : 55;
    const atEnd = !deleting && text === current;
    const atStart = deleting && text === '';

    const timeout = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
        return;
      }
      if (atStart) {
        setDeleting(false);
        setWordIndex((prev) => prev + 1);
        return;
      }
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, atEnd ? 1400 : atStart ? 250 : speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, prefersReducedMotion]);

  return text;
}

export default function Hero() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const typedRole = useTypedRoles(roles, prefersReducedMotion);

  return (
    <section className='hero' id='hero'>
      <div className='hero-inner'>
        <motion.div
          className='hero-badges'
          initial='hidden'
          animate='visible'
          aria-hidden='true'
        >
          {floatingBadges.map((badge, index) => (
            <motion.span
              key={badge.label}
              className='hero-badge'
              style={badge.style}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 + index * 0.08 },
                y: { duration: 6 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }
              }}
            >
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className='hero-eyebrow'
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {"// hi, I'm"}
        </motion.p>

        <motion.h1
          className='hero-name'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Ravi Kakadia
        </motion.h1>

        <motion.p
          className='hero-role'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          I build <span className='hero-role-typed'>{typedRole}</span>
          <span className='hero-cursor' aria-hidden='true'>|</span>
        </motion.p>

        <motion.p
          className='hero-tagline'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          Software Engineer &amp; M.S. Computer Science student building scalable,
          AI-powered applications &mdash; from React interfaces to LLM and MCP orchestration.
        </motion.p>

        <motion.div
          className='hero-actions'
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <a className='btn btn-primary' href='#projects'>
            View Projects
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a className='btn btn-secondary' href={`mailto:${contacts.email}`}>
            Get in Touch
          </a>
        </motion.div>
      </div>

      <a href='#aboutMe' className='hero-scroll-cue' aria-label='Scroll to About Me'>
        <FontAwesomeIcon icon={faChevronDown} />
      </a>
    </section>
  );
}
