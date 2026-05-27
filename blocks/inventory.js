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
        $('p-inventory #slot' + i + ' .reforge').addEventListener('click', function () {
          const item = $('p-inventory').items[i];
          if (item.reforgeSelected === 0) return;
          if (item.reforgeCost > mainStats.rpoints) return;
          mainStats.rpoints -= item.reforgeCost;
          item['stat' + item.reforgeSelected] = new ItemStat(itemStatsProto.getRandom());
          item['stat' + item.reforgeSelected + 'fixed'] = false;
          item.reforgeSelected = 0;
          item.lvl = item.lvl;
          $('p-inventory').reload();
        });

        for (let n=1; n<=3; n++) {
          $('p-inventory #slot' + i + ' .stat' + n).addEventListener('click', (function(ii, nn) {
            return function () {
              const item = $('p-inventory').items[ii];
              if (item['stat' + nn + 'fixed']) {
                item['stat' + nn + 'fixed'] = false;
              } else if (item.reforgeSelected === nn) {
                item.reforgeSelected = 0;
              } else {
                item.reforgeSelected = nn;
              }
              $('p-inventory').reload();
            };
          })(i, n));
        }
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

      const sel = this.#items[i].reforgeSelected;
      $('p-inventory #slot' + i + ' .reforge .cost').innerHTML = sel === 0 ? '—' : this.#items[i].reforgeCost;

      for (let n=1; n<=3; n++) {
        const statEl = $('p-inventory #slot' + i + ' .stat' + n);
        if (!this.#items[i]['stat' + n]) continue;
        statEl.innerHTML = this.#items[i]['stat' + n].text;
        statEl.classList.remove('common', 'rare', 'epic', 'legendary');
        statEl.classList.add(this.#items[i]['stat' + n].rarity);
        statEl.classList.remove('fixed', 'notfixed', 'reforgeselected');
        if (this.#items[i]['stat' + n + 'fixed']) {
          statEl.classList.add('fixed');
        } else if (sel === n) {
          statEl.classList.add('reforgeselected');
        } else {
          statEl.classList.add('notfixed');
        }
      }
    }
  }
  get items() {
    return this.#items;
  }
}

customElements.define('p-inventory', Inventory);
