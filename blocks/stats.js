class Stats extends HTMLElement {
  #hpHistory = new Array(100).fill(100)
  #hpIdx = 0
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
      this.#hpHistory[this.#hpIdx] = curPct;
      this.#hpIdx = (this.#hpIdx + 1) % 100;
      $('p-enemy .hpbar-ghost-fill').style.width = this.#hpHistory[this.#hpIdx] + '%';

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