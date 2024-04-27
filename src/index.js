const html = require('./index.html');

/**
  * A simple dropdown menu utility.
  */
class DotDrop {
  static ids = [];

  /**
    * @param {!string} dotSelector The dot selector.
    */
  constructor(dotSelector) {
    this.id = +dotSelector.split('-')[1]; 
    if (this.id in DotDrop.ids) {
      throw Error("Invalid dotSelector: Ensure dot number isn't already taken");
    }

    DotDrop.ids.push(this.id);

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

    entry.innerText = text;
    this.drop.append(entry); 

    // Specify what to do when entry is clicked
    entry.addEventListener("click", cb);
    this.entries.push(entry);
  }
}

(() => {
  // Example, instantiating and specifying the behavior of a dotdrop.
  // pass in the selector.
  const dd1 = new DotDrop('.dot-1');

  dd1.addDropEntry("Turn Screen Green", (e) => {
    let body = document.querySelector("body");
    if (body.style.backgroundColor == "green") {
      body.style.backgroundColor = "white";
    } else {
      body.style.backgroundColor = "green";
    }
  });

  dd1.addDropEntry("Do Nothing", (e) => {});

  dd1.addDropEntry("Toggle Greeting", (e) => {
    let greeting = document.getElementById("greeting");
    if (!greeting) {
      let body = document.querySelector("body");
      let greeting = document.createElement("div");
      greeting.id = "greeting";
      greeting.innerText = "Hello, Gerald";
      body.append(greeting);
    } else {
      greeting.remove();
    }
  });

  // Instantiating a second dotdrop
  const dd2 = new DotDrop('.dot-2');
  
  dd2.addDropEntry("Turn Screen Red", (e) => {
    let body = document.querySelector("body");
    if (body.style.backgroundColor == "red") {
      body.style.backgroundColor = "white";
    } else {
      body.style.backgroundColor = "red";
    }
  });
})();

export default DotDrop;
