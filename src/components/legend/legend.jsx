function Legend({ text, circle=true, className='legend', xOffset=0, yOffset=0 }) {
  return (
    <g className={`${className}__group-legend`} transform={`translate(${xOffset}, ${yOffset})`}>
      {circle && <circle cx={0} cy={-5} r={5} className={`${className}__legend-circle`}/>}
      <text x={15} className={`${className}__legend-text`}>{text}</text>
    </g>
  );
}

export default Legend;