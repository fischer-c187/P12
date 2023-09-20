import { useSpring, animated } from 'react-spring';

/**
 * Renders an animated tooltip based on interaction data.
 * 
 * @param {Object} props.interactionData - The data related to the cursor's current interaction.
 * @param {Object} props.dimensions - The dimensions of the tooltip's container.
 * @param {string} [props.className='cursor__tooltip'] - Base CSS class for styling the tooltip.
 * @returns {React.Element|null} Animated cursor tooltip or null if there's no interaction data.
 */
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
