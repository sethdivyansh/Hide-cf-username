async function main() {
  const username = document.querySelector(
    '.lang-chooser > div:nth-child(2) a'
  ).innerText
  const regex = new RegExp(`\\b${username}\\b`, 'g')

  function replaceTextInNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(regex, 'Rahasya')
    } else {
      node.childNodes.forEach(replaceTextInNode)
    }
  }
  replaceTextInNode(document.body)
}

main()
