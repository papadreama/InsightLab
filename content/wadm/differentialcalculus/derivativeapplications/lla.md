---
title: Local Linear Approximation
weight: 42
math: true
---

# Local Linear Approximation

{{< hint "info" >}}

Local linear approximation is a technique we can use to approximate the values of functions that we're unable to compute directly. For example, we have no direct way of computing $\sin(34^\circ)$. The same goes for $\ln(1.2)$ or $\sqrt[3]{8.2}$. 
 
For a differentiable function, its tangent lines can be good approximations of the function if we're close to the point of tangency. In fact, we often say that when a function is differentiable it is locally linear. 

{{< /hint >}}

## Big Picture

Recall that a function being differentiable means that its derivative is continuous. Visually, this tells us that the graph of the function is *smooth*. What does it mean to be *smooth*? In the past, we've said that a smooth curve has *no corners or cusps*. Another way of describing smooth curve is to say that it is *locally linear*. 

To say that a curve is locally linear is to say that the more we zoom in on the curve, the flatter it looks. This is precisely why our day-to-day experience of standing on a spherical earth is flatness. It's not that earth is flat (take note, flat-earthers), but rather that the *scale* at which we observe the earth is so tiny, that it looks flat. We have to zoom way out to see it's spherical shape. 

Local linearity is not just a nice description; it's a property we can use to perform a special kind of approximation of functions. Consider the square root function, $f(x) = \sqrt{x}$. We know that it's continuous and differentiable on $(0,\infty)$, **but** we can only evaluate it directly at certain $x$-values: perfect squares. Let's make use of local linearity to approximate $\sqrt{3.8}$. 

#### Example

Let's begin by finding an equation for the line tangent to $f(x) = \sqrt{x}$ at $x = 4$. You should be able to do this part yourself.

{{< details "Solution" >}}
We're given $x_0 = 4$. To find the corresponding value, we plug into $f$: 

$$y_0 = f(x_0) = \sqrt{4} = 2$$

Next, we need the derivative. 

$$
\begin{aligned}
f'(x) &= \frac12 x^{-1/2}\cr
&= \frac{1}{2\sqrt{x}}
\end{aligned}
$$

Plugging $x_0$ into $f'$ gives us the slope: 

$$f'(4) = \frac{1}{2\sqrt4} = \frac14$$

Tangent Line: $y - 2 = \frac14(x - 4)$. 

This might seem weird at first, but we're going to leave the line in this form: 

$$
\begin{aligned}
y - 2 &= \frac14(x - 4)\cr
y &= \frac14(x - 4) + 2
\end{aligned}
$$
{{< /details >}}

Okay, now we have an equation for the line tangent to $f$ at $x = 4$. How does that help us approximate $\sqrt{3.8}$? Let's take a look at the graph. 

![Square Root Function](/images/sqrtx_tangent_4.png)

Notice that around $x = 4$, the tangent line is almost indistinguishable from the graph of $f$. Let's zoom way in around $x = 3.8$. 

![Square Root Function (Zoomed)](/images/sqrtx_tangent_4_zoom.png)

Look at how close the $y$-values of the function and the tangent line are!

The $y$-value for the tangent line is

$$
\begin{aligned}
y(3.8) &= \frac14(3.8 - 4) + 2\cr
&= \frac14(-0.2) + 2\cr
&= -\frac{2}{40} + 2\cr
&= -\frac{1}{20} + 2\cr
&= \frac{39}{20}
\end{aligned}
$$

It's safe to say that $\boxed{\sqrt{3.8} \approx \frac{39}{20}}$. We just completed our first **Local Linear Approximation**.

> #### local linear approximation outline
> If we want to approximate $f(x_1)$, we can do the following: 
> 
> * Choose a point of tangency that satisfies the following conditions:
>     * $f$ is differentiable at $x = x_0$ and everywhere in between $x_0$ and $x_1$. 
>     * We can evaluate $f(x_0)$ directly.
>     * $x_0$ should be *close* to $x_1$. 
> * Find an equation for the tangent line  
>     * It's helpful to put it in the form $L(x) = f'(x_0)(x-x_0) + f(x_0)$, but isn't necessary.
> * $f(x_1) \approx L(x_1)$.  



#### Example 

Approximate $\sqrt[3]{8.2}$. 

Let $f(x) = \sqrt[3]{x}$. Since we know $\sqrt[3]{8}$, we'll use $x = 8$ as our point of tangency. 

**Tangent line/linearization:**

$$
\begin{aligned}
x_0 &= 8\cr
y_0 &= f(8) = 2\cr
f'(x) &= \frac13 x^{-2/3}\cr
&= \frac{1}{3\sqrt[3]{x^2}}\cr
f'(8) &= \frac{1}{12}\cr
L(x) &= \frac1{12}(x - 8) + 2
\end{aligned}
$$

**Approximation:** 

$$
\begin{aligned}
\sqrt[3]{8.2} &\approx L(8.2)\cr
&\approx \frac1{12}(8.2 - 8) + 2\cr
&\approx \frac1{12}(0.2) + 2\cr
&\approx \frac{2}{120} + 2\cr
&\approx \frac{1}{60} + 2\cr
&\approx \boxed{\frac{121}{60}}
\end{aligned}
$$

#### Exercise 

Approximate $\sqrt[4]{80.5}$. 

{{< details "Solution" >}}
Let $f(x) = \sqrt[4]{x}$. We can evaluate $f(81)$ directly ($\sqrt[4]{81} = 3$), so we'll make $x_0 = 81$ our point of tangency. 

* $y_0$-value: $f(81) = 3$
* Slope

$$
\begin{aligned}
f'(x) &= \frac14 x^{-3/4}\cr
&= \frac{1}{4\sqrt[4]{x^3}}\cr
m &= f'(81)\cr
&= \frac{1}{4\sqrt[4]{81^3}} &  \boxed{\text{Note, we can compute $(\sqrt[4]{81})^3$}}\cr
&= \frac{1}{4(27)}\cr
&= \frac{1}{108}
\end{aligned}
$$

* Tangent Line: 

$$
\begin{aligned}
L(x) &= \frac1{108}(x - 81) + 3
\end{aligned}
$$

* Approximation: 

$$
\begin{aligned}
\sqrt[4]{80.5} 
&\approx
L(80.5)\cr
&\approx
\frac1{108}(80.5 - 81) + 3\cr
&\approx
\frac1{108}(-0.5) + 3\cr
&\approx
-\frac1{216} + 3\cr
&\approx
\boxed{\frac{647}{216}}
\end{aligned}
$$

{{< /details >}}

#### Example

Approximate $\tan(40^\circ)$. 

Let $f(x) = \tan x$. We'll use $x = 45^\circ = \pi/4$ for our point of tangency. 

$$
\begin{aligned}
x_0 &= \pi/4\cr
y_0 &= f(\pi/4) = 1\cr
f'(x) &= \sec^2(x)\cr
m &= f'(\pi/4)\cr
&= (\sqrt2/2)^2\cr
&= 2\cr
L(x) &= 2(x - 45^\circ) + 1  &  \boxed{\text{leave like this to make plugging in easier}}
\end{aligned}
$$

**Approximation:**

$$
\begin{aligned}
\tan(40^\circ) &\approx L(40^\circ)\cr
&\approx 2(40^\circ - 45^\circ) + 1\cr
&\approx 2(-5^\circ) + 1\cr
&\approx -10^\circ + 1\cr
&\approx -\frac{\pi}{18} + 1\cr
&\approx \boxed{1 - \frac{\pi}{18}}
\end{aligned}
$$

#### Example 

Let's approximate $\ln 3$. Since $e \approx 2.7$, and we know $\ln e = 1$, we can use that for our point of tangency. 

Let $f(x) = \ln x$. 

Then $f'(x) = \frac1x$. 

$$
\begin{aligned}
L(x) &= f'(e)(x - e) + f(e)\cr
&= \frac1e(x - e) + 1\cr
\ln(3) &\approx L(3)\cr
&\approx \frac1e(3 - e) + 1\cr
&\approx \frac3e - 1 + 1\cr
&\approx \boxed{\frac3e}
\end{aligned}
$$

#### Exercise

Approximate $\ln 1.2$. 

{{< details "Solution" >}}

Let $f(x) = \ln x$. We'll use $x = 1$ as our point of tangency. 

$$
\begin{aligned}
f'(x) &= \frac1x\cr
L(x) &= f'(1)(x - 1) + f(1)\cr
&= (1)(x - 1) + 0\cr
&= x - 1\cr
\ln(1.2) &\approx L(1.2)\cr
&\approx 1.2 - 1\cr
&\approx \boxed{0.2}
\end{aligned}
$$

{{< /details >}}`
