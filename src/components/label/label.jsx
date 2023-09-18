/**
 * Renders a label element for a chart.
 * 
 * @param {number} x - The x-coordinate for the label.
 * @param {number} y - The y-coordinate for the label.
 * @param {string} label - The text content for the label.
 * @param {string} [className='chart'] - The base CSS class for styling the label.
 * @param {function} [renderContent=d => d] - A function to process the label content before rendering.
 * @param {...object} props - Additional props to spread onto the text element.
 * 
 * @returns {JSX.Element} A text element representing the label.
 */
export function Label ({ x, y, label, className='chart', renderContent= d => d, ...props }) {
  return (
    <text 
      x={x}
      y={y}
      className={`${className}__label-text`}
      {...props}
    >
      {renderContent(label)}
    </text>
  );
}