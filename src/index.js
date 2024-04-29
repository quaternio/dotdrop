//const html = require('./index.html');
const DotDrop = require('./dotdrop');

//(() => {
//  // Example, instantiating and specifying the behavior of a dotdrop.
//  // pass in the selector.
//  const dd1 = new DotDrop('.dot-1');
//
//  dd1.addDropEntry("Turn Screen Green", (e) => {
//    let body = document.querySelector("body");
//    if (body.style.backgroundColor == "green") {
//      body.style.backgroundColor = "white";
//    } else {
//      body.style.backgroundColor = "green";
//    }
//  });
//
//  dd1.addDropEntry("Do Nothing", (e) => {});
//
//  dd1.addDropEntry("Toggle Greeting", (e) => {
//    let greeting = document.getElementById("greeting");
//    if (!greeting) {
//      let body = document.querySelector("body");
//      let greeting = document.createElement("div");
//      greeting.id = "greeting";
//      greeting.innerText = "Hello, Gerald";
//      body.append(greeting);
//    } else {
//      greeting.remove();
//    }
//  });
//
//  // Instantiating a second dotdrop
//  const dd2 = new DotDrop('.dot-2');
//  
//  dd2.addDropEntry("Turn Screen Red", (e) => {
//    let body = document.querySelector("body");
//    if (body.style.backgroundColor == "red") {
//      body.style.backgroundColor = "white";
//    } else {
//      body.style.backgroundColor = "red";
//    }
//  });
//})();

exports.DotDrop = DotDrop;
