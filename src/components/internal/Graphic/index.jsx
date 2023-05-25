import React from 'react';
import './graphic.css';
import Chart from 'react-google-charts';


const GraphicInside = ({totalGuestsByMonth, totalEventsByMonth}) => {

  const data = [
    ['Year', 'Eventos', 'Pessoas'],
    ['Janeiro', 15, 132],
    ['Fevereiro', 12, 60],
    ['Março', 11, 44],
    ['Abril', 0, 0],
    ['Maio', 19, 54],
    ['Junho', 21, 344]
  ];

  const options = {
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#fff', '#fff'],
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
          data={data}
          options={options}
          style={{borderRadius: '20px'}}
          
        />
      </div>
    </>
  );
}


export default GraphicInside;