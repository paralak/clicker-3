const mainStats = new StatsObj();
const upgradesStats = new StatsObj();
upgradesStats.link = mainStats;

setInterval(()=>{
  mainStats.obj.ist.preparedFlag = true;
}, 10000);

window.addEventListener('load', ()=>{
  setInterval(()=>{
    if (mainStats.radians > 0.01)
      $('p-game').attack({
        type: 'radians',
        enemy: $('p-enemy'),
      });
  }, 3000);
  setInterval(()=>{
    console.log('[dps] ' + mainStats.dps);
    mainStats.dps = 0;
  }, 1000);
});

setInterval(()=>{
  console.clear();
}, 20000)