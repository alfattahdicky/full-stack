const getDate = (date) => {
  const splitDate = date.split("-");
  const newDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);

  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
}

export default getDate;