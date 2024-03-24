import React, { useState } from 'react'
import BasicLineChart from '../components/common/BasicLineChart'


// Mock data for demonstration
const xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const seriesData = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0];

const HomeScreen: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
      <BasicLineChart xAxisData={xAxisData} seriesData={seriesData} />
    </div>
  );
};

export default HomeScreen;
