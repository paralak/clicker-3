class Stats extends HTMLElement {
  #hpHistory = []
  connectedCallback() {
    const t = this;
    setInterval(() => {
      t.update();
    }, 10);
  }
  update() {
    if (mainStats) {
      $('p-stats .gold').innerHTML = S(mainStats.gold);
      $('p-stats .orb').innerHTML = S(mainStats.orb);
      $('p-stats .rpoints').innerHTML = S(mainStats.rpoints);
      $('p-stats .basedamage').innerHTML = S(mainStats.baseDamage);
      $('p-stats .bossorb').innerHTML = S(mainStats.bossorb);
      const curPct = Math.max(0, mainStats.hp / mainStats.maxhp * 100);
      this.#hpHistory.push(curPct);
      if (this.#hpHistory.length > 100) this.#hpHistory.shift();
      $('p-enemy .hpbar-ghost-fill').style.width = (this.#hpHistory[0] ?? curPct) + '%';

      const bossBar = $('p-enemy .bossbar');
      if (mainStats.obj.ist.bossStartTime !== null) {
        const elapsed = (Date.now() - mainStats.obj.ist.bossStartTime) / 1000;
        const remaining = Math.max(0, 30 - elapsed);
        $('p-enemy .bosstime').innerHTML = Math.ceil(remaining) + 'с';
        $('p-enemy .bossbar-fill').style.width = (remaining / 30 * 100) + '%';
        bossBar.style.display = 'block';
      } else {
        bossBar.style.display = 'none';
      }
    }
  }
}

customElements.define('p-stats', Stats);