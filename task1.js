text.addEventListener("copy", ban)
text.addEventListener("contextmenu", ban)

function ban(event) {
   event.preventDefault()
}