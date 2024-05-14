import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

interface ProgressData {
  date: Date;
  percentage: number;
}

interface ProgressChartProps {
  progressData?: ProgressData[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ progressData = [] }) => {
  // Ensure progressData is defined and not empty
  if (!progressData || progressData.length === 0) {
    return <div>No data available</div>;
  }

  // Map the dates to string format
  const formattedData = progressData.map(d => ({
    ...d,
    date: `${d.date.getDate()}/${d.date.getMonth() + 1}`
  }));

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={{ x: 10 }}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
    >
      <VictoryAxis
        tickFormat={(x) => x}
        style={{
          tickLabels: { fontSize: 10, padding: 5, fill: 'grey' }, // Change text color to white
          axis: { stroke: '' },
          ticks: { stroke: "none", size: 0 },
          grid: { stroke: 'none' } // Remove grid lines
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(t) => `${Math.round(t)}%`}
        style={{
          tickLabels: { fontSize: 10, padding: 5, fill: 'grey' }, // Change text color to white
          grid: { stroke: 'none' }, // Remove grid lines
          axis: { stroke: '' },
          ticks: { stroke: "none", size: 0 },
        }}
      />
      <VictoryBar
        data={formattedData}
        x="date"
        y="percentage"
        alignment="middle"
        barRatio={0.8}
        labels={({ datum }) => ` ${datum.percentage}`}
        barWidth={25}
        style={{
          data: { fill: "#5A92CB" },
          labels: { fill: 'white' } // Change labels color to white
        }}
      />
    </VictoryChart>
  );
};

export default ProgressChart;
