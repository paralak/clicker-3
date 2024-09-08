const mainStats = new StatsObj();
const upgradesStats = new StatsObj();
upgradesStats.link = mainStats;

setInterval(()=>{
  mainStats.obj.ist.preparedFlag = true;
}, 10000);

window.addEventListener('load', ()=>{
  setInterval(()=>{
    $('p-game').attack({
      type: 'radians',
      enemy: $('p-enemy'),
    });
  }, 3000)
});