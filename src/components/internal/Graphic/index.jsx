import React from 'react';
import './graphic.css';
import Chart from 'react-google-charts';

const GraphicInside = ({data}) => {

  const chartData = [
    ['Year', 'Eventos', 'Pessoas'],
    ...data.map(item => [item.month, item.totalEvents, item.totalGuests]),
  ];

  const options = {
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#0A0C10', '#fff'],
    backgroundColor: 'transparent',
    is3D: true,
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
          width="80vw"
          height="45vh"
          data={chartData}
          options={options}
          style={{borderRadius: '20px'}}
          
        />
      </div>
    </>
  );
}


export default GraphicInside;