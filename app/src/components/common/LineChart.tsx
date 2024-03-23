import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

interface BasicLineChartProps {
  xAxisData: number[];
  seriesData: number[];
  width?: number; // optional, provide a default value if not passed
  height?: number; // optional, provide a default value if not passed
}

export default function BasicLineChart({
  xAxisData,
  seriesData,
  width = 500, // default width if not specified
  height = 300, // default height if not specified
}: BasicLineChartProps) {
  return (
    <LineChart
      xAxis={[{ data: xAxisData }]}
      series={[{ data: seriesData }]}
      width={width}
      height={height}
    />
  );
}
