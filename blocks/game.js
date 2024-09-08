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
        }, 2000);
      }
      if (mainStats.obj.ist.preparedFlag) {
        dmg += mainStats.baseDamage * mainStats.prepared;
        mainStats.obj.ist.preparedFlag = false;
      }
      dmg += mainStats.flatdamage;
    }
    if (args.type == 'radians') {
      dmg *= mainStats.radians;
    }

    mainStats.gold += dmg;
    mainStats.hp -= dmg;
  }
}

customElements.define('p-game', Game);