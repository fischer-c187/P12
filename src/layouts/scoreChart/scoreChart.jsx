import { arc } from 'd3';
import { useContext, useRef } from 'react';
import { useResponsiveDimensions } from '../../hook/useResponsiveDimensions';
import { Chart } from '../../components/chart/chart';
import './scoreChart.scss';
import { useSpring, animated } from 'react-spring';
import { Label } from '../../components/label/label';
import { ArcPlot } from '../../components/arcPlot/arcPlot';
import { DataContext } from '../../context/dataContext';

/**
 * ScoreChart component for displaying a user's score.
 * 
 * The component consists of a circular chart that fills up based on the score.
 * The score and labels are animated.
 * 
 * @returns {JSX.Element|null} Rendered ScoreChart component or null if no score is available.
 */
export function ScoreChart() {
  const refWrapper = useRef(null);
  const dataState = useContext(DataContext);

  const dimensions = useResponsiveDimensions(
    {
      marginTop: 30,
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 30,
    },
    refWrapper
  );

  const arcWidth = 12;
  const arcOuterRadius =
    Math.min(dimensions.boundedWidth, dimensions.boundedHeight) / 2;
  const arcInnerRadius = arcOuterRadius ? arcOuterRadius - arcWidth : 0;

  const arcGenerator = arc()
    .innerRadius(arcInnerRadius)
    .outerRadius(arcOuterRadius)
    .startAngle(0)
    .cornerRadius(9);

  const todayScore = dataState?.data?.user?.score * 100 || 0;

  const animatedProps = useSpring({
    to: { value: todayScore },
    from: { value: 0 },
    config: { duration: 400 },
  });

  if (!dataState.data) {
    return null;
  }

  const AnimatedLabel = animated(Label);
  const AnimatedArcPlot = animated(ArcPlot);

  const mainClass = 'score-chart';
  const labelFontSize = arcOuterRadius / 6;
  const valueFontSize = arcOuterRadius / 3;
  const valueYOffset = -(arcOuterRadius / 3.5);
  const labelYOffset = arcOuterRadius / 4;

  return (
    <div ref={refWrapper} className={mainClass}>
      <Chart dimensions={dimensions} className={mainClass}>
        <g
          transform={`translate(${dimensions.boundedWidth / 2}, ${
            dimensions.boundedHeight / 2
          })`}
          className={`${mainClass}__center-group`}
        >
          <circle
            r={arcInnerRadius}
            fill='#ddd'
            className={`${mainClass}__circle`}
          />
          <AnimatedArcPlot
            value={animatedProps.value.to((val) => val)}
            scale={arcGenerator}
            className={mainClass}
          />

          <AnimatedLabel
            x={0}
            y={valueYOffset}
            label={animatedProps.value.to((val) => `${val.toFixed(0)}%`)}
            fontSize={valueFontSize}
            className={`${mainClass}__label-text--value ${mainClass}`}
          />
          <Label
            x={0}
            y={0}
            label='de votre'
            fontSize={labelFontSize}
            className={mainClass}
          />
          <Label
            x={0}
            y={labelYOffset}
            label='objectif'
            fontSize={labelFontSize}
            className={mainClass}
          />
        </g>
      </Chart>
    </div>
  );
}
