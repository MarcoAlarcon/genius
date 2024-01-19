$("button").click(function () {
    var cores = []
    var gameOver = false
    for (i = 0; i < 1; i++) {
        if (cores.length > 0){
            console.log(cores)
            sequencia(cores)
        }
        adicionaCor(cores)
        console.log(cores)
        gameOver = true
    }
})


function adicionaCor(array) {
    const cores = ['green', 'red', 'blue', 'yellow']

    const botao = Math.floor(Math.random() * 3)

    $(`#${cores[botao]}`).trigger("click")

    array.push(cores[botao])

    return array
}

function sequencia(array) {
    if (array.length > 0) {
        array.forEach((cor) => {
            setTimeout(() => {
                $(`#${cor}`).trigger("click")
            }, 1000)
        })
    }
}

function mudaCores(seletor, corBase, corBrilho) {
    $(seletor).css("background-color", corBrilho)
    setTimeout(() => {
        $(seletor).css("background-color", corBase)
    }, 1000)
}

$("#green").click(() => mudaCores("#green", "green", "rgb(2,170,2)"))
$("#red").click(() => mudaCores("#red", "red", "rgb(255,70,70)"))
$("#blue").click(() => mudaCores("#blue", "blue", "rgb(70,70,255)"))
$("#yellow").click(() => mudaCores("#yellow", "yellow", "rgb(255,255,150)"))

// function vezDaMaquina(round,array){
//     const cores = ['green','red','blue','yellow']
//     for (i = 0; i<round; i++) {
//         const botao = Math.floor(Math.random()*3) 
//         console.log(botao)
//         $(`#${cores[botao]}`).trigger("click")
//         array.push(cores[botao])
//     }
//     return array
// }