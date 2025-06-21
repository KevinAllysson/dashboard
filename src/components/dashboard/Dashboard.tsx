import React, { useState } from 'react';
import { Dashboard as DashboardType, DashboardWidget } from '../../types/dashboard';
import Widget from '../widgets/Widget';
import DashboardLayout from '../../layouts/dashboard/DashboardLayout';

interface DashboardProps {
  dashboard: DashboardType;
  onWidgetEdit?: (widgetId: string) => void;
  onWidgetDelete?: (widgetId: string) => void;
  onWidgetAdd?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  dashboard,
  onWidgetEdit,
  onWidgetDelete,
  onWidgetAdd
}) => {
  const [widgets, setWidgets] = useState<DashboardWidget[]>(dashboard.widgets);

  const handleWidgetDelete = (widgetId: string) => {
    setWidgets(prev => prev.filter(widget => widget.id !== widgetId));
    onWidgetDelete?.(widgetId);
  };

  const handleWidgetEdit = (widgetId: string) => {
    onWidgetEdit?.(widgetId);
  };

  const renderWidgets = () => {
    if (dashboard.layout === 'grid') {
      return (
        <div className="dashboard-grid">
          {widgets.map((widget) => (
            <Widget
              key={widget.id}
              widget={widget}
              onEdit={handleWidgetEdit}
              onDelete={handleWidgetDelete}
            />
          ))}
        </div>
      );
    }

    // Flexible layout
    return (
      <div className="dashboard-flexible">
        {widgets.map((widget) => (
          <div
            key={widget.id}
            className="widget-container"
            style={{
              position: 'absolute',
              left: widget.position.x,
              top: widget.position.y,
              width: widget.position.width * 200,
              height: widget.position.height * 150,
            }}
          >
            <Widget
              widget={widget}
              onEdit={handleWidgetEdit}
              onDelete={handleWidgetDelete}
            />
          </div>
        ))}
      </div>
    );
  };

  const header = (
    <div className="dashboard-header-content">
      <div className="header-left">
        <h2>{dashboard.title}</h2>
        {dashboard.description && (
          <p className="dashboard-description">{dashboard.description}</p>
        )}
      </div>
      <div className="header-right">
        {onWidgetAdd && (
          <button onClick={onWidgetAdd} className="btn-add-widget">
            Add Widget
          </button>
        )}
      </div>
    </div>
  );

  return (
    <DashboardLayout
      title={dashboard.title}
      header={header}
    >
      <div className="dashboard-widgets-container">
        {renderWidgets()}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard; 