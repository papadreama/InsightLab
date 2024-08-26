---
title: Derivatives of Logs
weight: 37
math: true
---

# Logarithmic Functions

{{< hint "info" >}}

In this section, we are going to look at the derivatives of logarithmic functions. We'll start by considering the natural log function, $\ln(x)$. As it turns out, the derivative of $\ln(x)$ will allow us to differentiate not just logarithmic functions, but many other function types as well. 
 
If you don't remember all of your log properties, it would be a good idea to review them before moving on. We'll summarize the one's we'll need here. 

{{< /hint >}}

## Preliminaries

Logs can be intimidating, but remember that they're just the inverses of exponential functions. The following two equations are interchangeable: 

$$\log_b A = C \Longleftrightarrow b^C = A$$

The natural log, is *log base $e$* ($\ln A = \log_eA$), so we get 

$$\ln A = C \Longleftrightarrow e^C = A$$ 

If we remember that any logarithmic expression can be rewritten as an exponential expression, it can help us to develop our intuition about logs. 

### Some Log Examples
> 
> 1. Since $2^3 = 8$, $\log_2(8) = 3$. 
> 2. What is $\log_3(1/9)$? Well, we want to find the exponent such that $3^{?} = \frac{1}{9}$. So, $\log_3(1/9) = -2$. 
> 3. How do we know that $0 < \ln 2 < 1$? We know that $\ln 1 = 0$ and $\ln e = 1$ (make sure this is clear to you!). Since, $\ln 1 < \ln 2 < \ln e$, it follows that $0 < \ln 2 < 1$.

### Log Properties 

We are going to use the following three log properties quite a lot going forward: 

1. $\ln (AB) = \ln A + \ln B$
2. $\ln\left(\frac{A}{B}\right) = \ln A - \ln B$. 
3. $\ln(A^B) = B\ln A$. 

Each of these follows from rules of exponentiation. We'll show why the first one holds. 

### Proof that $\ln AB = \ln A + \ln B$
> Let's define $m = \ln A$, $n = \ln B$, and $x = \ln AB$. Then $A = e^m$,  $B = e^n$, and $AB = e^x$. 
> 
> We want to show that $x = m + n$. 
> 
> $$e^{m+n} = e^me^n = AB = e^x$$
> 
> Since $e^{m+n} = e^x$, it must be that $x = m+n$. 

### Definition of $e$

We're also going to need a particular definition of $e$. 

$$e = \lim_{t \to \infty}\left(1 + \frac1t\right)^t$$

## Derivative of the Natural Log Function

Let's plug $f(x) = \ln(x)$ into our limit definition for the derivative and see what happens. Notice, we're going to let $h\to0^{+}$ (why?)[^1].

This proof involves a lot of important skills and is worth going through carefully. We're going to use

- log properties
- substitution in a limit
- limits at infinity and $k/0$ limits

$$
\begin{aligned}
f'(x) 
&= 
\lim_{h \to 0^{+}}\frac{f(x +h) - f(x)}{h}\cr
&= 
\lim_{h \to 0^{+}}\frac{\ln(x +h) - \ln(x)}{h} 
 &  \boxed{\text{right away, we can use log property (2)}}\cr
&= 
\lim_{h \to 0^{+}}\frac{\ln\left(\frac{x+h}{x}\right)}{h}
 &  \boxed{\text{let's also move the $h$ out front}}\cr
&= 
\lim_{h \to 0^{+}}\frac1h\ln\left(\frac{x+h}{x}\right)
 &  \boxed{\text{now we can use log property (3)}}\cr
&=
\lim_{h \to 0^{+}}\ln\left(\frac{x+h}{x}\right)^{1/h}
 &  \boxed{\text{let's simplify the inside a bit}}\cr
&=
\lim_{h \to 0^{+}}\ln\left(1 + \frac{h}{x}\right)^{1/h}
 &  \boxed{\text{substitute: $t = x/h$}}\cr
&= 
\lim_{t \to \infty}\ln\left(1 + \frac1t\right)^{t/x}
 &  \boxed{\text{as $h\to0^{+}$, $t\to \infty$}}\cr
&=
\lim_{t \to \infty}\frac{1}{x}\ln\left(1 + \frac1t\right)^{t}
 &  \boxed{\text{bringing the $1/x$ in front, we see our $e$-limit!}}\cr
&= 
\frac{1}{x}\cdot\ln(e)\cr
&= 
\boxed{\frac{1}{x}}
\end{aligned}
$$

### Derivative of Natural Log
> $$\frac{d}{dx}(\ln x) = \frac 1x$$
> If we include the chain rule, we get
> $$\frac{d}{dx}(\ln a(x)) = \frac{1}{a(x)}\cdot a'(x) \quad \text{or} \quad \frac{a'(x)}{a(x)}$$

Let's start with a few easy examples: 





#### Example

Consider the function $f(x) = \ln(x^3 + 1)$. 

Let $a(x) = x^3 + 1$. Then, $a'(x) = 3x^2$. 

$$
\begin{aligned}
f(x) &= \ln(a(x))\cr
f'(x) &= \frac{a'(x)}{a(x)}\cr
&= \boxed{\frac{3x^2}{x^3 + 1}}
\end{aligned}
$$






#### Exercise 

Compute the derivative of $f(x) = \ln(\sin x)$.

{{< details "Solution" >}}
Let $a(x) = \sin x$. Then $a'(x) = \cos x$. 

$$
\begin{aligned}
f(x) &=\ln(a(x))\cr
f'(x) &= \frac{a'(x)}{a(x)}\cr
&= \frac{\cos x}{\sin x}\cr
&= \boxed{\cot x}
\end{aligned}
$$
{{< /details >}}




#### Example

If the function inside the log is very messy, we can use log properties, before we take the derivative, to break it up into simpler logs. 

Consider the function $g(x) = \ln(4x^5\sin^7(x))$.

$$
\begin{aligned}
g(x) &= \ln(4x^5\sin^7(x)) 
 &  \boxed{\text{first, we'll use propert (1)}}\cr
&= 
\ln 4 + \ln x^5 + \ln (\sin^7 x)
 &  \boxed{\text{now, we can use propoerty (3)}}\cr
&= \ln 4 +  5 \ln x  + 7 \ln (\sin x)
 &  \boxed{\text{this leaves us with three easy logs!}}\cr
g'(x) &= (0) + 5\cdot \frac 1x + 7 \cdot \frac{\cos x}{\sin x}\cr
&=
\boxed{\frac{5}{x} + 7\cot x}
\end{aligned}
$$





#### Exercise

Compute the derivative of $g(x) = \ln(4\sqrt{x}\tan(x))$ by first using log properties to simplify the function. 

{{< details "Solution" >}}
$$
\begin{aligned}
g(x) &= \ln(4\sqrt{x}\tan(x))\cr
&=
\ln 4 + \ln x^{1/2} + \ln tan(x)\cr
&=
\ln 4 + \ln x^{1/2} + \ln \frac{\sin x}{\cos x}\cr
&=
\ln 4 + \frac12 \ln x + \ln {\sin x} - \ln {\cos x}\cr
g'(x)
&=
(0) + \frac12\cdot\frac1x + \frac{\cos x}{\sin x} - \frac{-\sin x}{\cos x}\cr
&=\boxed{\frac{1}{2x} + \cot x + \tan x}
\end{aligned}
$$
{{< /details >}}





#### Exercise 

Compute the derivative of $h(x) = \ln\left(\frac{2x^5\sin^4(x)}{(3x+1)^2}\right)$.

{{< details "Solution" >}}

$$
\begin{aligned}
h(x) &= \ln\left(\frac{2x^5\sin^4(x)}{(3x+1)^2}\right)\cr
&=
\ln(2x^5\sin^4(x)) - \ln(3x+1)^2
 &  \boxed{\text{use $\ln(A/B) = \ln A - \ln B$}}\cr
&=
\ln(2) + \ln(x^5) + \ln(\sin^4(x)) - \ln(3x+1)^2
 &  \boxed{\text{use $\ln AB = \ln A + \ln B$}}\cr
&= 
\ln(2) + 5\ln(x) + 4\ln(\sin(x)) - 2\ln(3x+1)
 &  \boxed{\text{use $\ln A^B = B\ln A$}}\cr
g'(x)
&=
0 + 5\cdot\frac1x + 4\cdot\frac{\cos x}{\sin x} - 2\cdot\frac{3}{3x+1}
 &  \boxed{\text{take the derivative!}}\cr
&=\boxed{\frac5x + 4\cot x - \frac{6}{3x + 1}}
\end{aligned}
$$

{{< /details >}}

## Logarithmic Differentiation

When we have to take the derivative of a logarithmic function, it's nice to have access to all of the log properties. But, since we now know about *implicit differentiation*, we can always take the natural log of both sides of an equation to take advantage of logs. 

### Logarithmic Differentiation Outline
> - Take $\ln()$ of both sides of your equation. 
> - Apply any relevant log properties to simplify.
> - Do implicit differentiation. 
> - Solve for $y'$ (the derivative).
> - Plug the original $y$ (function) back in to get an answer in terms of $x$. 

Here's an example of when we might want to do this. 

#### Example

Consider the function $f(x) = x^x$. 

This weird little function is neither a power function (where the exponent is constant: $x^n$), nor is it an exponential function (where the base is constant). 

Let's try logarithmic differentiation. 

$$
\begin{aligned}
f(x) &= x^x\cr
\ln f(x) &= \ln x^x
 &  \boxed{\text{take $\ln()$ of both sides}}\cr
\ln f(x) &= x\ln x
 &  \boxed{\text{use log properties}}\cr
\frac{f'(x)}{f(x)} &= (1)\ln x + x\cdot \frac1x
 &  \boxed{\text{do implicit differentiation}}\cr
&= \ln x + 1\cr
f'(x) &= (\ln x + 1)\,f(x)
 &  \boxed{\text{solve for $f$}}\cr
&= \boxed{(\ln x + 1)\,x^x}
 &  \boxed{\text{Plug the original $f$ back in}}
\end{aligned}
$$




#### Exercise 

Use logarithmic differentiation to compute the derivative of $y = x^{x^6}$. 

{{< details "Solution" >}}

$$
\begin{aligned}
y &= x^{x^6}\cr
\ln y &= \ln \left( x^{x^6} \right)\cr
\ln y &= x^6 \ln \left( x\right)\cr
\frac{y'}{y} &= 6x^5 \ln x + x^6 \cdot \frac1x\cr
&= 
6x^5 \ln x + x^5\cr
y'&= (6x^5 \ln x + x^5)\, y\cr
&= \boxed{(6x^5 \ln x + x^5)\, x^{x^6}}
\end{aligned}
$$


{{< /details >}}





#### Exercise 

Use logarithmic differentiation to compute the derivative of $g(x) = (\sin x)^{1/x}$. 

{{< details "Solution" >}}

$$
\begin{aligned}
g(x) &= (\sin x)^{1/x}\cr
\ln g(x) &= \ln (\sin x)^{1/x}\cr
&= \frac1x \ln (\sin x)\cr
\frac{g'(x)}{g(x)} &= -\frac{1}{x^2}\ln(\sin x) + \frac1x\frac{\cos x}{\sin x}\cr
&= -\frac{\ln(\sin x)}{x^2} + \frac{\cot x}{x}\cr
g'(x) &= \left(-\frac{\ln(\sin x)}{x^2} + \frac{\cot x}{x}\right)\,g(x)\cr
&= \boxed{\left(-\frac{\ln(\sin x)}{x^2} + \frac{\cot x}{x}\right)\,(\sin x)^{1/x}}
\end{aligned}
$$

{{< /details >}}


[^1]: Because the domain of $f$ is $(0,\infty)$.  