const html = require('./index.html');

class DotDrop {
  constructor(dotSelector, dropSelector) {
    this.toggle_on = false;
    this.dot = document.querySelector(dotSelector);

    // Make dots an obviously clickable thing
    this.dot.style.cursor = "pointer";

    this.drop = document.querySelector(dropSelector);

    this.dot.addEventListener("click", (e) => {
      // Update state
      this.toggle_on = !this.toggle_on; 

      if (this.toggle_on) {
        this.drop.style.display = "block";
      } else {
        this.drop.style.display = "none";
      }
    });
  }
}

(() => {
  // attach event listener
  // Can optionally
  // let dots = document.querySelectorAll('[class^=dot-]');
  // let drops = document.querySelectorAll('[class^=drop-]');

  const dd = new DotDrop('.dot-1', '.drop-1');

})();
