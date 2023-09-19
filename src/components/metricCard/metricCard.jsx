/**
 * A presentational component that displays a metric with its associated image and label.
 * 
 * @param {string} props.image - The URL of the image to be displayed.
 * @param {string|number} props.value - The value of the metric.
 * @param {string} props.label - The label or category of the metric.
 * 
 * @returns {ReactElement} The rendered MetricCard component.
 */
function MetricCard({ image, value, label}) {

  return (
    <div className='metric-card'>
      <img src={image} alt="logo metrics" aria-hidden='true'/>
      <div className="metric-card__text">
        <p className="metric-card__value">{value}</p>
        <p className="metric-card__category">{label}</p>
      </div>
    </div>
  );
}

export default MetricCard;