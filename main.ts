input.onButtonPressed(Button.A, function () {
    animalhumano = randint(1, 3)
    basic.showNumber(animalhumano)
    basic.showIcon(IconNames.SmallDiamond)
    animalmaquina = randint(1, 3)
    basic.showNumber(animalmaquina)
    basic.showIcon(IconNames.SmallDiamond)
    while (animalmaquina == animalhumano) {
        animalmaquina = randint(1, 3)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showNumber(animalmaquina)
    }
    rodada = rodada + 1
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    escolha = randint(1, 3)
    basic.showNumber(escolha)
    basic.pause(1000)
    if (animalhumano == escolha) {
        basic.showLeds(`
            . # # # #
            . . . # .
            . . . # .
            . # . # .
            . . # . .
            `)
        pontoshumano = pontoshumano + 1
        basic.pause(1000)
        basic.showNumber(pontoshumano)
    } else if (animalmaquina == escolha) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
        pontosmaquina = pontosmaquina + 1
        basic.pause(1000)
        basic.showNumber(pontosmaquina)
    } else {
        basic.showIcon(IconNames.No)
    }
    if (rodada == 3 && pontoshumano > pontosmaquina) {
        basic.showLeds(`
            . # # # #
            . . . # .
            . . . # .
            . # . # .
            . . # . .
            `)
    } else if (rodada == 3 && pontoshumano < pontosmaquina) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
})
let rodada = 0
let pontosmaquina = 0
let pontoshumano = 0
let escolha = 0
let animalmaquina = 0
let animalhumano = 0
animalhumano = 0
animalmaquina = 0
escolha = 0
let i = 1
pontoshumano = 0
pontosmaquina = 0
rodada = 0
