/**
 * Generates grid lines for a chart based on the provided tick values.
 *
 * @param {Array<number>} props.ticksValue - Array of numerical tick values to render the grid lines.
 * @param {Function} props.scale - D3 scale function to position the grid lines correctly.
 * @param {number} props.width - The length of the grid lines.
 * @param {number} [props.dash=4] - The length of the dashes for the dotted grid line.
 * @returns {JSX.Element[]} An array of SVG line elements representing the grid lines.
 */
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
