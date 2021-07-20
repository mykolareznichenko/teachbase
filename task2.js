function el(element) {
   if (element.charAt(0) === "#") {
      return document.querySelector(element)
   }

   return document.querySelectorAll(element)
}

let viewer = el("#viewer"),
   equals = el("#equals"),
   nums = el(".num"),
   ops = el(".ops"),
   theNum = "",
   oldNum = "",
   resultNum,
   operator,
   action;

function setNum() {
   if (resultNum) {
      theNum = this.getAttribute("data-num");
      resultNum = "";
   } else {
      theNum += this.getAttribute("data-num");
   }

   viewer.innerHTML = theNum;

};

function moveNum(e, customOperation = false) {
   oldNum = theNum;
   theNum = "";

   if (customOperation) {
      operator = "custom"
      action = e.target.getAttribute("action")
   } else {
      operator = this.getAttribute("data-ops");
   }

   equals.setAttribute("data-result", "");
};
function detectEnterPress(event) {
   event.preventDefault()
   if (event.key !== "Enter") return
   displayNum()
}
function displayNum(event, customOperation = false) {

   oldNum = parseFloat(oldNum);
   theNum = parseFloat(theNum);

   if (action) {
      console.log(action)
      const func = eval(action)
      resultNum = func(oldNum, theNum)
   } else {
      switch (operator) {
         case "plus":
            resultNum = oldNum + theNum;
            break;

         case "minus":
            resultNum = oldNum - theNum;
            break;

         case "times":
            resultNum = oldNum * theNum;
            break;

         case "divided by":
            resultNum = oldNum / theNum;
            break;

         default:
            resultNum = theNum;
      }
   }

   // If NaN or Infinity returned
   if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
         resultNum = "You broke it!";
      } else {
         resultNum = "Look at what you've done";
         el('#calculator').classList.add("broken");
         el('#reset').classList.add("show");
      }
   }

   viewer.innerHTML = resultNum;
   equals.setAttribute("data-result", resultNum);

   oldNum = 0;
   theNum = resultNum;

};

function clearAll() {
   if (resultNum) {
      theNum = resultNum.toString()
      resultNum = ""
   }
   theNum = String(theNum).slice(0, theNum.length - 1)
   viewer.innerHTML = theNum;
   equals.setAttribute("data-result", resultNum);
};


for (let i = 0, l = nums.length; i < l; i++) {
   nums[i].onclick = setNum;
}

for (let i = 0, l = ops.length; i < l; i++) {
   ops[i].onclick = moveNum;
}

equals.addEventListener('click', displayNum)
document.addEventListener('keyup', detectEnterPress)
addOperation.addEventListener('click', onAddOperation)

el("#clear").onclick = clearAll;

function onAddOperation() {
   const btn = document.createElement('button')
   btn.innerText = inputOperator.value
   btn.setAttribute("action", inputAction.value)
   btn.addEventListener('click', (e) => moveNum(e, true))
   calculator.append(btn)
   inputOperator.value = ''
   inputAction.value = ''
}