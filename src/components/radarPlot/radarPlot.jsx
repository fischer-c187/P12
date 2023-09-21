import { generateLinePoints } from '../../utils/radarChart';
import { useSpring, animated } from 'react-spring';
import { line } from 'd3';
import { useRef } from 'react';
import { Path } from '../path/path';

/**
 * Component for rendering the radar plot based on the provided data.
 * 
 * @param {Object[]} data - The data to be plotted.
 * @param {Function} valueAccessor - Function to access the value from data.
 * @param {Function} lengthScale - Scale function for length.
 * @param {Function} angleScale - Scale function for angle.
 * @param {Object} center - Coordinates of the center point.
 * @param {string} [className='chart'] - Optional custom class name for styling.
 * 
 * @returns {ReactElement} Rendered radar plot component.
 */
export function RadarPlot({
  data,
  valueAccessor,
  lengthScale,
  angleScale,
  center,
  className = 'chart',
}) {
  const isFirstRender = useRef(true);
  const lineGenerator = line()
    .x((d) => d.x)
    .y((d) => d.y);

  const initialPoints = generateLinePoints({
    data,
    valueAccessor: () => 0,
    lengthScale: () => 0,
    angleScale,
    center,
    lineGenerator,
  });
  const finalPoints = generateLinePoints({
    data,
    valueAccessor,
    lengthScale,
    angleScale,
    center,
    lineGenerator,
  });
  const spring = useSpring({
    to: { path: finalPoints },
    from: { path: initialPoints },
    config: { duration: isFirstRender.current ? 400 : 200 },
    onRest: () => {
      isFirstRender.current = false;
    },
  });

  if (!data) {
    return null;
  }

  // wraps our component to animate it
  const AnimatedPath = animated(Path);

  return (
    <g className={`${className}__plot-group`}>
      <AnimatedPath
        points={spring.path}
        className={`${className}__plot-path`}
      />
    </g>
  );
}
