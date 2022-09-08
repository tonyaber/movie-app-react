
const formatTime = (duration: number) => {

  if (duration < 60) {
    return duration;
  }
    const hour = Math.floor(duration / 60);
  const minute = Math.floor(duration % 60);
    return `${hour} : ${minute > 10 ? minute : '0' + minute}`;
}

const formatDate = (date: string) => {
  const index = date.indexOf('-');
  return date.slice(0, index);
}
 export { formatDate, formatTime };