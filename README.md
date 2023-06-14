#working-clock
The html is pretty striaghtforward,and i inserted a plugin to normalize the css across all browsers
the css numbering was pulled off google but the clock-hands were written with css
with javascript,the second-hand rotations is calculated to obtain the degree(the seconds hand completes a rotation every 60 seconds,so we multiply `seconds` by `6`)
the minute-hand rotation is calculated to obtain the degree(the minute-hand completes a rotation every 60 minutes,so we multiply `minutes`by `60` + `0.1` * `seconds`..(the additional seconds accounts for teh partial rotation of the minute-hand based on the seconds elapsed within the current minute))
the hour-hand rotation is calculated to obtain the degree(the hour-hand completes a rotation every 12 hours,which is why i used `hours`%`12`*`30`to give us the degree the hour hand should rotate every hour)

the actual rotation is done using the setInterval method,set to 1 second(1000)