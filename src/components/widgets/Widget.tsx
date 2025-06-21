import React from 'react';
import { DashboardWidget } from '../../types/dashboard';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import HeatmapChart from '../charts/HeatmapChart';
import RadarChart from '../charts/RadarChart';
import Table from '../ui/Table';
import { ColumnDef } from '@tanstack/react-table';

interface WidgetProps {
  widget: DashboardWidget;
  onEdit?: (widgetId: string) => void;
  onDelete?: (widgetId: string) => void;
}

const TableRenderer: React.FC<{ data: any[] }> = ({ data }) => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => {
      if (!data || data.length === 0) return [];
      const firstRow = data[0];
      return Object.keys(firstRow).map(key => ({
        accessorKey: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
        cell: (info: any) => info.getValue(),
      }));
    },
    [data]
  );

  if (!data || data.length === 0) {
    return <div className="chart-placeholder">No data to display</div>;
  }

  return <Table columns={columns} data={data} />;
};

const Widget: React.FC<WidgetProps> = ({ widget, onEdit, onDelete }) => {
  const renderWidgetContent = () => {
    switch (widget.type) {
      case 'metric':
        return (
          <div className="widget-metric">
            <div className="metric-value">
              {widget.data?.value || '0'}
              {widget.data?.unit && (
                <span className="metric-unit">{widget.data.unit}</span>
              )}
            </div>
          </div>
        );
      case 'chart':
        const chartType = widget.config?.chartType || 'line';
        const chartData = widget.data;
        
        if (!chartData) {
          return (
            <div className="chart-placeholder">
              Data not available
            </div>
          );
        }

        let chartHeight = 350;
        if (chartType === 'pie' || chartType === 'radar') {
          chartHeight = 400;
        }

        switch (chartType) {
          case 'line':
            return <LineChart data={chartData} height={chartHeight} />;
          case 'bar':
            return <BarChart data={chartData} height={chartHeight} />;
          case 'pie':
            return <PieChart data={chartData} height={chartHeight} />;
          case 'radar':
            return <RadarChart data={chartData} height={chartHeight} />;
          default:
            return <LineChart data={chartData} height={chartHeight} />;
        }
      case 'heatmap':
        return (
          <div className="widget-heatmap">
            <HeatmapChart 
              data={widget.data || []} 
              height={350} 
            />
          </div>
        );
      case 'table':
        return <TableRenderer data={widget.data} />;
      case 'list':
        return (
          <div className="widget-list">
            <div className="list-container">
              {widget.data && Array.isArray(widget.data) && (
                <ul className="data-list">
                  {widget.data.map((item: any, index: number) => (
                    <li key={index} className={`list-item ${item.type || ''}`}>
                      <div className="list-content">
                        <span className="list-action">{item.action}</span>
                        <span className="list-time">{item.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      default:
        return <div>Widget not supported</div>;
    }
  };

  return (
    <div 
      className={`dashboard-widget ${widget.type === 'metric' ? 'metric-widget' : ''}`}
      style={{
        gridColumn: `span ${widget.position.width}`,
        gridRow: `span ${widget.position.height}`,
      }}
    >
      <div className="widget-header">
        <h3>{widget.title}</h3>
      </div>
      <div className="widget-content">
        {renderWidgetContent()}
      </div>
    </div>
  );
};

export default Widget; 