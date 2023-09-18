export function Tooltip({ interactionData, renderContent, style={}, className='tooltip' }) {
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
        ...style
      }}
      
    >
      {renderContent(interactionData)}
    </div>
  );
}
