import { useSpring, animated } from 'react-spring';

export function CursorToooltip({
  interactionData,
  dimensions,
  className = 'cursor__tooltip',
}) {
  const springProps = useSpring({
    to: {
      x: interactionData ? interactionData.xPosition : dimensions.width,
      y: interactionData
        ? interactionData.yScale(interactionData.y) + dimensions.marginTop
        : 0,
    },
    from: {
      x: dimensions.width,
      y: 0,
    },
    config: {
      duration: 100,
    },
  });

  if (!interactionData) {
    return null;
  }

  return (
    <g
      className={className}
      transform={`translate(0, -${dimensions.marginTop})`}
      style={{ position: 'relative' }}
    >
      <animated.rect
        x={springProps.x}
        width={springProps.x.to((value) => dimensions.width - value)}
        y={0}
        height={dimensions.height}
        fill='black'
        className={`${className}__shade`}
        style={{
          pointerEvents: 'none',
        }}
      />
      <animated.circle
        cx={springProps.x}
        cy={springProps.y}
        r={4}
        className={`${className}__indicator`}
      />
    </g>
  );
}
