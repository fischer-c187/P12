import { generatePointForLabel } from '../../utils/radarChart';
import { Label } from '../label/label';

/**
 * RadarLabels component is used for rendering the labels on a Radar Chart.
 * @param {Object[]} data - The data array for labels
 * @param {Function} labelAccessor - Accessor function to obtain label text from data
 * @param {Function} angleScale - Scale function for angle
 * @param {number} width - The width of the radar chart
 * @param {Object} center - Center point of the radar chart {x, y}
 * @param {string} [className='chart'] - The CSS class for styling
 * @param {number} [length=0.80] - The length for generating label point
 * @returns {JSX.Element} A group element containing the rendered labels.
 */
export function RadarLabels({ data, labelAccessor, angleScale, width, center, className='chart', length=0.80}) {
  const labelsPoint = generatePointForLabel(data, angleScale, labelAccessor, width, center, 10, length);

  return (
    <g className={`${className}__label-group`}>
      {labelsPoint.map((label) => (
        <Label x={label.x} y={label.y} label={label.label} key={label.label} className={className} />
      ))}
    </g>
  );
}
