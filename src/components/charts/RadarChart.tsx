import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { ChartData } from '../../types/dashboard';

interface RadarChartProps {
  data: ChartData;
  title?: string;
  height?: number;
}

const RadarChart: React.FC<RadarChartProps> = ({ data, title, height = 300 }) => {
  const chartData = data.labels.map((label, index) => {
    const dataPoint: { [key: string]: string | number } = { axis: label };
    data.datasets.forEach(dataset => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  const keys = data.datasets.map(d => d.label);
  const colors = data.datasets.map(d => d.borderColor || '#64ffda');

  return (
    <div style={{ height, width: '100%' }}>
      {title && (
        <h4 style={{ 
          margin: '0 0 1rem 0', 
          color: '#64ffda', 
          fontSize: '1rem',
          fontWeight: '600',
          textAlign: 'center'
        }}>
          {title}
        </h4>
      )}
      <ResponsiveRadar
        data={chartData}
        keys={keys}
        indexBy="axis"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={8}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={colors.length > 0 ? colors : ['#64ffda']}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        legends={[
          {
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -50,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#8892b0',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#64ffda'
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
          grid: {
            line: {
              stroke: '#2d2d44',
              strokeWidth: 1
            }
          }
        }}
        sliceTooltip={({ index, data }) => (
          <div
            style={{
              background: '#16213e',
              padding: '12px 16px',
              border: '1px solid #2d2d44',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              color: '#e6e6e6'
            }}
          >
            <div style={{ color: '#64ffda', fontWeight: 'bold', marginBottom: '8px' }}>
              {index}
            </div>
            {data.map((d: any) => (
              <div key={d.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  background: d.color,
                  marginRight: '8px',
                  borderRadius: '2px'
                }}></span>
                <span>{d.id}:</span>
                <span style={{ fontWeight: 'bold', marginLeft: 'auto', paddingLeft: '10px' }}>{d.value}</span>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default RadarChart; 