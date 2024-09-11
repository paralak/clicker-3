class Stats extends HTMLElement {
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
    }
  }
}

customElements.define('p-stats', Stats);