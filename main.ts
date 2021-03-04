let Number2 = randint(1, 3)
basic.forever(function () {
    basic.showNumber(Number2)
    if (Number2 == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (Number2 == 2) {
        basic.showIcon(IconNames.Giraffe)
    }
    if (Number2 == 3) {
        basic.showIcon(IconNames.Chessboard)
    }
})
