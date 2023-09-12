import moment from 'moment';

const Calendar = ({startDay}) => {
  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  const day = startDay.clone().subtract(1, 'day');
  const daysWeekArray = [...Array(7)].map(() => day.add(1, 'day').clone());
  const daysArray = [...Array(35)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');

  return(
    <div className="calendar">
      {
        daysWeekArray.map((dayWeek, i) => (
          <>
            {isCurrentDay(dayWeek) ? (
            <div key={dayWeek.format('DDMMYYYY')} className="calendar__item today">
              <div key={dayWeek.format('DDMMYYYY-YY')} className="calendar__item-day">
                {daysOfWeek[i]+ ', ' + dayWeek.format('D')}
              </div>
            </div>) : (
            <div key={dayWeek.format('DDMMYYYY')} className="calendar__item">
              <div key={dayWeek.format('DDMMYYYY-YY')} className="calendar__item-day">
                {daysOfWeek[i]+ ', ' + dayWeek.format('D')}
              </div>
            </div>)}
          </>
        ))
      }
      {
        daysArray.map((dayItem) => (
          <>
            {isCurrentDay(dayItem) ? (
              <div key={dayItem.format('DDMMYYYY')} className="calendar__item today">
                <div key={dayItem.format('DDMMYYYY-YY')} className="calendar__item-day">
                  {dayItem.format('D')}
                </div>
              </div>) : (
              <div key={dayItem.format('DDMMYYYY')} className="calendar__item">
                <div key={dayItem.format('DDMMYYYY-YY')} className="calendar__item-day">
                  {dayItem.format('D')}
                </div>
              </div>)}
          </>
        ))
      }
    </div>
  )
}

export {Calendar}