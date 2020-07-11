# append html adapter
class AppendHtmlAdapter
  constructor: () ->
    this
  appendHTML: (html, node, cb) ->
    elem = document.createElement("div")
    elem.innerHTML = html
    children = elem.children

    if typeof cb == "function"
      cb(children)

    node.appendChild(child) for child in children

module.exports = AppendHtmlAdapter
