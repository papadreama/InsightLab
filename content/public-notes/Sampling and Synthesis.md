
# Sampling and Synthesis
---
## Introduction
+ The move from analogue to digital is a move from the continuous to the discrete. 
+ When we think of sound as we experience it in the day-to-day, and, now, the waveforms we associate with that sound, we think of something continuous (which can be decomposed into a bunch of sine waves a la Fourier). 
+ To digitize such an analog signal, we *sample* the signal many times per second, and then use a **binary number** to represent the height of the signal at each sample time.

---

### Binary Numbers
+ To express numbers in Base-2, we only need two digits: 0 and 1
+ Each "place" represents a power of two rather than a power of 10
	+ Example: $10111_2$ (We'll put a subscript of 2 to denote base-2)

| $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |
| ----- | ----- | ----- | ----- | ----- |
| 1     | 0     | 1     | 1     | 1     |
<!-- element class="fragment" -->

$$10111_2 = 16 + 0 + 4 + 2 + 1 = 23$$
<!-- element class="fragment" -->


---

#### Practice
Convert each of the following binary numbers to base-10

- $100001$
- $111$
- $10010$
- $10110.11$

Convert each of the following numbers to binary

- $13$
- $46$
- $135$ 

---

### Hexadecimal
+ The hexadecimal system is Base-16
	+ 0-9 plus A B C D E F where A = 10, B = 11, C = 12, D = 13, E = 14, and F = 15. 
	+ You can also use lower case a b c d e f. Hex numbers are usually prefixed or suffixed to distinguish them from decimal numbers. 
	+ A common convention is to prefix hex numbers with a dollar sign $. Another common convention is to prefix hex numbers with zero x like 0xFAD.
+ Used for colors, especially in Web design: `#RRGGBB`
	+ Each color (red, green, blue) gets two Hex digits

---

#### Practice
+ Convert $1A8_{16}$ to Base-10
	+ $1\cdot 16^{2} + 10 \cdot 16^{1} + 8 = 424$
+ Convert `#17cfc8` to RGB values in Base-10
+ Convert $10110101_2$ to Hex
 

---
## Sampling
---

### Sample Rate
- The **sample rate** is the **number of samples of the analogue sound wave taken per second**. This frequency is measured in Hertz (Hz).
+ The sample interval is the time period between each sample. It is therefore the reciprocal of the sample rate – as the sample interval decreases, the sample rate increases.
+ For an audio compact disk (CD) the sampling rate is 44.1KHz or 44100 samples per second so the sample interval would be the reciprocal of this so about 0.024 Milliseconds. At this sample rate, 1 minute of audio would use 10Mb of memory (using 16 bit rate sampling).


---

![](Assets/audio_sample_high.gif)

Notice that, to eliminate the gaps, we "hold" each sample. The result is a "staircase curve."

---

### Nyquists's Theorem
+ It turns out, there is a limit to what frequencies can be sampled with a given sample rate. More specifically, the maximum frequency that can be sampled with sample rate $N$ is $N/2$ (the Nyquist frequency). 
	+ So this means that with a sample rate of 44,100 Hz, we can only sample frequencies up to 22,050 Hz. Conveniently, this is greater than the maximum frequency that we’re able to perceive.
+ This fact is pretty easy to demonstrate with some trigonometry. Consider the sinusoid $f(t)=A\cos{(2\pi \nu t)}$ Suppose we have sample rate $N=1/\Delta t$. Then the height of the function at the $M$-th sample point is given by 
	+ $f(t)=A\cos{(2\pi \nu M/N)}$

---

+ Let's plug in a frequency greater than $N/2$ and make the amplitude 1
+ Set $\nu = N/2 + \alpha$ and $A = 1$
+ $f(t)=\cos{(2\pi (N/2 + \alpha) M/N)}$
+ $\cos{(2\pi (N/2 + \alpha) M/N)} = \cos\left(\pi M + \frac{2M\alpha\pi}{N}\right)$
+ Apply trig ID: $\cos(A+B) = \cos(A)\cos(B) - \sin(A)\sin(B)$
+ $\cos\left(\pi M + \frac{2M\alpha\pi}{N}\right) = \cos\left(\pi M\right)\cos\left(\frac{2M\alpha\pi}{N}\right) - \sin\left(\pi M\right)\sin\left(\frac{2M\alpha\pi}{N}\right)$
	+ $\sin\left(\pi M\right) = 0$ and $\cos\left(\pi M\right) = (-1)^{M}$ 
+ $f(t) = (-1)^{M}\cos\left(\frac{2M\alpha\pi}{N}\right)$
+ Since $\cos(A-B) = \cos(A)\cos(B) + \sin(A)\sin(B)$, if we did the same calculation for $f(t)=\cos{(2\pi (N/2 - \alpha) M/N)}$ we would get the **same answer.** 

---

### Bit Rate
+ The bit rate describes the number of memory bits that are used to store each sound sample.
	+ How many sound levels can we record with 1 bit? 2 bits? 3 bits?
+ As the bit rate becomes higher, the number of different levels it is possible to record becomes greater and the closer the value stored in binary will be to the actual value that was sampled so the quality of the recording improves.
+ An audio compact disk (CD) uses 16 bit rate sampling...
	+ which in theory gives 65,536 different levels of sound

---

### Dithering
+ Dithering is the process of adding noise to a signal before reducing the resolution of the sample in order to reduce the loss of information. 
+ When we truncate word length, that is, the number of digits in the binary number used to capture the sampled values, we end up with loss of information and distortion. 
	+ This is a technique used in both sound and image digitization. Let's look at a visual example first.

---

![](Assets/ditherimg1.png)

---
If we reduce each pixel to 0 or 1 (black or white), we get this


![](Assets/ditherimg2.png)

---

Add noise

![](Assets/ditherimg3.png)

---
Now, *compress* to 2-bit depth (no loss of information!)

![](Assets/ditherimg4.png)

---

### Audio Dithering

<iframe width="560" height="315" src="https://www.youtube.com/embed/cLnuoQ6pIKk?si=Ad3uGptnN4lWCoil" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Working with Recorded Sounds

Envelopes and Filters

---

- Consider just about any instrument you can think of - there's likely a clearly defined *attack* at the beginning of the sound, followed by some *decay* in the sound, then a sustained middle part, and finally a release.
- Notice that for different acoustic instruments, the overall shapes of the waveforms they generate differ a lot:

<img src="../Assets/examplewaveforms.jpg" height="400px">

---

The **attack/decay/sustain/release (ADSR)** envelope refers to the overall shape. Of course, some instruments might lack some of these (e.g. some percussion instruments might have little sustain).

<img src="../Assets/ADSR.png" height="300px">

+ \* As we began to notice when electronic synthesis first began taking off in the mid twentieth century, the attack portion of a note plays the most significant role for our ears in identifying the instrument we're hearing.

---

### Activity: Modifying Samples
- In Sonic Pi, pick one of the built in loops
- Use the `onset` option to pick out three or four samples to build a drum kit
- Apply ADSR, `rpitch`, `rate`, and other functions to make it interesting
- Play a beat using your sampled kit

---
### Activity: Importing Sounds
- Record some sounds and import them into Audacity
	- Clean up the sound by cutting away any extra noise or silence
	- Experiment with some of the effects
- Save as a WAV file in an easily accessible folder
- Make a beat using only samples in Sonic Pi
	- We'll all use the same rhythm to compare our beats
	- Apply ADSR, `rpitch`, `rate`, and other functions to make it interesting
	- Mix in some built-in samples 

---

## Synthesis

---

### Musical Instrument Digital Interface
+ The MIDI standard defines and explains many of its messages and data formats in hex format. 
+ Understanding hex bytes are essential to understanding MIDI. 
+ For example the MIDI code to turn a note on is a two hex digit code. The first digit is always 9 and the second digit can range from 0-F that represents one of the 16 MIDI channels. 
+ All MIDI codes are two hex digits.

---

### Bits and Bytes
+ A bit is a single binary digit, a one or a zero. 
+ A byte is eight bits or two hex digits. 
+ Modern computers process data most efficiently in one, two, four byte, and eight byte units. 
	+ You may have heard the terms 32 bit operating system or a 64 bit operating system. 
	+ That tells you the optimal data processing size of the system. 
	+ A 32 bit system processes data in four byte chunks and a 64 bit system processes data in eight byte chunks.

---

### Data Bytes and Status Bytes

| Message     | Status 80 - FF | Bytes | Data 1      | Data 2             |
| ----------- | -------------- | ----- | ----------- | ------------------ |
| Note Off    | 8n             | 2     | Note Number | Velocity (ignored) |
| Note On     | 9n             | 2     | Note Number | Velocity           |
| After-touch | An             | 2     | Note Number | Pressure Value     | 

E.g., 9n - 3C - 50 plays a C (60) with velocity 80

---

### Additive Synthesis
+ Recall that Jean-Baptiste Joseph Fourier (1768 – 1830) showed that *any periodic function can be decomposed into an infinite sum of sines and cosines*
+ For a periodic function with period $T$, we get
	+ $f(x) = \frac{a_0}{2} + \sum_{k=1}^{\infty}\left(a_k\cos\left(\frac{2\pi k x}{T}\right) + b_k\sin\left(\frac{2\pi k x}{T}\right)\right)$
+ We can apply this principle in reverse to synthesize sounds

---

### Activity: Build an additive synth
- Use a mix of sine, square, triangle, and saw synths to build an additive synth
- Make it a function so that you can play various pitches with it
- Apply ADSR parameters to each individual synth
- Add FX

---

### FM Synthesis
+ With additive synthesis, we “manually” add up a bunch of sine oscillators
	+ Inefficiency: computationally expensive to generate rich, complex timbre
+ Frequency Modulation Synthesis will allow us to generate rich overtone series with only a small number of oscillators
+ Consider periodic functions of the form:
	+ $f(t) = sin(2\pi f_c t + D \sin(2\pi f_m t))$ 
+ Fourier Analysis: For the frequency modulated signal with carrier $f_c$ and modulating frequency $f_m$, the frequencies present are $f_c +nf_m$ 

---

#### YAMAHA DX7 - The OG
+ First affordable, commercially available FM synth 1983
+ Collaboration between John Chowning and Yamaha Composer, musician, inventor
	+ Invented FM Synthesis while at Stanford

![](Assets/Screenshot%202023-07-13%20at%208.32.55%20AM.png)

---

![](Assets/Screenshot%202023-07-13%20at%208.33.35%20AM.png)

---
[Online FM Synth](https://www.taktech.org/takm/WebFMSynth/)
![](Screenshot%202023-07-13%20at%208.37.08%20AM.png)

---
#### Sonic Pi's FM Synth
$$f(t) = \sin(2\pi f_c t + D \sin(2\pi f_m t))$$
- Depth ($D$): Modifies the depth of the carrier wave used to modify fundamental frequency. Don’t worry too much about what this means - just try different numbers out! 
- Divisor: Modifies the frequency of the modulator oscillator relative to the carrier. Don’t worry too much about what this means - just try different numbers out! 

---

### Strings
+ The Karplus-Strong algorithm was first published in 1983 in a paper titled "Digital Synthesis of Plucked-String and Drum Timbres" by Kevin Karplus and Alex Strong. 
+ The great thing about this algorithm is that it yields realistic sounds despite being relatively simple. 
	+ Before looking at the algorithm itself, we'll first take a closer look at why it works and then look at wavetable synthesis.
+ String: frequency of $n^{th}$ harmonic is $\nu = \frac{n\sqrt{T}}{2l\sqrt{\rho}}$

---
$$\nu = \frac{n\sqrt{T}}{2l\sqrt{\rho}}$$

*Ex: Piano wire is manufactured from steel of density approximately 5,900 kg/m3. The manufacturers recommend a stress of approximately 1.1×109 Newtons/m$^{2}$. How long does the string need to be to sound middle C (262 Hz)? By what factor should the tension on a string be increased, to raise its pitch by a perfect (Pythagorean) fifth?*

---

$$y(x,t) = \frac{1}{2}(s_0(x + ct) - s_0(-x+ct))+ \frac{1}{2c}\int_{x-ct}^{x+ct} v_0(u)du$$
> the value of $y(x,t)$ is the average of the initial position of the string at $x+ct$ and $x−ct$, plus the average of the initial velocity over those points.

![](Assets/Screenshot%202023-07-14%20at%208.19.10%20AM.png)

---
#### Algorithm
+ A short excitation waveform (of length L samples) is generated. In the original algorithm, this was a burst of white noise, but it can also include any wide-band signal.
+ This excitation is output and simultaneously fed back into a delay line L samples long.
+ The output of the delay line is fed through a filter. The gain of the filter must be less than 1 at all frequencies, to maintain a stable positive feedback loop. In the original algorithm, the filter consisted of averaging two adjacent samples, a particularly simple filter that can be implemented without a multiplier, requiring only shift and add operations. 
+ The filtered output is simultaneously mixed into the output and fed back into the delay line.

---
