/**
 * Represents a primary SVG container for chart components.
 *
 * @param {Object} props.dimensions - Dimensions of the chart including width, height, and margins.
 * @param {string} [props.className='chart'] - The CSS class for styling the chart.
 * @returns {JSX.Element} An SVG element representing the chart container.
 */
export function Chart({ children, dimensions, className = 'chart', ...props }) {
  return (
    <svg
      className={`${className}__svg`}
      width={dimensions.width}
      height={dimensions.height}
      {...props}
    >
      <g
        className={`${className}__group`}
        transform={`translate(${dimensions.marginLeft}, ${dimensions.marginTop})`}
      >
        {children}
      </g>
    </svg>
  );
}
