/**
 * @typedef {Object} NavItem
 * @property {string} text - Display text for the navigation link.
 * @property {string} link - URL or path the link points to.
 */

/**
 * Data structure for the main horizontal navigation bar.
 * @type {NavItem[]}
 */
const HORIZONTAL_NAV_TEXT = [
  {
    text: 'Accueil',
    link: '/'
  },
  {
    text: 'Profil',
    link: '#'
  },
  {
    text: 'Réglage',
    link: '#'
  },
  {
    text: 'Communauté',
    link: '#'
  }
];

export default HORIZONTAL_NAV_TEXT;