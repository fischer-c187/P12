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