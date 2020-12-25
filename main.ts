function 第三段 () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(880, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
function 第七段 () {
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Double))
    music.playTone(784, music.beat(BeatFraction.Double))
    music.playTone(698, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Double))
}
function rvm1218_2 () {
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
}
input.onSound(DetectedSound.Loud, function () {
    if (light2 > 120) {
        第一段()
        第二段()
        第一段()
        第三段()
        第四段()
        第五段()
        第六段()
        第七段()
        第八段()
        第四段()
    }
    rvm1218_1()
    rvm1218_2()
    rvm1218_3()
    rvm1218_4()
    rvm1218_5()
    rvm1218_6()
    rvm1217_1()
    rvm1217_2()
    rvm1217_3()
    rvm1217_4()
    rvm1217_5()
})
function rvm1217_4 () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
}
function rvm1218_3 () {
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
}
function rvm1217_1 () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
}
function 第六段 () {
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
function 第八段 () {
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.pause(2000)
}
function 第二段 () {
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function rvm1218_1 () {
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
}
function 第五段 () {
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
}
function rvm1218_5 () {
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Whole))
}
function rvm1217_2 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
}
function rvm1218_6 () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Breve))
    music.playTone(262, music.beat(BeatFraction.Double))
}
function 第四段 () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
function rvm1218_4 () {
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
}
function rvm1217_3 () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
}
function rvm1217_5 () {
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
function 第一段 () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
let light2 = 0
music.setTempo(199)
basic.forever(function () {
    light2 = input.lightLevel()
    if (light2 > 120) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # . .
            . . . # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
