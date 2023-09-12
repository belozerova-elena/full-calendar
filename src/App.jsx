import moment from 'moment';
import { Header } from './components/Header';
import { Calendar } from './components/Calendar';
import { Nav } from './components/Nav';
import { useState } from 'react';

function App() {
  moment.updateLocale('en', {week: {dow: 1}});
  
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf('month').startOf('week');

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'));
  const nextHandler = () => setToday(next => next.clone().add(1, 'month'));
  const todayHandler = () => setToday(moment());

  return (
    <div className="App">
      <Header todayHandler={todayHandler}/>
      <Nav 
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        todayHandler={todayHandler}
      />
      <Calendar startDay={startDay}/>
    </div>
  );
}

export default App
