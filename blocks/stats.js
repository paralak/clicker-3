class Stats extends HTMLElement {
  connectedCallback() {
    const t = this;
    setInterval(() => {
      t.update();
    }, 10);
  }
  update() {
    if (mainStats) {
      if ($('p-stats .gold').innerHTML != mainStats.gold)
        $('p-stats .gold').innerHTML = S(mainStats.gold);
      if ($('p-stats .orb').innerHTML != mainStats.orb)
        $('p-stats .orb').innerHTML = mainStats.orb;
      if ($('p-stats .rpoints').innerHTML != mainStats.rpoints)
        $('p-stats .rpoints').innerHTML = mainStats.rpoints;
      if ($('p-stats .basedamage').innerHTML != mainStats.baseDamage)
        $('p-stats .basedamage').innerHTML = S(mainStats.baseDamage);
    }
  }
}

customElements.define('p-stats', Stats);