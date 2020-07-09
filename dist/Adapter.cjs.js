'use strict';

// append html adapter

class AppendHtmlAdapter {
  constructor() {
    return this;
  }
  appendHTML(html, node, cb) {
    var elem = document.createElement("div");
    elem.innerHTML = html;
    var children = elem.children;

    if (typeof cb === "function") {
      cb(children);
    }

    for (var i = 0; i < children.length; i++) {
      node.appendChild(children[i]);
    }
  }
}

module.exports = AppendHtmlAdapter;
