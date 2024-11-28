import React, { useEffect, useState } from 'react';
import { BoxDaysGrid, BoxMonthYear, CalendarWidgetBox, NumberDay, TitleMonth, TitleYear } from './ModuleCalendarStyles';

const CalendarWidget = () => {
  const [currentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [emptyDays, setEmptyDays] = useState([]); // Пустые ячейки перед началом месяца

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Получаем количество дней в месяце
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // День недели первого числа месяца (0 - воскресенье, 1 - понедельник и т.д.)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // Определяем сдвиг для понедельника в начале недели (где 0 = понедельник)
    const shift = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);

    // Заполняем пустыми днями перед началом месяца
    const emptyDaysArray = Array.from({ length: shift });

    // Заполняем массив дней месяца
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, month, i + 1);
      return {
        date,
        isPast: date < new Date(),
        isToday: date.toDateString() === new Date().toDateString(),
      };
    });

    setEmptyDays(emptyDaysArray);
    setDays(daysArray);
  }, [currentDate]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <CalendarWidgetBox>
      <BoxMonthYear>
        <TitleMonth>{monthNames[currentDate.getMonth()]}</TitleMonth>
        <TitleYear>{currentDate.getFullYear()}</TitleYear>
      </BoxMonthYear>
      <BoxDaysGrid>
        {/* Пустые ячейки перед началом месяца */}
        {emptyDays.map((_, index) => (
          <NumberDay key={`empty-${index}`} status="empty">
            {/* Оставляем пустым */}
          </NumberDay>
        ))}
        {/* Дни месяца */}
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
  );
};

export default CalendarWidget;