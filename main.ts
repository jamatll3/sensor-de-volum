if (input.soundLevel() >= 140) {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    }
} else {
    led.plotBarGraph(
    input.soundLevel(),
    150
    )
}
basic.forever(function () {
	
})
