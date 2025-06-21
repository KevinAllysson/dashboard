import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ChartData } from '../../types/dashboard';

interface BarChartProps {
  data: ChartData;
  title?: string;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, title, height = 300 }) => {
  const chartData = data.labels.map((label, index) => {
    const item: any = { label };
    data.datasets.forEach(dataset => {
      item[dataset.label] = dataset.data[index];
    });
    return item;
  });

  const keys = data.datasets.map(dataset => dataset.label);

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
      <ResponsiveBar
        data={chartData}
        keys={keys}
        indexBy="label"
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#64ffda', '#0f3460', '#e94560', '#533483']}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Category',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Valor',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: -10,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
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
        role="application"
        ariaLabel="Bar chart"
        barAriaLabel={function(e) { return e.id + ": " + e.formattedValue + " in category: " + e.indexValue }}
        tooltip={({ id, value, color }) => (
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
              {id}
            </div>
            <div style={{ color: '#e6e6e6' }}>
              Valor: {value}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default BarChart; 