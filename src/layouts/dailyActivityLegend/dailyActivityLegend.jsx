import { Label } from '../../components/label/label';
import Legend from '../../components/legend/legend';

/**
 * `DailyActivityLegend` is a component that displays a legend related to daily activity.
 * It consists of a main label and two legends for burnt calories and weight.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.dimensions - The dimensions of the associated chart.
 * @param {string} [props.className='legend'] - The CSS class to apply to the legend.
 * 
 * @returns {ReactElement} An SVG legend for daily activity.
 */
function DailyActivityLegend({ dimensions, className = 'legend' }) {
  const yOffset = -(dimensions.marginTop * 0.6);
  const mobileSettings = dimensions.width < 560;

  return (
    <g>
      <Label
        x={0}
        y={yOffset}
        label='Activité quotidienne'
        className={className}
      />
      <Legend
        text='Calories brûlées (kCal)'
        yOffset={mobileSettings ? yOffset + 30 : yOffset}
        xOffset={dimensions.boundedWidth - 125}
        className={`${className}-first`}
      />
      <Legend
        text='Poids (kg)'
        yOffset={yOffset}
        xOffset={
          mobileSettings
            ? dimensions.boundedWidth - 37
            : dimensions.boundedWidth - 250
        }
        className={`${className}-second`}
      />
    </g>
  );
}

export default DailyActivityLegend;
