// Generated by CoffeeScript 2.6.1
(function () {
  // append html adapter
  var AppendHtmlAdapter;
  AppendHtmlAdapter = class AppendHtmlAdapter {
    constructor() {
      this;
    }

    appendHTML(html, node, cb) {
      var child, children, elem, i, len, results;
      elem = document.createElement("div");
      elem.innerHTML = html;
      children = elem.children;

      if (typeof cb === "function") {
        cb(children);
      }

      results = [];

      for (i = 0, len = children.length; i < len; i++) {
        child = children[i];
        results.push(node.appendChild(child));
      }

      return results;
    }

  };
  module.exports = AppendHtmlAdapter;
}).call(this);
//# sourceMappingURL=Adapter.js.map
