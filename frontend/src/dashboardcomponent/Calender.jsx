import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { styled } from '@mui/material/styles';
import { DateRangePickerDay as MuiDateRangePickerDay } from '@mui/x-date-pickers-pro/DateRangePickerDay';
import '../styles/dashboard.css'
import React from 'react';

const DateRangePickerDay = styled(MuiDateRangePickerDay)(
    ({
        theme,
        isHighlighting,
        isStartOfHighlighting,
        isEndOfHighlighting,
        outsideCurrentMonth,
    }) => ({
        ...(!outsideCurrentMonth &&
            isHighlighting && {
                borderRadius: 0,
                background: 'rgba(0, 0, 0, 0.08)',
                color: theme.palette.common.white,
                '&:hover, &:focus': {
                    background: 'linear-gradient(135deg, rgba(164,9,117,1) 15%, rgba(139,0,255,1) 71%, rgba(39,6,196,1) 90%)',
                },
            }),
        ...(isStartOfHighlighting && {
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
        }),
        ...(isEndOfHighlighting && {
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
        }),
        ...(theme && {
            color: theme.palette.text.primary,
            
           
        }),
        // Add the following code to change the default border color to green
      
    }),
);


export default function Calender() {
    return (
            <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DateRangeCalendar']}  >
                <DemoItem>
                    <DateRangeCalendar
                        calendars={1}
                       
                        //value={value}
                        //onChange={(newValue) => setValue(newValue)}
                        slots={{ day: DateRangePickerDay }}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
       
       
    );
}