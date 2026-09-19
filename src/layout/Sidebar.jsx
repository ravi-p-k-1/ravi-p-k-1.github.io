import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCode,
  faBriefcase,
  faDiagramProject,
  faGraduationCap,
  faCommentDots,
  faCertificate,
  faBars,
  faXmark,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/sidebar.css';
import profileImg from '../assets/images/profile-photo.jpg';
import profiles from '../assets/data/profiles.json';

const fontAwesomeIcons = {
  github: faGithub,
  hackerrank: faHackerrank,
  linkedin: faLinkedin,
  envelope: faEnvelope
};

function renderProfileIcon(profile) {
  if (profile.icon.library === 'devicon') {
    return <i className={`${profile.icon.className} sidebar-devicon`}></i>;
  }

  const icon = fontAwesomeIcons[profile.icon.name];

  if (!icon) {
    return null;
  }

  return <FontAwesomeIcon icon={icon} />;
}

const navItems = [
  { id: 'aboutMe', name: 'About', icon: faUser },
  { id: 'skills', name: 'Skills', icon: faCode },
  { id: 'workExperience', name: 'Experience', icon: faBriefcase },
  { id: 'projects', name: 'Projects', icon: faDiagramProject },
  { id: 'education', name: 'Education', icon: faGraduationCap },
  { id: 'reviews', name: 'Reviews', icon: faCommentDots },
  { id: 'certifications', name: 'Certifications', icon: faCertificate }
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className='mobile-topbar'>
        <a href='#aboutMe' className='mobile-brand' aria-label='Back to top'>
          RK<span>.</span>
        </a>
        <button
          type='button'
          className='mobile-menu-btn'
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </header>

      <nav className='sidebar' aria-label='Primary'>
        <a href='#aboutMe' className='sidebar-brand' aria-label='Ravi Kakadia'>
          <img src={profileImg} alt='' />
        </a>

        <ul className='sidebar-nav'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`sidebar-nav-link ${activeId === item.id ? 'is-active' : ''}`}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId='sidebar-active-indicator'
                    className='sidebar-active-indicator'
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <FontAwesomeIcon icon={item.icon} />
                <span className='sidebar-tooltip'>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className='sidebar-socials'>
          {profiles.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target={profile.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={profile.url.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={`${profile.name} profile`}
              title={profile.name}
              className='sidebar-social-link'
            >
              {renderProfileIcon(profile)}
            </a>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='mobile-nav-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className='mobile-nav-panel'
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ul>
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.3 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className={activeId === item.id ? 'is-active' : ''}
                      onClick={closeMenu}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className='mobile-nav-socials'>
                {profiles.map((profile) => (
                  <a
                    key={profile.id}
                    href={profile.url}
                    target={profile.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={profile.url.startsWith('mailto:') ? undefined : 'noreferrer'}
                    aria-label={`${profile.name} profile`}
                    onClick={closeMenu}
                  >
                    {renderProfileIcon(profile)}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
