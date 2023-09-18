import { animated, useSpring } from 'react-spring';
import { createRoundedRectPath } from '../../utils/roundedBar';
import { Path } from '../path/path';

/**
 * Displays an animated rounded bar.
 *
 * @param {number} x - The x position of the bar.
 * @param {number} y - The y position of the bar.
 * @param {number} width - The width of the bar.
 * @param {number} height - The height of the bar.
 * @param {number} radius - The radius for the rounded corners of the bar.
 * @param {object} props - Additional properties to pass to the Path component.
 * @returns {React.ElementType} Returns animated rounded bar.
 *
 */
export function RoundedBar({ x, y, width, height, radius, ...props }) {
  const fromPath = createRoundedRectPath(x, y + height, width, 0, radius);
  const toPath = createRoundedRectPath(x, y, width, height, radius);

  const spring = useSpring({
    to: { path: toPath },
    from: { path: fromPath },
    config: { duration: 400 },
  });

  const AnimatedPath = animated(Path);

  return <AnimatedPath points={spring.path} {...props} />;
}
