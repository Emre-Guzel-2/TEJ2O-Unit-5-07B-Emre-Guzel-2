/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 23 2024
 * This program turns on sevro motor and teels you the distance it is moving 
*/

// Setting up my veribles 
const servoNumber1 = robotbit.Servos.S1

// setting program
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Turning on my servo motor
input.onButtonPressed(Button.A,function(){
    robotbit.Servo(servoNumber1,0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// Setting the distance of the servo 
input.onButtonPressed(Button.B,function(){
    robotbit.Servo(servoNumber1,180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

