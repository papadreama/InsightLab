
# Math, Music, and Coding Camp
### The Perception of Sound

---
## Introductions
**Let's go around and introduce ourselves**
- Tell us your name, what school you attend, and what grade you're heading into.
- What's your musical background?
- What's your mathematical background? What math classes did you take this past year and what are you taking next?
- Any coding background?
- What are you listening to these days?
- Any other fun facts about you?

---

## Our Plan for the Week
- Each day we're going to look at different musical topics through the lens of mathematics. 
	+ We'll start with the theory in the morning. 
	+ I'll give you some time to work on problems and concepts together (I like to think of this as guided reinvention)
+ We'll also talk about the music theory itself. 
+ We'll use technologies like *Audacity* and *Sonic Pi* to analyze sound, record music, play music, and synthesize sounds.
	+ Using little mini-projects along the way, we'll finish the week with an original composition.


---

### Activity: What is Music?
- Take five minutes and write down some of your thoughts on what defines music as music?
	- What distinguishes **sound** from **music**?
		- Why do some things sound pleasant while others don't? 
		- Why do certain melodies or chords sound happy and others sad?
	- Is music *invented* or *discovered*? How about math?
	- There's a famous piece called 4'33'' by the composer John Cage that is 4 minutes and 33 seconds of silence. Would you call that a musical composition?
- Once you're done, pair up with a neighbor and take some time to discuss your definitions. 

---

## Sound

### Goals for this Section

- Describe and identify the four attributes of sound
- Use logs to describe loudness in decibels
- Compute period and frequency of a sound
- Describe the differences between pitched and non-pitched sounds
- Understand how superposition relates to function operations and timbre

---

### Vibrations Through the Air
- When an object (like your vocal chords or a guitar string) vibrates, it creates waves of higher and lower pressure in the air around it.
+ These waves ripple out from their source the way still water forms ripples when we drop a stone into it.
	+ Let's take a moment to just listen to the sound around us.
	+ If we close our eyes, we create a spacial map of the sources of sounds.
+ Each sound you hear is the result of something disturbing the air around it and those disturbances making their way to your ears.

---

#### The Cocktail Party Effect
- Even in the midst of a crowded, noisy environment, we can pick out sounds! 
+ How wild is that?! 
	+ Even if the room is filled with sounds, which are patterns of vibration all around us, we're able to filer out what we want to hear
	+ [The Cocktail Party Effect Demo](https://www.youtube.com/embed/mN--nV61gDo) 

---

#### Other Auditory Illusions
- As incredible as our perception of sound is, we can be deceived in a few interesting ways. 
	+ The "bar-far" illusion
	+ The Shepard Tone illusion (used in movies a lot)
	+ [YouTube Video on Auditory Illusions](https://www.youtube.com/embed/kzo45hWXRWU)

---

### Waves: Transverse vs Longitudinal 
- You've probably heard the phrase *sound waves*. The image of ocean waves rising and falling might come to mind. 
+ Ocean waves are called *transverse waves.* These are waves that move up and down. Gradations in air pressure create longitudinal waves. 

 ![](/Assets/wavetypes.jpeg)

---

### *How* we Hear
+ Sound waves enter the outer ear and pass through the ear canal where they hit the ear drum
+ Ear drum vibrates, passing those waves along to the malleus, incus, and stapes (three little bones in the middle ear)
+ These bones amplify the vibrations and send them to the cochlea, a tube filled with fluid and a partition called the basilar membrane. 
+ The amplified vibrations create ripples in the cochlear fluid, which create waves on the basilar membrane
+ Ultimately, the cochlea generates a spectrum of higher and lower vibrations into electrical signals for the brain to interpret.

---

![](Assets/earanatomy.jpg)

---

## Four Main Attributes of Sound

+ **Loudness dB:** The loudness of a sound corresponds to the *amplitude* of a sound wave. In a transverse wave, the amplitude is the height of the wave (as measured from the center). Measured in decibels (dB)
+ **Pitch:** We use the word pitch to refer to the "highness" or "lowness" of a sound. It corresponds to frequency. Measured in Hertz (Hz)
+ **Duration:** How long a sound lasts. Measured in seconds (s)
+ **Timbre:** The hardest to define. It's *quality* of a sound. It's what you perceive when two people sing the same exact notes but you can tell them apart. It's the fingerprint of a sound. No units.

---

### Loudness: Logarithms & Decibles

+ Our ears can register sounds ranging from a soft whisper to a jet engine taking off
+ *We often use ==logs== when a dealing with a large range of values* 
+ Decibels are computed as follows
+ $$dB = 10 \log_{10}\left( \frac{I}{I_{0}} \right)$$
	+ Here, $I$ represents *sound intensity* and $I_0 = 1 \times 10^{-12}$ watts/m$^{2}$ 
	+ $I_0$ is the *threshold of human hearing* 

---

#### Reviewing Logs

+ *Logarithms* are defined as the *inverses of exponential functions*
+ $$\log_{b}A = C \Longleftrightarrow b^{C} = A$$
	+ e.g., $\log_{2}8 = 3$ because $2^{3} = 8$ 
+ Let's compute a few logs: $\log_{2}(1/32)$, $\log_{5}(625)$, $\log_{10}(\sqrt{10})$, $\log_{10}(0)$
	+ $\log_{2}(1/32) = -5$ because $2^{-5} = 1/32$
	+ $\log_{5}(625) = 4$ because $5^{4} = 625$
	+ $\log_{10}(\sqrt{10}) = \frac{1}{2}$ because $10^{1/2} = \sqrt{10}$
	+ $\log_{10}(0)$ is *undefined* because there's no solution to $10^{x} = 0$ 

---

#### Loudness

+ What exactly do we mean when we say $I$ represents intensity in our formula? $$dB = 10 \log_{10}\left( \frac{I}{I_{0}} \right)$$
+ Let's define $I$ to be a multiple of $I_0$: $I = dI_0$ 
	+ $dB = 10 \log_{10}\left( d \right)$ 
	+ **Raising a sound intensity by a factor of $d$ amounts to adding $10 \log_{10}(d)$ dB** 
+ Say we increase the intensity of a sound by a factor of 100. How many decibels is that?
	+ $10 \log_{10}(100) = 10 \cdot 2 = 20$ dB


---

#### Examples

| Sound                      | Decibels |
| -------------------------- | -------- |
| Threshold of human hearing | 0 dB     |
| Whisper                    | 15 dB    |
| Mosquito buzz              | 40 dB    |
| Regular conversation       | 60 dB    |
| Jackhammer                 | 100 dB   |
| Rock concert               | 120 dB   |
| Threshold of pain          | 130 dB   |
| Jet engine at 30 meters    | 150 dB   |
+ Based on our previous calculation, the sound intensity of a regular conversation is 100 times greater than a mosquito buzz.

---

#### More Examples

$$dB = 10 \log_{10}\left( d \right)$$
1. If we increase the intensity of a sound by a factor of 4, how many decibels is that?
2. If we increase the intensity of a sound by a factor of 200, how many decibels is that?
3. If we turn the volume down by 5 dB, by what factor does the intensity change?

+ 1. $10\log_{10}(4) = 6.021\ dB$ 
+ 2. $10\log_{10}(200) = 23.01\ dB$
+ 3. $-5 = 10\log_{10}(d) \Longrightarrow -\frac{1}{2} = \log_{10}(d) \Longrightarrow d = 0.31622777$ 

---

##### How many times louder than a mosquito is a jet engine?

+ $150 - 40 = 10 \log_{10} d$
+ $110 = 10 \log_{10} d$
+ $11 = \log_{10}d$
+ $d = 10^{11}$ (remember that $\log_{b}A = C \Longleftrightarrow b^{C} = A$)
+ $d = 100,000,000,000$ 

---

### Pitched Sounds
- We can split the sounds we hear into two main types: pitched and not pitched. 
+ A pitched sound is one that you can sing, whistle, or hum along with. 
	+ Singing is pitched. The sound of a vibrating guitar string is pitched. 
	+ An ambulance siren is pitched. 
+ Conversely, clapping is not pitched. The sound of rocks hitting the ground is not pitched.
+ **Exercise:** *Write down three examples of pitched sounds and three examples of non pitched sounds, none of which come from musical instruments.*

---

#### What makes a pitched sound pitched?


![](Assets/snare_wave%201.png)

![](Assets/piano_wave%201.png)

---

![](Assets/banjo_wave.png)

![](Assets/tamborine_wave.png)

---

#### What makes a pitched sound pitched?
+ Answer: Pattern
+ Our brain is like the ultimate patter finding engine 
+ We perceive pitch when there's a repeating pattern to the vibrations our ears pick up and a non-pitched sound when there's no such repeating pattern
	+ **Pitch is a perception that results from a vibration that is _periodic_** within a certain range of frequencies
		+ For humans, it's 20 - 20,000 Hz (vibrations per second)
		+ Below 20 Hz we hear rhythm; over 20, 000 Hz we hear nothing (like a dog whistle)
		+ If we play any sound fast enough, it becomes pitched
			+ We'll do this in Sonic Pi a little later

---

| Mammal  | Hearing Range (Hz) | Instrument | Freq. Range (Hz) |
| ------- | ------------------ | ---------- | ---------------- |
| Human   | 20 - 20,000        | Piano      | 27 - 4186        |
| Dog     | 50 - 46,000        | Violin     | 196 - 3520       |
| Dolphin | 1000 - 130,000     | Tuba       | 40 - 440         |
| Bat     | 2000 - 110,000     | Soprano    | 262 - 1047       |
| Gerbil  | 100 - 60,000       | Bass       | 80 - 330         |

---

#### Frequency and Period
Two very important definitions

+ **Period:** The length of time of instance of the smallest repeating part of a repeating pattern. We refer to the portion of a pattern that takes up one period as a *cycle.*
+ **Frequency:** The frequency of a repeating pattern is the number of times it repeats in a second.
+ $\text{Frequency } = \frac{1}{\text{Period}} \quad \text{Period } = \frac{1}{\text{Frequency}}$

---

![](Assets/sinecomponents.png)


---

#### Zooming in on our Piano Waveform
![|600](Assets/piano_waveform_period.png)

$$
\begin{aligned}
\text{Period } &\approx 0.08975 - 0.08755 \approx \boxed{0.0022 \text{ seconds}}\cr
\text{Frequency } &\approx \frac{1}{0.0022}\approx \boxed{454.5 Hz}\end{aligned}
$$

---

#### Superposition & Timbre
- When two waves move through the same medium at the same time, the result of two concurrent waveforms is the sum of the two waveforms.
+ We can think of a waveform as a function of time. 
+ If we have two functions $f$ and $g$, their sum $f + g$ is a new function whose output at each point in time is the sum of the outputs of $f$ and $g$.
+ If we call the resultant wave $h$, then $h(t) = f(t) + g(t)$


---

![|600](Assets/sum_of_sinewaves.png)

Red: $f(t)$, Blue: $g(t)$ Purple: $h(t)$

---

#### Activity/Demo: Noise Cancellation
+ Based on what we've said so far, if we start with a wave form, $f(t)$, what do we have make $g(t)$ to get $h(t) = f(t) + g(t) = 0$ (silence)?
+ Answer: $g(t) = -f(t)$, so that $h(t) = f(t) - f(t) = 0$. 
+ This is how noise cancelling headphones work. 
+ *Straight from Bose's website:* Noise cancelling headphones monitor the sound around you, preventing the unwanted noise from ever reaching your ears. Miniature microphones in the earcups or earbuds listen to the outside noise frequencies and emit the exact opposite signal to effectively “cancel out” both sets of sounds when the soundwaves collide.
+ **This also highlights the fact that we don't perceive *phase***

---

#### Activity/Demo: Beats Phenomenon
+ What happens when we add two sine waves with two different frequencies?
+ How do we make a sine wave with a frequency of $f_1$?
	+ $f(t) = \sin(2\pi f_1 t)$
	+ Let's make $g(t) = \sin(2\pi f_2 t)$
+ Use the trig identity $\sin(A) + \sin(B) = 2\sin(\frac{A+B}{2})\cos(\frac{A-B}{2})$
 
---

+ $f(t) + g(t) = \cdots$
+ $\sin(2\pi f_1 t) + \sin(2\pi f_2 t) = \cdots$ 
+ $2\sin\left(\frac{2\pi f_1 t+2\pi f_2 t}{2}\right)\cos\left(\frac{2\pi f_1 t-2\pi f_2 t}{2}\right)= \cdots$
+ $2\sin\left(\frac{2\pi(f_1+f_2)t}{2}\right)\cos\left(\frac{2\pi(f_1-f_2)t}{2}\right)= \cdots$
+ Now, we have the product of two waves. What are their frequencies?
	+ A: $(f_1 + f_2)/2$ and $(f_1 - f_2)/2$
+ What we hear if $f_1$ and $f_2$ are close:
	+ A frequency of $(f_1 + f_2)/2$ (the average)
	+ Beating at a rate of $f_1 - f_2$
		+ Why not $(f_1 - f_2)/2$?

---

### Timbre & Overtones
+ We've seen that when we add periodic functions, we get a new periodic function.
+ A mathematician named Jean-Baptiste Joseph Fourier (1768 – 1830) showed that *any periodic function can be decomposed into an infinite sum of sines and cosines*
+ For a periodic function with period $T$, we get
+ $\displaystyle f(x) = \frac{a_0}{2} + \sum_{k=1}^{\infty}\left(a_k\cos\left(\frac{2\pi k x}{T}\right) + b_k\sin\left(\frac{2\pi k x}{T}\right)\right)$
+ What does this mean for us?

---

#### Overtones
+ We've already said that every *pitched sound* comes from a periodic waveform
+ Every one of those waveforms can be decomposed into a set of sines and cosines
	+ The lowest frequency is called the *fundamental frequency*
	+ That's what we hear as pitch
	+ The higher ones are called *overtones*
+ The *overtones* of a pitched sound are **integer multiples** of the fundamental frequency
+ So, if you sing a frequency of 200 Hz, you're also generating frequencies of 400 Hz, 600 Hz, 800 Hz, 1000 Hz, ... 
	+ Here, we say that 200 Hz is the **fundamental frequency**

---

#### Examples

- List the first 5 overtones for each of the following frequencies
	- 220 Hz
	- 350 Hz
- Find the *fundamental frequency for the following sets of overtones:*
	- 500 Hz, 750 Hz, 1000 Hz, 1250 Hz, 1500 Hz
	- 180 Hz, 270 Hz, 360 Hz, 450 Hz, 540 Hz

---

#### The Mystery of the Missing Fundamental 

- Our ears and brains are so well-calibrated to hear and interpret overtones, that even if we take away the fundamental frequency, we still perceive the same pitch. 
+ This can also result in hearing lower pitches by adding ==higher== frequencies!
+ Let's try it...

---

#### Timbre
+ Different instruments and sources of pitched sound have different overtone patterns
+ The unique overtone pattern creates the perception of pitch
	+ The basilar membrane acts like our inner EQ by picking up all of those frequencies
+ Let's look at some overtones


