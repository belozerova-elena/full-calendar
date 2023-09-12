const Nav = ({today, prevHandler, nextHandler, todayHandler}) => {
  const monthArray = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  return(
    <div className="nav">
      <div className="nav__months">
        <button className="nav__button" onClick={prevHandler}>&lt;</button>
        <div className="nav__month">{ monthArray[today.format('M')-1] + ' ' + today.format('YYYY')}</div>
        <button className="nav__button" onClick={nextHandler}>&gt;</button>
      </div>
      <button className="nav__day" onClick={todayHandler}>Сегодня</button>
    </div>
  )
}

export {Nav}