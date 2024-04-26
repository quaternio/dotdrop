const html = require('./index.html');

class DotDrop {
  constructor(dotSelector, dropSelector) {
    this.toggle_on = false;
    this.dot = document.querySelector(dotSelector);
    this.drop = document.dropSelector(dropSelector);

    this.dot.addEventListener("click", (e) => {
      // Update state
      this.toggle_on = !this.toggle_on; 

      if (this.toggle_on) {
        this.drop.style.display = "block";
      }
    });
  }
}

(() => {
  // attach event listener
  // Can optionally
  // let dots = document.querySelectorAll('[class^=dot-]');
  // let drops = document.querySelectorAll('[class^=drop-]');
  let dotSelector = document.querySelector('.dot-1');
  let dropSelector = document.querySelector('.drop-1');

  const dd = new DotDrop(dotSelector, dropSelector);

})();
