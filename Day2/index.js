// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
console.log(countEl)



let count = 0

function increment() {
    countEl.innerText = count
    count = count + 1 
   
}
increment()
 
