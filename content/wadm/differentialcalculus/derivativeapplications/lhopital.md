---
title: L'Hôpital's Rule
weight: 43
math: true
---

# L'Hopital's Rule

{{< hint "info" >}}

Back when we were looking limits, we encountered *indeterminate forms*. We saw that limits where we get $\frac00$ or $\infty - \infty$ often yield counterintuitive results. We were able to deal with some of those indeterminate forms with simple algebra and trig. But there are still many limits with an indeterminate form that require a more sophisticated technique we call L'Hôpital's rule. 

{{< /hint >}}

## Preliminaries

Remember that there are two equivalent ways to define the derivative of $f$ at $x = a$: 

$$\lim_{b \to a}\frac{f(b) - f(a)}{b - a} \quad \text{or} \quad \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$$

The substitution that gets us fro the former to the latter is $h = b - a$.

## Proof and Derivation of L'Hôpital's Rule

We're going to prove that L'Hôpital's rule works for two primary indeterminate forms: $\frac00$ and $\frac{\infty}{\infty}$. 

### Proof Part 1

Let's start with $\frac00$. Suppose that we have two functions, $f$ and $g$, such that... 

* Both are differentiable at $x = a$ 
* $f(a) = 0$ 
* $g(a) = 0$ 
* $g'(a) \neq 0$. 

If we try to take the limit $\lim_{x \to a}\frac{f(x)}{g(x)}$ directly, we get 

$$\lim_{x \to a}\frac{f(x)}{g(x)} = \frac00   \boxed{\text{indeterminate!!}}$$

Since $f(a) = 0$ and $g(x) = 0$, we can say that...

* $f(x) - f(a) = f(x) - 0 = f(x)$
* $g(x) - g(a) = g(x) = 0 = g(x)$. 

So, 

$$\lim_{x \to a}\frac{f(x)}{g(x)} = \lim_{x \to a}\frac{f(x) - f(a)}{g(x) - g(a)}$$

Let's divide the numerator and denominator by $x - a$: 

$$
\begin{aligned}
\lim_{x \to a}\frac{f(x)}{g(x)} &= \lim_{x \to a}\frac{f(x) - f(a)}{g(x) - g(a)}\cdot\frac{\frac{1}{x-a}}{\frac{1}{x - a}}\cr
&= \lim_{x \to a}\frac{\frac{f(x) - f(a)}{x-a}}{\frac{g(x) - g(a)}{x-a}}\cr
&=\frac{\lim_{x \to a}\frac{f(x) - f(a)}{x-a}}{\lim_{x \to a}\frac{g(x) - g(a)}{x-a}}\cr
&= \frac{f'(a)}{g'(a)}
\end{aligned}
$$

#### Example

Consider $\lim_{x\to1}\frac{\ln(x)}{x - 1}$. This limit yields the indeterminate form $\frac00$:

$$\lim_{x\to1}\frac{\ln(x)}{x - 1} = \frac{\ln(1)}{(1) - 1} = \frac00$$

We have $f(x) = \ln(x)$ and $g(x) = x - 1$. 

Taking the derivative of each, we get $f'(x) = \frac1x$ and $g'(x) = 1$. 

According to the version of L'Hôpital's rule we just proved, we should get

$$\lim_{x\to1}\frac{\ln(x)}{x - 1} = \lim_{x\to1}\frac{\frac1x}{1} = \boxed{1}$$

Now you try one:

#### Exercise

Evaluate $\lim_{x \to 0}\frac{4x}{e^x - 1}$. 

{{< details "Solution" >}}
$$
\begin{aligned}
\lim_{x \to 0}\frac{4x}{e^x - 1}
&=
\lim_{x \to 0}\frac{4}{e^x}\cr
&=
\frac{4}{1}\cr
&=
\boxed{4}
\end{aligned}
$$
{{< /details >}}

### Proof Part 2

Suppose that we have two functions, $f$ and $g$, such that... 

* Both are differentiable at $x = a$ 
* $\lim_{x \to a}f(x) = \pm \infty$
* $\lim_{x \to a}g(x) = \pm \infty$

Now we have the indeterminate form $\lim_{x \to a}\frac{f(x)}{g(x)} \to \frac{\infty}{\infty}$. The signs of the infinities doesn't really matter.

Let's assume that our limit exists and is not $0$. We'll assign it a value of $L$. 

Since $f(x) \to \pm\infty$ as $x\to a$, $\lim_{x \to a}\frac{1}{f(x)} = 0$.

Likewise, since $g(x) \to \pm\infty$ as $x\to a$, $\lim_{x \to a}\frac{1}{g(x)} = 0$. 

Let's rewrite our limit like this

$$L = \lim_{x \to a}\frac{f(x)}{g(x)} = \lim_{x \to a}\frac{\frac{1}{g(x)}}{\frac{1}{f(x)}} \to \frac00$$

We've already shown that for a $\frac00$ limit, we can take the derivatives of the numerator and denominator: 

$$
\begin{aligned}
L &= 
\lim_{x \to a}\frac{f(x)}{g(x)}\cr
&= 
\lim_{x \to a}\frac{\frac{1}{g(x)}}{\frac{1}{f(x)}}\cr
&=
\lim_{x \to a}\frac{\frac{-g'(x)}{g(x)^2}}{\frac{-f'(x)}{f(x)^2}} &  \boxed{\text{don't forget chain rule}}\cr
&=
\lim_{x \to a}\frac{g'(x)f(x)^2}{f'(x)g(x)^2}\cr
&= 
\lim_{x \to a}\frac{g'(x)}{f'(x)}\cdot L^2  &  \boxed{\text{$L = \lim_{x \to a}\frac{f(x)}{g(x)}$}}\cr
\end{aligned}
$$

Look at what we have here:

$$
\begin{aligned}
L &= \lim_{x \to a}\frac{g'(x)}{f'(x)}\cdot L^2\cr
\frac1L &= \lim_{x \to a}\frac{g'(x)}{f'(x)} &  \boxed{\text{divide by $L^2$}}\cr
L &= \lim_{x \to a}\frac{f'(x)}{g'(x)} &  \boxed{\text{take the reciprocal of both sides}}\cr
\lim_{x \to a}\frac{f(x)}{g(x)}&=\lim_{x \to a}\frac{f'(x)}{g'(x)}
\end{aligned}
$$

So, L'Hôpital's Rule works the same way for both $\frac00$ and $\frac{\infty}{\infty}$ limits. 

> #### Summary
> If $f$ and $g$ are differentiable at $x = a$ and $\lim_{x \to a}\frac{f(x)}{g(x)}$ yields $\frac00$ or $\frac{\infty}{\infty}$, then
> $$\boxed{\lim_{x \to a}\frac{f(x)}{g(x)} = \lim_{x \to a}\frac{f'(x)}{g'(x)}}$$

#### Example

$$\lim_{x\to 1}\frac{x^9 - 1}{x^5 - 1}$$ 

We start by plugging in:

$$\lim_{x\to 1}\frac{x^9 - 1}{x^5 - 1}\longrightarrow\frac{1-1}{1-1}=\frac{0}{0}$$
Because we get an *indeterminate form*, we can use L'Hôpital's Rule.
$$\lim_{x\to 1}\frac{x^9 - 1}{x^5 - 1} = \lim_{x\to 1}\frac{9x^8}{5x^4}$$
Now try to plug in again:
$$\lim_{x\to 1}\frac{9x^8}{5x^4} \longrightarrow \frac{9(1)^8}{5(1)^4} = \frac{9}{5}$$
Since we got an answer, we conclude that
$$\lim_{x\to 1}\frac{x^9 - 1}{x^5 - 1} = \frac{9}{5}$$

#### Example

$$\lim_{x\to \infty}\frac{\ln{x}}{\sqrt{x}}$$ 

We start by plugging in:

$$\lim_{x\to \infty}\frac{\ln{x}}{\sqrt{x}}\longrightarrow\frac{\infty}{\infty}$$

Because we get an *indeterminate form*, we can use L'Hôpital's Rule.

$$
\begin{aligned}
\lim_{x\to \infty}\frac{\ln{x}}{\sqrt{x}} &= \lim_{x\to \infty}\frac{1/x}{1/(2\sqrt{x})} &  \boxed{\text{take derivatives}}\cr &= \lim_{x\to \infty}\frac{2\sqrt{x}}{x} &  \boxed{\text{simplify}}\cr &= \lim_{x\to \infty}\frac{2}{\sqrt{x}}
\end{aligned}
$$

$$\lim_{x\to \infty}\frac{\ln{x}}{\sqrt{x}} = \lim_{x\to \infty}\frac{1/x}{1/(2\sqrt{x})} = \lim_{x\to \infty}\frac{2\sqrt{x}}{x} = \lim_{x\to \infty}\frac{2}{\sqrt{x}}$$

Now try to plug in again: $$\lim_{x\to \infty}\frac{2}{\sqrt{x}} = 0$$
Since we got an answer, we conclude that
$$\lim_{x\to \infty}\frac{\ln{x}}{\sqrt{x}} = 0$$

#### Exercise 

Evaluate $\lim_{x\to \infty}e^{-x}x^3$

{{< details "Solution" >}}


$$\begin{aligned}
   \lim_{x\to \infty}e^{-x}x^3
   &=
   \lim_{x\to \infty}\frac{x^3}{e^x}\cr
   &=
   \lim_{x\to \infty}\frac{3x^2}{e^x}\cr
   &=
   \lim_{x\to \infty}\frac{6x}{e^x}\cr
   &=
   \lim_{x\to \infty}\frac{6}{e^x}\cr
   &=
   \boxed{0}\end{aligned}
$$

{{< /details >}}

#### Exercise

Evaluate $\lim_{x\to 0}\frac{\arcsin{x}}{x}$

{{< details "Solution" >}}


$$
\begin{aligned}
   \lim_{x\to 0}\frac{\arcsin{x}}{x}
   &=
   \lim_{x\to 0}\frac{\frac{1}{\sqrt{1-x^2}}}{1}\cr
   &=
   \boxed{1}\end{aligned}
$$

{{< /details >}}


#### Exercise

Evaluate $\lim_{x\to 1}\frac{x^a - 1}{x^b - 1}$, where $a$ and $b$ are positive integers greater than 1.

{{< details "Solution" >}}


$$
\begin{aligned}
   \lim_{x\to 1}\frac{x^a - 1}{x^b - 1}
   &=
   \lim_{x\to 1}\frac{ax^{a-1}}{bx^{b-1}}\cr
   &=
   \boxed{a/b}
\end{aligned}
$$

{{< /details >}}


## Other Indeterminate Forms

Consider the limit $\lim_{x\to\infty}\left(1-\frac{3}{x}\right)^x$. Let's call this limit $L$.

Remember how with derivatives that have a variable in the base and in
the exponent, we used $\ln()$\...?

Let's take $\ln()$ of both sides:

$$
\begin{aligned}
L &= \lim_{x\to\infty}\left(1-\frac{3}{x}\right)^x\cr
\ln(L) &= \ln\left(\lim_{x\to\infty}\left(1-\frac{3}{x}\right)^x\right)\cr
\ln(L) &= \lim_{x\to\infty}\ln\left(1-\frac{3}{x}\right)^x
\end{aligned}
$$

Using properties of logs, we can rewrite this:

$$
\begin{aligned}
\ln(L) 
&=
\lim_{x\to\infty}\ln\left(1-\frac{3}{x}\right)^x\cr
&=
\lim_{x\to\infty}x\ln\left(1-\frac{3}{x}\right) \to \infty\cdot 0
\end{aligned}
$$


We can write this as a $\frac{0}{0}$ limit using reciprocals:

$$
\begin{aligned}
\ln(L) 
&=
\lim_{x\to\infty}x\ln\left(1-\frac{3}{x}\right)\cr
&=
\lim_{x\to\infty}\frac{\ln\left(1-\frac{3}{x}\right)}{\frac{1}{x}}\to \frac{0}{0}
\end{aligned}
$$


Now, it's at $\frac00$ indeterminate form. Time for some L'Hôpital's Rule!

$$
\begin{aligned}
\lim_{x\to\infty}\frac{\ln\left(1-\frac{3}{x}\right)}{\frac{1}{x}} 
&=
\lim_{x\to\infty}\frac{\frac{3/x^2}{1-(3/x)}}{-1/x^2}\cr
&=
\lim_{x\to\infty}-\frac{3}{1-(3/x)}\cr
&=
-3
\end{aligned}
$$


Now, since we took $\ln()$ of the original limit, we need to "undo" that:

$$
\begin{aligned}
\ln(L) &= -3\cr
L&= e^{-3}
\end{aligned}
$$

#### Exercise

Evaluate $\lim_{x\to0^{+}}(e^x+x)^{1/x}$.

{{< details "Solution" >}}


$$
\begin{aligned}
   L &= \lim_{x\to0^{+}}(e^x+x)^{1/x}\cr
   \ln(L) &=
   \lim_{x\to0^{+}}\ln\left((e^x+x)^{1/x}\right)\cr
   &=
   \lim_{x\to0^{+}}\frac{1}{x}\ln\left((e^x+x)\right)\cr
   &=
   \lim_{x\to0^{+}}\frac{\ln(e^x+x)}{x}\cr
   &=
   \lim_{x\to0^{+}}\frac{\frac{e^x + 1}{e^x + x}}{1}\cr
   \ln(L)&=
   2\cr
   L&=e^2
\end{aligned}
$$

So, $\boxed{\lim_{x\to0^{+}}(e^x+x)^{1/x} = e^2.}$

{{< /details >}}