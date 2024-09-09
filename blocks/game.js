class Game extends HTMLElement {
  connectedCallback() {

  }
  attack(args) {
    console.group('[damage]');
    console.log('[type] ' + args.type);
    let dmg = mainStats.baseDamage;
    if (args.type == 'main') {
      if (Math.random() < mainStats.critChance) {
        dmg *= mainStats.critDamage;
        mainStats.critAspectAdder += mainStats.critaspect;
        setTimeout(()=>{
          mainStats.critAspectAdder -= mainStats.critaspect;
        }, 3000);
      }
      if (mainStats.obj.ist.preparedFlag && mainStats.prepared > 1) {
        dmg += mainStats.baseDamage * mainStats.prepared;
        mainStats.obj.ist.preparedFlag = false;
        console.log('[prepared damage] ' + mainStats.baseDamage * mainStats.prepared);
      }
      dmg += mainStats.flatdamage;
      if (mainStats.poison >= 0.001) {
        let gagaga1 = mainStats.enemyid;
        let gagaga2 = mainStats.baseDamage;
        for (let i=0; i<2; i++) setTimeout(()=>{
          $('p-game').attack({
            type:'poison',
            enemy:args.enemy,
            enemyId:gagaga1,
            baseDmg:gagaga2,
          });
        }, 3000*i + 3000);
      }
      mainStats.gold += dmg*0.1;
      console.log('[gold] ' + dmg*0.1);
    }
    if (args.type == 'poison' && args.enemyId == mainStats.enemyid) {
      dmg = args.baseDmg*mainStats.poison;
    }
    if (args.type == 'radians') {
      dmg *= mainStats.radians;
    }
    console.log('[dmg] ' + dmg);
    console.groupEnd();
    mainStats.hp -= dmg;
    
  }
}

customElements.define('p-game', Game);