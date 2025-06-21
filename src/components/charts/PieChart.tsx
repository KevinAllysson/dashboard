import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { ChartData } from '../../types/dashboard';

interface PieChartProps {
  data: ChartData;
  title?: string;
  height?: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, height = 300 }) => {
  const chartData = data.labels.map((label, index) => ({
    id: label,
    label: label,
    value: data.datasets[0].data[index],
    color: data.datasets[0].backgroundColor?.[index] || '#64ffda'
  }));

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
      <ResponsivePie
        data={chartData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={['#64ffda', '#0f3460', '#e94560', '#533483', '#16213e']}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#8892b0"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]]
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#8892b0',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
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
          }
        }}
        tooltip={({ datum }) => (
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
              {datum.label}
            </div>
            <div style={{ color: '#e6e6e6' }}>
              Valor: {datum.value}
            </div>
            <div style={{ color: '#8892b0', fontSize: '0.9rem' }}>
              {((datum.value / chartData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default PieChart; 