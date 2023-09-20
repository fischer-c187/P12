import { curveBumpX, line } from 'd3';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

/**
 * Renders an animated line using d3 and react-spring.
 * 
 * @param {Function} props.xScale - The x-scale function for the line.
 * @param {Function} props.xAccessor - The x-accessor function for the line data.
 * @param {Function} props.yScale - The y-scale function for the line.
 * @param {Function} props.yAccessor - The y-accessor function for the line data.
 * @param {Array} props.data - The data for the line.
 * @param {string} [props.className='animated-line'] - The CSS class for the line.
 * @param {string} [props.strokeColor='currentColor'] - The color for the line.
 * 
 * @returns {React.Element} The animated line element.
 */
export function AnimatedLine({
  xScale,
  xAccessor,
  yScale,
  yAccessor,
  data,
  className = 'animated-line',
}) {
  const linePath = useRef(null);
  const [length, setLength] = useState(null);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (linePath.current) {
      setLength(linePath.current.getTotalLength());
    }
  }, [linePath.current, data]);

  const lineGenerator = useMemo(() => {
    return line()
      .x((d) => xScale(xAccessor(d)))
      .y((d) => yScale(yAccessor(d)))
      .curve(curveBumpX);
  }, [xScale, xAccessor, yScale, yAccessor]);

  const path = lineGenerator(data);

  const animatedProps = useSpring({
    to: { dashoffset: 0, d: path },
    from: {
      dashoffset: length ? length : 0,
    },
    config: { duration: initialRender ? 600 : 300 },
    onRest: () => setInitialRender(false),
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
