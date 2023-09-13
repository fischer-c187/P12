import Yoga from '../assets/yoga.svg';
import Swim from '../assets/swim.svg';
import Bike from '../assets/bike.svg';
import Body from '../assets/bodybuilding.svg';

/**
 * @typedef {Object} NavItem
 * @property {JSX.Element} text - Display element for the navigation link.
 * @property {string} link - URL or path the link points to.
 */

/**
 * Array of navigation items for the sidebar, including icons and link destinations.
 * @type {NavItem[]}
 */
const SIDEBAR_NAV_TEXT = [
  {
    text: <img src={Yoga} />,
    link: '/'
  },
  {
    text: <img src={Swim} />,
    link: '#'
  },
  {
    text: <img src={Bike} />,
    link: '#'
  },
  {
    text: <img src={Body} />,
    link: '#'
  }
];

export default SIDEBAR_NAV_TEXT;