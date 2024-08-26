---
title: Implicit Differentiation
weight: 36
math: true
---


# Implicit Differentiation

{{< hint "info" >}}

Implicit differentiation is used to find $\frac{dy}{dx}$ for implicitly defined functions, i.e. when $y$ cannot be solved for.
 
The key is to treat $y$ as a function of $x$. This means applying the chain rule anytime we have a $y$-term.

For example, if we have a term like $y^2$, then $\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$ or $2yy'$

Likewise, $\frac{d}{dx}(y^4) = 4y^3y'$ and $\frac{d}{dx}(\ln(y)) = \frac{y'}{y}.$

{{< /hint >}}

#### Example

Suppose we want to find the slopes of lines tangent to the unit circle, $x^2 + y^2 = 1$, at several points. One way to do this would be to express the circle as two functions: 

- Top half: $y = \sqrt{1 - x^2}$
- Bottom half: $y = -\sqrt{1 - x^2}$

Then, we can use the chain rule to compute the derivative of each. But, there's a nicer alternative. 

Let's treat $y$ like it's a function of $x$. What happens if we take the derivative of both sides?

$$
\begin{aligned}
x^2 + y^2 &= 1\cr
\frac{d}{dx}(x^2 + y^2) &= \frac{d}{dx}(1)
 &  \boxed{\text{take the derivative of both sides}}\cr
\frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) &= \frac{d}{dx}(1)
 &  \boxed{\text{use the sum rule for derivatives}}\cr
2x + 2yy' &= 0
 &  \boxed{\text{take the derivatives}}\cr
2yy' &= -2x
 &  \boxed{\text{start solving for $y'$}}\cr
y' &= \boxed{-\frac{x}{y}}
\end{aligned}
$$

Notice that we get an easy formula for $y'$, **but** it requires both an $x$-value and a $y$-value. That said, we use it exactly the same way we've been using derivatives. 

For the slope of the tangent line to the circle at $(-1/2,\sqrt{3}/2)$, we get

$$
\begin{aligned}
y'(-1/2,\sqrt{3}/2) &= -\frac{-1/2}{\sqrt3/2}\cr
&= \boxed{\frac1{\sqrt{3}}}
\end{aligned}
$$

Then the tangent line becomes $y - \frac{\sqrt3}{2} = \frac{1}{\sqrt3}\left(x + \frac12\right)$

> There are lots of curves that cannot be written as functions (of $x$ or $y$). For such curves, we can use implicit differentiation. 

#### Example

$$\begin{aligned}
3x^2 - \cos{(y)} &= x y\cr
\frac{d}{dx}\left( 3x^2 - \cos{(y)} \right) &= \frac{d}{dx}(x y) &\boxed{\text{ take the derivative of both sides}}\cr
6x + \boxed{\sin(y)\frac{dy}{dx}} &= y + x\frac{dy}{dx} & \boxed{\text{ notice that we applied the chain rule to } \cos(y)} \cr
\sin(y)\frac{dy}{dx} - x\frac{dy}{dx} &= y -6x & \boxed{\text{ bring all the } \frac{dy}{dx} \text{ terms to one side}}\cr
\frac{dy}{dx}\left(\sin(y) - x\right) &= y -6x & \boxed{\text{ factor out a }\frac{dy}{dx}}\cr
\frac{dy}{dx} & = \boxed{\frac{y-6x}{\sin{y} - x}}\end{aligned}$$


#### Exercise

Consider the equation $x\cos(y) + y^2 - x = 0$. Find $\frac{dy}{dx}$ (or $y'$). 


{{< details "Solution" >}}

$$
\begin{aligned}
x\cos(y) + y^2 - x &= 0\cr
\frac{d}{dx}(x\cos(y) + y^2 - x) &= \frac{d}{dx}(0)\cr
\cos y - x\sin(y)y' + 2yy' - 1 &= 0\cr
y'(2y - x\sin y) &= 1 - \cos y\cr
y' &= \frac{1 - \cos y}{2y - x\sin y}
\end{aligned}
$$

{{< /details >}}


#### Example

Find an equation for the line tangent to the curve $x^3 - 6xy +y^3 = 0$
at the point $(3,3)$.

$$\begin{aligned}
    x^3 - 6x y +y^3 &= 0\cr
    \frac{d}{dx}\left(x^3 - 6x y +y^3\right) &= \frac{d}{dx}(0)\cr
    3x^2 - 6\left((1)y+x(1)\frac{dy}{dx}\right) + 3y^2\frac{dy}{dx} &= 0 &\boxed{\text{we need a product rule for } x y}\cr
    &  &  \textit{ and chain rule for } y\text{-terms}\cr
    3x^2 - 6y - 6x\frac{dy}{dx} + 3y^2\frac{dy}{dx} &= 0 &\boxed{\text{simplify}}\cr
    \frac{dy}{dx}(3y^2 - 6x) &= 6y - 3x^2 &\boxed{\text{combine like terms}}\cr
    \frac{dy}{dx} &= \frac{6y-3x^2}{3y^2 - 6x}\end{aligned}$$

Now we can evaluate the derivative at $(3,3)$ to get the slope of the
tangent line:

$$\frac{dy}{dx}\biggr\rvert_{(3,3)} = \frac{6(3)-3(3)^2}{3(3)^2 - 6(3)} = \boxed{-1}$$

Tangent line:

$$\boxed{y - 3 = -(x-3) \Longleftrightarrow y = -x + 6}$$

#### Exercise 

Consider the curve given by $2x^{3}-x^{2}y+y^{4}=24$.

Find an expression for $\frac{dy}{dx}$ (or $y'$). 

Then, find an equation for the line tangent to the curve at $(2,2)$. 

{{< details "Solution" >}}

$$
\begin{aligned}
2x^{3}-x^{2}y+y^{4}&=24\cr
\frac{d}{dx}(2x^{3}-x^{2}y+y^{4})&=\frac{d}{dx}(24)\cr
6x^2 - 2xy - x^2y' + 4y^3y' &= 0\cr
y'(4y^3 - x^2) &= 2xy - 6x^2\cr
y' &= \frac{2xy - 6x^2}{4y^3 - x^2}\cr
y' \biggr\rvert_{(2,2)} &= \frac{-16}{28}\cr
&= -\frac{4}{7}
\end{aligned}
$$

Tangent Line: 

$$\boxed{y - 2 = -\frac47(x - 2)}$$
Or 
$$\boxed{y = -\frac47x +\frac{22}{7}}$$

{{< /details >}}

#### Example

If we don't need a formula for $y'$, and only care about the slope at one point, we can plug in our point first and then solve for $y'$.

For example, consider the equation

$$\left(x^{2}+y^{2}-1\right)^{3}-x^{2}y^{3}=0;  (-1,1)$$

Let's find an equation for the tangent line to this curve at the given point. 

Notice that when we differentiate, we get a pretty messy equation: 

$$
\begin{aligned}
\left(x^{2}+y^{2}-1\right)^{3}-x^{2}y^{3}&=0\cr
\frac{d}{dx}\left(\left(x^{2}+y^{2}-1\right)^{3}-x^{2}y^{3}\right)&=\frac{d}{dx}(0)\cr
3(x^2 + y^2 - 1)^2(2x + 2xyy') - 2xy^3 - 3x^2y^2y' &= 0
 &  \boxed{\text{plug in $x = 1, y = 1$ now}}\cr
3((1)^2 + (1)^2 - 1)^2(2(1) + 2(1)(1)y') - 2(1)(1)^3 - 3(1)^2(1)^2y' &= 0\cr
3(1)(2 + 2y') - 2 - 3y' &= 0
 &  \boxed{\text{now solve for $y'$}}\cr
6 + 6y' - 2 - 3y' &= \cr
3y' &= -4\cr
\end{aligned}
$$

Tangent line: $\boxed{y - 1 = -\frac43(x - 1)}$ or $\boxed{y = -\frac43 x + \frac73}$.



## Second Derivatives

To compute the second derivative, $\frac{d^2y}{dx^2}$ or $y''$, we'll need to do the following: 

1. Differentiate once and solve for $y'$, like we've been doing. 
2. Differentiate both sides again. 
3. Substitute our expression for $y'$ into our answer for $y''$. That way, our answer depends on just $x$ and $y$, rather than depending on $x,$ $y$, and $y'$. 

#### Example

Consider the equation $y^2 - 4x^2 = 4$. Let's compute $y''$.  

First, we'll get $y'$:

$$
\begin{aligned}
y^2 - 4x^2 &= 4\cr
\frac{d}{dx}(y^2 - 4x^2)&= \frac{d}{dx}(4)\cr
2yy' - 8x &= 0\cr
2yy' &= 8x\cr
y' &= \frac{4x}{y}
\end{aligned}
$$

Now, let's take the derivative of both sides again: 

$$
\begin{aligned}
\frac{d}{dx}(y') &= \frac{d}{dx}\left(\frac{4x}{y}\right)\cr
y'' &= \frac{4y- 4xy'}{y^2} &  \boxed{\text{now we can sub in $y'$}}\cr
&= \frac{4y- 4x\left(\frac{4x}{y}\right)}{y^2}\cr
&= \frac{4y- 4x\left(\frac{4x}{y}\right)}{y^2}\cdot\frac{y}{y}
 &  \boxed{\text{multiply by $y/y$ to simplify}}\cr
&= \frac{4y^2- 4x\left(4x\right)}{y^3}\cr
&= \frac{4y^2- 16x^2}{y^3}\cr
\end{aligned}
$$

#### Exercise

Consider the equation $y - \cos y = x$. Compute $y''$. 

{{< details "Solution" >}}

$$
\begin{aligned}
y - \cos y &= x\cr
\frac{d}{dx}(y - \cos y) &= \frac{d}{dx}(x)
 &  \boxed{\text{differentiate both sides}}\cr
y' + y' \sin y &= 1\cr
y'(1 + \sin y) &= 1
 &  \boxed{\text{factor out $y'$}}\cr
y' &= \frac{1}{1 + \sin y}
 &  \boxed{\text{solve for $y'$}}\cr
\frac{d}{dx}(y') &= \frac{d}{dx}\left(\frac{1}{1 + \sin y}\right)
 &  \boxed{\text{differentiate again}}\cr
y'' &= \frac{(1 + \sin y)(0) - (1)(y'\cos y)}{(1 + \sin y)^2}\cr
&= \frac{-y'\cos y}{(1 + \sin y)^2}\cr
&= \frac{-\left(\frac{1}{1 + \sin y}\right)\cos y}{(1 + \sin y)^2}
 &  \boxed{\text{substitute $y'$}}\cr
&= \boxed{\frac{-y'\cos y}{(1 + \sin y)^3}}\cr
\end{aligned}
$$

{{< /details >}}