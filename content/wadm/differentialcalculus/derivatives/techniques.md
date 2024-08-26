---
title: Differentiation Techniques
weight: 34
---


# Techniques of Differentiation: Basic Derivative Rules

{{< hint "info" >}}

In this section, we are going to start developing some shortcuts for computing derivatives. We will do so by looking at some broad categories of functions as well as some rules for how to combine them.
 
By the end of this section you should...
 
* Know and be able to apply the power rule
* Know the derivatives of sine and cos
* Know and be able to apply the product and quotient rules

{{< /hint >}}

## Notation 

There are a few different ways to notate differentiation and the
derivative of a function. Note that we distinguish between the two: 

- **differentiation** is the act of taking the derivative of a function 
- **the derivative** is the that results from differentiating.

### Notation for 

So far, we've been mostly using "prime" notation - e.g. the derivative
of $f(x)$ is $f'(x)$; the derivative of $y$ is $y'$. There's an
alternative to this we might call "d"- notation (or differential
notation). In this case we write that the derivative of $y$ is
$\frac{d y}{dx}$. The way to think about this is that since the
derivative outputs the slope of the line tangent to the original
function, we're getting
$\frac{\text{change in } y }{\text{change in } x}$.

You can do this with functions too, so $f'(x)$ can also be written
$\frac{df}{dx}$.

Remember that most mathematical notation is just shorthand. E.g.

-   The "=" symbol is just shorthand for 'is equal to.' You could write
    '2 + 3 is equal to 5' and that would be the same as writing '2+3=5.'

-   The symbol '$\sin{}$' is shorthand for 'sine of\...' So when we say
    that it is not okay to write $\sin{} = 1/\sqrt{2}$ it's because
    you're really just writing 'sine of equals one over the square root
    of two.' When we say that out loud it sounds wrong doesn't it?

The shorthand notation for 'derivative of\...' is $\frac{d}{dx}$. Just
like $\sin{()}$ you have to **plug something in order for it to make
sense and form a complete sentence.** For example, in the last section we found that for $f(x) = x^2$, $f'(x) = 2x$. We could write

$$\frac{d}{dx}\left(x^2\right) = 2x$$

We read this as "the derivative of $x$ squared is two $x$."

## Constant Functions

Let's start with the easiest kind of function: a constant function. Now, we can probably just use our intuition here. The rate of change of something that isn't changing is always $0$. Let's see if we can arrive at this conclusion using the limit definition of the derivative. 

Let $f(x) = k$. 

$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{f(x +h) - f(x)}{h}\cr
&= \lim_{h \to 0}\frac{k - k}{h}\cr
&= \lim_{h \to 0}\frac{0}{h}\cr
&= \lim_{h \to 0} 0 \cr
&= \boxed{0}
\end{aligned}
$$

There we go!

> #### Derivative of a Constant Function
> 
> $$\frac{d}{dx}(k) = 0$$

There's probably not much need for examples here...

#### Example 

If $f(x) = 5$, $f'(x) = 0$.

#### Example

If $g(x) = \pi$, $g'(x) = 0$.

#### Exercise
Compute the derivative of $f(x) = 159$. 

{{< details "Solution" >}}

$$f'(x) = 0.$$

{{< /details >}}

#### Exercise 
Compute the derivative of $g(x) = 5\ln 2$.

{{< details "Solution" >}}

$$g'(x) = 0.$$

{{< /details >}}

## Power Rule

Recall that with limits, we defined *power functions* to be functions of the form $x^n$, where $n$ is a positive integer (whole number). Let's see if we can come up with a general rule for the derivative of any power function: a *power rule*.

Let $f(x) = x^n$. Plugging into our derivative formula, we get 

$$f'(x) = \lim_{h \to 0}\frac{(x+h)^n - x^n}{h}$$

There's a small problem here: how do we expand $(x+h)^n$?

Let's take a look at the first few $n$-values: 

* $(x+h)^1 = x + h$
* $(x+h)^2 = x^2 + 2x h + h^2$
* $(x + h)^3 = x^3 + 3x^2h + 3x h^2 + h^3$
* $(x + h)^4 = x^4 + 4x^3h + 6x^2h^2 + 4x h^3 + h^4$

Notice that in each term the exponents on $x$ and $h$ add up to $n$. So, in $x+h)^4$, the exponents in each term add up to $4$. How about the coefficients? 

There's a theorem that tells us what the coefficients for these expansions are: the binomial theorem: 

> Given $x + h)^n$, the coefficient of $x^{n-k}h^k$ is $\frac{n!}{k!(n-k)!}$. It's actually not hugely important that we remember this right now. It's enough to know that these coefficients are computable. 

Back to the *power rule*: 

$$
\begin{aligned}
f'(x) &= \lim_{h \to 0}\frac{(x+h)^n - x^n}{h}\cr
&=\lim_{h \to 0}\frac{x^n + n x^{n-1} h + \frac{n!}{2!(n - 2)!}x^{n - 2}h^2 + \cdots + nxh^{n-1} + h^n - x^n}{h}\cr
&=\lim_{h \to 0}\frac{n x^{n-1} h + \frac{n!}{2!(n - 2)!}x^{n - 2}h^2 + \cdots + nxh^{n-1} + h^n}{h}\cr
&=\lim_{h \to 0}\left({n x^{n-1}  + \frac{n!}{2!(n - 2)!}x^{n - 2}h + \cdots + nxh^{n-2} + h^{n-1}}\right)\cr
&= n x^{n-1}  + \frac{n!}{2!(n - 2)!}x^{n - 2}(0) + \cdots + nx(0)^{n-2} + (0)^{n-1}\cr
&=
\boxed{nx^{n-1}}
\end{aligned}
$$

Now, technically we've only shown that the power rule applies to positive integers, but this works for any exponent. That's something we'll be able to prove in detail later on. 

> #### Power Rule 
> $$f(x) = x^n  \Longrightarrow  f'(x) = nx^{n-1}$$
> Or
> $$\frac{d}{dx}(x^n) = nx^{n - 1}$$ 

#### Example
The derivative of $f(x) = x^5$ is

$$
\begin{aligned}
f'(x) &= (5) x^{5 - 1}\cr
&= \boxed{5x^4}
\end{aligned}
$$

#### Exercise

Compute the derivative of $g(x) = x^7$

{{< details "Solution" >}}
$$g'(x) = 7x^6$$
{{< /details >}}

#### Example
The derivative of $f(x) = \sqrt{x}$ is

$$
\begin{aligned}
f(x) &= x^{1/2}\cr
f'(x) &= \frac12 x^{\frac12 - 1}\cr
&=\frac12 x^{-\frac12}\cr
&=\boxed{\frac{1}{2\sqrt{x}}}
\end{aligned}
$$

#### Exercise

Compute the derivative of $g(x) = \sqrt[3]{x}$.

{{< details "Solution" >}}

$$
\begin{aligned}
g(x) &= x^{1/3}\cr
g'(x) &= \frac13 x^{1/3 - 1}\cr
&= \frac13 x^{-2/3}\cr
&=\boxed{\frac{1}{3\sqrt[3]{x^2}}}
\end{aligned}
$$

{{< /details >}}

#### Example

Remember that $\frac{1}{A^n} = A^{-n}$. So, for $f(x) = \frac{1}{x^4}$, we have

$$
\begin{aligned}
f(x) &= x^{-4}\cr
f'(x) &= -4x^{-4 -1}\cr
&= -4x^{-5}\cr
&=\boxed{\frac{-4}{x^5}}
\end{aligned}
$$

#### Exercise 

Compute the derivative of $g(x) = \frac{1}{x^3}$

{{< details "Solution" >}}
$$
\begin{aligned}
g(x) &= x^{-3}\cr
g'(x) &= -3x^{-4}\cr
&= \boxed{\frac{-3}{x^4}}
\end{aligned}
$$
{{< /details >}}

## Sine and Cosine

To find the derivatives of sine and cosine, we'll need a few things: 

- Trig Identities
  - $\sin(A + B) = \sin(A)\cos(B) + \sin(B)\cos(A)$
  - $\cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)$
- Out special trig limits
  - $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$
  - $\lim_{\theta \to 0}\frac{1 - \cos\theta}{\theta} = 0$. 
    - This implies that $\lim_{\theta \to 0}\frac{\cos\theta - 1}{\theta} = 0$ as well.

Let's start with $f(x) = \sin(x)$. 

$$
\begin{aligned}
f'(x) 
&= \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}\cr
&= \lim_{h \to 0}\frac{\sin(x + h) - \sin(x)}{h}  & {\textit{ derivative definition}}\cr
&= \lim_{h \to 0}\frac{\sin(x)\cos(h) + \sin(h)\cos(x) - \sin(x)}{h}  & {\textit{apply trig identity}}\cr
&= \lim_{h \to 0}\frac{\sin(x)\cos(h) - \sin(x) + \sin(h)\cos(x)}{h}  & {\textit{rearrange terms}}\cr
&= \lim_{h \to 0}\frac{\sin(x)\cos(h) - \sin(x)}{h} + \frac{\sin(h)\cos(x)}{h}  & {\textit{split up}}\cr
&= \lim_{h \to 0} \frac{ \cos(h) - 1}{h}\sin(x) + \frac{\sin(h)}{h}\cos(x)  & {\textit{factor out } \sin(x) \text{ and } \cos(x)}\cr
&= (0)\sin(x) + (1)\cos(x)  & {\textit{apply special limits}}\cr
&= \boxed{\cos(x)}
\end{aligned}
$$

Repeat the same basic principles to get the derivative of $f(x) = \cos(x)$.

{{< details "Solution" >}}

$$
\begin{aligned}
f'(x) 
&=
\frac{f(x + h) + f(x)}{h}\cr
&=
\frac{\cos(x+h) - \cos(x)}{h}\cr
&=
\frac{\cos(x)\cos(h) - \sin(x)\sin(h) - \cos(x)}{h} 
 & {\textit{apply trig identity}}\cr
&=
\frac{\cos(x)\cos(h) - \cos(x) - \sin(x)\sin(h)}{h} 
 & {\textit{move terms around}}\cr
&=
\frac{\cos(x)\cos(h) - \cos(x)}{h} - \frac{\sin(x)\sin(h)}{h} 
 & {\textit{split fraction}}\cr
&=
\frac{\cos(h) - 1}{h}\cos(x) - \frac{\sin(h)}{h}\sin(x) 
 & {\textit{factor out }\cos(x) \text{ and } \sin(x)}\cr
&=
(0)\cos(x) - (1)\sin(x)
 & {\textit{apply limits}}\cr
&=
\boxed{-\sin(x)}
\end{aligned}
$$

{{< /details >}}

> #### Sine and Cosine
> $$\frac{d}{dx}(\sin(x)) = \cos(x)$$
> $$\frac{d}{dx}(\cos(x)) = - \sin(x)$$

## Putting Things Together

So far, we've got derivative rules for *constant functions*, *power functions*, and *sine* and *cosine*. Next, we want to look at how these derivative rules can be combined. Some of these will seem obvious, but some will seem much less so, which means we have to be very careful when applying these rules at first. 

### Constant Multiples

What if we want the derivative of constant multiple of $f(x)$? Let's call the constant $k$ and see what happens.

$$
\begin{aligned}
\frac{d}{dx}(kf(x))
&=
\lim_{h \to 0}\frac{kf(x+h) - kf(x)}{h}\cr
&=
\lim_{h \to 0}k\frac{f(x+h) - f(x)}{h} 
 & {\textit{factor out a $k$}}\cr
&=
kf'(x)
\end{aligned}
$$

> #### Constant Multiple Rule
> $$\frac{d}{dx}(kf(x)) = kf'(x)$$

This is a pretty simple rule, but we'll use it all the time. 

#### Example

The derivative of $f(x) = 5x^3$ is 

$$
\begin{aligned}
f'(x) &= 5(3x^2)\cr
&=\boxed{15x^2}
\end{aligned}
$$

#### Example 

The derivative of $g(x) = \frac5{x^6}$ is 

$$
\begin{aligned}
g(x) &= 5x^{-6}
 & {\textit{rewrite radical as exponent}}\cr
g'(x) &= 5(-6x^{-7})
 & {\textit{power rule}}\cr
&=-30x^{-7} & {\textit{simplify}}\cr
&=\boxed{-\frac{30}{x^7}}
\end{aligned}
$$

#### Exercise

Compute the derivative of $f(x) = 6\sqrt{x}$

{{< details "Solution" >}}

$$
\begin{aligned}
f(x) &= 6x^{1/2}
 & {\textit{rewrite radical as exponent}}\cr
f'(x)&= 6\left(\frac12x^{-1/2}\right)
 & {\textit{power rule}}\cr
&=3x^{-1/2}
 & {\textit{simplify}}\cr
&=\boxed{\frac{3}{\sqrt{x}}}
\end{aligned}
$$

{{< /details >}}

#### Exercise

Compute the derivative of $g(x) = \frac{1}{4x^2}$.

{{< details "Solution" >}}

$$
\begin{aligned}
g(x) 
&= 
\frac14 x^{-2}
 & {\textit{rewrite $\frac1{x^2}$ as $x^{-2}$}}\cr
g'(x) 
&= 
\frac14(-2x^{-3})
 & {\textit{power rule}}\cr
&=
-\frac12x^{-3}
 & {\textit{simplify}}\cr
&=
\boxed{-\frac{1}{2x^3}}
\end{aligned}
$$

{{< /details >}}

#### Exercise

Compute the derivative of $h(x) = 10\cos(x)$

{{< details "Solution" >}}

$$
\begin{aligned}
h'(x) &= 10(-\sin(x))\cr
&= \boxed{-10\sin(x)}
\end{aligned}
$$

{{< /details >}}

### Sums of Functions

Ok, so how about sums of functions? Let's apply our definition of the derivative to $f(x) = a(x) + b(x)$: 

$$
\begin{aligned}
f'(x)
&=
\lim_{h \to 0}\frac{f(x+h) - f(x)}{h}\cr
&=
\lim_{h \to 0}\frac{(a(x+h) + b(x+h)) - (a(x) + b(x))}{h}\cr
&=
\lim_{h \to 0}\frac{a(x+h) + b(x+h) - a(x) - b(x)}{h}\cr
&=
\lim_{h \to 0}\frac{a(x+h) - a(x) + b(x+h) - b(x)}{h}\cr
&=
\lim_{h \to 0}\frac{a(x+h) - a(x)}{h} + \frac{b(x+h) - b(x)}{h}\cr
&=
\boxed{a'(x) + b'(x)}
\end{aligned}
$$

This is a case where the derivative rule is quite intuitive: if we're taking the derivative of a sum, we can take the sum of the derivatives. 

> #### Sum Rule
> $$\frac{d}{dx}(a(x) + b(x)) = a'(x) + b'(x)$$

#### Example

The derivative of $f(x) = 3x^2 + \sin(x)$ is

$$
\begin{aligned}
f'(x) &= 3(2x^1) + \cos(x)\cr
&= \boxed{6x + \cos(x)}
\end{aligned}
$$

#### Example

The derivative of $g(x) = \sqrt{x} - 5x + 10$ is

$$
\begin{aligned}
g(x) &= x^{1/2} - 5x + 10
 & {\textit{always start by rewriting radicals}}\cr
g'(x) &= \frac12 x^{-1/2} - 5(1x^0) + 0\cr
&= \boxed{\frac{1}{2\sqrt{x}} - 5}
\end{aligned}
$$

#### Exercise

Compute the derivative of $f(x) = 7x^4 + 6\sqrt[3]{x} - 5$

{{< details "Solution" >}}
$$
\begin{aligned}
f(x) &= 7x^4 + 6x^{1/3} - 5
 & {\textit{rewrite radicals}}\cr
f'(x) 
&= 7(4x^3) + 6\left(\frac13 x^{-2/3}\right) - 0
 & {\textit{power rules}}\cr
&= 28x^3 + 2x^{-2/3}
 & {\textit{simplify}}\cr
&= \boxed{28x^3 + \frac{2}{\sqrt[3]{x^2}}}
\end{aligned}
$$
{{< /details >}}

#### Exercise

Compute the derivative of $g(x) = x^8 - \frac{2}{x^3} + 3\cos(x)$.

{{< details "Solution" >}}

$$
\begin{aligned}
g(x)
&= x^8 - 2x^{-3} + 3\cos(x)
 & {\textit{rewrite $\frac1{x^3}$ as $x^{-3}$}}\cr
g'(x)
&= 8x^7 - 2(-3x^{-4}) + 3(-\sin(x))\cr
&= \boxed{8x^7 + \frac{6}{x^4} - 3\sin(x)} 
\end{aligned}
$$

{{< /details >}}

#### Example

In this example, we need to do a bunch of simplifying before we apply any of our derivative rules. 

$$f(x) = \frac{3x^3 - 7x + 1}{x^2}$$

> Although we will soon have a *quotient rule*, in a situation like this one, it is much more efficient to simplify first.

$$
\begin{aligned}
f(x) 
&= \frac{3x^3 - 7x + 1}{x^2}\cr
&= \frac{3x^3}{x^2} - \frac{7x}{x^2} + \frac{1}{x^2}
 & {\textit{split the fraction}}\cr
&= 3x - \frac{7}{x} + \frac{1}{x^2}
 & {\textit{simplify}}\cr
&= 3x - 7x^{-1} + x^{-2}
 & {\textit{rewrite in form $x^n$}}\cr
f'(x)
&= 3(1) - 7(-x^{-2}) + (-2x^{-3})
 & {\textit{power rules}}\cr
&= \boxed{3 + \frac{7}{x^2} - \frac{2}{x^3}}
\end{aligned}
$$

#### Exercise

Use the approach we took in the previous example to compute the derivative of 

$$f(x) = \frac{4x^5 + 2x^3 - x^{5/2}}{x^2}$$

{{< details "Solution" >}}
$$
\begin{aligned}
f(x)
&=
\frac{4x^5 + 2x^3 - x^{5/2}}{x^2}\cr
&=
\frac{4x^5}{x^2} + \frac{2x^3}{x^2} - \frac{x^{5/2}}{x^2}
 & {\textit{split}}\cr
&=
4x^3 + 2x - x^{1/2}
 & {\textit{simplify}}\cr
f'(x)
&=
4(3x^2) + 2(1) - \left(\frac12 x^{-1/2}\right)
 & {\textit{power rule}}\cr
&=
\boxed{12x^2 + 2 - \frac{1}{2\sqrt{x}}}
\end{aligned}
$$
{{< /details >}}

## Product Rule

Now things start to get a little more complicated. When we were adding functions, we took the derivative of the sum term-by-term. Products don't work the same way. 

> #### Common Mistake
> It very common for someone to assume that $\frac{d}{dx}(f(x)g(x)) = f'(x)g'(x)$. **This is very incorrect!** It is another example of over-generalization. We'll see why when we plug everything into the limit definition of the derivative. 

Let $f(x) = a(x)b(x)$. 

> #### Trick: Adding Zero
> In order to simplify the expression below, we are going to **add zero** in a clever way. This might seem like a strange thing to do, but it's not unlike multiplying by one (for example, we might multiply by $3/3$ to get a common denominator when adding $4/3x + 1/x$):
> 
> $$\frac{4}{3x} + \frac{1}{x}\cdot\frac33 = \frac{4 + 3}{3x}$$
> 
> For an example of adding zero, check this out: 
> 
> $$\frac{x^2}{x^2 + 1} = \frac{x^2 + (1 - 1)}{x^2 + 1} = \frac{x^2 + 1}{x^2 + 1} - \frac{1}{x^2 + 1} = 1 - \frac{1}{x^2 + 1}$$
> By adding $1 - 1$, which equals $0$, we were able to split and simplify the rational expression. 

In working through the limit below, we will add zero in the form $a(x+h)b(x) - a(x+h)b(x)$. 

$$
\begin{aligned}
f'(x)
&=
\lim_{h \to 0}\frac{f(x+h) - f(x)}{h}\cr
&=
\lim_{h \to 0}\frac{a(x+h)b(x+h) - a(x)b(x)}{h}
 & {\textit{sub in $f(x) = a(x)b(x)$}}\cr
&=
\lim_{h \to 0}\frac{a(x+h)b(x+h) - a(x+h)b(x) + a(x+h)b(x)- a(x)b(x)}{h}
 & {\textit{add the magic zero-term}}\cr
&=
\lim_{h \to 0}\frac{a(x+h)\left(b(x+h) - b(x)\right) + b(x)\left(a(x+h)- a(x)\right)}{h}
 & {\textit{factor}}\cr
&=
\lim_{h \to 0}\left(\frac{a(x+h)\left(b(x+h) - b(x)\right)}{h} + \frac{b(x)\left(a(x+h)- a(x)\right)}{h}\right)
 & {\textit{split}}\cr
&=
\lim_{h \to 0}\left(a(x+h)\frac{b(x+h) - b(x)}{h} + b(x)\frac{a(x+h)- a(x)}{h}\right)
 & {\textit{split}}\cr
&=
\boxed{a(x)b'(x) + b(x)a'(x)}
\end{aligned}
$$

> #### Product Rule
> $$\frac{d}{dx}\left(a(x)b(x)\right) = a(x)b'(x) + a'(x)b(x)$$

Let's try it out. 

#### Example

Consider $f(x) = x^4\sin(x)$. 

We could let $a(x) = x^4$ and $b(x) = \sin(x)$. 

Then $a'(x) = 4x^3$ (power rule) and $b'(x) = \cos(x)$. 

Putting it all together: 

$$
\begin{aligned}
f'(x) &= a(x)b'(x) + a'(x)b(x)\cr
&= \boxed{x^4\cos(x) + 4x^3\sin(x)}
\end{aligned}
$$

#### Exercise 

Compute the derivative of $g(x) = \sqrt{x}\cos(x)$. 

{{< details "Solution" >}}

Let $a(x) = \sqrt{x} = x^{1/2}$ and $b(x) = \cos(x)$. 

Then $a'(x) = \frac12 x^{-1/2} = \frac{1}{2\sqrt{x}}$ and $b'(x) = -\sin(x)$. 

Putting it together, we get 

$$
\begin{aligned}
g'(x) &= a(x)b'(x) + a'(x)b(x)\cr
&= \sqrt{x}(-\sin(x)) + \frac{1}{2\sqrt{x}}\cos(x)\cr
&=\boxed{\frac{\cos x}{2\sqrt{x}} - \sqrt{x}\sin x}
\end{aligned}
$$

{{< /details >}}

#### Example

How about $f(x) = 5x^3\sin(x)\cos(x)$. In this case, we have a product of three terms. 

We can let $a(x) = 5x^3\sin(x)$ and $b(x) = \cos(x)$ (note that you group these three functions differently if you like). 

The derivative of $a$ requires the product rule as well. 

Let's define $r(x) = 5x^3$ and $s(x) = \sin(x)$. 

Then $r'(x) = 15x^2$ and $s'(x) = \cos(x)$. 

$$
\begin{aligned}
a'(x) &= r(x)s'(x) + r'(x)s(x)\cr
&=5x^3\cos(x) + 15x^2\sin(x)\cr
\end{aligned}
$$

We've also got $b'(x) = -\sin(x)$

Putting it all together: 

$$
\begin{aligned}
f'(x) &= a(x)b'(x) + a'(x)b(x)\cr
&= (5x^3\cos(x) + 15x^2\sin(x)) + (-\sin(x))\cr
&= 5x^3\cos(x) + 15x^2\sin(x) + -\sin(x)\cr
\end{aligned}
$$



> #### Product of Three Terms
> You may have noticed a pattern in the triple product problem above:
> $$\frac{d}{dx}(a(x)b(x)c(x)) = a(x)b(x)'c(x) + a(x)b'(x)c(x) + a'(x)b(x)c(x)$$

### Quotient Rule

This is the last of the arithmetic ways to combine functions. Functions have another operation called *composition* (plugging one function into another), which we'll address in the next section. 

Let's define $f(x) = \frac{a(x)}{b(x)}$. 

$$
\begin{aligned}
f'(x)
&=
\lim_{h \to 0}\frac{f(x+h) - f(x)}{h}\cr
&=
\lim_{h \to 0}\frac{\frac{a(x+h)}{b(x+h)} - \frac{a(x)}{b(x)}}{h}\cr
&=
\lim_{h \to 0}\frac{1}{h}\left(\frac{a(x+h)}{b(x+h)} - \frac{a(x)}{b(x)}\right)
 & {\textit{rewrite for legibility}}\cr
&=
\lim_{h \to 0}\frac{1}{h}\left(\frac{a(x+h)b(x)}{b(x+h)b(x)} - \frac{a(x)b(x+h)}{b(x)b(x+h)}\right)
 & {\textit{get common denominator}}\cr
&=
\lim_{h \to 0}\frac{1}{h}\left(\frac{a(x+h)b(x) -a(x)b(x+h)}{b(x)b(x+h)}\right)
 & {\textit{combine}}\cr
&=
\lim_{h \to 0}\frac{1}{h}\left(\frac{a(x+h)b(x) -a(x)b(x) + a(x)b(x) -a(x)b(x+h)}{b(x)b(x+h)}\right)
 & {\textit{add zero like we did before!}}\cr
&=
\lim_{h \to 0}\frac{1}{h}\left(\frac{b(x)(a(x+h) -a(x)) + a(x)(b(x) - b(x+h))}{b(x)b(x+h)}\right)
 & {\textit{factor}}\cr
&=
\lim_{h \to 0}\left(\frac{b(x)\frac{a(x+h) -a(x)}{h} + a(x)\frac{b(x) - b(x+h)}{h}}{b(x)b(x+h)}\right)
 & {\textit{distribute the $1/h$}}\cr
&=
\frac{b(x)a'(x) - a(x)b'(x)}{b(x)b(x)}
 & {\textit{take limit as $h\to 0$}}\cr
&=
\boxed{\frac{b(x)a'(x) - a(x)b'(x)}{(b(x))^2}}
\end{aligned}
$$

In the next section, we'll see a better way to get the quotient rule by combining two other rules. For now, let's just try it out. 

#### Example

Let's start with an example we could do with the product rule as well, just to compare the two approaches. 

Let $f(x) = \frac{\sin(x)}{x^4}$. 

**Product Rule:**

Rewrite $f$ as $f(x) = x^{-4}\sin(x)$. 

Let $a(x) = x^{-4}$ and $b(x) = \sin(x)$. Then $a'(x) = -4x^{-5}$ and $b'(x) = \cos(x)$. 

So, 

$$
\begin{aligned}
f'(x) &= a(x)b'(x) + a'(x)b(x)\cr
&=
x^{-4}\cos(x) + (-4x^{-5}\sin(x))\cr
&=
\frac{\cos x}{x^4} - \frac{4\sin x}{x^5}\cr
&=
\boxed{\frac{x\cos x - 4\sin x}{x^5}}
\end{aligned}
$$

**Quotient Rule:**

Leave $f(x) = \frac{\sin x}{x^4}$ and define $\alpha(x) = \sin x$ and $\beta(x) = x^4$. 

Then $\alpha'(x) = \cos(x)$ and $\beta'(x) = 4x^3$. 

So, 

$$
\begin{aligned}
f'(x) &= \frac{\beta(x)\alpha'(x) - \alpha(x)\beta'(x)}{(\beta(x))^2}\cr
&=
\frac{(x^4)(\cos x) - (\sin x)(4x^3)}{(x^4)^2}\cr
&=
\frac{x^4\cos x - 4x^3\sin x}{x^8}\cr
&=
\boxed{\frac{x\cos x - 4\sin x}{x^5}}\cr
\end{aligned}
$$

Notice that either way, we get the same answer! 

In some cases, the quotient rule is a much better option. This is usually the case when both the numerator and denominator are more complex. Let's do the following examples and exercises using the quotient rule.

#### Example

Consider 
$$f(x) = \frac{x^2 + x}{3x - \cos x}$$
Let 
$$a(x) = x^2 + x \qquad b(x) = 3x - \cos x$$

Then 

$$a'(x) = 2x + 1 \qquad b'(x) = 3 + \sin x$$

Putting it all together: 

$$
\begin{aligned}
f'(x) &= \frac{b(x)a'(x) - a(x)b'(x)}{(b(x))^2}\cr
&=
\frac{(3x-\cos x)(2x+1) - (x^2 + x)(3 + \sin x)}{(3x - \cos x)^2}\cr
\end{aligned}
$$

There's not much sense in simplifying here as it will just make things messier. 

> #### How Much Should We Simplify
> Generally, a good approach is to ask, "would this make it easier to plug a number in?"

x#### Exercise

Compute the derivative of $g(x) = \frac{5\sin(x)}{x^4 + 3}$

{{< details "Solution" >}}

Let's define 

$$a(x) = 5\sin x \qquad b(x) = x^4 + 3$$

Then 

$$a'(x) = 5\cos x \qquad b'(x) = 4x^3$$

Putting it together: 

$$
\begin{aligned}
g'(x) &= \frac{b(x)a'(x) - a(x)b'(x)}{(b(x))^2}\cr
&=
\frac{(x^4 + 3)(5\cos(x)) - (5\sin(x))(4x^3)}{(x^4 + 3)^2}\cr
&=
\boxed{\frac{5(x^4 + 3)\cos(x) - 20x^3\sin(x)}{(x^4 + 3)^2}}
\end{aligned}
$$

{{< /details >}}

#### Exercise 

Compute the derivative of $h(x) = \frac{x - 1}{\cos(x)}$

{{< details "Solution" >}}

Let $a(x) = x - 1$ and $b(x) = \cos(x)$. Then $a'(x) = 1$ and $b'(x) = -\sin(x)$.

$$
\begin{aligned}
h'(x) &= \frac{b(x)a'(x) - a(x)b'(x)}{(b(x))^2}\cr
&=
\frac{(\cos(x))(1) - (x-1)(-\sin(x))}{(\cos(x))^2}\cr
&=
\frac{\cos(x) + (x - 1)\sin(x)}{\cos^2(x)}
\end{aligned}
$$

{{< /details >}}

## Derivatives of Trig Functions

Let's use the quotient rule to come up with derivative rules for the rest of the trig functions. 

### Tangent

Let $f(x) = \tan x$. 

Rewrite $f$ in terms of sine and cosine and then do the quotient rule: 

$$
\begin{aligned}
f(x) &= 
\frac{\sin x}{\cos x}\cr
f'(x) &= 
\frac{(\cos x)(\cos x) - (\sin x)(-\sin x)}{(\cos x)^2}\cr
&=
\frac{\cos^2 x + \sin^2 x}{\cos^2x}\cr
&=
\frac{1}{\cos^2x}
 & {\textit{use trig identity $\cos^2 x + \sin^2 x = 1$}}\cr
&=
\boxed{\sec^2x}
\end{aligned}
$$

Now, try doing the same for the rest!

### Secant

Let $f(x) = \sec x$. 

{{< details "Solution" >}}
$$
\begin{aligned}
f(x) &= \frac{1}{\cos x}\cr
f'(x) &= \frac{(\cos x)(0) - (-\sin x)(1)}{\cos^2x}\cr
&=
\frac{\sin x}{\cos^2 x}\cr
&=
\frac{\sin x}{\cos x}\cdot\frac{1}{\cos x}\cr
&=
\boxed{\tan(x)\sec(x)}
\end{aligned}
$$
{{< /details >}}


### Cotangent

Let $f(x) = \cot x$. 

$$
\begin{aligned}
f(x) &= 
\frac{\cos x}{\sin x}\cr
f'(x) &= 
\frac{(\sin x)(-\sin x) - (\cos x)(\cos x)}{(\sin x)^2}\cr
&=
\frac{-\sin^2 x - \cos^2 x}{\sin^2x}\cr
&=
-\frac{\sin^2 x + \cos^2 x}{\sin^2x}\cr
&=
-\frac{1}{\sin^2x}
 & {\textit{use trig identity $\cos^2 x + \sin^2 x = 1$}}\cr
&=
\boxed{-\csc^2x}
\end{aligned}
$$

### Cosecant

Let $f(x) = \csc{(x)}$. 

{{< details "Solution" >}}
$$
\begin{aligned}
f(x) &= \frac{1}{\sin x}\cr
f'(x) &= \frac{(\sin x)(0) - (\cos x)(1)}{\sin^2x}\cr
&=
\frac{-\cos x}{\sin^2 x}\cr
&=
-\frac{\cos x}{\sin x}\cdot\frac{1}{\sin x}\cr
&=
\boxed{-\cot(x)\csc(x)}
\end{aligned}
$$
{{< /details >}}

## Summary

Here are all the derivative rules we've found so far. 

### Constant Function

$$\frac{d}{dx}\left(k\right) = 0$$

### Power Rule

$$\frac{d}{dx}\left(x^n\right) = nx^{n-1}$$

### Trig Functions

$$
\begin{aligned}
\frac{d}{dx}\left(\sin x\right) &= \cos x\cr
\frac{d}{dx}\left(\cos x\right) &= -\sin x\cr
\frac{d}{dx}\left(\tan x\right) &= \sec^2x\cr
\frac{d}{dx}\left(\cot x\right) &= -\csc^2x\cr
\frac{d}{dx}\left(\sec x\right) &= \sec x \tan x\cr
\frac{d}{dx}\left(\csc x\right) &= -\csc x \cot x
\end{aligned}
$$

> Notice that all of the "c" functions (cosine, cotangent, and cosecant) have negative derivatives. 

### Constant Multiple

$$\frac{d}{dx}\left(kf(x)\right) = kf'(x)$$

### Sum of Functions

$$\frac{d}{dx}\left(a(x) + b(x)\right) = a'(x) + b'(x)$$

### Product Rule

$$\frac{d}{dx}\left(a(x)b(x)\right) = a(x)b'(x) + a'(x)b(x)$$

### Quotient Rule

$$\frac{d}{dx}\left(\frac{a(x)}{b(x)}\right) = \frac{b(x)a'(x) - a(x)b'(x)}{(b(x))^2}$$

