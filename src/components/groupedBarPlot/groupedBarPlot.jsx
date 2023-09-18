import { RoundedBar } from '../roundedBar/roundedBar';

export function GroupedBarPlot({
  data,
  dimensions,
  mainScale,
  mainAccessor,
  subScale,
  firstBarScale,
  firstBarAccessor,
  secondBarScale,
  secondBarAccessor,
  className='chart',
  ...props
}) {
  return data.map((value, index) => (
    <g
      transform={`translate(${mainScale(mainAccessor(value))}, 0)`}
      key={index}
    >
      <rect
        height={dimensions.boundedHeight}
        width={mainScale.bandwidth()}
        fill='grey'
        opacity={0.1}
        className={`${className}__rect-hover`}
        data-kg={firstBarAccessor(value)}
        data-calorie={secondBarAccessor(value)}
        onMouseOver={props.onMouseOver || undefined}
        onMouseOut={props.onMouseOut || undefined}
      />
      <RoundedBar
        x={subScale('kilogram')}
        y={firstBarScale(firstBarAccessor(value))}
        width={subScale.bandwidth()}
        height={
          dimensions.boundedHeight - firstBarScale(firstBarAccessor(value))
        }
        radius={dimensions.boundedWidth * 0.006}
        className={`${className}__first-bar`}
      />
      <RoundedBar
        x={subScale('calories')}
        y={secondBarScale(secondBarAccessor(value))}
        width={subScale.bandwidth()}
        height={
          dimensions.boundedHeight - secondBarScale(secondBarAccessor(value))
        }
        radius={dimensions.boundedWidth * 0.006}
        className={`${className}__second-bar`}
      />
    </g>
  ));
}
