let parent = listContainer

function renderList(list) {
   list.map(item => {
      console.log(parent)
      if (typeof item === "string") {
         const li = document.createElement('li')
         li.textContent = item
         parent.append(li)
         parent = li
         return
      }
      if (Array.isArray(list)) {
         const ul = document.createElement('ul')
         parent.append(ul)
         parent = ul
         renderList(item)
      }
   })
}

const nestedList = ["Item1", ["Item2", ["Item3"]]];
renderList(nestedList)