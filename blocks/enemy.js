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
    mainStats.gold += mainStats.maxhp * (0.25 + mainStats.extrareward) + mainStats.flatreward;
    mainStats.gold += mainStats.enemyid * mainStats.basereward;
    mainStats.orb += 1;
    mainStats.rpoints += 1;
    mainStats.enemyid += 1;
    mainStats.maxhp = Math.floor(mainStats.enemyid**1.3*6) + 50;
    mainStats.hp = mainStats.maxhp;
  }
}

customElements.define('p-enemy', Enemy);