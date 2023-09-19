import { useContext } from 'react';
import NUTRIENTS_CARDS_TEXT from '../../constants/nutrientsInfoText';
import { DataContext } from '../../context/dataContext';
import MetricCard from '../../components/metricCard/metricCard';
import './nutrientsInfo.scss';

function NutrientsInfo() {
  const dataState = useContext(DataContext);

  if (!dataState.data) {
    return null;
  }

  const { macronutrients } = dataState.data.user;

  console.log(macronutrients);

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
