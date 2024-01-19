const getTime = (date: string): string => {
  const inputDate = new Date(date);

  const hours = inputDate.getHours();
  const min = inputDate.getMinutes();

  return hours + ':' + (9 >= min ? '0' + min : min);
};

export default getTime;
