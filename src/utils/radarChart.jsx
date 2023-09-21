export const generatePoint = (length, angle, center, offset = Math.PI) => ({
  x: center.x + length * Math.sin(offset - angle),
  y: center.y + length * Math.cos(offset - angle),
});

// return object like that :
// { label: NameLabel, x: position x for label, y: position y for label }
export const generatePointForLabel = (
  data,
  angleScale,
  labelAccessor,
  width,
  center,
  offsetLabel = 10,
  length = 0.88
) => {
  const offsetByAngle = (angle) => {
    switch (angle) {
    case 0:
      return { x: 0, y: offsetLabel };
    case Math.PI:
      return { x: 0, y: -offsetLabel };
    default:
      return { x: 0, y: 0 };
    }
  };

  return data.map((item, vertex) => {
    const angle = angleScale(vertex);
    const label = labelAccessor(item);
    const point = generatePoint(length * (width / 2), angle, center);
    const offset = offsetByAngle(angle);
    return {
      label,
      x: point.x + offset.x,
      y: point.y + offset.y,
    };
  });
};

export const generatePointForLevel = (length, numberOfSide, angle, center) => {
  const points = Array.from({ length: numberOfSide }).map((_, vertex) => {
    const theta = angle(vertex);
    return generatePoint(length, theta, center);
  });
  return [...points, points[0]];
};

export const generateLinePoints = ({
  data,
  valueAccessor,
  lengthScale,
  angleScale,
  center,
  lineGenerator,
}) => {
  const points = data.map((value, index) => {
    const len = lengthScale(valueAccessor(value));
    const theta = angleScale(index);
    return generatePoint(len, theta, center);
  });
  return lineGenerator([...points, points[0]]);
};
