input.onGesture(Gesture.Shake, function () {
    strip.setPixelColorRange(0, neopixel.hsv_picker(randint(1, 220)), 20)
    strip.setPixelColorRange(20, neopixel.hsv_picker(randint(1, 220)), 20)
    strip.setPixelColorRange(40, neopixel.hsv_picker(randint(1, 200)), 20)
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(HiwonderPins.P2, 60, PowerSource.Extern)
