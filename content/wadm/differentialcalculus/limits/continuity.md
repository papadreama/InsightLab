---
title: "Continuity"
weight: 25
math: true
---
# Continuity

> In this section we are going to define, investigate, and apply an essential property of functions: **continuity**. You may have encountered the idea of continuity prior to studying calculus. We often describe continuous functions as those whose graphs can be drawn without picking up our pencil. This is great starting point, but we'll want to define continuity a little more rigorously using limits. 
> 
> By the end of this section you should...
> 
> * Know what it means for a function to be continuous **at a point**.
> * Be able to explain why a function is discontinuous at a point in terms of limits and function values
> * Know what it means for a function to be continuous on open, closed, and mixed intervals
> * Know what it means for a function to be right-continuous or left-continuous at a point
> * Be able to determine the intervals on which a piecewise function is continuous (without relying on its graph)

## Defining Continuity 

While it might seem weird, we're going to start by defining *continuity at a point*. Once we have a working definition for continuity at a point, we can easily extend that to continuity on intervals - to say $f$ is continuous on $(a,b)$ will simply mean that $f$ is continuous for every $x$-value in $(a,b)$. 

Before we get into the formal definitions, let's start with a few examples of functions that are not continuous everywhere. 

#### Example  

Consider the graph of $f$, shown below. 

![Discontinuity Example](/images/discontinuity_ex1.png)

The *open dot* at $(2,4)$ tells us that there's nothing at $(2,4)$. In terms of limits, we can say that $\lim_{x \to 2}f(x) = 4$, **but** $f(2)$ is **undefined**.

Because there's this hole/gap in the graph at $x = 2$, we say that $f$ is discontinuous - you have to pick up your pencil at that point because the open dot *represents* a hole.

> For $f$ to be continuous at $x = a$ need $f(a)$ to be defined!

#### Example 

Consider the graph of $f$, shown below. This is a slight variation of the function shown above. 

![Discontinuity Example](/images/discontinuity_ex2.png)

This time we have a big *jump* in the graph. It's even more obvious that $f$ is not continuous everywhere because we have to pick up our pencil to draw the two separate pieces of its graph. 

How can we describe this jump in terms of limits?

{{< details "Solution" >}}

We can say that $\lim_{x \to 2}f(x)$ **does not exist** because 

$$\lim_{x \to 2^{-}}f(x) = 4$$
$$\lim_{x \to 2^{+}}f(x) = 2$$

{{< /details >}}

This brings us to another necessary condition for a function to be continuous at a point. 

> For $f$ to be continuous at $x = a$ need $\lim_{x \to a}f(x)$ to exist! This means that $\lim_{x \to a^{-}}f(x) = \lim_{x \to a^{+}}f(x)$

Is it possible for $f(a)$ to be defined and for $\lim_{x \to a}f(x)$ to exist but for $f$ to still not be continuous at $x=a$?

#### Example

Consider the graph of $f$, shown below. 

![Discontinuity Example](/images/discontinuity_ex3.png)

In this case, $f(2)$ is defined and $\lim_{x \to 2}f(x)$ exists, but $f$ is not continuous at $x = 2$. Why?

{{< details "Solution" >}}

Because $\lim_{x \to 2}f(x) = 4$ but $f(2) = 2$!

{{< /details >}}

> For $f$ to be continuous at $x = a$, we need $\lim_{x \to a}f(x) = f(a)$! In other words, the limit value has to match the function value. 

We've identified three conditions for continuity at a point. 

> #### Continuity at a point
> We say that $f$ is continuous at $x=a$ provided that...
> 
> * $f(a)$ is defined
> * $\lim_{x\to a}f(x)$ exists
> * $\lim_{x\to a}f(x) = f(a)$. 
> 
> We can really boil this down to a single requirement: 
> $$\lim_{x\to a}f(x) = f(a)$$
> After all, if $f(a)$ is undefined or $\lim_{x\to a}f(x)$ doesn't exist, the two quantities can't be equal! Having the three conditions just gives us some more descriptive language to work with when determining whether a function is continuous at a point. 

#### Exercise

Consider the graph of $g$, shown below. 

![Discontinuity Exercise](/images/discontinuity_ex4.png)

Compute each of the following and then explain why $f$ is not continuous at $x = 2$. 

(a) $f(2)$

(b) $\lim_{x \to 2^{-}}f(x)$

(c) $\lim_{x \to 2^{+}}f(x)$

(d) $\lim_{x \to 2}f(x)$

{{< details "Solution" >}}

(a) $f(2) = 3$

(b) $\lim_{x \to 2^{-}}f(x) = 4$

(c) $\lim_{x \to 2^{+}}f(x) = -\infty$

(d) $\lim_{x \to 2}f(x)$ DNE

$f$ is discontinuous at $x = 2$ because $\lim_{x \to 2}f(x)$ DNE.

{{< /details >}}

> #### Types of Discontinuities
> We give names to some types of discontinuities to make describing them to one another easier:
> 
> * **Removable Discontinuity/Hole:** When it looks like a single point has been plucked from the graph and moved or omitted, we call it a removable discontinuity or hole. This occurs when $\lim_{x \to a}f(x)$ exists, but $\lim_{x \to a}f(x) \neq f(a)$ (it could be that they're not equal because $f(a)$ isn't defined)
> * **Jump Discontinuity:** This one is probably obvious! When there's a jump in the graph, we call it a jump discontinuity. This occurs when the one-sided limits both exist **but** $\lim_{x\to a^{-}}f(x) \neq\lim_{x\to a^{+}}f(x)$.
> * **Infinite Discontinuity:** This one's probably obvious, too!. When we have a vertical asymptote at $x = a$, we say that $f$ has an infinite discontinuity at $x = a$. 

#### Exercise 

Consider the graph of $f$, shown below. 

![Continuity exercise](/images/continuity_exercise1.png)

Determine the points at which $f$ is not continuous (discontinuous) and justify your answers using the three conditions for continuity at a point. 

{{< details "Solution" >}}

$f$ has discontinuities at $x = -1$ and $x = 1$. 

* $f$ is discontinuous at $x = -1$ because $\lim_{x \to -1}f(x)$ DNE. We know this limit doesn't exist because $\lim_{x \to -1^{-}}f(x) = 3$ and $\lim_{x \to -1^{+}}f(x) = 2$.
* $f$ is discontinuous at $x = 1$ because $f(1)$ is undefined - there's no closed dot! Of course, we could also say that the limit doesn't exist. 

{{< /details >}}

## Continuity on an Interval

Now we can define what it means for a function to be continuous on an interval. To do so, we'll have to consider both *open* intervals and *closed* intervals. Here's quick refresher:

> #### Interval Types
> **Open Interval:** an open interval is an interval that does not contain its endpoints. We write these one of two ways:
> $$(a,b)$$ 
> $$a < x < b$$
> Note that $(-\infty, +\infty)$ is an open interval because we can't *contain* or *include* $\pm \infty$ as endpoints. 
> 
> **Open Interval:** a closed interval is an interval that does contain its endpoints. We write these one of two ways:
> $$[a,b]$$ 
> $$a \leq x \leq b$$
> **Mixed Intervals:** intervals can also be open on one side and closed on the other. 
> $$(a,b] \text{ or } [a,b)$$

First, we'll define continuity on an open interval. 

> #### Continuity on an Open Interval
> We say that $f$ is continuous on the open interval $(a,b)$ provided that $f$ is continuous at every point in $(a,b)$. 
> 
> Note that this also applies to the interval containing all real numbers, $(-\infty,+ \infty)$. When a function $f$ is continuous on $(-\infty,+ \infty)$, we say that it is *continuous everywhere*. 

#### Example

Let's go back to one of our earlier examples: 

![Continuity on open interval](/images/continuity_exercise1.png)

We can say that $f$ is continuous on the following open intervals: 

* $(-\infty, -1)$
* $(-1, 1)$
* $(1,+\infty)$

On each of these intervals, $f$ is continuous at every point.

In order to define continuity on a closed interval, we need a couple *helped definitions*: 

> #### Right-continuos and Left-continuous
> We say that $f$ is **right-continuous** at $x = a$ provided that 
> $$\lim_{x\to a^{+}}f(x) = f(a)$$
> We say that $f$ is **left-continuous** at $x = b$ provided that 
> $$\lim_{x\to b^{-}}f(x) = f(b)$$
> Notice that these definitions use right- and left-hand limits!

#### Example

Consider the graph of $f(x) = \sqrt{4 - x^2}$, shown below. 

![Half-circle](/images/half_circle_radius2.png)

What can we say about the continuity of $f$?

* $f$ is continuous on $(-2,2)$ since it is continuous at every point in that interval. 
* We **can't** say that $f$ is continuous at $x = -2$ or $x = 2$, because the limits at those points don't exist!
  * $\lim_{x\to -2^{-}}\sqrt{4 - x^2}$ DNE because there's nothing to the left of $x = -2$!
  * $\lim_{x\to 2^{+}}\sqrt{4 - x^2}$ DNE because there's nothing to the right of $x = 2$!
* We **can** say that $f$ is right-continuous at $x = -2$ and left-continuous at $x =2$. 

> #### Continuity on a Closed Interval
> We say that $f$ is continuous on the closed interval $[a,b]$ provided that...
> 
> * $f$ is continuous on $(a,b)$. 
> * $f$ is right-continuous at $x = a$
> * $f$ is left-continuous at $x = b$. 

Applying this definition to the last example: $f(x) = \sqrt{4 - x^2}$ is continuous on $[-2,2]$. 

#### Exercise

Determine the intervals on which $f$, whose graph is shown below, is continuous. 

![Continuity Exercise](/images/contiuity_ex2.png)

{{< details "Solution" >}}

Based on the graph, $f$ is continuous on the following intervals. 

* $(-\infty,-5)$
* $(-5,-3)$
* $[-3,1]$
* $(1,3)$
* $[3,+\infty)$

{{< /details >}}

#### Exercise

In the previous exercise, why would it be wrong to say "since $f$ is continuous on  continuous on $(1,3)$ and $[3,\infty)$, we can conclude that $f$ is continuous on $(1,\infty)$"?

{{< details "Solution" >}}

This a perfect example of why specificity matters with our definitions! When we say that $f$ is continuous on $[3, \infty)$, this doesn't mean that $f$ is continuous at $x = 3$, it means that $f$ is **right-continuous** at $x = 3$; $f$ is **not** left-continuous at $x = 3$. 

*Note: We can't say $f$ is continuous on $(1,\infty)$ because it's not continuous **at** $x = 3$.*

{{< /details >}}

## Continuity of Non-Piecewise Functions

For most non-piecewise functions, we can determine their continuity by considering  where they are defined - i.e., their *domain*. Remember, *Case 1* limits are ones for which we can just *plug in and get an answer*. Our definition of continuity states that a function, $f$, is continuous at $x = a$ provided that $\lim_{x\to a}f(x) = f(a)$.

A lot of functions are continuous *everywhere*. Let's identify some of these so that we don't have to do any work when we encounter them:

> #### Functions that are Continuous Everywhere
> The following functions, and function types are continuous everywhere. 
> 
> * Polynomials: anything of the form
> $$p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_2 x^2 + a_1 x + a_0$$
> * Exponential functions: anything of the form
> $$f(x) = b^x  \text{ where } 0<b<1 \text{ or } b>1$$
> * $\sin x$ and $\cos x$

For logarithmic functions, the other four trig functions, and inverse trig functions, we want to make sure we're familiar with their domains. 

#### Example

The function $f(x) = \frac{3}{x^2 - 4}$ is continuous for $x \neq \pm 2$. 

This is the case because $f$ is **undefined** at $x = \pm 2$. At both points we have a vertical asymptote (we get $k/0$) so we can say that $f$ has infinite discontinuities at $x = \pm 2$. 

#### Example

The function $g(x) = \sqrt{5 - x}$ is continuous for $x \leq 5$. 

This is the case because $g$ is defined anywhere that $5 - x \geq 0$ (the input of a square root has to be greater than or equal to zero). 

#### Exercise

Where is $f(x) = \frac{5}{x + 2}$ continuous?

{{< details "Solution" >}}

$f$ is defined for $x \neq -2$, so it is continuous for $x\neq -2$. We can also write $(-\infty, -2) \cup (-2, +\infty)$. 

Note, the symbol $\cup$ stands for the *union of two sets*.

{{< /details >}}

#### Exercise

Where is $g(x) = \ln(x + 4)$ continuous?

{{< details "Solution" >}}

The input of a natural log must be *greater that zero*:

$$x + 4 > 0 \longrightarrow x > -4$$

So, $g$ is continuous for $x>-4$ or on $(-4,+\infty)$. 

{{< /details >}}

#### Exercise

Where is the function $h(x) = \frac{4}{2^x - 1}$ continuous?

{{< details "Solution" >}}

This one's a little trickier! We want to make sure the denominator is not zero. So, let's just set the denominator **not-equal** to zero:

$$
\begin{aligned}
2^x - 1 &\neq 0\cr
2^x &\neq 1\cr
x &\neq 0
\end{aligned}
$$

We conclude that $h$ is continuous for $x \neq 0$ or on $(-\infty, 0) \cup (0,+\infty)$. 

{{< /details >}}

## Continuity of Piecewise Functions

As we did with limits, when dealing with piecewise functions we will pay careful attention to what happens at the *seams* - that is, the $x$-values where the definition of the function changes.

#### Example

Let's determine where the function $f$ is continuous. 

$$
f(x) = \begin{cases}
2x + 1, &x<1\cr
3 - x^2, &1\leq x \leq 2\cr
\frac{1}{1 - x}, & x> 2
\end{cases}
$$

First, we'll consider each piece on its respective interval. 

* $2x + 1$ is continuous everywhere (it's a polynomial), so it's definitely continuous for $x<1$.
* $3 - x^2$ is also a polynomial so it's continuous everywhere. 
* $\frac{1}{1 - x}$ is continuous for $x \neq 1$ so it's certainly continuous when $x >2$. 

Now that we've established each piece's continuity, we want to see if the pieces fit together nicely or if there are jumps in the graph. We'll consider the two *seams*: $x = 1$ and $x = 2$. 

* $x=1:$
  * $f(1) = 3 - (1)^2 = 2$, so $f(1)$ is defined. Note that we're using the second piece because $1\leq x \leq 2$ **includes** $x = 1$. 
  * $$\lim_{x\to 1^{-}}f(x) = \lim_{x \to 1^{-}}(2x + 1) = 2(1) + 1 = 3$$
  * $$\lim_{x\to 1^{+}}f(x) = \lim_{x \to 1^{+}}(3 - x^2) = 3 - (1)^2 = 2$$
  * Since $\lim_{x\to 1^{-}}f(x) \neq \lim_{x\to 1^{+}}f(x)$, we conclude that $\lim_{x\to 1}f(x)$ DNE
  * Therefore, $f$ is **not continuous** at $x = 1$.
* $x = 2$
  * $f(2) = 3 - (2)^2 = -1$, so $f(2)$ is defined. 
  * $$\lim_{x\to 2^{-}}f(x) = \lim_{x \to 2^{-}}(3 - x^2) = 3 - 2^2 = -1$$
  * $$\lim_{x\to 2^{+}}f(x) = \lim_{x \to 2^{+}}\frac{1}{1 - (2)} = -1$$
  * Since the one-sided limits match, we conclude that $\lim_{x\to 2}f(x)$ exists and $\lim_{x\to 2}f(x) = f(2)$.
  * We conclude that $f$ is continuous at $x = 2$

Having found only a single point of discontinuity ($x = 1$), we conclude that $f$ is continuous for $x\neq 1$ or on $(-\infty, 1)\cup(1,+\infty)$. 

#### Exercise 

Determine where $f$ is continuous. 

$$
f(x) = 
\begin{cases}
2^x, & x < 0\cr
x^2 + 2x + 1, & 0 \leq x < 2\cr
\ln(x - 1), & x \geq 2
\end{cases}
$$

{{< details "Solution" >}}

Once again, we'll at each piece individually first, and then consider the seams. 

* $2^x$ is an exponential function, so it is continuous everywhere
* $x^2 + 2x + 1$ is a polynomial, so it is continuous everywhere
* $\ln(x - 1)$ is continuous for $x > 1$ (it's continuous where the input is positive)
* $x = 0:$
  * $f(0) = (0)^2 + 2(0) + 1 = 1$, so $f(0)$ is defined.
  * $$\lim_{x \to 0^{-}}f(x) = \lim_{x \to 0^{-}}2^x = 2^0 = 1$$
  * $$\lim_{x \to 0^{+}}f(x) = \lim_{x \to 0^{+}}x^2 + 2x + 1 = 1$$
  * Since the right and left limits match, we conclude that $\lim_{x\to0}f(x)$ exists and is $1$.
* $x = 2:$
  * $f(2) = \ln(2 - 1) = \ln(1) = 0$, so $f(2)$ exists
  * $$\lim_{x \to 2^{-}}f(x) = \lim_{x \to 2^{-}}x^2 + 2x + 1 = (2)^2 + 2(2) + 1 = 9$$
  * $$\lim_{x \to 2^{+}}f(x) = \lim_{x \to 2^{+}}\ln(x - 1) = \ln((2) - 1) = 0$$
  * Since the right and left limits don't agree, we conclude that $\lim_{x \to 2}f(x)$ DNE. 

We found that $f$ is discontinuous only at $x = 2$, so $f$ is continuous for $x \neq 2$ or on $(-\infty, 2) \cup (2, +\infty)$. 

{{< /details >}}


#### Exercise

Determine the values of $a$ and $b$ that make the function $f$ continuous everywhere.

$$
f(x) = 
\begin{cases}
x^2 + 2x,&x<1\cr
ax + b,&1\leq x \leq 4\cr
\frac{1}{x-3}, &x>4
\end{cases}
$$

*Hint: evaluate the one-sided limits at $x = 1$ and $x = 4$ to solve for $a$ and $b$*

{{< details "Solution" >}}

First, we note that each piece is continuous on its associated interval: 

* $x^2 + 2x$ and $ax + b$ are a polynomials so they're continuous everywhere
* $\frac{1}{x - 3}$ is only discontinuous at $x = 3$, so it is definitely continuous for $x > 4$. 

For $f$ to be continuous at $x = 1$, we need $\lim_{x \to 1^{-}}f(x) = \lim_{x \to 1^{+}}f(x)$.

$$
\begin{aligned}
\lim_{x \to 1^{-}}f(x) &= \lim_{x \to 1^{+}}f(x)\cr
\lim_{x \to 1^{-}}x^2 + 2x &= \lim_{x \to 1^{+}}ax + b\cr
(1)^2 + 2(1) &= a(1) + b\cr
3&=a + b\cr
\end{aligned}
$$

We want the same at $x = 4$:

$$
\begin{aligned}
\lim_{x \to 4^{-}}f(x) &= \lim_{x \to 4^{+}}f(x)\cr
\lim_{x \to 4^{-}}ax + b &= \lim_{x \to 4^{+}}\frac{1}{x-3}\cr
a(4) + b &= \frac{1}{(4) - 3}\cr
4a + b&= 1\cr
\end{aligned}
$$

Now, we have **two equations** with **two unknowns**. We can solve the system of equations to get the values for $a$ and $b$ that make $f$ continuous.

$$
\begin{aligned}
a + b &= 3\cr
4a + b &= 1
\end{aligned}
$$

Subtracting the first equation from the second gives us

$$
\begin{aligned}
4a + b &= 1\cr
-(a + b &= 3)\cr
3a &= -2\cr
a &= -\frac23
\end{aligned}
$$

Lastly, plugging in our $a$-value gives us 

$$
\begin{aligned}
\left(-\frac23\right) + b &= 3\cr
b &= \frac{11}{3}
\end{aligned}
$$

We concluded that if $a=-2/3$ and $b = 11/3$, then $f$ is continuous everywhere. 

{{< /details >}}

For more exercises, click [here](https://www.math.drexel.edu/classes/Calculus/resources/Math121HW/Homework1.5.pdf).

