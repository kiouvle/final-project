export function getCurrentDate() {
  const date = new Date();
  return getFormatDate(date);
}

export function getDateWeekAgo() {
  const date = new Date();
  date.setDate(date.getDate() - 6);
  return getFormatDate(date);
}

export function getFormatDate(date) {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [date.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd
  ].join('-');
}

export function getHumanDate(dateString) {
  const monthsArray = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const date = new Date(dateString);
  const monthName = monthsArray[date.getMonth()];

  return `${date.getDate()} ${monthName}, ${date.getFullYear()}`;
}

export function getDayOfWeek(dayNumber) {
  const weekArray = [
    'вс',
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб',
  ]

  return weekArray[dayNumber];
}