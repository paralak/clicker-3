class Game extends HTMLElement {
  connectedCallback() {

  }
  attack(args) {
    let dmg = mainStats.baseDamage;
    if (args.type == 'main') {
      if (Math.random() < mainStats.critChance) {
        dmg *= mainStats.critDamage;
        mainStats.critAspectAdder += mainStats.critaspect;
        setTimeout(()=>{
          mainStats.critAspectAdder -= mainStats.critaspect;
        }, 3000);
      }
      if (mainStats.obj.ist.preparedFlag) {
        dmg += mainStats.baseDamage * mainStats.prepared;
        mainStats.obj.ist.preparedFlag = false;
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
    }
    if (args.type == 'poison' && args.enemyId == mainStats.enemyid) {
      console.log(mainStats.enemyid);
      console.log(args.enemyId);
      
      dmg = args.baseDmg*mainStats.poison;
    }
    if (args.type == 'radians') {
      dmg *= mainStats.radians;
    }

    mainStats.gold += dmg;
    mainStats.hp -= dmg;
  }
}

customElements.define('p-game', Game);