---
title: The Definition of the Derivative
weight: 33
math: true
---


# The Definition of the Derivative

{{< hint "info" >}}

We've seen how limits help us compute instantaneous rates of change and the slopes of tangent lines. What if we want to perform this calculation for several points for a particular function. It would be nice to not have to compute $\lim_{h \to 0}\frac{f(a+h) - f(a)}{h}$ over and over again for different values of $a$? Instead, it would be nice to have a formula/function that takes in any $x$-value and gives us the desired slope or rate of change. 
 
In this section, we'll take our instantaneous rate of change formula and make one small tweak: we'll replace $a$ with $x$. This will turn the result into a function rather than just a single value. 
 
By the end of this section, you should...
 
* Be able to apply the limit definition of the derivative to power functions, $1/x^n$, $\sqrt{x}$, etc.

{{< /hint >}}

Here it is: the most important definition in differential calculus. 

## The Definition
> Given a function, $f(x)$, we define its derivative, written $f'(x)$, as follows: 
> $$f'(x) = \lim_{h \to 0}\frac{f(x+h) - f(x)}{h}$$
> $f'(a)$  is the instantaneous rate of change (and the slope of the tangent line) of $f$ at $x = a$. 

#### Example

Consider $f(x) = x^2$. Let's do the following: 

* Find the derivative of $f$.
* Find an equation for the line tangent to $f$ at $x = 1$
* Find an equation for the line tangent to $f$ at $x = -2$

**Derivative:**

As before, we can begin by simplifying $f(x+h)$ to make our work a little more organized: 

$$
f(x+h) = (x+h)^2 = x^2 + 2xh + h^2
$$

Now let's put it all together. 

$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{f(x+h) - f(x)}{h}\cr
&= \lim_{h \to 0}\frac{(x^2 + 2xh + h^2) - (x^2)}{h}\cr
&= \lim_{h \to 0}\frac{x^2 + 2xh + h^2 - x^2}{h}\cr
&= \lim_{h \to 0}\frac{2xh + h^2}{h}\cr
&= \lim_{h \to 0}\frac{h(2x + h)}{h}\cr
&= \lim_{h \to 0} (2x +h)\cr
&= 2x + 0\cr
&= \boxed{2x}
\end{aligned}
$$

This new function, $f'(x) = 2x$, is like a helper function for $f$. For any number that we plug into $f'$, we get information about $f$. In particular, $f'(a)$ gives us the slope of the line tangent to $f$ at $x = a$. Let's apply that now. 

**Tangent line at $x = 1$:**

The slope of the tangent line at $x = 1$, is 

$$m = f'(1) = 2(1) = \boxed{2}$$ 

We also need the $y$-value that corresponds to $x_1 = 1$. For that, we plug into the original function, $f$: 

$$y_1 = f(1) = (1)^2 = 1$$ 

So, we have

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - 1 &= 2(x - 1)\cr
y - 1&= 2x - 2\cr
y &= 2x - 1
\end{aligned}
$$

![Tangent Line at 1](/images/tangent_line_x2_1.png)

**Tangent line at $x = -2$:**

The slope of the tangent line at $x = -2$, is 

$$m = f'(-2) = 2(-2) = \boxed{-4}$$ 

We also need the $y$-value that corresponds to $x_1 = -2$. For that, we plug into the original function, $f$: 

$$y_1 = f(-2) = (-2)^2 = 4$$ 

So, we have

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - 4 &= -4(x - (-2))\cr
y - 4&= -4x - 8\cr
y &= -4x - 4
\end{aligned}
$$

![Tangent Line at 1](/images/tangent_line_x2_neg2.png)

### Some important notes

> * $f'(x)$ is NOT the slope of the tangent line to $f$, it GIVES US the slope when we PLUG IN. This is a crucial point and one that students often miss. 
> * Since $\lim_{h \to 0}\frac{f(x+h) - f(x)}{h}$ ALWAYS starts off as a $0/0$ (Case 2) limit, we should expect the $h$ in the denominator to cancel out at some point. With things line trig functions, logs, and exponentials, it's a little more complicated, but for polynomials, rational functions, and radicals, we should be able to simplify and cancel. 

#### Exercise

Consider $f(x) = \frac{1}{x}$. 

* Find the derivative of $f$ using the limit definition. 
* Use the derivative to find an equation for the line tangent to $f$ at $x = 4$. 

{{< details "Solution" >}}

There's not much simplifying we can do with $f(x+h) = \frac{1}{x+h}$, so let's just plug in and see what we can do.

$$
\begin{aligned}
f'(x) 
&=
\lim_{h \to 0}\frac{f(x+h) - f(x)}{h}\cr
&=
\lim_{h \to 0}\frac{\frac{1}{x+h} - \frac{1}{h}}{h} \leftarrow \text{ combine fractions}\cr
&=
\lim_{h \to 0}\frac{\frac{x - (x + h)}{x(x+h)}}{h}\cr
&=
\lim_{h \to 0}\frac{\frac{-h)}{x(x+h)}}{h}\cr
&=
\lim_{h \to 0}\frac{-1)}{x(x+h)}\cr
&=
\frac{-1)}{x(x+(0))}\cr
&=
\boxed{-\frac{1}{x^2}}
\end{aligned}
$$

**Tangent Line at x = 4:**

The slope is $f'(4) = -\frac1{(4)^2} = -\frac{1}{16}$

The $y$-value that goes with $x = 4$ is $f(4) = \frac{1}{4}$

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - \frac{1}{4} = -\frac{1}{16}(x - 4)\cr
y - \frac14 &= -\frac{1}{16}x + \frac14\cr
y &= -\frac{1}{16}x + \frac12
\end{aligned}
$$

![Tangent Line at 4](/images/tangent_line_1overx_4.png)

{{< /details >}}

#### Exercise

Consider the function $f(x) = \sqrt{x}$. 

* Find the derivative of $f$ using the limit definition. 
* Use the derivative to find an equation for the line tangent to $f$ at $x = 9$.

{{< details "Solution" >}}

**Derivative:**

$$
\begin{aligned}
f'(x) 
&=
\lim_{h \to 0}\frac{f(x + h) - f(x)}{h}\cr
&=
\lim_{h \to 0}\frac{\sqrt{x+h} - \sqrt{x}}{h} \leftarrow \text{ multiply by conjugate}\cr
&=
\lim_{h \to 0}\frac{\sqrt{x+h} - \sqrt{x}}{h} \cdot \frac{\sqrt{x+h} + \sqrt{x}}{\sqrt{x+h} + \sqrt{x}}\cr
&=
\lim_{h \to 0}\frac{(x+h) - (x)}{h(\sqrt{x+h} + \sqrt{x})}\cr
&=
\lim_{h \to 0}\frac{h}{h(\sqrt{x+h} + \sqrt{x})} \leftarrow  \frac{h}{h} = 1\cr
&=
\lim_{h \to 0}\frac{1}{\sqrt{x+h} + \sqrt{x}} \leftarrow \text{ plug in } h=0\cr
&=
\frac{1}{\sqrt{x + 0} + \sqrt{x}}\cr
&=
\boxed{\frac{1}{2\sqrt{x}}}
\end{aligned}
$$

**Tangent Line:**

We get the slope by plugging into $f'$: 

$$m = f'(9) = \frac{1}{2\sqrt9} = \frac16$$

We get the $y$-value for our point of tangency by plugging into $f$: 

$$f(9) = \sqrt9 = 3$$

Putting it all together: 

$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - 3 &= \frac16(x - 9)\cr
y - 3 &= \frac16x - \frac32\cr
\end{aligned}
$$

$$\boxed{y = \frac16x + \frac32}$$

![Tangent Line](/images/tangent_line_sqrtx_9.png)

{{< /details >}}

## Digging Deeper

The derivative of a function tells us a lot about the function itself. In a later section, we'll do in-depth analyses of functions using the first and second derivatives. That said, we can start exploring the relationships between $f$ and $f'$ now. 

### Differentiability
> We say that a function $f$ is differentiable at $x = a$ provided that $f'$ is continuous at $x = a.$ 
> 

Differentiability is a stronger condition than continuity, so **a function can be continuous but not differentiable**, but not the other way around. 

#### Example

Remember that the absolute value function $f(x) = |x|$ is really a piecewise function: 

$$
|x| = 
\begin{cases}
   x, x \geq 0\cr
   -x, x < 0
\end{cases}
$$

This function is continuous everywhere (go through the conditions for continuity for $f$ if you're not sure why that's true). But is it differentiable everywhere?

Since $f$ is piecewise, so is $f'$. We have to find the derivative of each piece. 

$x > 0: f(x) = x$

$$
\begin{aligned}
f'(x) 
&=
\lim_{h \to 0}\frac{f(x + h) - f(x)}{h}\cr
&= \lim_{h \to 0}\frac{(x + h) - (x)}{h}\cr
&=
\lim_{h \to 0}\frac{h}{h}\cr
&=
1
\end{aligned}
$$

*This should make sense since the slope of $y = x$ is $1$ everywhere!*

$x < 0: f(x) = -x$

$$
\begin{aligned}
f'(x) 
&=
\lim_{h \to 0}\frac{f(x + h) - f(x)}{h}\cr
&= \lim_{h \to 0}\frac{-(x + h) - (-x)}{h}\cr
&=
\lim_{h \to 0}\frac{-h}{h}\cr
&=
-1
\end{aligned}
$$

*Again, this should make sense since the slope of $y = -x$ is $-1$*. 

How about **at** $x = 0$? Well, if we're right at $x = 0$, the slope depends on which side we're on: 

$$\lim_{h \to 0^{-}}f(x) = -1 \qquad \lim_{h \to 0^{-}}f(x) = 1$$

Since $\lim_{h \to 0^{-}}f(x) \neq \lim_{h \to 0^{-}}f(x)$, $f'(0)$ is undefined. This means that $f'$ is **discontinuous** at $x = 0$. When this occurs we say that $f$ is **no differentiable**. 

### Differentiable Functions
> We say that $f$ is **differentiable** wherever $f'$ is **continuous**. Note that a function can be continuous at point without being differentiable there, but the opposite can't be true; when $f$ is differentiable it is also continuous.
> 
> **Differentiability** is a stronger condition than **continuity**. It tells us that the graph of $f$ is not only continuous, but it is also smooth. 

#### Exercise

Based on the graph of $f$, shown below, place the following quantities in order: 

$$
f'(-2)\quad f'(-1) \quad f'(0) \quad f'(1)
$$

![Degree 5 Polynomial](/images/degree_5_graph_1.png)

Remember, the graph we're given here is the graph of $f$. 

{{< details "Solution" >}}

Let's start by separating these derivative values positive, negative, and zero. 

* At $x = 0$, the tangent line is horizontal. Horizontal lines have a slope of $0$, so $f'(0) = 0$. 
* At $x = -2$, the slope of the tangent line is positive, so $f'(-2) > 0$. 
* Finally, at $x = -1$ and $x = 1$, the slopes are negative, so $f'(-1) < 0$ and $f'(1) < 0$. 

Now we just need to put the negative ones in order. 

* The graph is steeper at $x = -1$ than it is at $x = 1$, so $f'(-1) < f(1)$. 

Thus, 

$$\boxed{f'(-1) < f'(1) < f'(0) < f'(-2)}$$

{{< /details >}}

