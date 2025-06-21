import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  sidebar?: ReactNode;
  header?: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = 'Dashboard',
  sidebar,
  header
}) => {
  return (
    <div className="dashboard-layout">
      {header && (
        <header className="dashboard-header">
          {header}
        </header>
      )}
      
      <div className="dashboard-container">
        {sidebar && (
          <aside className="dashboard-sidebar">
            {sidebar}
          </aside>
        )}
        
        <main className="dashboard-main">
          <div className="dashboard-content">
            {title && (
              <div className="dashboard-title">
                <h1>{title}</h1>
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 