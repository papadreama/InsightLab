---
title: Derivatives of Exponential and Inverse Trig Functions
weight: 38
math: true
---

# Exponential and Inverse Trig Functions

{{< hint "info" >}}

We only have two categories of functions left to figure out how to differentiate: exponential functions and inverse trig functions. It might seem weird that we're grouping these two very different types of functions in one section, but I think you'll see a strong similarity in the method we use to get these rules. 

{{< /hint >}}

## The derivative of $e^x$

Let's begin with the *natural* exponential function, $f(x) = e^x$. We can apply *logarithmic differentiation*, which we learned in the previous section: 

$$
\begin{aligned}
f(x) &= e^x\cr
\ln f(x) &= \ln e^x\cr
&= x\ln e\cr
&= x  &  \boxed{\text{$\ln e = 1$ because $e^0 = 1$}}\cr
\frac{d}{dx} (\ln f(x)) &= \frac{d}{dx} (x)\cr
\frac{f'(x)}{f(x)} &= 1\cr
f'(x) &= f(x)  &  \boxed{\text{this is very unique!}}\cr
&= e^x
\end{aligned}
$$

**So, $e^x$ is its own derivative!** There's really only one other function for which this is true...

{{< details "Solution" >}}
$$f(x) = 0 \Longrightarrow f'(x) = 0$$
{{< /details >}}

Let's add in the chain rule to make this derivative rule more useful:

$$\boxed{\frac{d}{dx}(e^{a(x)}) = a'(x)e^{a(x)}}$$

Remember, the chain rule always says the same thing: apply your derivative rule as usual and then multiply by the derivative of the inside function - here, inside means *in the exponent*. 

Let's try applying our new rule. 

#### Example

Let $f(x) = e^{3x^2}$. 

Here, $a(x) = 3x^2$, so $a'(x) = 6x$.  

$$
\begin{aligned}
f(x) &= e^{a(x)}\cr
f'(x) &= a'(x)e^{a(x)}\cr
&=\boxed{6xe^{3x^2}}
\end{aligned}
$$

#### Example

Let $g(x) = e^{\sin(4x)}$. 

Here, $a(x) = \sin(4x)$, so $a'(x) = 4\cos(4x)$ (don't forget chain rule here!).

$$
\begin{aligned}
f(x) &= e^{a(x)}\cr
f'(x) &= a'(x)e^{a(x)}\cr
&=\boxed{4\cos(4x)e^{\sin(4x)}}
\end{aligned}
$$


#### Exercise

Let $f(x) = e^{5x^3 + 10}$. Compute $f'(x)$.

{{< details "Solution" >}}
We have $a(x) = 5x^3 + 10$. 

So, $a'(x) = 15x^2$

$$
\begin{aligned}
f(x) &= e^{a(x)}\cr
f'(x) &= a'(x)e^{a(x)}\cr
&=\boxed{15x^2 e^{5x^3 + 10}}
\end{aligned}
$$

{{< /details >}}

## Other Exponential Functions

We can also use logarithmic differentiation to come up with a derivative rule for any exponential function. 

Consider the function $f(x) = b^x$, where $b>0$ and $b\neq 0$. Let's see what happens when we apply logarithmic differentiation: 

$$
\begin{aligned}
f(x) &= b^x\cr
\ln f(x) &= \ln b^x\cr
&= x \ln b\cr
\frac{f'(x)}{f(x)} &= (1)\ln b\cr
f'(x) &= (\ln b) f(x)\cr
&= \boxed{(\ln b) b^x}
\end{aligned}
$$

### Derivative of an Exponential Function
> $$\frac{d}{dx}(b^x) = (\ln b)  b^x$$
> $$\frac{d}{dx}(b^{a(x)}) = (\ln b) a'(x)  b^{a(x)}$$

#### Example

Consider $f(x) = 2^x$. 

$$f'(x) = (\ln2) 2^x$$

#### Example

Consider $g(x) = 3^{x^2 + 1}$. Let $a(x) = x^2 + 1$. Then, $a'(x) = 2x$. 

$$
\begin{aligned}
g'(x) &= (\ln 3)  a'(x)  3^{a(x)}\cr
&= \boxed{(\ln 3)  (2x) 3^{x^2 + 1}}
\end{aligned}
$$

#### Exercise

Compute the derivative of $f(x) = 5^{\sin x}$. 

{{< details "Solution" >}}
$$\boxed{f'(x) = (\ln 5) \cos (x) 5^{\sin x}}$$
{{< /details >}}

#### Exercise

Compute the derivative of $g(x) = x^4  2^{x^3 + 4}$

{{< details "Solution" >}}

This one requires product rule. 

Let $A(x) = x^4$ and $B(x) = 2^{x^3 + 4}$. 

Then $A'(x) = 4x^3$ and $B'(x) = (\ln 2) (3x^2)   2^{x^3 + 4}$. 

$$
\begin{aligned}
g'(x) &= A(x)B'(x) + A'(x)B(x)\cr
&= (x^4)\left((\ln 2) (3x^2)   2^{x^3 + 4}\right) + (4x^3)(2^{x^3 + 4})\cr
&= \boxed{3(\ln 2)  x^62^{x^3 + 4} + 4x^3 2^{x^3 + 4}}
\end{aligned}
$$
{{< /details >}}

## Inverse Trig Functions

We're going to use implicit differentiation to compute the derivatives of the inverse trig functions. Let's start with $\arcsin x$:

$$
\begin{aligned}
y &= \arcsin x\cr
\sin y &= x  &  \boxed{\text{take $\sin()$ of both sides}}\cr
\cos (y) y' &= 1  &  \boxed{\text{take derivative of both sides}}\cr
y' &= \frac{1}{\cos y}  &  \boxed{\text{solve for $y'$}}\cr
\end{aligned}
$$

We should get our answer in terms of $x$. Recall that 

$$\cos^2 y + \sin^2 y = 1$$

Solving for $\cos y$ yields

$$\cos y = \sqrt{1 + \sin^2 y}$$

But, $\sin y = x$. So, we have

$$\cos y = \sqrt{1 - x^2}$$

This gives us our derivative rule:

$$\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1 - x^2}}$$

#### Exercise

Apply the same method to get the derivative rule for $\arccos x$. 

{{< details "Solution" >}}

$$
\begin{aligned}
y &= \arccos x\cr
\cos y &= x  &  \boxed{\text{take $\cos()$ of both sides}}\cr
-\sin (y) y' &= 1  &  \boxed{\text{take derivative of both sides}}\cr
y' &= -\frac{1}{\sin y}  &  \boxed{\text{solve for $y'$}}\cr
&= -\frac{1}{\sqrt{1 - \cos^2 y}}  &  \boxed{\text{apply trig identity again}}\cr
&= \boxed{-\frac{1}{\sqrt{1 - x^2}}}
\end{aligned}
$$

{{< /details >}}

#### Exercise 

Apply the same method to get the derivative rule for $\arctan x$. 

{{< details "Solution" >}}

$$
\begin{aligned}
y &= \arctan x\cr
\tan y &= x  &  \boxed{\text{take $\tan()$ of both sides}}\cr
\sec^2 (y) y' &= 1  &  \boxed{\text{take derivative of both sides}}\cr
y' &= \frac{1}{\sec^2 y}  &  \boxed{\text{solve for $y'$}}\cr
&= \frac{1}{1 + \tan^2 y}  &  \boxed{\text{$1 + \tan^2 y = \sec^2 y$}}\cr
&= \boxed{\frac{1}{1 + x^2}}
\end{aligned}
$$

{{< /details >}}

## Summary

Let's summarize our new derivative rules.

| Function   | Derivative              | Derivative with Chain Rule       |
|------------|-------------------------|----------------------------------|
|   $e^x$    |   $e^x$                 |  $a'(x) e^{a(x)}$              |
|   $b^x$    |   $(\ln b)b^x$          |  $(\ln b)a'(x)b^{a(x)}$      |
|$\arcsin x$ |$\frac{1}{\sqrt{1-x^2}}$ |$\frac{a'(x)}{\sqrt{1-(a(x))^2}}$ |
|$\arccos x$ |$-\frac{1}{\sqrt{1-x^2}}$|$-\frac{a'(x)}{\sqrt{1-(a(x))^2}}$|
|$\arctan x$ |$\frac{1}{1 + x^2}$      |$\frac{a'(x)}{1 + (a(x))^2}$      |