function $(i) {
  return document.querySelector(i);
}

function S(n) {
  if (n>1000000000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/100000000)/10) + 'M';
  if (n>1000000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/100000)/10) + 'm';
  if (n>1000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/100)/10) + 'k';
  return new Intl.NumberFormat("ru-RU").format(Math.floor(n*10)/10);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}