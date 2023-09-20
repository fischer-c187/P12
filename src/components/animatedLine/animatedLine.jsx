import { curveBumpX, line } from 'd3';
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

export function AnimatedLine({ xScale, xAccessor, yScale, yAccessor, data, className='animated-line' }) {
  const linePath = useRef(null);
  const [length, setLength] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (linePath.current) {
      setLength(linePath.current.getTotalLength());
    }
  }, [linePath.current, data]);

  const lineGenerator = line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)))
    .curve(curveBumpX);

  const path = lineGenerator(data);

  const animatedProps = useSpring({
    to: { dashoffset: 0, d: path},
    from: {
      dashoffset: length ? length : 0
    },
    config: { duration: initialRender ? 600 : 300 },
    onRest: () => setInitialRender(false) 
  });

  return (
    <animated.path
      d={initialRender ? path : animatedProps.d}
      stroke={'currentColor'}
      fill='none'
      ref={linePath}
      strokeDasharray={initialRender && length ? length : 0}
      strokeDashoffset={animatedProps.dashoffset}
      strokeWidth={2}
      className={`${className}__path`}
    />
  );
}
