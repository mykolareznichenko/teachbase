function parseTemplate(el, obj) {
   const children = [].slice.call(el.children)

   children.map(child => {
      if (!child.dataset && !child.dataset.field) return
      if (!obj.hasOwnProperty(child.dataset.field)) throw new Error("Нет такого")
      child.textContent = obj[child.dataset.field]
   })
}

parseTemplate(document.querySelector("#item1"), {
   title: "Hello world",
   description: "The first program",
   test1: "test"
})