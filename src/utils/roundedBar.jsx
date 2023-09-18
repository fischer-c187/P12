export function createRoundedRectPath(x, y, width, height, radius) {
  return `
        M ${x}, ${y + height} 
        L ${x}, ${y + radius} 
        a ${radius},${radius} 0 0,1 ${radius},-${radius} 
        h ${width - 2 * radius} 
        a ${radius},${radius} 0 0,1 ${radius},${radius} 
        L ${x + width}, ${y + height}
        z
    `;
}