function $(i) {
  return document.querySelector(i);
}

function S(n) {
  if (n>1000000000000000000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/1000000000000000000)/100) + 'qu';
  if (n>1000000000000000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/1000000000000000)/100) + 'q';
  if (n>1000000000000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/10000000000)/100) + 't';
  if (n>1000000000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/10000000)/100) + 'b';
  if (n>1000000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/10000)/100) + 'm';
  if (n>1000) return new Intl.NumberFormat("ru-RU").format(Math.floor(n/10)/100) + 'k';
  return new Intl.NumberFormat("ru-RU").format(Math.floor(n*100)/100);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}