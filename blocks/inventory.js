class Inventory extends HTMLElement {
  #items = []
  connectedCallback() {
    window.addEventListener('load', function() {
      for (let i=0; i<8; i++) {
        $('p-inventory #slot' + i + ' .select').addEventListener('click', function () {
          if ($('p-inventory').items[i].selected) {
            $('p-inventory #slot' + i).classList.replace('selected', 'unselected');
            $('p-inventory').items[i].selected = false;
            $('p-inventory #slot' + i + ' .select').innerHTML = "Выб.";
          } else {
            $('p-inventory #slot' + i).classList.replace('unselected', 'selected');
            $('p-inventory').items[i].selected = true;
            $('p-inventory #slot' + i + ' .select').innerHTML = "Сн.";
          }
        });
        $('p-inventory #slot' + i + ' .upgrade').addEventListener('click', function () {
          if ($('p-inventory').items[i].upgradeCost <= mainStats.orb) {
            mainStats.orb -= $('p-inventory').items[i].upgradeCost;
            $('p-inventory').items[i].lvl += 1;
            $('p-inventory').reload();
          }
        });
        $('p-inventory #slot' + i + ' .reforge').addEventListener('click', function reforgeFunc() {
          if ($('p-inventory').items[i].reforgeCost <= mainStats.rpoints) {
            mainStats.rpoints -= $('p-inventory').items[i].reforgeCost;
            let t = [];
            if (!$('p-inventory').items[i].stat1fixed) t.push(0);
            if (!$('p-inventory').items[i].stat2fixed) t.push(1);
            if (!$('p-inventory').items[i].stat3fixed) t.push(2);
            if (t.length == 0) return 0;
            switch (t[Math.floor(Math.random()*t.length)]) {
              case 0:
                $('p-inventory').items[i].stat1 = new ItemStat(itemStatsProto.getRandom());
                break;
              case 1:
                $('p-inventory').items[i].stat2 = new ItemStat(itemStatsProto.getRandom());
                break;
              case 2:
                $('p-inventory').items[i].stat3 = new ItemStat(itemStatsProto.getRandom());
                break;
              default:
                break;
            }
            $('p-inventory').items[i].lvl = $('p-inventory').items[i].lvl;
            $('p-inventory').reload();
          }
        });
        $('p-inventory #slot' + i + ' .stat1').addEventListener('click', function () {
          if ($('p-inventory').items[i].stat1fixed) {
            $('p-inventory').items[i].stat1fixed = false;
            $('p-inventory #slot' + i + ' .stat1').classList.replace('fixed', 'notfixed');
          } else {
            $('p-inventory').items[i].stat1fixed = true;
            $('p-inventory #slot' + i + ' .stat1').classList.replace('notfixed', 'fixed');
          }
          $('p-inventory').reload();
        });
        $('p-inventory #slot' + i + ' .stat2').addEventListener('click', function () {
          if ($('p-inventory').items[i].stat2fixed) {
            $('p-inventory').items[i].stat2fixed = false;
            $('p-inventory #slot' + i + ' .stat2').classList.replace('fixed', 'notfixed');
          } else {
            $('p-inventory').items[i].stat2fixed = true;
            $('p-inventory #slot' + i + ' .stat2').classList.replace('notfixed', 'fixed');
          }
          $('p-inventory').reload();
        });
        $('p-inventory #slot' + i + ' .stat3').addEventListener('click', function () {
          if ($('p-inventory').items[i].stat3fixed) {
            $('p-inventory').items[i].stat3fixed = false;
            $('p-inventory #slot' + i + ' .stat3').classList.replace('fixed', 'notfixed');
          } else {
            $('p-inventory').items[i].stat3fixed = true;
            $('p-inventory #slot' + i + ' .stat3').classList.replace('notfixed', 'fixed');
          }
          $('p-inventory').reload();
        });
      }
    });
  }
  /**
   * @param {Item} item 
   */
  addItem (item) {
    if (this.#items.length < 8) {
      this.#items.push(item);
      this.reload();
    }
  }
  reload() {
    for (let i=0; i<8; ++i) {
      $('p-inventory #slot' + i).classList.remove('display');
    }
    for (let i=0; i<this.#items.length; ++i) {
      $('p-inventory #slot' + i).classList.add('display');
      if (!this.items[i].selected) {
        $('p-inventory #slot' + i).classList.replace('selected', 'unselected');
        $('p-inventory #slot' + i + ' .select').innerHTML = "Выб.";
      } else {
        $('p-inventory #slot' + i).classList.replace('unselected', 'selected');
        $('p-inventory #slot' + i + ' .select').innerHTML = "Сн.";
      }
      $('p-inventory #slot' + i + ' .name').innerHTML = this.#items[i].name;
      $('p-inventory #slot' + i + ' .lvl').innerHTML = this.#items[i].lvl;
      $('p-inventory #slot' + i + ' .upgrade .cost').innerHTML = this.#items[i].upgradeCost;
      $('p-inventory #slot' + i + ' .reforge .cost').innerHTML = this.#items[i].reforgeCost;
      if (this.#items[i].stat1) {
        $('p-inventory #slot' + i + ' .stat1').innerHTML = this.#items[i].stat1.text;
        $('p-inventory #slot' + i + ' .stat1').classList.remove('common', 'rare', 'epic','legendary');
        $('p-inventory #slot' + i + ' .stat1').classList.add(this.#items[i].stat1.rarity);
      }
      if (this.#items[i].stat2) {
        $('p-inventory #slot' + i + ' .stat2').innerHTML = this.#items[i].stat2.text;
        $('p-inventory #slot' + i + ' .stat2').classList.remove('common', 'rare', 'epic','legendary');
        $('p-inventory #slot' + i + ' .stat2').classList.add(this.#items[i].stat2.rarity);
      }
      if (this.#items[i].stat3) {
        $('p-inventory #slot' + i + ' .stat3').innerHTML = this.#items[i].stat3.text;
        $('p-inventory #slot' + i + ' .stat3').classList.remove('common', 'rare', 'epic','legendary');
        $('p-inventory #slot' + i + ' .stat3').classList.add(this.#items[i].stat3.rarity);
      }
    }
  }
  get items() {
    return this.#items;
  }
}

customElements.define('p-inventory', Inventory);