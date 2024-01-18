$("button").click( function() {
    $("#blue").trigger("click")
})

$("#green").click( () => {
    $("#green").css("background-color","rgb(2,170,2)")
    setTimeout(() => {
        $("#green").css("background-color","green")
    },1000)
})

$("#red").click( () => {
    $("#red").css("background-color","rgb(255,70,70)")
    setTimeout(() => {
        $("#red").css("background-color","red")
    },1000)
})

$("#blue").click( () => {
    $("#blue").css("background-color","rgb(70,70,255)")
    setTimeout(() => {
        $("#blue").css("background-color","blue")
    },1000)
})

$("#yellow").click( () => {
    $("#yellow").css("background-color","rgb(255,255,150)")
    setTimeout(() => {
        $("#yellow").css("background-color","yellow")
    },1000)
})



// function start(){
//     roundMaquina()
// }

// function roundMaquina(){

//     $('#green').trigger("click")
//     // let green = document.getElementById('green')
//     // const mouseover = new Event('mouseover')
//     // const mouseout = new Event('mouseout')

//     // green.addEventListener("mouseover", () => {
//     //     green.style.transition = '400'
//     //     green.style.backgroundColor = 'lightgreen'
//     // })

//     // green.addEventListener("mouseout", () => {
//     //     green.style.backgroundColor = 'green'
//     // })

//     // green.dispatchEvent(mouseover)
//     // // setInterval( () => {
//     // //     green.dispatchEvent(mouseout)
//     // // }, 1000)
// }

// function geraCores(Cores){
//     for (i = 0; i < Cores; i++) {
//         console.log('teste')
//     }
// }