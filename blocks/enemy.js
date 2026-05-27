class Enemy extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', this.click);
  }

  click() {
    document.querySelector('p-game').attack({
      enemy:this,
      type:'main',
    });
  }

  death() {
    console.group('[death]');
      console.group('[enemy]');
        console.log('[enemy id] ' + mainStats.enemyid);
        console.log('[enemy maxhp] ' + mainStats.maxhp);
        console.log('[enemy hp] ' + mainStats.hp);
        console.log('[enemy kill time] ' + (Date.now() - mainStats.lastDeathTime)/1000 + 's');
      console.groupEnd();

      let isBoss = mainStats.enemyid % 30 === 0 && mainStats.enemyid > 0;

      if (isBoss) {
        clearTimeout(mainStats.obj.ist.bossTimer);
        mainStats.obj.ist.bossTimer = null;
        mainStats.obj.ist.bossStartTime = null;
        console.group('[boss rewards]');
          mainStats.gold += mainStats.maxhp * mainStats.extrareward * 3;
          console.log('[boss maxhp reward] ' + mainStats.maxhp * mainStats.extrareward * 3);
          mainStats.gold += mainStats.enemyid * (10 + mainStats.prestige + mainStats.basereward) * 3 + 10;
          console.log('[boss id reward] ' + (mainStats.enemyid * (10 + mainStats.prestige + mainStats.basereward) * 3 + 10));
          mainStats.gold += mainStats.flatreward * 3;
          console.log('[boss flat reward] ' + mainStats.flatreward * 3);
          mainStats.bossorb += 1;
          console.log('[bossorb] ' + 1);
          mainStats.obj.ist.noRewardFlag = false;
        console.groupEnd();
      } else {
        console.group('[gold]');
          mainStats.gold += mainStats.maxhp * mainStats.extrareward;
          console.log('[maxhp reward] ' + mainStats.maxhp * mainStats.extrareward);
          mainStats.gold += mainStats.enemyid * (10 + mainStats.prestige + mainStats.basereward) + 10;
          console.log('[id reward] ' + (mainStats.enemyid * (10 + mainStats.prestige + mainStats.basereward) + 10));
          mainStats.gold += mainStats.flatreward;
          console.log('[flat reward] ' + mainStats.flatreward);
        console.groupEnd();
        if (!mainStats.obj.ist.noRewardFlag) {
          mainStats.orb += 1;
          console.log('[orb] ' + 1);
          mainStats.rpoints += 1;
          console.log('[rpoints] ' + 1);
        }
      }

      mainStats.enemyid += 1;

      let nextIsBoss = mainStats.enemyid % 30 === 0 && mainStats.enemyid > 0;
      let baseMaxhp = Math.floor(mainStats.enemyid**1.6*(6 + mainStats.prestige)) + (10+mainStats.prestige*20);

      if (nextIsBoss) {
        if (document.hidden || mainStats.obj.ist.radiansCalculating) {
          mainStats.enemyid -= 1;
          mainStats.maxhp = Math.floor(mainStats.enemyid**1.6*(6 + mainStats.prestige)) + (10+mainStats.prestige*20);
          mainStats.obj.ist.noRewardFlag = true;
          console.log('[boss skipped, no reward flag]');
        } else {
          mainStats.maxhp = baseMaxhp * 3;
          let bossId = mainStats.enemyid;
          console.log('[boss spawned, id=' + bossId + ']');
          mainStats.obj.ist.bossStartTime = Date.now();
          mainStats.obj.ist.bossTimer = setTimeout(() => {
            mainStats.enemyid = bossId - 29;
            mainStats.maxhp = Math.floor(mainStats.enemyid**1.6*(6 + mainStats.prestige)) + (10+mainStats.prestige*20);
            mainStats.hp = mainStats.maxhp;
            $('p-stats').resetGhost();
            mainStats.obj.ist.poisonDmgSum = 0;
            mainStats.obj.ist.noRewardFlag = true;
            console.log('[boss failed, reset to id=' + mainStats.enemyid + ']');
          }, 30000);
        }
      } else {
        mainStats.maxhp = baseMaxhp;
      }

      mainStats.hp = mainStats.maxhp;
      $('p-stats').resetGhost();
      mainStats.obj.ist.poisonDmgSum = 0;
      mainStats.lastDeathTime = Date.now();
      let dmgtonextenemy = new Number(mainStats.obj.ist.dmgtonextenemy);
      setTimeout(()=>{
        $('p-game').attack({
          enemy:$('p-enemy'),
          type:'dmgtonextenemy',
          dmgtonextenemy:dmgtonextenemy,
        })
      }, 100)
      mainStats.obj.ist.dmgtonextenemy = 0;
    console.groupEnd();
  }

  prestige() {
    clearTimeout(mainStats.obj.ist.bossTimer);
    mainStats.obj.ist.bossTimer = null;
    mainStats.obj.ist.bossStartTime = null;
    mainStats.obj.ist.noRewardFlag = false;
    mainStats.enemyid = 0;
    mainStats.maxhp = Math.floor(mainStats.enemyid**1.6*(6 + mainStats.prestige)) + (10+mainStats.prestige*20);
    mainStats.hp = mainStats.maxhp;
    mainStats.lastDeathTime = Date.now();
  }
}

customElements.define('p-enemy', Enemy);
