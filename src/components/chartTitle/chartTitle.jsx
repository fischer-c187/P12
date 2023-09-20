/**
 * Renders a title for a chart.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.text - The text content of the title.
 * @param {string} [props.className='chart'] - The base CSS class for styling the title.
 *
 * @returns {React.Element}
 */
function ChartTitle({ text, className = 'chart-title' }) {
  return <p className={`${className}__title`}>{text}</p>;
}

export default ChartTitle;
