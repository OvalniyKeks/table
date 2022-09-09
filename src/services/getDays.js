///////////////////////////////////////////////////////////////////
// Принимает на вход start, end, startNameDay
// start, end в формате 2022-12-31
// startNameDay в формате 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'
///////////////////////////////////////////////////////////////////

export function getDays (start, end, startNameDay) {

  // Текущая дата
  const date = new Date()
  const currDate = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`
  // Дни недели
  const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс']

  // Индекс стартового названия дня
  let startDayIdx = 0
  startDayIdx = week.findIndex(day => day === startNameDay)

  // Список цвета для недели (чередуется)
  const colorWeek = [
    { work: 'lightcyan', day_off: '#8ffdfd', today: 'yellow' },
    { work: 'lightpink', day_off: 'lightcoral', today: 'yellow' }
  ]


  // Заполнение массива дат
  for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
    arr.push({ date: new Date(dt) });
  }

  // Форматирование даты + подстановка для недели + окрашивание ячееек дня
  let currColorWeekIdx = 0
  let currIdxNameDay = startDayIdx
  for (let i = 0; i < arr.length; i++) {

    // Форматирование даты
    arr[i].date = arr[i].date.toISOString().slice(0, 10).split('-').reverse().join('.')

    // Окрашивание ячейка дня цветом
    if (currIdxNameDay <= 4) {
      arr[i].background = colorWeek[currColorWeekIdx].work
    } else {
      arr[i].background = colorWeek[currColorWeekIdx].day_off
    }
    // Окрашивание в цвет текущей даты
    if (currDate === arr[i].date) {
      arr[i].background = colorWeek[currColorWeekIdx].today
    }

    // Заполнение названия дня недели
    arr[i].day = week[currIdxNameDay]
    // Если массив кончился, то перемещаем текущую позицию на первый день недели
    if (currIdxNameDay === week.length - 1) {
      currIdxNameDay = 0

      arr[i].endWeek = true

      // Переключение цвета недели
      currColorWeekIdx = (currColorWeekIdx === colorWeek.length - 1) ? 0 : currColorWeekIdx + 1

    } else {
      currIdxNameDay += 1
    }

  }

  return arr;
}
