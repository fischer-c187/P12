import { line } from 'd3';

export function Path({
  points,
  xAccessor = (d) => d.x,
  yAccessor = (d) => d.y,
  style = {},
  className = 'chart-path',
  ...props
}) {
  function generatePath(point) {
    const lineGenerator = line().x(xAccessor).y(yAccessor);

    return lineGenerator(point);
  }

  return (
    <path
      className={`${className}`}
      d={Array.isArray(points) ? generatePath(points) : points}
      style={style}
      {...props}
    />
  );
}
