import { useContext, useRef, useState } from 'react';
import { bisector, extent, max, scaleLinear } from 'd3';
import { useResponsiveDimensions } from '../../hook/useResponsiveDimensions';
import { Chart } from '../../components/chart/chart';
import './averageSessionChart.scss';
import { Axis } from '../../components/axis/axis';
import { CursorToooltip } from '../../components/cursorTooltip/cursorTooltip';
import { Tooltip } from '../../components/tooltip/tooltip';
import { AnimatedLine } from '../../components/animatedLine/animatedLine';
import { mapDayToInitial } from '../../utils/lineChart';
import { DataContext } from '../../context/dataContext';
import ChartTitle from '../../components/chartTitle/chartTitle';

/**
 * Component that visualizes the average session length over a period.
 *
 */
export function AverageSessionChart() { 
  const [interactionData, setInteractionData] = useState(null);
  const refWrapper = useRef(null);
  const dataState = useContext(DataContext);

  const dimensions = useResponsiveDimensions(
    {
      marginTop: 100,
      marginRight: 0,
      marginLeft: 0,
      marginBottom: 50,
    },
    refWrapper
  );

  if (!dataState.data) {
    return null;
  }

  const data = dataState.data.averageSessions;


  const lastElementIndex = data.length-1;
  // on duplique la première et la dernière entrée du tableau pour pouvoir 
  // étendre la ligne d'un bout à l'autre du graph
  const extendedData = [
    { day: data[0].day - 1, sessionLength: data[0].sessionLength },
    ...data,
    { day: data[lastElementIndex].day + 1, sessionLength: data[lastElementIndex].sessionLength },
  ];

  const dayAccessor = (d) => d.day;
  const sessionAccessor = (d) => d.sessionLength;

  const xDomain = extent(extendedData.map((value) => dayAccessor(value)));
  const yDomain = [0, max(data.map((value) => sessionAccessor(value)))];
  const xRange = [0, dimensions.width];
  const yRange = [dimensions.boundedHeight, 0];

  const xScale = scaleLinear(xDomain, xRange);
  const yScale = scaleLinear(yDomain, yRange);

  function handleMouseMove(event) {
    const svgElement = event.target.closest('.line-chart__svg');

    if (!svgElement) {
      return;
    }

    const dimensionsSvg = svgElement.getBoundingClientRect();
    const x = event.clientX - dimensionsSvg.left;
    const bisect = bisector((d) => d.day).center;
    const index = bisect(data, xScale.invert(x));

    if (!data[index]) {
      return;
    }

    setInteractionData({
      xPosition: xScale(dayAccessor(data[index])),
      yPosition:
        yScale(sessionAccessor(data[index])) + dimensions.marginTop / 1.5,
      x: xScale(dayAccessor(data[index])),
      y: sessionAccessor(data[index]),
      yScale: yScale,
    });
  }

  function handleMouseOut() {
    setInteractionData(null);
  }

  function renderTooltip(interactionData) {
    return <p>{`${interactionData.y} min`}</p>;
  }

  return (
    <div
      className='line-chart'
      ref={refWrapper}
      style={{ position: 'relative' }}
    >
      <ChartTitle text='Durée moyenne des sessions' className='line-chart'/>
      <Chart
        dimensions={dimensions}
        className='line-chart'
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        <g transform={`translate(-${dimensions.marginLeft}, 0)`}>
          <Axis
            scale={xScale}
            ticksValue={data.map((d) => dayAccessor(d))}
            boundsMain={dimensions.boundedHeight + 15}
            line={false}
            tick={false}
            mapLabelFunction={mapDayToInitial}
            mainClass='line-chart'
          />
          <AnimatedLine
            xScale={xScale}
            xAccessor={dayAccessor}
            yScale={yScale}
            yAccessor={sessionAccessor}
            data={extendedData}
            className='line-chart'
          />
          <CursorToooltip
            interactionData={interactionData}
            dimensions={dimensions}
            className='line-chart'
          />
        </g>
      </Chart>
      <Tooltip
        interactionData={interactionData}
        renderContent={renderTooltip}
        style={{ PointerEvent: 'none' }}
        className='line-chart__tooltip'
      />
    </div>
  );
}
