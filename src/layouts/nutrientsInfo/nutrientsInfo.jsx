import { useContext } from 'react';
import NUTRIENTS_CARDS_TEXT from '../../constants/nutrientsInfoText';
import { DataContext } from '../../context/dataContext';
import MetricCard from '../../components/metricCard/metricCard';
import './nutrientsInfo.scss';

/**
 * A component that displays a set of metric cards based on user's macronutrients data.
 * 
 * @returns {ReactElement|null} The rendered NutrientsInfo component or null if no data available.
 */
function NutrientsInfo() {
  const dataState = useContext(DataContext);

  if (!dataState.data) {
    return null;
  }

  const { macronutrients } = dataState.data.user;

  return (
    <section className='nutrients'>
      {Object.values(NUTRIENTS_CARDS_TEXT).map((nutrient) => (
        <MetricCard
          label={nutrient.label}
          value={`${macronutrients[nutrient.key]}${nutrient.unit}`}
          image={nutrient.image}
          key={nutrient.key}
        />
      ))}
    </section>
  );
}

export default NutrientsInfo;
