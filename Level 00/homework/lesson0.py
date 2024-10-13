from turtle import *


#we want to paint a house

#step 1:draw a square
speed(50)
width(7)
color("purple")
forward(200)
left(90)


forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#draw a door
forward(70)
color("brown")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#draw a window right side
penup()
goto(200, 200)
pendown()
right(60)
forward(70)
left(90)
color("black")
forward(60)
left(90)
forward(30)
left(90)
forward(60)
left(90)
forward(30)
left(180)
forward(60)
right(90)
forward(30)
right(90)
forward(60)
left(90)
forward(30)
left(90)
forward(60)
left(90)
forward(30)
#end window right side

#draw window left side
penup()
goto(0, 0)
forward(200)
pendown()

right(90)
forward(60)
right(90)
forward(30)
right(90)
forward(60)
right(90)
forward(30)
right(180)
forward(60)
left(90)
forward(30)
left(90)
forward(60)
right(180)
forward(60)
left(90)
forward(30)
left(90)
forward(30)
#end of left window
#bonus-draw grass
penup()
goto(0,0)
pendown()
color("green")
begin_fill()
left(90)
forward(400)
left(90)
forward(365)
left(90)
forward(790)
left(90)
forward(365)
left(90)
forward(200)
end_fill()
exitonclick()
#end of grass