enum RadioMessage {
    message1 = 49434,
    Stop = 61268
}
let Msg = 0
let Send = 0
let RadGroup = 0
let MsgStr = ""
input.onButtonPressed(Button.A, function () {
    Msg = Msg + 1
    basic.showString("" + (Msg))
})
input.onButtonPressed(Button.AB, function () {
    Send = 1
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    RadGroup = RadGroup + 1
    basic.showString("" + (RadGroup))
})
basic.forever(function () {
    if (Send == 1) {
        radio.sendString(MsgStr)
        Send = 0
    }
})
basic.forever(function () {
    if (Msg > 5) {
        Msg = 1
    } else if (Msg < 0) {
        Msg = 1
    }
    if (RadGroup > 3) {
        RadGroup = 1
    } else if (RadGroup < 1) {
        RadGroup = 1
    }
})
basic.forever(function () {
    radio.setGroup(RadGroup)
    if (Send == 1) {
        radio.sendString(MsgStr)
        Send = 0
    }
})
basic.forever(function () {
    if (Msg == 1) {
        MsgStr = "Hello"
    } else if (Msg == 2) {
        MsgStr = "Yes"
    } else if (Msg == 3) {
        MsgStr = "No"
    } else if (Msg == 4) {
        MsgStr = "in Class?"
    } else if (Msg == 5) {
        MsgStr = ":)"
    }
})
