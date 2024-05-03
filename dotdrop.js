
/**
  * A simple dropdown menu utility.
  */
class DotDrop {
  static ids = {};

  static removeID(id) {
    delete DotDrop.ids[id];
  }

  /**
    * @param {!string} dotSelector The dot selector.
    */
  constructor(dotSelector) {
    this.id = +dotSelector.split('-')[1]; 
    if (this.id in DotDrop.ids) {
      throw Error("Invalid dotSelector: Ensure dot number isn't already taken");
    }

    DotDrop.ids[this.id] = {};

    this.toggle_on = false;
    this.dot = document.querySelector(dotSelector);
    if (!this.dot) {
      throw Error("Invalid dotSelector: Ensure that specified element already exists");
    }

    this.container = document.querySelector(`.dot-${this.id}-container`);

    // Make dots an obviously clickable thing
    this.dot.style.cursor = "pointer";

    this.drop = document.createElement("div");
    this.container.append(this.drop);

    this.entries = [];
    
    // Assumes dotSelector follows the "dot-n" naming convention
    this.drop.classList.add(`drop-${this.id}`);
    this.drop.style.display = "none";
    this.drop.style.position = "absolute";
    this.drop.style.border = "solid";
    this.drop.style.borderWidth = "1px";
    this.drop.style.borderRadius = "0.5rem";
    this.drop.style.overflow = "hidden";
    this.drop.style.fontSize = "0.75rem";
    this.drop.style.backgroundColor = "white";

    this.dot.addEventListener("click", (e) => {
      // Update state
      this.toggle_on = !this.toggle_on; 

      if (this.toggle_on) {
        this.drop.style.display = "block";
      } else {
        this.drop.style.display = "none";
      }
    });

    this.drop.addEventListener("mouseleave", (e) => {
      if (this.toggle_on) {
        this.toggle_on = !this.toggle_on;
        this.drop.style.display = "none";
      }
    });

  }

  /**
    * Adds an entry to the drop.
    *
    * @param {!string} text The text in the entry.
    * @param {!function(obj)} cb Callback executing action on entry click
    */
  addDropEntry(text, cb) {
    let entry = document.createElement("div");
    entry.classList.add("entry");
    entry.style.padding = "0.5rem 2rem";
    entry.style.cursor = "pointer";

    entry.addEventListener("mouseover", (e) => {
      entry.style.backgroundColor = "rgb(190, 190, 220)";
    });

    entry.addEventListener("mouseout", (e) => {
      entry.style.backgroundColor = "white";
    });

    entry.innerText = text;
    this.drop.append(entry); 

    // Specify what to do when entry is clicked
    entry.addEventListener("click", cb);
    this.entries.push(entry);
  }
}


module.exports = {
  DotDrop,
}

