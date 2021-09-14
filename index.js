const leftButton = document.getElementById('slide-left')

const display = document.querySelector(".secondary")

let index = 0;
let titles = ["app", "blog", "shop", "note", "game", "grave"]

function getIndex(index, down){
    if (down){
        if (index-1 < 0){
            index = titles.length-1
        }
    } else {
        if (index+1 > titles.length-1){
            index = 0
        }
    }
}

leftButton.addEventListener("click", ()=>{

})
