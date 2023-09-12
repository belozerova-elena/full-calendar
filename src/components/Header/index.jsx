const Header = ({todayHandler}) => {
  return(
    <header className="header">
      <div className="header__container">
        <div className="header__container-buttons">
          <button className="header__container-buttons--button">Добавить</button>
          <button className="header__container-buttons--button" onClick={todayHandler}>Обновить</button>
        </div>
        <div className="header__container-search">
          <input
            className="header__container-search--input"
            type="text"
            placeholder="Событие, дата или участник"
          />
        </div>
      </div>
    </header>
  )
}

export {Header}