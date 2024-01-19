$("button").click( async function () {
    var cores = ["green","green","red"]
    var gameOver = false
    console.log('comecou')
    await sequencia(cores)
    console.log('adiciona cor')
    adicionaCor(cores)
    console.log(cores)
    console.log('finalizado')
    // for (i = 0; i < 3; i++) {
    //     if (cores.length > 0){
    //         await sequencia(cores)
    //     }
    //     adicionaCor(cores)
    //     console.log(cores)
    //     console.log('----')
    //     await sleep(5)
    //     gameOver = true
    // }
})


function adicionaCor(array) {
    const cores = ['green', 'red', 'blue', 'yellow']

    const botao = Math.floor(Math.random() * 4)

    $(`#${cores[botao]}`).trigger("click")

    array.push(cores[botao])
    
    return array
}

//  async function sequencia(array) {
//     array.forEach((cor,i) => {
//         setTimeout(() => {
//             $(`#${cor}`).trigger("click")
//         }, i*1200)
//     })
// }

async function sequencia(array) {
    return new Promise( (resolve) => {
        array.forEach((cor,i) => {
            setTimeout(() => {
                console.log(array)
                $(`#${cor}`).trigger("click")
            }, i*1500)
            setTimeout(() => {
                if (i === array.length-1){
                    resolve()
                }
            },array.length*1500)
        })
    })
}

function mudaCores(seletor, corBase, corBrilho) {
    $(seletor).css("background-color", corBrilho)
    setTimeout(() => {
        $(seletor).css("background-color", corBase)
    }, 1000)
}


async function sleep(seconds){
    return new Promise((resolve)=> setTimeout(resolve, seconds * 1000))
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