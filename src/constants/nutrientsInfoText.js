import calorieIcon from '../assets/calories-icon.svg';
import proteinIcon from '../assets/protein-icon.svg';
import carbIcon from '../assets/carbs-icon.svg';
import fatIcon from '../assets/fat-icon.svg';

const NUTRIENTS_CARDS_TEXT = {
  calorie:  {
    key: 'calorie',
    image: calorieIcon,
    label: 'Calories',
    unit: 'kCal'
  },
  protein: {
    key: 'protein',
    image: proteinIcon,
    label: 'Protéines',
    unit: 'g'
  },
  carbohydrate: {
    key: 'carbohydrate',
    image: carbIcon,
    label: 'Glucides',
    unit: 'g'
  },
  lipid: {
    key: 'lipid',
    image: fatIcon,
    label: 'Lipides',
    unit: 'g'
  }
};

export default NUTRIENTS_CARDS_TEXT;