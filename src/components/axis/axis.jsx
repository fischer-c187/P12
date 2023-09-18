import { useComputeTicks } from '../../hook/useComputeTick';

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
  mapLabelFunction = null
}) {
  const ticks = useComputeTicks(scale, ticksValue);
  if (orientation !== 'horizontal' && orientation !== 'vertical') {
    throw new Error(`Unsupported orientation: ${orientation}`);
  }

  const isHorizontal = orientation === 'horizontal';
  const axisLine = isHorizontal
    ? ['M', scale.range()[0], 0, 'L', scale.range()[1], 0].join(' ')
    : ['M', 0, scale.range()[0], 'L', 0, scale.range()[1]].join(' ');

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
          // on inverse car si c'est un axe horizontal et qu'on veut le deplacer vers le bas c'est bien
          // une transformation vertical qu'il nous faut.
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
          <text
            className={`${mainClass}__text`}
          >
            {mapLabelFunction ? mapLabelFunction(value) : value}
          </text>
        </g>
      ))}
    </g>
  );
}
