import Yoga from '../assets/yoga.svg';
import Swim from '../assets/swim.svg';
import Bike from '../assets/bike.svg';
import Body from '../assets/bodybuilding.svg';

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