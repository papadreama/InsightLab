---
title: The Chain Rule
weight: 35
math: true
---


# Chain Rule

{{< hint "info" >}}

The chain rule tells us how to differentiate compositions of functions. Recall that when we compose two functions we plug one into the other. 
$$\textit{E.g., } f(x) = x^3, g(x) = \tan x \Longrightarrow g(f(x)) = \tan(x^3)$$

{{< /hint >}}

## Proof

A complete proof of the chain rule requires careful attention to detail. Here, we'll consider a very simplified sketch of the proof that demonstrates why the chain rule works, but is incomplete on account of an important assumption. For a full proof, I would suggest reading [this](https://web.williams.edu/Mathematics/lg5/A37W12/Chain.pdf). 

Some notation review before we get started: $(f \circ g)(x) = f(g(x))$

We'll show that $(f\circ g)'(a) = f'(g(a))g'(a)$. 

> **This proof assumes that $g(x) \neq g(a)$ for values of $x$ near $a$** . 

$$
\begin{aligned}
(f \circ g)'(x) 
&= \lim_{h\to0}\frac{(f \circ g)(x) - (f\circ g)(a)}{x - a}\cr
&= \lim_{h\to0}\frac{(f(g(x)) - f(g(a))}{x - a}\cr
&= \lim_{h\to0}\frac{(f(g(x)) - f(g(a))}{x - a}\cdot\frac{g(x) - g(a)}{g(x)-g(a)}
 & {\textit{Multiply by $1$}}\cr
&= \lim_{h\to0}\frac{(f(g(x)) - f(g(a))}{g(x) - g(a)}\cdot\frac{g(x) - g(a)}{x-a}
 & {\textit{Reorder terms}}\cr
&=f'(g(x))g'(x)
\end{aligned}
$$

## Examples and exercises

#### Example

Let's take the derivative of $y = \sin(x^3)$. 

We can think of $y$ as $f(g(x))$, where $f(x) = \sin x$ and $g(x) = x^3$. 

We know that $f'(x) = \cos x$ and $g'(x) = 3x^2$, so

$$
\begin{aligned}
y' &= f'(g(x))g'(x)\cr
&= \cos(x^3)(3x^2)\cr
&= \boxed{3x^2\cos(x^3)}
\end{aligned}
$$

#### Exercise

Compute the derivative of $y = \tan(x^4)$. 

{{< details "Solution" >}}
$$
\begin{aligned}
y' &= \sec^2(x^4)(4x^3)\cr
&= \boxed{4x^3\sec^2(x^4)}
\end{aligned}
$$
{{< /details >}}

#### Exercise 

Compute the derivative of $y = \cos\left(\frac1x\right)$.

{{< details "Solution" >}}
$$
\begin{aligned}
y &= \cos(x^{-1})\cr
y' &= -\sin(x^{-1})(-1x^{-2})\cr
&= \boxed{\frac{1}{x^2}\sin\left(\frac1x\right)}
\end{aligned}
$$
{{< /details >}}

#### Example

Let $f(x) = \sqrt{x^2 + 4}$.

Then 

$$
\begin{aligned}
f(x) = (x^2 + 4)^{1/2}\cr
f'(x) &= \frac12(x^2 + 4)^{-1/2}(2x)\cr
&= \boxed{\frac{x}{\sqrt{x^2 + 4}}}
\end{aligned}
$$

#### Exercise

Compute the derivative of $g(x) = \sqrt[3]{6x + 1}$

{{< details "Solution" >}}
$$
\begin{aligned}
g(x) &= (6x + 1)^{1/3}\cr
g'(x) &= \frac13(6x + 1)^{-2/3}(6)\cr
&= \boxed{\frac{2}{(\sqrt[3]{6x + 1})^{2}}}
\end{aligned}
$$
{{< /details >}}

#### Exercise 

Compute the derivative of $h(x) = 4(x^3 + 7)^5$.

{{< details "Solution" >}}
$$
\begin{aligned}
h'(x) &= 4(5(x^3+7)^4)(3x^2)\cr
&=
\boxed{60x^2(x^3 + 7)^4}
\end{aligned}
$$
{{< /details >}}

#### Example 

Consider $y = \sin^3(x^2 + 1)$. 

This function is actually a composition of three functions. To see that, let's write $y$ like this: 

$$y = \left(\sin(x^2 + 1)\right)^3$$

If we take $f(x) = x^3$, $g(x) = \sin x$, and $h(x) = x^2 + 1$, then $y = f(g(h(x)))$. 

Applying the chain rule twice will give us

$$y' = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$$

So, we're just differentiating one *layer* at a time. 

$$
\begin{aligned}
y' &= 3\left(\sin(x^2 + 1)\right)^2\cdot(\cos(x^2 + 1)) \cdot (2x)\cr
&= \boxed{6x\cos(x^2 + 1)\left(\sin(x^2 + 1)\right)^2}
\end{aligned}
$$

#### Exercise

Compute the derivative of $f(x) = \sec^4(5x)$. 

{{< details "Solution" >}}
$$
\begin{aligned}
f(x) &= \left(\sec(5x)\right)^4\cr
f'(x) &= 4\left(\sec(5x)\right)^3\cdot\sec(5x)\tan(5x)\cdot(5)\cr
&= \boxed{20\sec^4(5x)\tan(5x)}
\end{aligned}
$$
{{< /details >}}

#### Exercise

Compute the derivative of $g(x) = \sqrt{2\sin(x) - x^4}$. 

{{< details "Solution" >}}
$$
\begin{aligned}
g(x) &= \left(2\sin(x) - x^4\right)^{1/2}\cr
g(x) &= \frac12\left(2\sin(x) - x^4\right)^{-1/2}(2\cos(x) - 4x^3)\cr
&=
\frac{2\cos(x) - 4x^3}{2\sqrt{2\sin(x) - x^4}}\cr
&=
\boxed{\frac{\cos(x) - 2x^3}{\sqrt{2\sin(x) - x^4}}}
\end{aligned}
$$
{{< /details >}}

#### Example 

Let's find an equation for the line tangent to $y = x\sec^2(x)$ at $x_1 = \pi/4$. 

- Get $y_1$: 
$$
\begin{aligned}
y_1 &= f(x_1)\cr
&= \frac{\pi}{4}\sec^2\left(\frac{\pi}{4}\right)\cr
&= \frac{\pi}{4}(\sqrt{2})^2\cr
&= \frac{\pi}{2}
\end{aligned}
$$
- Get slope: $m = y'(x_1)$ 
$$
\begin{aligned}
y' &= \sec^2(x) + x\cdot(2\sec(x))\cdot(\sec(x)\tan(x))\cr
&= \sec^2(x) + 2x\sec^2(x)\tan(x)\cr
y'(\pi/4) &= \sec^2(\pi/4) + 2(\pi/4)\sec^2(\pi/4)\tan(\pi/4)\cr
&= 2 + \frac{\pi}{2}(2)(1)\cr
&= 2 + \pi
\end{aligned}
$$
- Put it all together: 
$$
\begin{aligned}
y - y_1 &= m(x - x_1)\cr
y - \frac{\pi}{2} &= (\pi + 2)\left(x - \frac{\pi}{4}\right)
\end{aligned}
$$

#### Exercise

Find an equation for the line tangent to $y = x\cos(x)$ at $x_1 = \pi/2$.

- Get $y_1$:

$$
\begin{aligned}
y_1 &= f(x_1)\cr
&= \frac{\pi}{2}\cos(\pi/2)\cr
&= \boxed{0}
\end{aligned}
$$

- Slope: $m = y'(x_1)$

$$
\begin{aligned}
y'(x) &= \cos(x) - x\sin(x)\cr
y'(\pi/2) &= 0 - \frac{\pi}{2}(1)\cr
&= \frac{\pi}{2}
\end{aligned}
$$

- Tangent Line: $y - y_1 = m(x - x_1)$

$$\boxed{y - 0 = \frac{\pi}{2}\left(x - \frac{\pi}{2}\right)}$$
$$\boxed{y = \frac{\pi}{2}x - \frac{\pi^2}{4}}$$

#### Example

Suppose we have two differentiable functions, $f$ and $g$. We aren't given formulas for these functions, but we do know the following:

|$x$|$f(x)$|$g(x)$|$f'(x)$|$g'(x)$|
|---|------|------|-------|-------|
|1  |3     |2     |-5     |6      |
|2  |1     |3     |7      |-2     |
|3  |2     |1     |4      |9      |

Define $A(x) = f(f(x))$. Can we evaluate $A'(3)$?

- First, let's write out the chain rule for $A'(x)$: 
$$A'(x) = f'(f(x))\cdot f'(x)$$ 
- Now, plug in $x = 3$.
$$
\begin{aligned}
A'(3) &= f'(f(3))\cdot f'(3)\cr
&= f'(2)\cdot 4
 & {\textit{From the table }f(3)=2, f'(3)=4}\cr
&= 7\cdot4
 & {\textit{From the table }f'(2) = 7}\cr
&= \boxed{28}
\end{aligned}
$$

#### Exercise

Define $B(x) = f(g(x))$. Use the same table to compute $B'(2)$. 

{{< details "Solution" >}}
$$
\begin{aligned}
B'(x) &= f'(g(x)) \cdot g'(x)\cr
B'(2) &= f'(g(2)) \cdot g'(2)
 &  {\textit{Plug in $x=2$}}\cr
&= f'(3)\cdot (-2)
 &  {\textit{From the table }g(2) = 3, g'(2)=-2}\cr
&= 4 \cdot (-2)\cr
&= \boxed{-8}
\end{aligned}
$$
{{< /details >}}

#### Exercise

Define $C(x) = x^2g(f(x))$. Evaluate $C'(1)$. 

> *This requires both the product rule and the chain rule!*

{{< details "Solution" >}}
$$
\begin{aligned}
C'(x) &= 2x\,g(f(x)) + x^2\,g'(f(x))\,f'(x)\cr
C'(1) &= 2(1)\,g(f(1)) + (1)^2\,g'(f(1))\,f'(1)\cr
&=2g(3) + g'(3)(-5)\cr
&=2(1) + 9(-5)\cr
&= 2 - 45\cr
&= \boxed{-43}
\end{aligned}
$$
{{< /details >}}
