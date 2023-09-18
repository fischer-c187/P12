import { useComputeTicks } from '../../hook/useComputeTick';

/**
 * A component to render axes for charts.
 *
 * @component
 * @param {Object} scale - The D3 scale object.
 * @param {Array} ticksValue - The specific values to be used as ticks.
 * @param {number} boundsMain - The primary boundary value (width or height) used for positioning.
 * @param {boolean} [tick=true] - Indicates if ticks should be rendered.
 * @param {boolean} [line=true] - Indicates if the main axis line should be rendered.
 * @param {number} [ticksLength=6] - Length of each tick.
 * @param {string} [mainClass='axis'] - The main CSS class for styling.
 * @param {('horizontal'|'vertical')} [orientation='horizontal'] - The orientation of the axis.
 * @param {number} [labelXOffset=0] - The X offset for label positioning.
 * @param {Function} [mapLabelFunction=null] - An optional function to format the tick labels.
 * @returns {JSX.Element} Returns a SVG group element (`<g>`) representing the axis.
 */
export function Axis({
  scale,
  ticksValue,
  boundsMain,
  tick = true,
  line = true,
  ticksLength = 6,
  mainClass = 'axis',
  orientation = 'horizontal',
  labelXOffset = 0,
  mapLabelFunction = null,
}) {
  const ticks = useComputeTicks(scale, ticksValue);
  if (orientation !== 'horizontal' && orientation !== 'vertical') {
    throw new Error(`Unsupported orientation: ${orientation}`);
  }

  const isHorizontal = orientation === 'horizontal';
  const [start, end] = scale.range();

  const axisLine = isHorizontal
    ? `M ${start} 0 L ${end} 0`
    : `M 0 ${start} L 0 ${end}`;

  const verticalTransform = (offset, otherOffset = 0) =>
    `translate(0, ${offset + otherOffset})`;
  const horizontalTransform = (offset, otherOffset = 0) =>
    `translate(${offset + otherOffset}, 0)`;

  return (
    <g
      className={`${mainClass}__${orientation}-axis`}
      transform={
        isHorizontal
          ? verticalTransform(boundsMain)
          : horizontalTransform(boundsMain)
      }
    >
      {line && (
        <path
          d={axisLine}
          fill='none'
          stroke='currentColor'
          className={`${mainClass}__line`}
        />
      )}
      {ticks.map(({ value, offset }) => (
        <g
          key={value}
          // We reverse because if it's a horizontal axis and we want to move it downwards,
          // we indeed need a vertical transformation.
          transform={
            isHorizontal
              ? horizontalTransform(offset, labelXOffset)
              : verticalTransform(offset)
          }
          className={`${mainClass}__g-value-label`}
        >
          {tick && (
            <line
              {...(isHorizontal ? { y2: ticksLength } : { x2: ticksLength })}
              stroke='currentColor'
              className={`${mainClass}__ticks`}
            />
          )}
          <text className={`${mainClass}__text`}>
            {mapLabelFunction ? mapLabelFunction(value) : value}
          </text>
        </g>
      ))}
    </g>
  );
}
