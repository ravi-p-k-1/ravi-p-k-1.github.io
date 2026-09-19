import { faExternalLinkAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faFigma, faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

const projectImages = require.context('../assets/images/project-images', false, /\.(png|jpe?g|svg|webp)$/);

const linkIcons = {
  github: faGithub,
  npm: faNpm,
  figma: faFigma,
  prototype: faFigma,
  dribbble: faDribbble,
  website: faGlobe
};

export function getLinkIcon(label) {
  const key = label.toLowerCase().split(/\s+/).pop();
  return linkIcons[key] || faExternalLinkAlt;
}

export function getProjectImage(image) {
  if (!image) {
    return '';
  }

  if (/^(https?:|data:|\/)/.test(image)) {
    return image;
  }

  try {
    return projectImages(`./${image}`);
  } catch {
    return image;
  }
}

export function getProjectLinks(links = {}, prefix = '') {
  return Object.entries(links).flatMap(([key, value]) => {
    const label = prefix ? `${prefix} ${key}` : key;

    if (typeof value === 'string') {
      return [{
        label: label.charAt(0).toUpperCase() + label.slice(1),
        url: value
      }];
    }

    if (value && typeof value === 'object') {
      return getProjectLinks(value, label);
    }

    return [];
  });
}
