import React, { useEffect, useState } from 'react';
import { BoxDaysGrid, BoxMonthYear, CalendarWidgetBox, NumberDay, TitleMonth, TitleYear } from './ModuleCalendarStyles';

const CalendarWidget = () => {

  const [currentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = Array.from({length: daysInMonth}, (_, i) => {
      const date = new Date(year, month, i + 1);
      return {
        date,
        isPast: date < new Date(),
        isToday: date.toDateString() === new Date().toDateString(),
      }
    });
    setDays(daysArray);
  },[currentDate]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  return (
    <CalendarWidgetBox>
      <BoxMonthYear>
        <TitleMonth>{monthNames[currentDate.getMonth()]}</TitleMonth>
        <TitleYear>{currentDate.getFullYear()}</TitleYear>
      </BoxMonthYear>
      <BoxDaysGrid>
  {days.map((day, index) => (
    <NumberDay
      key={index}
      status={day.isPast || day.isToday ? 'open' : 'closed'}
    >
      {day.isPast || day.isToday ? day.date.getDate() : ""}
    </NumberDay>
  ))}
</BoxDaysGrid>
    </CalendarWidgetBox>
  )
}

export default CalendarWidget;