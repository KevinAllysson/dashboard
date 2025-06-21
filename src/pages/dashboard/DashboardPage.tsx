import React, { useState } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import { Dashboard as DashboardType, DashboardWidget } from '../../types/dashboard';

const DashboardPage: React.FC = () => {
  const [dashboard] = useState<DashboardType>({
    id: 'main-dashboard',
    title: 'Dashboard Principal',
    description: 'Dashboard interativo com gráficos Nivo em modo escuro',
    layout: 'grid',
    theme: 'dark',
    widgets: [
      {
        id: 'metric-1',
        type: 'metric',
        title: 'Total Sales',
        position: { x: 0, y: 0, width: 3, height: 1 },
        config: {},
        data: { value: 'R$ 125.000', unit: '' }
      },
      {
        id: 'metric-2',
        type: 'metric',
        title: 'Active Users',
        position: { x: 3, y: 0, width: 3, height: 1 },
        config: {},
        data: { value: '2.847', unit: '' }
      },
      {
        id: 'metric-3',
        type: 'metric',
        title: 'Conversion Rate',
        position: { x: 6, y: 0, width: 3, height: 1 },
        config: {},
        data: { value: '3.2', unit: '%' }
      },
      {
        id: 'metric-4',
        type: 'metric',
        title: 'Avg. Order Value',
        position: { x: 9, y: 0, width: 3, height: 1 },
        config: {},
        data: { value: 'R$ 89', unit: '' }
      },
      {
        id: 'chart-1',
        type: 'chart',
        title: 'Sales by Month',
        position: { x: 0, y: 1, width: 6, height: 3 },
        config: { chartType: 'line' },
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales',
            data: [12000, 15000, 18000, 14000, 22000, 25000],
            borderColor: '#64ffda'
          }]
        }
      },
      {
        id: 'chart-2',
        type: 'chart',
        title: 'Product Distribution',
        position: { x: 6, y: 1, width: 6, height: 3 },
        config: { chartType: 'pie' },
        data: {
          labels: ['Product A', 'Product B', 'Product C', 'Product D'],
          datasets: [{
            label: 'Sales',
            data: [35, 25, 20, 20],
            backgroundColor: ['#64ffda', '#0f3460', '#e94560', '#533483']
          }]
        }
      },
      {
        id: 'chart-3',
        type: 'chart',
        title: 'Performance by Region',
        position: { x: 0, y: 4, width: 6, height: 3 },
        config: { chartType: 'bar' },
        data: {
          labels: ['North', 'South', 'East', 'West'],
          datasets: [{
            label: 'Sales',
            data: [45000, 38000, 52000, 41000],
            backgroundColor: ['#64ffda', '#0f3460', '#e94560', '#533483']
          }]
        }
      },
      {
        id: 'chart-4',
        type: 'chart',
        title: 'Performance Metrics',
        position: { x: 6, y: 4, width: 6, height: 3 },
        config: { chartType: 'radar' },
        data: {
          labels: ['Sales', 'Marketing', 'Support', 'Development', 'Finance'],
          datasets: [
            {
              label: 'Current',
              data: [85, 78, 92, 88, 95],
              borderColor: '#64ffda'
            },
            {
              label: 'Target',
              data: [90, 85, 88, 92, 87],
              borderColor: '#e94560'
            }
          ]
        }
      },
      {
        id: 'table-1',
        type: 'table',
        title: 'Top Products',
        position: { x: 0, y: 7, width: 6, height: 3 },
        config: {},
        data: [
          { name: 'Product A', sales: 5000, growth: '+12%', revenue: 'R$ 25.000' },
          { name: 'Product B', sales: 4200, growth: '+8%', revenue: 'R$ 21.000' },
          { name: 'Product C', sales: 3800, growth: '+15%', revenue: 'R$ 19.000' },
          { name: 'Product D', sales: 3200, growth: '+5%', revenue: 'R$ 16.000' }
        ]
      },
      {
        id: 'list-1',
        title: 'Recent Activities',
        type: 'list',
        position: { x: 6, y: 7, width: 6, height: 3 },
        config: {},
        data: [
          { action: 'New sale completed', time: '2 min ago', type: 'success' },
          { action: 'User registered', time: '5 min ago', type: 'info' },
          { action: 'Payment processed', time: '10 min ago', type: 'success' },
          { action: 'System error', time: '15 min ago', type: 'error' },
          { action: 'Backup completed', time: '20 min ago', type: 'success' }
        ]
      }
    ]
  });

  const handleWidgetEdit = (widgetId: string) => {
    console.log('Edit widget:', widgetId);
    // Implementar lógica de edição
  };

  const handleWidgetDelete = (widgetId: string) => {
    console.log('Delete widget:', widgetId);
    // Implementar lógica de exclusão
  };

  const handleWidgetAdd = () => {
    console.log('Add new widget');
    // Implementar lógica de adição
  };

  return (
    <div className="dashboard-page">
      <Dashboard
        dashboard={dashboard}
        onWidgetEdit={handleWidgetEdit}
        onWidgetDelete={handleWidgetDelete}
        onWidgetAdd={handleWidgetAdd}
      />
    </div>
  );
};

export default DashboardPage; 