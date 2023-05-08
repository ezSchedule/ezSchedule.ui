import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import './calendar.css'

const Calendar = () => {
    const [value, setValue] = useState(new Date());
    const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

    return (
        <>
            <div className='mainComponentCalendar'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        // mask='____/__/__'
                        variant='static'
                        orientation='portrait'
                        value={value}
                        
                        onChange={(newValue) => setValue(newValue)}
                        renderInput={(params) => {
                            <TextField {...params} />;
                        }}
                        renderDay={(day, _value, DayComponentProps) => {
                            const isSelected =
                                !DayComponentProps.outsideCurrentMonth &&
                                highlightedDays.indexOf(day.getDate()) >= 0;

                            return (
                                <Badge
                                    key={day.toString()}
                                    overlap='circular'
                                    badgeContent={isSelected}
                                >
                                    <PickersDay {...DayComponentProps} />
                                </Badge>
                            );
                        }}
                    />
                </LocalizationProvider>
                <div className='statusPayment'>
                        <button>Pago</button>
                        <button>Em Aberto</button>
                        <button>Em Andamento</button>
                </div>
            </div>
        </>
    );
};

export default Calendar;