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
