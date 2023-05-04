input.onGesture(Gesture.Shake, function () {
    strip.showColor(neopixel.rgb(randint(1, 255), randint(1, 255), randint(1, 255)))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(HiwonderPins.P2, 60, PowerSource.Extern)
