import { generatePointForLevel } from '../../utils/radarChart';
import { Path } from '../path/path';

/**
 * RadarLevels component is used for rendering the concentric levels in a Radar Chart.
 * @param {number} numberLevel - The number of levels to display
 * @param {number} numberSide - The number of sides of the polygonal radar
 * @param {number} rayon - The radius of the radar chart
 * @param {number} angle - The angle between each level
 * @param {Object} center - Center point of the radar chart {x, y}
 * @param {string} [className='chart'] - The CSS class for styling
 * @returns {JSX.Element} A group element containing the rendered radar levels.
 */
export function RadarLevels({
  numberLevel,
  numberSide,
  radius,
  angle,
  center,
  className = 'chart',
}) {
  const levels = Array.from({ length: numberLevel }, (_, level) => {
    const length = ((level + 1) / numberLevel) * radius;
    return generatePointForLevel(length, numberSide, angle, center);
  });

  return (
    <g className={`${className}__levels-group`}>
      {levels.map((level, index) => (
        <Path points={level} className={`${className}__levels-path`} key={index} />
      ))}
    </g>
  );
}
