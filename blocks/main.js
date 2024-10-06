const mainStats = new StatsObj();
const upgradesStats = new StatsObj();
upgradesStats.link = mainStats;

setInterval(()=>{
  mainStats.obj.ist.preparedFlag = true;
}, 10000);

window.addEventListener('load', ()=>{
  setInterval(()=>{
    if (mainStats.radians > 0.01 && !document.hidden)
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
}, 20000);

window.onbeforeunload = function() {
  return "Закрыть игру?";
};

setInterval(()=>{
  if (mainStats.obj.ist.poisonDmgSum > 0.001)
    $('p-game').attack({
      type: 'poison',
      enemy: $('p-enemy'),
    });
}, 100);

document.addEventListener('visibilitychange',()=>{
  if (document.hidden) {
    mainStats.obj.ist.unfocusTime=Date.now();
  }
});

document.addEventListener('visibilitychange',()=>{
  if (!document.hidden) {
    let t =(Date.now()-mainStats.obj.ist.unfocusTime)/3000;
    for(let i=0;i<t;i++){
      if (mainStats.radians > 0.01)
        $('p-game').attack({
          type: 'radians',
          enemy: $('p-enemy'),
        });
    }
  }
});