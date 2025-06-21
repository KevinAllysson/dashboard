import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

interface HeatmapData {
  id: string;
  data: Array<{
    x: string;
    y: number;
  }>;
}

interface HeatmapChartProps {
  data: HeatmapData[];
  title?: string;
  height?: number;
}

const HeatmapChart: React.FC<HeatmapChartProps> = ({ data, title, height = 300 }) => {
  return (
    <div style={{ height, width: '100%' }}>
      {title && (
        <h4 style={{ 
          margin: '0 0 1rem 0', 
          color: '#64ffda', 
          fontSize: '1rem',
          fontWeight: '600'
        }}>
          {title}
        </h4>
      )}
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
        forceSquare={true}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: 'Período',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Category',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 2]]
        }}
        animate={true}
        hoverTarget="cell"
        theme={{
          background: 'transparent',
          text: {
            fill: '#8892b0',
            fontSize: 12
          },
          axis: {
            domain: {
              line: {
                stroke: '#2d2d44',
                strokeWidth: 1
              }
            },
            ticks: {
              line: {
                stroke: '#2d2d44',
                strokeWidth: 1
              }
            }
          }
        }}
        colors={{
          type: 'sequential',
          scheme: 'blues'
        }}
        emptyColor="#2d2d44"
        borderColor="#2d2d44"
        enableLabels={true}
        label="value"
      />
    </div>
  );
};

export default HeatmapChart; 