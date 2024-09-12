class Game extends HTMLElement {
  connectedCallback() {

  }
  attack(args) {
    console.group('[damage]');
    console.log('[type] ' + args.type);
    let dmg = mainStats.baseDamage;
    if (args.type == 'main' || args.type == 'doublehit') {
      if (Math.random() < mainStats.critChance) {
        dmg *= mainStats.critDamage;
        mainStats.critAspectAdder += mainStats.critaspect;
        let gagaga3 = new Number(mainStats.critaspect);
        setTimeout(()=>{
          mainStats.critAspectAdder -= gagaga3;
        }, 3000);
      }
      if (mainStats.obj.ist.preparedFlag && mainStats.prepared > 1) {
        dmg += mainStats.baseDamage * mainStats.prepared;
        mainStats.obj.ist.preparedFlag = false;
        console.log('[prepared damage] ' + mainStats.baseDamage * mainStats.prepared);
      }
      dmg += mainStats.flatdamage;
      mainStats.obj.ist.poisonDmgSum += mainStats.baseDamage*mainStats.poison;
      let doublehitA = 0;
      let doublehitB = new Number(mainStats.doublehit);
      while (doublehitB > 0.0001 && args.type != 'doublehit') {
        if (Math.random() < doublehitB) setTimeout(()=>{
          $('p-game').attack({
            type:'doublehit',
            enemy:args.enemy,
          })
        }, 100+doublehitA*100);
        doublehitB -= 1;
        doublehitA += 1;
      }
      mainStats.gold += dmg*0.1;
      console.log('[gold] ' + dmg*0.1);
      console.log('[dmg] ' + dmg);
      console.groupEnd();
      mainStats.hp -= dmg;
    }
    if (args.type == 'poison') {
      dmg = mainStats.obj.ist.poisonDmgSum;
      mainStats.obj.ist.poisonDmgSum *= 0.5;
      console.log('[dmg] ' + dmg);
      console.groupEnd();
      mainStats.hp -= dmg;
    }
    if (args.type == 'radians') {
      dmg *= mainStats.radians;
      console.log('[dmg] ' + dmg);
      console.groupEnd();
      mainStats.hp -= dmg;
    }
    
  }
}

customElements.define('p-game', Game);