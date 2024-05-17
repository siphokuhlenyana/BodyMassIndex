let weight=document.getElementsByTagName('input')[0]
let height=document.getElementsByTagName('input')[1]
// let bmi=document.getElementsByTagName('h2')[2]
let button=document.getElementsByTagName('button')[0]
let answer=document.getElementsByTagName('input')[2]
let clear=document.getElementsByTagName('button')[1]

button.addEventListener('click',()=>{
    bmi()
    if (answer.value<18.5){
        alert("You are underweight")
    } else if (answer.value>=18.5 || answer.value<=24.9){
        alert("Normal weight")
    } else if (answer.value>25.0 || answer.value<=29.9){
        alert("Overweight")
    }else {
        alert("Obese")
    }
})


function bmi(){
   answer.value =  weight.value/(height.value)**2
}



clear.addEventListener('click',del)

function del(){
    weight.value=''
    height.value=''
    answer.value=''

}

// if (bmi<18.5){
//     alert("You are underweight")
// } else if (bmi>=18.5 && bmi<=24.9){
//     alert("Normal weight")
// } else if (bmi>25.0 && bmi<=29.9){
//     alert("Overweight")
// }else {
//     alert("Obese")
// }