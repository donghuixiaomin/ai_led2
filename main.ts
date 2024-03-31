let L = 0
let R = 0
Microbit.init()
let strip = Microbit.create(Write_pin.w0)
strip.showRainbow(1, 360)
basic.forever(function () {
    R = Microbit.ReadLightIntensity(Read_pin.r2)
    L = Math.map(R, 0, 1024, 0, 256)
    Microbit.showNumber(Oled.oled1, R)
    Microbit.showNumber(Oled.oled27, L)
    strip.showColor(Microbit.colors(NeoPixelColors.White))
    strip.setBrightness(L)
    basic.pause(100)
})
