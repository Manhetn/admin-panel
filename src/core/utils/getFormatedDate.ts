const monthNames = [
  'Янв',
  'Фев',
  'Мар',
  'Фпр',
  'Май',
  'Июн',
  'Июл',
  'Фвг',
  'Сен',
  'Окт',
  'Ноя',
  'Дек',
];

function getFormatedDate(date: string): string {
  const inputDate = new Date(date);

  // return `${inputDate.getDate()} ${
  //   monthNames[inputDate.getMonth()]
  // } ${inputDate.getFullYear()} ${inputDate.getHours()}:${inputDate.getMinutes()}`;
  return `${inputDate.getDate()} ${
    monthNames[inputDate.getMonth()]
  } ${inputDate.getFullYear()}`;
}

export default getFormatedDate;
