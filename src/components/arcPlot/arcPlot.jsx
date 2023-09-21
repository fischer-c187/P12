import { Path } from '../path/path';

/**
 * ArcPlot component for rendering an arc.
 *
 * @param {number} props.value - The value of the arc to be rendered, as a percentage of the circle.
 * @param {Function} props.scale - D3 scale for generating the arc.
 * @param {Object} [props.style={}] - Optional styles to apply to the arc.
 * @param {string} [props.className='chart'] - Optional className for the component.
 * @param {...Object} [props.additionalProps] - Additional props to pass down to the Path component.
 * @returns {JSX.Element} The ArcPlot component.
 */
export function ArcPlot({ value, scale, style={}, className='chart', ...props }) {
  const tau = 2 * Math.PI;

  return (
    <Path
      points={scale({ endAngle: -(value / 100) * tau })}
      style={style}
      className={`${className}__arc-plot`}
      {...props}
    />
  );
}
