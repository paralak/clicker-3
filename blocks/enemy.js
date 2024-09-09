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
        console.log('[enemy hp] ' + mainStats.maxhp);
        console.log('[enemy hp] ' + mainStats.hp);
        console.log('[enemy kill time] ' + (Date.now() - mainStats.lastDeathTime)/1000 + 's');
      console.groupEnd();
      console.group('[gold]');
        mainStats.gold += mainStats.maxhp * (1 + mainStats.extrareward);
        console.log('[maxhp reward] ' + mainStats.maxhp * (1 + mainStats.extrareward));
        mainStats.gold += mainStats.enemyid * mainStats.basereward;
        console.log('[id reward] ' + mainStats.enemyid * mainStats.basereward);
        mainStats.gold += mainStats.flatreward
        console.log('[flat reward] ' + mainStats.flatreward);
      console.groupEnd();
      mainStats.orb += 1;
      console.log('[orb] ' + 1);
      mainStats.rpoints += 1;
      console.log('[rpoints] ' + 1);
      mainStats.enemyid += 1;
      mainStats.maxhp = Math.floor(mainStats.enemyid**1.3*6) + 50;
      mainStats.hp = mainStats.maxhp;
      mainStats.lastDeathTime = Date.now();
    console.groupEnd();
  }
}

customElements.define('p-enemy', Enemy);