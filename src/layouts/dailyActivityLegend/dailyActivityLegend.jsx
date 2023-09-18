import { Label } from '../../components/label/label';
import Legend from '../../components/legend/legend';

function DailyActivityLegend({ dimensions, className='legend' }) {
  const yOffset = -(dimensions.marginTop * 0.6);
  const mobilSettings = dimensions.width < 560;

  return (
    <g>
      <Label x={0} y={yOffset} label='Activité quotidienne' classname={className}/>
      <Legend
        text='Calories brûlées (kCal)'
        circle={true}
        yOffset={mobilSettings ? yOffset + 30 : yOffset}
        xOffset={dimensions.boundedWidth - 125}
        className={`${className}-first`}
      />
      <Legend
        text='Poids (kg)'
        circle={true}
        yOffset={yOffset}
        xOffset={
          mobilSettings
            ? dimensions.boundedWidth - 37
            : dimensions.boundedWidth - 250
        }
        className={`${className}-second`}
      />
    </g>
  );
}

export default DailyActivityLegend;
