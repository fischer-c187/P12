export function Label ({ x, y, label, classname='chart', renderContent= d => d, ...props }) {
  return (
    <text 
      x={x}
      y={y}
      className={`${classname}__label-text`}
      {...props}
    >
      {renderContent(label)}
    </text>
  );
}