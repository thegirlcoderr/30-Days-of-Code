let count= 0

document.getElementById('increment-btn').addEventListener('click',function increment() {
    count = count + 1 
    console.log(count)
    document.getElementById('count').textContent=count
})
increment()
