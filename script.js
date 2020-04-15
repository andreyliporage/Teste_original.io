const colors = document.querySelectorAll(".disc")
const text = document.querySelector(".color span")

text.innerHTML = "("+colors[0].id+")"

for(let color of colors) {
    color.addEventListener("click", function() {
        text.innerHTML = "("+color.id+")"   
    })
}