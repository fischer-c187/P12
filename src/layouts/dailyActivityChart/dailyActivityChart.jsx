import { useContext, useRef, useState } from 'react';
import { useResponsiveDimensions } from '../../hook/useResponsiveDimensions';
import { Chart } from '../../components/chart/chart';
import { extent, scaleBand, scaleLinear } from 'd3';
import { Axis } from '../../components/axis/axis';
import { Tooltip } from '../../components/tooltip/tooltip';
import { GroupedBarPlot } from '../../components/groupedBarPlot/groupedBarPlot';
import { GridLine } from '../../components/gridLine/gridLine';
import { DataContext } from '../../context/dataContext';
import './dailyActivityChart.scss';
import DailyActivityLegend from '../dailyActivityLegend/dailyActivityLegend';

export function DailyAcitvityChart() {
  const [hovered, setHovered] = useState(null);
  const refWrapper = useRef(null);
  const dataState = useContext(DataContext);

  const dimensions = useResponsiveDimensions(
    {
      marginTop: 120,
      marginRight: 90,
      marginLeft: 45,
      marginBottom: 50,
    },
    refWrapper
  );

  if (!dataState.data) {
    return null;
  }

  const data = dataState.data.activity;

  const xAccessor = (d) => d.day.getDate();
  const kgAccessor = (d) => d.kilogram;
  const calAccessor = (d) => d.calories;

  const xDomain = data.map((activity) => xAccessor(activity));
  const kgDomain = extent(data, kgAccessor);
  kgDomain[0] -= 5;
  kgDomain[1] += 5;
  const calDomain = extent(data, calAccessor);
  calDomain[0] -= 100;
  calDomain[1] += 100;

  const xScale = scaleBand()
    .domain(xDomain)
    .range([0, dimensions.boundedWidth])
    .paddingOuter(0)
    .paddingInner(0.5)
    .round(true);

  const xSubScale = scaleBand()
    .domain(['kilogram', 'calories'])
    .range([0, xScale.bandwidth()])
    .paddingInner(0.5)
    .paddingOuter(1);

  const kgScale = scaleLinear()
    .domain(kgDomain)
    .range([dimensions.boundedHeight, 0]);

  const calScale = scaleLinear()
    .domain(calDomain)
    .range([dimensions.boundedHeight, 0]);

  // we add a middle value
  const ticksValue = [...kgDomain, Math.floor((kgDomain[0] + kgDomain[1]) / 2)];

  const handleMouseOver = (event) => {
    const rect = event.currentTarget;
    const boundingBox = rect.getBoundingClientRect();
    const marginLeft = refWrapper.current.offsetLeft;
    const yOffset = 30;

    setHovered({
      xPosition:
        boundingBox.x + xScale.bandwidth() - marginLeft + 50 >
        dimensions.boundedWidth
          ? boundingBox.x - marginLeft - xScale.bandwidth() / 2
          : boundingBox.x - marginLeft + xScale.bandwidth(),
      yPosition: dimensions.marginTop - yOffset,
      calorie: rect.dataset.calorie,
      kg: rect.dataset.kg,
    });
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  const renderTooltip = (data) => {
    return (
      <>
        <p className='daily-activity__tooltip-kg'>{data.kg}Kg</p>
        <p className='daily-activity__tooltip-calorie'>{data.calorie}Kcal</p>
      </>
    );
  };

  return (
    <div className='daily-activity' ref={refWrapper}>
      <Chart dimensions={dimensions} className='daily-activity'>
        <DailyActivityLegend
          dimensions={dimensions}
          className='daily-activity'
        />
        <Axis
          scale={xScale}
          ticksValue={data.map((value) => xAccessor(value))}
          boundsMain={dimensions.boundedHeight}
          tick={false}
          labelXOffset={xScale.bandwidth() / 2}
          mainClass='daily-activity-x-axis'
        />

        <Axis
          orientation='vertical'
          scale={kgScale}
          ticksValue={ticksValue}
          tick={false}
          line={false}
          boundsMain={dimensions.boundedWidth}
          mainClass='daily-activity-y-axis'
        />

        <GridLine
          ticksValue={ticksValue.slice(1)}
          scale={kgScale}
          width={dimensions.boundedWidth}
          className='daily-activity__grid-line'
        />

        <GroupedBarPlot
          data={data}
          dimensions={dimensions}
          mainScale={xScale}
          mainAccessor={xAccessor}
          subScale={xSubScale}
          firstBarScale={kgScale}
          firstBarAccessor={kgAccessor}
          secondBarScale={calScale}
          secondBarAccessor={calAccessor}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className='daily-activity'
        />
      </Chart>
      <Tooltip
        interactionData={hovered}
        renderContent={renderTooltip}
        className='daily-activity__tooltip'
      />
    </div>
  );
}
