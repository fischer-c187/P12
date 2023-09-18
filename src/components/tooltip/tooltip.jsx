/**
 * Displays a tooltip based on interaction data.
 * 
 * @param {Object} interactionData - Data related to the interaction, containing x and y positions.
 * @param {Function} renderContent - Function to render the content of the tooltip based on interaction data.
 * @param {Object} [style={}] - Additional inline styles for the tooltip.
 * @param {string} [className='tooltip'] - CSS class for the tooltip.
 * @returns {React.ElementType|null} Returns the tooltip element or null if no interaction data.
 * 
 */
export function Tooltip({
  interactionData,
  renderContent,
  style = {},
  className = 'tooltip',
}) {
  if (!interactionData) {
    return null;
  }

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        left: `${interactionData.xPosition}px`,
        top: `${interactionData.yPosition}px`,
        marginLeft: '15px',
        ...style,
      }}
    >
      {renderContent(interactionData)}
    </div>
  );
}
