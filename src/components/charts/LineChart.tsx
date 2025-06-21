import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ChartData } from '../../types/dashboard';

interface LineChartProps {
  data: ChartData;
  title?: string;
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, title, height = 300 }) => {
  const chartData = data.datasets.map(dataset => ({
    id: dataset.label,
    color: dataset.borderColor || '#64ffda',
    data: data.labels.map((label, index) => ({
      x: label,
      y: dataset.data[index]
    }))
  }));

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
      <ResponsiveLine
        data={chartData}
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ 
          type: 'linear', 
          min: 'auto', 
          max: 'auto', 
          stacked: false 
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Período',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Valor',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -10,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
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
          },
          grid: {
            line: {
              stroke: '#2d2d44',
              strokeWidth: 1
            }
          },
          legends: {
            text: {
              fill: '#8892b0'
            }
          }
        }}
        colors={['#64ffda', '#0f3460', '#e94560', '#533483']}
        lineWidth={3}
        curve="monotoneX"
        enableArea={true}
        areaOpacity={0.1}
        enableGridX={false}
        enableGridY={true}
        gridYValues={5}
        enablePoints={true}
        enablePointLabel={false}
        crosshairType="cross"
        tooltip={({ point }) => (
          <div
            style={{
              background: '#1a1a2e',
              padding: '12px',
              border: '1px solid #2d2d44',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            <div style={{ color: '#64ffda', fontWeight: 'bold' }}>
              {point.seriesId}
            </div>
            <div style={{ color: '#e6e6e6' }}>
              {point.data.x}: {point.data.y}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default LineChart; 