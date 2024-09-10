
# Pythagorean Tuning

---
### Introduction
*In the sixth century BCE, Pythagorus discovered a remarkably simple way to generate pleasing sounds:* 
+ First, take two strings of equal thickness and place them under equal tension. 
+ If the ratio of the lengths of the two strings can be expressed with small integer values, the sound that results when the two are played together will be pleasing to the ear. 
+ For example, if the strings are of lengths 40 cm and 20 cm, the ratio is $2:1$
+ If the strings are of lengths 30 cm and 20 cm, the ratio is $3:2$. In both cases, we'll get a very pleasing sound if we play the strings simultaneously
+ These two ratios form the basis for the Pythagorean scale - $2:1$ and $3:2$

---

### Basic Building Blocks
+ An *octave* will refer to a ratio of 2:1.
+ A *perfect fifth* will refer to a ratio of 3:2.
+ A *scale* is a collection of notes, usually ordered by frequency or pitch.
+ Our goal will be to build the Pythagorean scale/tuning system from scratch and then play around with it in *Sonic Pi*
+ We have two rules:
	+ **Multiplying by 2 or 1/2** gives us the **same note**
	+ **Multiplying by 3/2 or 2/3** gives us a **new note**
	+ Repeat as many times as we like

---

#### Getting started
+ We want to create a set of fractions between 1 and 2 (within one *octave*). We'll call 1 our *root*
+ We already have 3/2, which is the perfect fifth ![](Assets/PythNumLine2.png)
+ Now, if we multiply 3/2 by 3/2, we get 9/4. But 9/4 is outside our octave. So, we multiply it by 1/2 to get 9/8 ![](Assets/PythNumLine3.png)
+ Next, multiply 9/8 by 3/2 to get 27/16 ![](Assets/PythNumLine4.png)

---

![](Assets/PythNumLine4.png)

*Keep going until you get at least 7 notes...*

---

### Coding our Pythagorean Scales
Type the following into Sonic Pi and hit Run

```ruby
p = [1, 9/8.0, 81/64.0, 3/2.0, 27/16.0, 2.0]
f = 200 # pick a starting frequency

define :N do |i|
  hz_to_midi(f*p[i])
end

p.length.times do |j|
  play N(j)
  sleep 0.5
end
```

---

#### More Stuff to Try
- Use a different synth
```ruby
p.length.times do |j|
	with_synth :fm do
	    play N(j)
		sleep 0.5
	end
end
```

- Play notes simultaneously outside of a loop by omitting the `sleep` command
```ruby
play [N(0), N(2), N(3)]
```
- Hold notes longer with the sustain parameter
```ruby
play [N(0), N(2), N(3)], sustain: 3
```

---

