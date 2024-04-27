# dotdrop

A simple dropdown menu utility.

---
## Overview

Dotdrop is a dropdown menu utility designed to be simple and efficient. The 
tool relies on notions of *dots* and *drops*. *Dots* are HTML elements
that, when clicked, reveal a dropdown menu. A *drop* refers to the container
element that holds the dropdown menu and its entries.

---
## Usage

Each dotdrop instance corresponds to one ```dot-n-container```. The ```n``` 
refers to the user-designated id given to a container. Note that each of
these ids must be unique. Inside of each ```dot-n-container``` element, there 
should be a child element with class ```dot-n``` containing the dot that the 
user will click to trigger the drop. See the example below (remember ```n``` 
should be replaced with a unique id).

```html
<body>
  ...
  <div class="dot-n-container">
    <div class="dot-n">
      <!-- Your dot of choice -->
    </div>
  </div>
  ...
</body>
```

After ```dot-n-container``` elements have been configured, they can be attached
to a ```DotDrop``` instance. ```DotDrop``` is instantiated with a single
argument, the ```dot-n``` class selector.

```javascript
const ddn = new DotDrop('.dot-n');
```

To add entries and attach it to a callback, simply call ```addDropEntry``` on 
the dotdrop instance. For example, if we wanted to add an entry that makes the
background color of the screen green (who wouldn't want to do that??), then
we would run the code that follows.

```javascript
ddn.addDropEntry("Turn Screen Green", (e) => {
  let body = document.querySelector("body");
  if (body.style.backgroundColor == "green") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "green";
  }
});
```

