/**
 * Renders a legend with an optional circle icon and a text description.
 * 
 * @param {string} text - The text description for the legend.
 * @param {boolean} [circle=true] - Determines if a circle icon should be rendered.
 * @param {string} [className='legend'] - The base CSS class for styling the legend.
 * @param {number} [xOffset=0] - The x-coordinate offset for the legend's position.
 * @param {number} [yOffset=0] - The y-coordinate offset for the legend's position.
 * 
 * @returns {JSX.Element} A group element containing the legend's icon and text.
 */
function Legend({
  text,
  circle = true,
  className = 'legend',
  xOffset = 0,
  yOffset = 0,
}) {
  return (
    <g
      className={`${className}__group-legend`}
      transform={`translate(${xOffset}, ${yOffset})`}
    >
      {circle && (
        <circle
          cx={0}
          cy={-5}
          r={5}
          className={`${className}__legend-circle`}
        />
      )}
      <text x={15} className={`${className}__legend-text`}>
        {text}
      </text>
    </g>
  );
}

export default Legend;
