import { RoundedBar } from '../roundedBar/roundedBar';

/**
 * Renders grouped bar plots with additional features like hover capabilities.
 *
 * @component
 * @param {Object} props - Props passed down to the GroupedBarPlot component.
 * @param {Array<Object>} props.data - The data to be plotted.
 * @param {Object} props.dimensions - Object containing various dimensions related to the chart.
 * @param {Function} props.mainScale - The main D3 scale for the x-axis.
 * @param {Function} props.mainAccessor - Function to access the main data point.
 * @param {Function} props.subScale - The D3 scale for the sub bars.
 * @param {Function} props.firstBarScale - The D3 scale for the first bar.
 * @param {Function} props.firstBarAccessor - Function to access the data point for the first bar.
 * @param {Function} props.secondBarScale - The D3 scale for the second bar.
 * @param {Function} props.secondBarAccessor - Function to access the data point for the second bar.
 * @param {string} [props.className='chart'] - Base CSS class to apply to the SVG elements.
 * @param {Function} [props.onMouseOver] - Function to handle mouse over events.
 * @param {Function} [props.onMouseOut] - Function to handle mouse out events.
 * @returns {JSX.Element[]} An array of SVG group elements representing the grouped bar plots.
 */
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
  className = 'chart',
  ...props
}) {
  const hoverHandlers = {};
  if (props.onMouseOver) {
    hoverHandlers.onMouseOver = props.onMouseOver;
  }
  if (props.onMouseOut) {
    hoverHandlers.onMouseOut = props.onMouseOut;
  }

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
        {...hoverHandlers}
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
