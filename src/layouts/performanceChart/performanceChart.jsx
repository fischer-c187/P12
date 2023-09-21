import { useContext, useMemo, useRef } from 'react';
import { useResponsiveDimensions } from '../../hook/useResponsiveDimensions';
import { Chart } from '../../components/chart/chart';
import { scaleLinear } from 'd3';
import './performanceChart.scss';
import { generatePointForLevel } from '../../utils/radarChart';
import { RadarLabels } from '../../components/radarLabels/radarLabels';
import { Path } from '../../components/path/path';
import { RadarPlot } from '../../components/radarPlot/radarPlot';
import { RadarLevels } from '../../components/radarLevels/radarLevels';
import { DataContext } from '../../context/dataContext';

/**
 * PerformanceChart Component
 *
 * A React component for rendering a radar chart to display performance metrics.
 *
 * @param {Object} props The properties for the PerformanceChart component.
 * @param {number} [props.numberOfSide=6] The number of sides in the radar chart.
 * @param {number} [props.numberOfLevel=4] The number of levels to display in the radar chart.
 * @param {number} [props.chartSize=0.6] The size of the radar chart relative to its container.
 * 
 * @returns {React.Element|null} Returns the PerformanceChart component or null if data is missing.
 *
 */
export function PerformanceChart({
  numberOfSide = 6,
  numberOfLevel = 4,
  chartSize = 0.6,
}) {
  const refWrapper = useRef(null);
  const dataState = useContext(DataContext);

  const dimensions = useResponsiveDimensions(
    {
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      marginBottom: 0,
    },
    refWrapper
  );

  const chartConfig = useMemo(() => {
    return {
      polyangle: scaleLinear()
        .domain([0, numberOfSide])
        .range([0, 2 * Math.PI]),
      r_0:
        (chartSize *
          Math.min(dimensions.boundedHeight, dimensions.boundedWidth)) /
        2,
      center: {
        x: dimensions.boundedWidth / 2,
        y: dimensions.boundedHeight / 2,
      },
    };
  }, [dimensions, numberOfSide, chartSize]);

  if (!dataState?.data?.performance) {
    return null;
  }

  const data = dataState.data.performance;
  const lengthScale = scaleLinear()
    .domain([0, 250])
    .range([0, chartConfig.r_0]);

  // generates the small central level
  const length = lengthScale(30);
  let points = generatePointForLevel(
    length,
    numberOfSide,
    chartConfig.polyangle,
    chartConfig.center
  );

  const mainClass = 'performance-chart';

  return (
    <div className={mainClass} ref={refWrapper}>
      <Chart dimensions={dimensions}>
        <Path points={points} className={`${mainClass}__levels-path`} />
        <RadarLevels
          numberLevel={numberOfLevel}
          numberSide={numberOfSide}
          radius={chartConfig.r_0}
          angle={chartConfig.polyangle}
          center={chartConfig.center}
          className={mainClass}
        />
        <RadarLabels
          data={data}
          labelAccessor={(d) => d.kind}
          angleScale={chartConfig.polyangle}
          width={Math.min(dimensions.boundedHeight, dimensions.boundedWidth)}
          center={chartConfig.center}
          className={mainClass}
        />
        <RadarPlot
          data={data}
          valueAccessor={(d) => d.value}
          lengthScale={lengthScale}
          angleScale={chartConfig.polyangle}
          center={chartConfig.center}
          className={mainClass}
        />
      </Chart>
    </div>
  );
}
