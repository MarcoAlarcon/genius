$("button").click(async function () {
    var cores = []
    var gameOver = false
    var totalCores = 0
    while (!gameOver) {
        $("#score").html(`ROUND: ${cores.length+1}`)
        $("#turn").html(`VEZ DA MAQUINA`)
        
        if (cores.length > 0) {
            await sleep(1)
            await sequencia(cores)  
        } else {
            await sleep(1)
        }

        adicionaCor(cores)
        await sleep(1)
        $("#turn").html(`SUA VEZ`)
        await vezDoUsuario(cores).then(
            (result) => {
                gameOver = result
                console.log('acertou')
            },
            (reject) => {
                gameOver = reject
                console.log(gameOver)
            }
        )
        totalCores = totalCores + cores.length
        await sleep(1)
    }
    $("#green").trigger("click")
    $("#blue").trigger("click")
    $("#yellow").trigger("click")
    $("#red").trigger("click")
    $("#score").html("GAME OVER")
    $("#turn").html("")
})


function adicionaCor(array) {
    const cores = ['green', 'red', 'blue', 'yellow']

    const botao = Math.floor(Math.random() * 4)

    $(`#${cores[botao]}`).trigger("click")

    array.push(cores[botao])

    return array
}

async function sequencia(array) {
    return new Promise((resolve) => {
        array.forEach((cor, i) => {
            setTimeout(() => {
                $(`#${cor}`).trigger("click")
            }, i * 1500)
            setTimeout(() => {
                if (i === array.length - 1) {
                    resolve()
                }
            }, array.length * 1500)
        })
    })
}

async function vezDoUsuario(array) {
    let escolhasUsuario = []
    return new Promise((resolve, reject) => {
        $('.cor').on('click', (e) => {
            escolhasUsuario.push(e.currentTarget.id)
            if (escolhasUsuario.length === array.length) {
                if (JSON.stringify(escolhasUsuario) === JSON.stringify(array)) {
                    resolve(false)
                } else {
                    reject(true)
                }
            }
        })
    })
}

function mudaCores(seletor, corBase, corBrilho) {
    $(seletor).css("background-color", corBrilho)
    setTimeout(() => {
        $(seletor).css("background-color", corBase)
    }, 1000)
}


async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

$("#green").click(() => mudaCores("#green", "rgb(29, 91, 29)", "rgb(2,170,2)"))
$("#red").click(() => mudaCores("#red", "rgb(176, 4, 4)", "rgb(255,70,70)"))
$("#blue").click(() => mudaCores("#blue", "rgb(0, 0, 205)", "rgb(70,70,255)"))
$("#yellow").click(() => mudaCores("#yellow", "rgb(198, 198, 3)", "rgb(255,255,150)"))
