import { animated, useSpring } from 'react-spring';
import { createRoundedRectPath } from '../../utils/roundedBar';
import { Path } from '../path/path';

export function RoundedBar({ x, y, width, height, radius, ...props }) {

  const fromPath = createRoundedRectPath(x, y+height, width, 0, radius);
  const toPath = createRoundedRectPath(x, y, width, height, radius);

  const spring = useSpring({
    to: { path: toPath},
    from: { path: fromPath},
    config: { duration: 400 }
  });
  
  const AnimatedPath = animated(Path);

  return (
    <AnimatedPath
      points={spring.path}
      {...props}
    />
  );
}
