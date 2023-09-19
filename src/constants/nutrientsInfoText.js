import calorieIcon from '../assets/calories-icon.svg';
import proteinIcon from '../assets/protein-icon.svg';
import carbIcon from '../assets/carbs-icon.svg';
import fatIcon from '../assets/fat-icon.svg';

/**
 * @typedef {Object} NutrientCardInfo
 * @property {string} key - The unique identifier for the nutrient.
 * @property {string} image - The path to the image icon for the nutrient.
 * @property {string} label - The display name for the nutrient.
 * @property {string} unit - The measurement unit for the nutrient.
 */

/**
 * Contains the textual and image information for different nutrient cards.
 * @type {Object.<string, NutrientCardInfo>}
 */
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