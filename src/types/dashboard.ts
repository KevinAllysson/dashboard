export interface DashboardWidget {
  id: string;
  title: string;
  type: 'chart' | 'metric' | 'table' | 'list' | 'heatmap';
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  config: any;
  data?: any;
}

export interface Dashboard {
  id: string;
  title: string;
  description?: string;
  widgets: DashboardWidget[];
  layout: 'grid' | 'flexible';
  theme?: 'light' | 'dark';
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
  }[];
}

export interface MetricData {
  value: number;
  label: string;
  change?: number;
  changeType?: 'increase' | 'decrease';
  unit?: string;
}

export interface HeatmapData {
  id: string;
  data: Array<{
    x: string;
    y: number;
  }>;
} 