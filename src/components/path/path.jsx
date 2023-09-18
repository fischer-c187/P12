import { line } from 'd3';
import { useMemo } from 'react';

/**
 * Renders an SVG path element using an array of points or a predefined path string.
 * 
 * @param {(Array|String)} points - An array of point objects or a predefined path string.
 * @param {Function} [xAccessor=(d) => d.x] - Accessor function for the x-coordinate of a point.
 * @param {Function} [yAccessor=(d) => d.y] - Accessor function for the y-coordinate of a point.
 * @param {Object} [style={}] - Inline styles for the path.
 * @param {string} [className='chart-path'] - CSS class name for the path element.
 * @param {...Object} props - Additional props to be passed to the path element.
 * 
 * @returns {JSX.Element} An SVG path element.
 */
export function Path({
  points,
  xAccessor = (d) => d.x,
  yAccessor = (d) => d.y,
  style = {},
  className = 'chart-path',
  ...props
}) {
  if (Array.isArray(points)) {
    points.forEach((point) => {
      if (!Object.prototype.hasOwnProperty.call(point, 'x') || !Object.prototype.hasOwnProperty.call(point, 'y')) {
        throw new Error('Every point need attributs "x" and "y"');
      }
    });
  }
  const lineGenerator = useMemo(() => {
    return line().x(xAccessor).y(yAccessor);
  }, [xAccessor, yAccessor]);
  
  function generatePath(point) {
    return lineGenerator(point);
  }

  return (
    <path
      className={`${className}`}
      d={Array.isArray(points) ? generatePath(points) : points}
      style={style}
      {...props}
    />
  );
}
