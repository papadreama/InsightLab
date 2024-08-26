---
title: Rates of Change
weight: 32
math: true
---

# Rates of Change

{{< hint "info" >}}

In this section, we are going to use limits to compute the instantaneous rate of change of a function at a given point. So, given a function, $f$, and an $x$-value, $a$, we will find the instantaneous rate of change of $f$ at $x=a$. The same value will also be the slope of the tangent line to the graph of $f$ at the point $(a,f(a)).$ 
 
Before starting this section, make sure you're comfortable solving [Case 2](/differentialcalculus/limits/computing) limits (those that give us $0/0$). 
 
By the end of this section, you should
- Be able to compute the instantaneous rate of change of a function at a given point
- Be able to write an equation for the line tangent to the graph of a function at a given point
- Know how instantaneous rate of change is related to the slope of a tangent line

{{< /hint >}}

## Types of Rates of Change

The first important distinction we want to make is between **average rate of change** and **instantaneous rate of change**. Suppose I drive from Philadelphia to Pittsburg. The distance is about 327 miles. If it takes me $6.5$ hours. What was my average speed?

{{< details "Solution" >}}

Average speed is given by $\frac{\text{Distance}}{\text{Time}}$. So, in my case

$$\boxed{\text{Avg. Speed } = \frac{327}{\text{6.5}} \approx 50.3 \text{ mi/hr}}$$

{{< /details >}}

Now that $50$ mi/hr (or mph) isn't particularly descriptive with regard to my driving habits. Maybe I really did drive around $50$ mph for most of my trip. Maybe I stopped for $45$ minutes and the floored it for an hour to make up the time. 

If you want a better moment-to-moment description, you want my **instantaneous rate of change**. 

> Instantaneous rate of change is what your speedometer tells you at each moment. 

The question for us is, *how do we get the instantaneous rate of change of a function at a particular point?

Let's start with a more thorough look at average rate of change. 

## Average Rate of Change of a Function

To get the average rate of change of $f$ from $x = a$ to $x = b$, we compute the following ratio: 

> $$\text{Avg. Rate of Change } = \frac{f(b) - f(a)}{b - a} \text{ or } \frac{\Delta f}{\Delta x}$$

Let's try an example. 

#### Example

What's the average rate of change for $f(x) = \frac1x$ over $[1,4]$ (meaning from $x = 1$ to $x = 4$)?

Well, in this case our $a = 1$ and our $b = 4$. This gives us

$$
\begin{aligned}
\frac{f(b) - f(a)}{b - a}
&=
\frac{f(4) - f(1)}{4 - 1}\cr
&=
\frac{\frac14 - \frac11}{4 - 1}\cr
&=
\frac{-\frac34}{3}\cr
&=
\boxed{-\frac14}
\end{aligned}
$$

So the average rate of change for $f$ over $[1,4]$ is $-1/4$. 

What does this correspond to visually?

{{< details "Solution" >}}
The formula $\frac{f(b) - f(a)}{b - a}$ should look very familiar. You may have first learned it as 

$$\frac{y_2 - y_1}{x_2 - x_2} \text{ or } \frac{\Delta y}{\Delta x} \text { or } \frac{\text{rise}}{\text{run}}$$

It's the slope formula! In this case it's the slope of the line connecting two points on the graph of $f$ - we call this a **secant line**. 
{{< /details >}}

If we want to write an equation for the **secant line** to $f$ from $x = 1$ to $x = 4$, we need two things: 

1. The slope: we've got that already. It's $-1/4$. 
2. A point on the line: we have two to pick from. Since $f(1) = 1$, we have the point $(1,1)$. Or, since $f(4) = 1/4$, we also have $(4,1/4)$. 

Secant line: 

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - (1) &= \left(-\frac14\right)(x - (1))\cr
y - 1&= -\frac14 x + \frac14\cr
y &= -\frac14 x + \frac54
\end{aligned}
$$

![Secant Line Example](/images/secant_line_ex_1overx.png)

#### Exercise

Compute the average rate of change for $g(x) = x^2 - 2x$ over $[-1,4]$, and use that answer to write an equation for the secant line from $x = -1$ to $x = 4$. 

{{< details "Solution" >}}

Average rate of change:

$$
\begin{aligned}
\frac{g(4) - g(-1)}{4 - (-1)}
&=
\frac{8 - 3}{4 + 1}\cr
&=
\frac{5}{5}\cr
&=
\boxed{1}
\end{aligned}
$$

For the secant line, we can either use point-slope form or slope-intercept. Either way, we need a point on the line. Let's take $x = -1$. For the corresponding $y$-value, we get 

$$y = g(-1) = (-1)^2 - (2)(-1) = 3$$

So, our point is $(-1,3)$. 

To use point-slope form, we'll plug in $x_1 = -1$, $y_1 = 3$, and $m = 1$. 

$$
\begin{aligned}
y - y_1 &= m(x-x_1)\cr
y - (3) &= (1)(x - (-1))\cr
y - 3 &= x + 1\cr
y &= x + 4
\end{aligned}
$$

If we want to use slope-intercept form, we plug in $x = -1$, $y = 3$, and $m = 1$ and the solve for $b$:

$$
\begin{aligned}
y &= mx + b\cr
3 &= (1)(-1) + b\cr
3 &= -1 + b\cr
4 &= b\cr
y &= x + 4
\end{aligned}
$$

*You should use whichever approach you're most comfortable with.*

{{< /details >}}

#### Exercise

Compute the average rate of change for $h(x) = \sqrt{2x}$ over $[0,8]$, and use that answer to write an equation for the secant line from $x = 0$ to $x = 8$

{{< details "Solution" >}}

Average rate of change: 

$$
\begin{aligned}
\frac{h(8) - h(0)}{8 - 0}
&=
\frac{\sqrt{2(8)} - \sqrt{2(0)}}{8 - 0}\cr
&=
\frac{\sqrt{16} - \sqrt0}{8 - 0}\cr
&=
\frac{4 - 0}{8 - 0}\cr
&=
\frac48\cr
&=
\boxed{\frac12}
\end{aligned}
$$

We have our slope: $m = 1/2$. For our point, let's use $x = 0$: 

$$y = h(0) = \sqrt0 = 0$$

Secant line: 

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - 0 &= \frac{1}{2}(x - 0)\cr
y &= \frac12 x
\end{aligned}
$$

{{< /details >}}

## Instantaneous Rate of Change

Now that we know how to compute the **average** rate of change for a function, how do get the **instantaneous** rate of change at a point? To answer this question we're going to have to think in terms of limits. 

> #### Going from average to instantaneous
> Consider the driving example from before. My average speed $50.3$ mph was the average over several hours. That doesn't tell us much about the way I drive. I could go really fast and then really slow and end up with an average of $50.3$ mph. Or, I could drive $50.3$ mph most of the time. 
> 
> But, what if I told you my average speed over $1$ minute? Or over $3$ seconds? Or over $0.01$ seconds? The average over a very short period of time like that would probably be very close to my speedometer said during that time, right?
> 
> We know how to compute the average rate of change of a function $f$ from $x = a$ to $x = b$. What if we move $b$ closer and closer to $a$? What if we ask what happens as $b \to a$? This is where limits come in.

## The Limit Definition of Instantaneous Rate of Change

Let's take our average rate of change formula $\frac{f(b) - f(a)}{b - a}$ and apply the limit as $b \to a$:

$$
\text{Instantaneous Rate of Change: } \boxed{\lim_{b \to a}\frac{f(b) - f(a)}{b - a}}
$$

This formula does exactly what we want, but we can make it a little easier to use.

* Let $h = b - a$. 
* If $h = b - a$, we can also say $b = a + h$. 
* Then, as $b \to a$, $h \to a - a$, so $h \to 0$. 

Let's substitute all that in our formula.

$$
\lim_{b \to a}\frac{f(b) - f(a)}{b - a} = \lim_{h \to 0}\frac{f(a+h) - f(a)}{h}
$$

All we did was make the following substitutions/replacements:

* $b - a$ became $h$
* $b$ became $a + h$.
* $b \to a$ became $h\to 0$

All of Calc 1 or Differential Calculus boils down to this formula and everything that follows from it. 

> #### Computing Instantaneous Rate of Change
> The instantaneous rate of change for $f$ at $x = a$ is given by
> 
> $$\lim_{h \to 0}\frac{f(a +h) - f(a)}{h}$$

#### Example

We found that the average rate of change for $f(x) = \frac1x$ from $x = 1$ to $x = 4$ is $-1/4$. 

Now, let's compute the **instantaneous rate of change** for $f(x)$ **at** $x = 1$. 

* We have $a = 1$. 
* $$f(a) = f(1) = \frac11 = 1$$
* $$f( a + h ) = f(1 + h) = \frac{1}{1 + h}$$

Putting it all together, we get

$$
\begin{aligned}
\lim_{h \to 0}\frac{f(a +h) - f(a)}{h}
&=
\lim_{h \to 0}\frac{\frac{1}{1 + h} - 1}{h} \leftarrow \star\cr
&=
\lim_{h \to 0}\frac{\frac{1}{1 + h} - \frac{1 + h}{1 + h}}{h} \leftarrow \dagger\cr
&=
\lim_{h \to 0}\frac{\frac{1 - (1 + h)}{1 + h}}{h}\cr
&=
\lim_{h \to 0}\frac{\frac{-h}{1 + h}}{h}\cr
&=
\lim_{h \to 0}\frac{-1}{1 + h}\cr
&=
\frac{-1}{1 + (0)}\cr
&=
\frac{-1}{1}\cr
&=
\boxed{-1}
\end{aligned}
$$

Notes: 

$\star$ : Notice this is a [Case 2](/differentialcalculus/limits/computing) limit; we get $0/0$

$\dagger$ : We get a common denominator for $\frac{1}{1 + h}$ and $1$; $1$ becomes $\frac{1+h}{1+h}$. 

**From there, we simplify as much as possible until we eventually get a [Case 1](/differentialcalculus/limits/computing) limit.** 

#### Exercise

Use the limit definition to compute the instantaneous rate of change of $x^2 + x$ at $x = 2$. 

{{< details "Solution" >}}
Our $a$-value is $2$:

* Let's first simplify $f(2 + h)$ as much as possible 

$$
\begin{aligned}
f(x) &= x^2 + x\cr
f(2 + h) &= (2+h)^2 + (2 + h)\cr
&= (4 + 4h + h^2) + 2 + h\cr
&= 6 + 5h + h^2
\end{aligned}
$$

* We can also simplify $f(2) = (2)^2 + (2) = 6$.

$$
\begin{aligned}
\lim_{h \to 0}\frac{f(a+h) - f(a)}{h}
&=
\lim_{h \to 0}\frac{f(2+h) - f(2)}{h}\cr
&=
\lim_{h \to 0}\frac{(6 + 5h + h^2) - (6)}{h}\cr
&=
\lim_{h \to 0}\frac{5h + h^2}{h}\cr
&=
\lim_{h \to 0}\frac{h(5 + h)}{h}\cr
&=
\lim_{h \to 0}(5 + h)\cr
&=
5 + (0)\cr
&=\boxed5
\end{aligned}
$$

{{< /details >}}

With **average rate of change**, we had corresponding visual representation: the slope of the secant was the average rate of change. To get the **instantaneous rate of change**, we shrank the distance between $a$ and $b$. What happens to the picture as we do that, as $b - a \to 0$? Move the right point toward the left by clicking and dragging the red point.


<iframe src="https://www.desmos.com/calculator/ov7eluj339?embed" width="70%" style="border: 1px solid #ccc; display: block; text-align: center" frameborder=0></iframe>

**The closer $b$ gets to $a$, the more the secant line begins to look tangent to the graph of $f$!**

> #### Slope of a tangent line
> The instantaneous rate of change of $f$ and $x = a$ is also the slope of the line tangent to the graph of $f$ at $x = a$. 

#### Example

Let's find an equation for the line tangent to $f(x) = \sqrt{x}$ at $x = 4$. To do so, we'll compute the instantaneous rate of change of $f$ at $x = 4$, which will give us the slope. 

First, we'll simplify $f(4 + h)$ and $f(4)$: 

* $f(4 + h) = \sqrt{4 + h}$
* $f(4) = \sqrt4 = 2$

$$
\begin{aligned}
\lim_{h \to 0}\frac{f(a+h) - f(a)}{h}
&=
\lim_{h \to 0}\frac{\sqrt{4 + h} - 2}{h}
\end{aligned}
$$

What do we do now?

Let's multiply by the conjugate of the numerator: $\frac{\sqrt{4+h} + 2}{\sqrt{4+h} + 2}$

$$
\begin{aligned}
\lim_{h \to 0}\frac{f(a+h) - f(a)}{h}
&=
\lim_{h \to 0}\frac{\sqrt{4 + h} - 2}{h} \cdot \frac{\sqrt{4+h} + 2}{\sqrt{4+h} + 2}\cr
&=
\lim_{h \to 0}\frac{(4 + h) - (4)}{h(\sqrt{4 + h} + 2)}\cr
&=
\lim_{h \to 0}\frac{h}{h(\sqrt{4 + h} + 2)}\cr
&=
\lim_{h \to 0}\frac{1}{\sqrt{4 + h} + 2}\cr
&=
\frac{1}{\sqrt{4 + (0)} + 2}\cr
&=
\frac{1}{2 + 2}\cr
&=
\boxed{1/4}
\end{aligned}
$$

So, our slope is $m = 1/4$.

We also need a point on the line. Plugging $x = 4$ into $f$, we get $f(4) = \sqrt4=2$.

Our point is $(4,2)$. 

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - 2 &= \frac14(x - 4)\cr
y - 2 &= \frac14 x - 1\cr
y &= \frac14 x + 1
\end{aligned}
$$

Let's see if this answer makes sense by sketching the graph. 

![Tangent Line to Sqrt(x) at 4](/images/tangent_line_sqrtx_4.png)

#### Exercise

Find an equation for the line tangent to the graph of $f(x) = 2x^2 -1$ at $x = -1$

{{< details "Solution" >}}

Once again, let's begin by simplifying the main pieces of our limit formula. 

* $f(-1 + h)$:

$$
\begin{aligned}
f(-1+h) &= 2(-1+h)^2 - 1\cr
&= 2(1 - 2h + h^2) - 1\cr
&= 2 - 4h + 2h^2 - 1\cr
&= 1 - 4h + 2h^2
\end{aligned}
$$

* $f(-1) = 2(-1)^2 - 1 = 1$. 

Now, we can plug everything into the limit and simplify. 

$$
\begin{aligned}
\lim_{h \to 0}\frac{f(a+h) - f(a)}{h}
&=
\lim_{h \to 0}\frac{(1 - 4h + 2h^2) - 1}{h}\cr
&=
\lim_{h \to 0}\frac{-4h + 2h^2}{h}\cr
&=
\lim_{h \to 0}(-4 + 2h)\cr
&=
-4 + 2(0)\cr
&=
\boxed{-4}
\end{aligned}
$$

We've already computed $f(-1)$ (and got $1$), so we know the point of tangency is $(-1,1)$. 

**Tangent Line:**

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - 1 &= -4(x - (-1))\cr
y - 1 &=  -4x - 4\cr
y &= -4x - 3
\end{aligned}
$$

Here's the sketch. 

![Tangent Line to f at negative one](/images/tanget_line_2x2minus1_at-1.png)

{{< /details >}}

> #### Projectile Motion
> If we ignore wind resistance, the height of a projectile $t$ seconds after it is launched/thrown is given by the equation
> 
> $$H(t) = -\frac12 g t^2 + v_0 t + H_0.$$
> 
> * $g$: gravitational constant
> * $v_0$: initial velocity
> * $H_0$: the initial height of the projectile 

#### Exercise

Suppose you throw a ball up in the air with an initial velocity of $15$ m/s (meters per second) from a height of $0$ meters. 

1. How many seconds does it take for the ball to fall back to the ground?
2. What is the ball's average velocity from $t = 0$ s to $t = 1$ s?
3. What is the ball's instantaneous velocity at time $t = 1$ s?

*For simplicity, take the gravitational constant to be $10$ m/s$^2$.*

{{< details "Solution" >}}

First, we need to set up our equation for the height of the ball at time $t$: 

$$H(t) = -\frac12 (10) t^2 + (15) t + 0$$

$$\boxed{H(t) = -5t^2 + 15 t}$$

**(1)** The ball hits the ground when $H = 0$. 

$$
\begin{aligned}
H(t) &= 0\cr
-5t^2 + 15t &= 0\cr
-5t(t - 3) &= 0\cr
t&= \boxed{0, 3}
\end{aligned}
$$

The ball hits the ground after $3$ seconds. 

**(2)** For the average velocity from $t = 0$ to $t = 1$, we want to compute $\frac{H(1) - H(0)}{1 - 0}$:

$$
\begin{aligned}
\frac{H(1) - H(0)}{1 - 0}
&=
\frac{(-5(1)^2 + 15(1)) - 0}{1}\cr
&=
10
\end{aligned}
$$

The average velocity is $10$ m/s.

**(3)** Finally, we want the instantaneous velocity at $t = 1$: $\lim_{h \to 0}\frac{H(1 + H) - H(1)}{h}$:

* Simplify $H(1 + h)$: 

$$
\begin{aligned}
H(1 + h) &= -5(1 + h)^2 + 15(1 + h)\cr
&= -5(1 + 2h + h^2) + 15 + 15h\cr
&= -5 - 10h - 5h^2 + 15 + 15h\cr
&= -5h^2 + 5h + 10
\end{aligned}
$$

* We already computed $H(1)$: $H(1) = 10$

* Put it all together: 

$$
\begin{aligned}
\lim_{h \to 0}\frac{H(1 + h) - H(1)}{h}
&=
\lim_{h \to 0}\frac{-h^2 + 5h + 10 - 10}{h}\cr
&=
\lim_{h \to 0}\frac{-h^2 + 5h}{h}\cr
&=
\lim_{h \to 0}(-h + 5)\cr
&=
-(0) + 5\cr
&=
\boxed{5}
\end{aligned}
$$

The (instantaneous) velocity of the ball after one second is $5$ m/s. 

{{< /details >}}

