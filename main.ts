function Wuerfle () {
    X = randint(5, 8)
    for (let index = 0; index < X; index++) {
        P = randint(1, 6)
        ZeigeWuerfel(P)
        basic.pause(100)
    }
    music.playMelody("E F E F G - - - ", 500)
    ZeigeWuerfel(P)
    return P
}
input.onButtonPressed(Button.A, function () {
    P1 = Wuerfle()
})
function ZeigeWuerfel (num: number) {
    if (num == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (num == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (num == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (num == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("NEUES SPIEL")
    P1 = 0
    P2 = 0
})
input.onButtonPressed(Button.B, function () {
    P2 = Wuerfle()
})
let P2 = 0
let P1 = 0
let P = 0
let X = 0
basic.showString("HALLO")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (P1 > 0) {
        if (P2 > 0) {
            basic.clearScreen()
            music.playMelody("C D E F G A B C5 ", 300)
            basic.pause(1000)
            basic.clearScreen()
            if (P2 > P1) {
                basic.showString("GEWINNER")
                basic.showLeds(`
                    . # # . .
                    . # . # .
                    . # # # .
                    . # . # .
                    . # # . .
                    `)
            } else if (P1 == P2) {
                basic.showString("UNENTSCHIEDEN")
            } else {
                basic.showString("GEWINNER")
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    . # # # .
                    . # . # .
                    . # . # .
                    `)
            }
            music.playMelody("D F E G F A - - ", 300)
            P1 = 0
            P2 = 0
        }
    }
})
