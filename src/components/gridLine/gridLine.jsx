export function GridLine({ ticksValue, scale, width, dash = 4, ...props }) {
  return ticksValue.map((tick) => (
    <line
      x2={width}
      y1={scale(tick)}
      y2={scale(tick)}
      key={tick}
      strokeDasharray={dash}
      {...props}
    />
  ));
}
