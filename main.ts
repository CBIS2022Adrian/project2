input.onGesture(Gesture.LogoUp, function () {
    happy.showImage(0)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 255, 0, 705, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    scared.showImage(0)
    music.playMelody("- - - - - - - - ", 120)
})
input.onGesture(Gesture.LogoDown, function () {
    music.playMelody("- - - - - - - - ", 120)
})
let scared: Image = null
let happy: Image = null
happy = images.createImage(`
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    . # # # .
    `)
let angry = images.createImage(`
    # . . . #
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    `)
scared = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    # # # # #
    `)
let sad = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    # . . . #
    `)
let sleep = images.createImage(`
    . . . . .
    # # . # #
    . . . . .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
	
})
