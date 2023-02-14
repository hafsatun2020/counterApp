let sum = 0
let value =  document.getElementById('value')


document.addEventListener('click', function(e){

    if(e.target.dataset.decrease){
        decrease(e.target.dataset.decrease)
        
    } else if(e.target.dataset.reset){
        console.log(reset(e.target.dataset.reset))
       
    }else if(e.target.dataset.increase){
        console.log(increase(e.target.dataset.increase))
       
    }


    if(sum > 0) {
        value.style.color = 'green'
    } else if (sum < 0) {
        value.style.color = 'red'
    } else if (sum === 0) {
         value.style.color = 'black'
    }
    render()
})


function increase(){
    return sum++

}

increase()


function decrease() {
   return sum--
}

decrease() 

function reset() {
    return sum = 0
}


function render (){
    value.textContent = sum
}
render()