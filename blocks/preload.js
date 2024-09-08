function $(i) {
  return document.querySelector(i);
}

function S(n) {
  return new Intl.NumberFormat("ru-RU").format(Math.floor(n*10)/10);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}