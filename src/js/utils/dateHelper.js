export function getCurrentDate() {
  const date = new Date();
  return getFormatDate(date);
}

export function getDateWeekAgo() {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return getFormatDate(date);
}

export function getFormatDate(date) {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('-');
}