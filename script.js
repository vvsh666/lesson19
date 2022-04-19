const dateNow = new Date()

const addParagraph = (str) => {
    let p = document.createElement('p')
    p.textContent = str
    document.body.append(p)
}

const hello = () => {
    const hours = dateNow.getHours()
    if (hours >= 0 && hours < 6) addParagraph('Доброй ночи')
    if (hours >= 6 && hours < 12) addParagraph('Доброе утро')
    if (hours >= 12 && hours < 18) addParagraph('Добрый день')
    if (hours >= 18 && hours < 24) addParagraph('Добрый вечер')
}

const getToday = () => {
    const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    const day = dateNow.getDay()
    addParagraph('Сегодня: ' + week[day])
}

const getTimeNow = () => {
    addParagraph('Текущее время: ' + dateNow.toLocaleString('en').substring(11))
}

const getNewYearDays = () => {
    const dateNewYear = new Date(2023, 0, 0).getTime()
    const date = dateNow.getTime()
    const days = Math.floor((dateNewYear - date) / 1000 / 60 / 60 / 24)
    addParagraph('До нового года осталось ' + days + ' дней')
}

hello()
getToday()
getTimeNow()
getNewYearDays()


