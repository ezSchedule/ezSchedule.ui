import React from 'react';
import './graphic.css';
import Chart from 'react-google-charts';

const GraphicInside = ({ data }) => {
  const chartData = [
    ['Mês', 'Eventos', 'Pessoas'],
    ...data.map(item => [item.month, item.totalEvents, item.totalGuests]),
  ];

  const options = {
    curveType: 'function',
    legend: { position: 'bottom', textStyle: { fontSize: 10 } },
    colors: ['#0A0C10', '#fff'],
    backgroundColor: 'transparent',
    is3D: false,
    fontName: 'Arial',
    vAxis: {
      gridlines: {
        count: 0
      }
    },
    hAxis: {
      textStyle: { color: '#FFFFFF' }, titleTextStyle: { color: '#ffffff' }, minorGridlines: { count: 0 }
    }
  };

  return (
    <>
      <div className='mainGraphicInside'>
        <Chart
          chartType="LineChart"
          width='105%'
          data={chartData}
          options={options}
        />
      </div>
    </>
  );
}


export default GraphicInside;
