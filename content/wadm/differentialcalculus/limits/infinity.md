---
title: Limits at Infinity
weight: 24
math: true
---

> [!abstract] Overview
> In this section, we're going to consider limits at infinity. The language here is a little strange: you can't really be **at** infinity, but we often use that language colloquially. More technically...  
> * When we write $x \to +\infty$ we mean that $x$ is **increasing without bound**. 
> * When we write $x \to -\infty$ we mean that $x$ is **decreasing without bound**. 
> * When we write $\lim_{x\to\infty}f(x) = L$, we mean that the value of $f$ can be made as close to $L$ as we like by increasing the value of $x$ enough.
> * When we write $\lim_{x\to-\infty}f(x) = L$, we mean that the value of $f$ can be made as close to $L$ as we like by decreasing the value $x$ enough. 
> Visually, when $\lim_{x\to\infty}f(x) = L$ or $\lim_{x\to-\infty}f(x) = L$, we have a **horizontal > asymptote** of $y=L.$ 
>
> By the end of this section you should...
>
> * Know the end behavior of all the common parent functions
> * Be able to apply the end behaviors of parent functions to more complex examples - e.g., rational functions
> * Be able to identify horizontal asymptotes


## Key Example
When computing limits at infinity, we can rely on a few basic concepts and examples, which can be combined as needed.

Consider the function $f(x) = \frac1x$. You're probably familiar with its graph, but let's revisit it together here. 

We'll begin by noticing that at $x = 0$, we have a vertical asymptote, as we discussed in the [previous section](computing). If we plug in progressively larger values for $x$, we can get **as close to 0 as we like**. 

| x   | 1 | 5 | 10 | 100  | 1000 | 100000 |
|-----|---|---|----|------|------|--------|
|$1/x$| 1 |1/5|1/10| 1/100|1/1000|1/100000|

> We can make the value of $f$ as close to zero as we like by making the value of $x$ sufficiently large. We write 
> $$\lim_{x\to\infty}\frac1x = 0$$

The same occurs in the opposite direction. 

| x   | -1 | -5 | -10 | -100  | -1000 | -100000 |
|-----|----|----|-----|-------|-------|---------|
|$1/x$| -1 |-1/5|-1/10| -1/100|-1/1000|-1/100000|

> We can make the value of $f$ as close to zero as we like by decreasing the value of $x$ sufficiently. We write 
> $$\lim_{x\to-\infty}\frac1x = 0$$

Here's the graph: 

![One over x](/images/1overx.png)

In the last section, we discussed *vertical asymptotes*: $f(x) = 1/x$ has a vertical asymptote at $x = 0$, because 

$$\lim_{x\to 0^{-}}\frac1x = -\infty \text{ and } \lim_{x\to 0^{+}}\frac1x = +\infty$$

Now we can define *horizontal asymptotes*:

> #### Horizontal Asymptotes
> If $\lim_{x\to+\infty}f(x) = L$ or $\lim_{x\to-\infty}f(x) = L$, then we say $f$ has a **horizontal asymptote** of $y = L$. 

In this case, $f(x) = \frac1x$ has a horizontal asymptote of $y = 0$. 

#### Exercise

How do the end behaviors of the functions $\frac{1}{x^2}, \frac{1}{x^3}, \frac{1}{x^4}, \dots$ compare with the end behavior of $\frac1x$?

> [!success]- Solution
> 
> We can apply one of the properties we discussed in the previous section!
> 
> If $\lim_{x \to a} f(x) = M$, then $\lim_{x \to a} f(x)^n = M^n$
> 
> So, 
> 
> $$
> \begin{aligned}
> \lim_{x\to\pm\infty}\frac{1}{x^2} &= \lim_{x\to\pm\infty}\left(\frac{1}{x}\right)^2\cr 
> &= 0^2\cr
> &= \boxed{0}
> \end{aligned}
> $$
> 
> The same holds for any exponent greater than 0. 
> 
> $$\text{If } n>0, \lim_{x\to\pm\infty}\frac{1}{x^n} = 0.$$
> 


## Constant over infinity

We can generalize even more: 

> Suppose $\lim_{x \to \infty} f(x) = L$ and $\lim_{x \to \infty} g(x) = \pm\infty$, then 
> $$\lim_{x \to \infty} \frac{f(x)}{g(x)} = 0$$
> In other words, **if the numerator is constant and the denominator goes to plus or minus infinity, the whole thing goes to zero**. 

A few quick examples:

#### Example
$$\lim_{x\to\infty}\frac{1}{x} = 0$$

#### Example
$$\lim_{x\to\infty}\frac{1}{e^x} = 0$$

#### Example
$$\lim_{x\to\infty}\frac{1}{\ln x} = 0$$

#### Example
$$\lim_{x\to\infty}\frac{\sin x}{x^2} = 0$$

> This is a good example to consider because the numerator doesn't have a limit (sine oscillates between 1 and -1 forever) but is bounded.

## End Behavior of Polynomials

A *power function* is any function of the form $x^n$, where $n$ is a positive integer. E.g., $x, x^2, x^3, x^4,...$.

Let's see if we can generalize the end behavior of all the power functions by looking at the graphs of the first few. 

> We can see from the graph that 
> 
> $$\lim_{x \to +\infty} x = +\infty \text{ and } \lim_{x \to -\infty} x = -\infty$$
> ![Graph of x](/images/power_func_1.png)


> We can see from the graph that 
> $$\lim_{x \to +\infty} x^2 = +\infty \text{ and } \lim_{x \to -\infty} x^2 = +\infty$$
> ![Graph of x](/images/power_func_2.png)


> We can see from the graph that 
> 
> $$\lim_{x \to +\infty} x^3 = +\infty \text{ and } \lim_{x \to -\infty} x^3 = -\infty$$ 
> ![Graph of x](/images/power_func_3.png)


> We can see from the graph that 
> 
> $$\lim_{x \to +\infty} x^4 = +\infty\text{ and }\lim_{x \to -\infty} x^4 = +\infty$$ 
> ![Graph of x](/images/power_func_4.png)


> We can see from the graph that 
> 
> $$\lim_{x \to +\infty} x^5 = +\infty\text{ and }\lim_{x \to -\infty} x^5 = -\infty$$ 
> ![Graph of x](/images/power_func_5.png)



#### Exercise

What can we say about the end behavior of power functions in general?

> [!success]- Solution
> 
> Notice that to the right, $\lim_{x\to+\infty}x^n = +\infty$ no matter what the power of $x$. 
> 
> As we go to the left, even powers give us positive infinity and odd powers give us negative infinity. This > makes sense since odd powers preserve the sign of the input while even powers make everything positive!
> 
> $$\lim_{x\to+\infty}x^n = +\infty$$
> 
> $$
> \lim_{x\to+\infty}x^n = 
> \begin{cases}
> +\infty, & n \text{ is even}\cr
> -\infty, & n \text{ is odd}\cr
> \end{cases}
> $$



By itself, this generalization might not seem like much. However, we can build on this idea to get the end behavior of *polynomials*!

> #### Polynomials
> A *polynomial* is a sum of power functions with coefficients - this is called a *linear combination*. 
> $$\boxed{p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0}$$

It turns out that the end behavior of a polynomial is determined by its *leading term*. Intuitively, follows from the fact that as $x\to\pm\infty$, the magnitude of the leading term overpowers all the rest of the terms. For example, if we plug really large numbers into $x^5 + 3x^4 - x^2 + 1$, the value of $x^5$ will be *much* greater than those of the rest of the terms!

Here's a more rigorous proof:

> #### End Behavior of a Polynomial
> Consider $\lim_{x \to \infty} (a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0)$.
> * Let's factor out $x^n$: 
> $$\lim_{x \to \infty} x^n\left(a_n + \frac{a_{n-1}}{x} + \cdots + \frac{a_1}{x^{n-1}} + \frac{a_0}{x^n}\right)$$
> * Recall that $\lim_{x\to\infty}\frac{1}{x^n} = 0$ for $n>0$. 
> * It follows that 
> $$\begin{aligned}&\lim_{x \to \infty} x^n\left(a_n + \frac{a_{n-1}}{x} + \cdots + \frac{a_1}{x^{n-1}} + \frac{a_0}{x^n}\right)\cr=&\lim_{x \to \infty} x^n\left(a_n + 0 + \cdots + 0 + 0\right)\cr=&\lim_{x \to \infty} a_n x^n\end{aligned}$$
> **In conclusion**: 
> $$\boxed{\lim_{x \to \infty} (a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0) = \lim_{x \to \infty} a_n x^n}$$

Let's see how this applies to various polynomials.

#### Example

$$
\begin{aligned}
        \lim_{x\to\infty}(3x^4 + x^3 - 2x + 1) &= \lim_{x\to\infty}3x^4\cr &= \infty
    \end{aligned}
$$

#### Example

$$
\begin{aligned}
        \lim_{x\to-\infty}(-x^7 - 12x^4 + x^3 - 5x^2 + x + 11) &= \lim_{x\to-\infty}(-x^7) \cr &= \infty
\end{aligned}
$$ 
    
Since $x \to -\infty$, we know that $x$ is negative.
What happens when we plug a negative number into $-x^7$? We get a
positive number.

#### Exercise

Compute $\lim_{x \to -\infty} 3x^6 - 7x^4 + x^3 - x^2 - 1$.

> [!success]- Solution
> 
> $$
> \begin{aligned}
> &\lim_{x \to -\infty} 3x^6 - 7x^4 + x^3 - x^2 - 1\cr
> =&\lim_{x \to -\infty} 3x^6\cr
> =&\boxed{+\infty}
> \end{aligned}
> $$
> 
> We end up with an even power function, so even though $x\to-\infty$, the left end behavior is positive > infinity. 



#### Exercise

Compute $\lim_{x \to -\infty} 5 - 3x^11$.

> [!success]- Solution
> 
> $$
> \begin{aligned}
> &\lim_{x \to -\infty} 5 - 3x^11\cr
> =&\lim_{x \to -\infty} - 3x^11\cr
> =&-3\lim_{x \to -\infty} x^11\cr
> =&-(-\infty)\cr
> =&\boxed{+\infty}
> \end{aligned}
> $$
> 
> We end up with an odd power function **and** a negative sign, so we have a double negative. 



#### Exercise

Compute $\lim_{x \to +\infty} x^2 + 4x + 1$.

> [!success]- Solution
> 
> $$
> \begin{aligned}
> &\lim_{x \to +\infty} x^2 + 4x + 1\cr
> =&\lim_{x \to +\infty} x^2\cr
> =&+\infty
> \end{aligned}
> $$



This leading term idea applies to rational functions as well! Rational
functions, you'll recall, are one polynomial divided by another. Let's
see what happens when apply our polynomial rule to some rational functions.

#### Example

 
$$
\begin{aligned}
\lim_{x\to\infty}\frac{3x^2 + x - 4}{2x^2 + 4x + 1} &= \lim_{x\to\infty}\frac{3x^2}{2x^2} \cr &= \lim_{x\to\infty}\frac{3}{2}\cr &= \frac32
\end{aligned}
$$ 
All we did was grab the leading terms and then
divide out the $x$-terms.

#### Example

$$
\begin{aligned}
        \lim_{x\to-\infty}\frac{2x^4 - x^3 + 5x - 1}{x^3 + 9} &= \lim_{x\to-\infty}\frac{2x^4}{x^3}\cr &= \lim_{x\to-\infty}2x\cr &= -\infty
\end{aligned}
$$ 
    
In this case, we were left with an $x$-term up top.

#### Example

$$
\begin{aligned}
        \lim_{x\to-\infty}\frac{x^3 + 3x^2 - x + 1}{2x^5 - 3x^3 + x^2 - x + 2} &= \lim_{x\to-\infty}\frac{x^3}{2x^5}\cr &= \lim_{x\to-\infty}\frac{1}{2x^2}\cr &= 0
\end{aligned}
$$ 
    
In this case, we were left with an $x$-term in the
bottom.

#### Exercise

Evaluate the following limit.

$$\lim_{x\to-\infty}\frac{2x^3 - x + 1}{5x^3 + 2x - 3}$$

> [!success]- Solution
> 
> $$
> \begin{aligned}
>         &\lim_{x\to-\infty}\frac{2x^3 - x + 1}{5x^3 + 2x - 3}\cr
>         =&\lim_{x\to-\infty}\frac{2x^3}{5x^3}\cr
>         =&\lim_{x\to-\infty}\frac{2}{5}\cr
>         =&\boxed{\frac25}
> \end{aligned}
> $$



#### Exercise

Evaluate the following limit.

$$\lim_{x\to\infty}\frac{1 - x^4}{3x^3 + x^2 + x - 7}$$

> [!success]- Solution
> 
> $$
> \begin{aligned}
>         &\lim_{x\to\infty}\frac{1 - x^4}{3x^3 + x^2 + x - 7}\cr
>         =&\lim_{x\to\infty}\frac{- x^4}{3x^3}\cr
>         =&\lim_{x\to\infty}\frac{- x}{3}\cr
>         =&\boxed{-\infty}
> \end{aligned}
> $$



#### Example

In this example, we technically don't have a rational function. But, we
can still do the leading term trick. We'll grab the leading term inside
the radical and the one in the denominator.

This is subtle but very important: $\sqrt{x^2} = |x|$. It's not just
$x$! Then we treat $|x|$ like a piecewise function. Since $x$ is
negative, $|x| = -x$. 

$$
\begin{aligned}
        \lim_{x\to-\infty}\frac{\sqrt{3x^2 + 1}}{1 - 4x} &= \lim_{x\to-\infty}\frac{\sqrt{3x^2}}{- 4x}\cr &= \lim_{x\to-\infty}\frac{\sqrt{3}|x|}{- 4x}\cr &= \lim_{x\to-\infty}\frac{\sqrt{3}(-x)}{- 4x}\cr &= \sqrt3/4
\end{aligned}
$$

#### Exercise

Evaluate the following limit. Remember that $\sqrt{x^2} = |x|$ and that $|x| = -x$ when $x<0$.

$$\lim_{x\to\infty}\frac{\sqrt{5x^2 + 2}}{3x+1}$$

> [!success]- Solution
> 
> $$
> \begin{aligned}
> &\lim_{x\to\infty}\frac{\sqrt{5x^2 + 2}}{3x+1}\cr
> =&\lim_{x\to\infty}\frac{\sqrt{5x^2}}{3x}\cr
> =&\lim_{x\to\infty}\frac{\sqrt{5}|x|}{3x}\cr
> =&\lim_{x\to\infty}\frac{\sqrt{5}x}{3x}\cr
> =&\lim_{x\to\infty}\frac{\sqrt{5}}{3}\cr
> =&\boxed{\frac{\sqrt5}{3}}
> \end{aligned}
> $$




#### Exercise

$\lim_{x\to-\infty}\frac{\sqrt{5x^2 + 2}}{3x+1}$

Evaluate the following limit. Remember that $\sqrt{x^2} = |x|$ and that $|x| = -x$ when $x<0$.

> [!success]- Solution
> 
> $$
> \begin{aligned}
> &\lim_{x\to\infty}\frac{\sqrt{5x^2 + 2}}{3x+1}\cr
> =&\lim_{x\to\infty}\frac{\sqrt{5x^2}}{3x}\cr
> =&\lim_{x\to\infty}\frac{\sqrt{5}|x|}{3x}\cr
> =&\lim_{x\to\infty}\frac{\sqrt{5}(-x)}{3x}\cr
> =&\lim_{x\to\infty}\frac{-\sqrt{5}}{3}\cr
> =&\boxed{-\frac{\sqrt5}{3}}
> \end{aligned}
> $$



> Another way to make sure you're using the appropriate sign is to notice that, when $x\to-\infty$ the numerator ($\sqrt{5x^2 + 2}$) is always positive while the denominator ($3x+ 1$) is negative.

## End behaviors of other functions

So far, we've looked at power functions and various combinations of power functions. Now let's consider some of the other main parent functions. 

> #### Trig Functions
> We know that all of the trig functions are *periodic* - meaning the oscillate over their ranges forever. This means that the limits at infinity for all six of the basic trig functions don't exist. 
> $$\lim_{x \to \pm \infty} \sin x \text{ DNE}$$
> $$\lim_{x \to \pm \infty} \cos x \text{ DNE}$$
> $$\lim_{x \to \pm \infty} \tan x \text{ DNE}$$
> $$\lim_{x \to \pm \infty} \cot x \text{ DNE}$$
> $$\lim_{x \to \pm \infty} \csc x \text{ DNE}$$
> $$\lim_{x \to \pm \infty} \sec x \text{ DNE}$$

> #### Logs
> Let's start with *natural log*. As $x$ increases, $\ln x$ increases without bound. 
> $$\lim_{x \to + \infty} \ln x = +\infty$$
> For other bases, we have two cases:
> $$\lim_{x \to + \infty} \log_b x = +\infty \text{ if } b > 1$$
> $$\lim_{x \to + \infty} \log_b x = -\infty \text{ if } 0<b<1$$

> ##### Exponential Function
> Again, we'll start with $e^x$. From the graph of $e^x$, we know that 
> $$\lim_{x\to+\infty}e^x = +\infty$$
> $$\lim_{x\to-\infty}e^x = 0$$
> Note: Since the limit at negative infinity is 0, we say that $y=e^x$ has a **horizontal asymptote** of $y = 0$. 
> 
> For other exponentials, we have two cases:
> 
> If $b>1$: 
> $$\lim_{x \to + \infty} b^x = +\infty \quad \lim_{x \to - \infty} b^x = 0$$
> If $0<b<1$
> $$\lim_{x \to + \infty} b^x = 0 \quad \lim_{x \to - \infty} b^x = +\infty$$

## Dealing with Compositions of Functions

When we form compositions of functions, it can be helpful and illustrative to make substitutions. Here's an example of that:

#### Example

Let's evaluate $\lim_{x\to+\infty}\ln\frac1x$.

Here, we have two different function types: logarithmic and rational.

Since the *outside* function is natural log, let's write down its important limits. We'll use $T$ as our variable to keep things organized. 

$$
\begin{aligned}
\lim_{T\to+\infty}\ln T &= +\infty \cr
\lim_{T\to0^{+}}\ln T &= -\infty \cr
\end{aligned}
$$

Now let's look at the inside function next: 

$$\lim_{x\to+\infty}\frac1x = 0$$

Here's the substitution: let $T = \frac1x$. 

So, as $x \to +\infty$, $T \to 0^{+}$ (note that we can say $0^{+}$ because $1/x>0$ when $x>0$. 

Let's put this all together: 

$$
\begin{aligned}
&\lim_{x\to+\infty}\ln\frac1x\cr
=&\lim_{T\to0^{+}}\ln T\cr
=&\boxed{-\infty}
\end{aligned}
$$

#### Exercise

Evaluate $\lim_{x\to\frac{\pi}{2}^{+}}e^{\tan x}$. 

> [!success]- Solution
> 
> First we'll look just at the inside function:
> 
> $$
> \begin{aligned}
> &\lim_{x\to\frac{\pi}{2}^{+}}{\tan x}\cr
> =&\lim_{x\to\frac{\pi}{2}^{+}}\frac{\sin x}{\cos x} \to \frac10\cr
> \end{aligned}
> $$
> 
> We need a sign chart to determine whether the limit is $+$ or $-$ infinity! It just needs to include what > happens to the right of $\pi/2$
> 
> 
> |  $0$   |    UND        |         $-1$    |    $0$       |
> |--------|---------------|-----------------|-------------|
> |  $0$   |    $\pi/2$    |     $3\pi/4$    |    $\pi$    |   
> 
> So, $\lim_{x\to\frac{\pi}{2}^{+}}{\tan x} = -\infty$
> 
> Now, let's make a substitution: let $T = \tan x$. 
> 
> In our limit, we'll replace $\tan x$ with $T$ and $x \to \pi/2^{+}$ with $T\to-\infty$. 
> 
> $$
> \begin{aligned}
> &\lim_{x\to\frac{\pi}{2}^{+}}e^{\tan x}\cr
> =&\lim_{T\to-\infty}e^T\cr
> =& \boxed{0}
> \end{aligned}
> $$
> 



#### Exercise

Evaluate $\lim_{x \to \infty} \frac{\ln 5x}{\ln 9x^2}$. 

> [!success]- Solution
> 
> This one requires a little trick: we need to apply a couple log properties first. 
> 
> $$
> \begin{aligned}
> \frac{\ln 5x}{\ln 9x}
> &=\frac{\ln 5 + \ln x}{\ln 9  + \ln x^2}\cr
> &=\frac{\ln 5 + \ln x}{\ln 9  + 2\ln x}\cr
> \end{aligned}
> $$
> 
> The reason we need to apply these log properties is so that we have a common function in the numerator and > denominator to substitute: let $L = \ln x$ (we can use any variable name we like for our substitution).
> 
> $$\lim_{x \to \infty} \ln x = +\infty$$
> 
> So as $x \to \infty$, $L \to \infty$, too!
> 
> Putting it all together: 
> 
> $$
> \begin{aligned}
> &\lim_{x \to \infty} \frac{\ln 5x}{\ln 9x^2}\cr
> =&\lim_{x \to \infty} \frac{\ln 5 + \ln x}{\ln 9  + 2\ln x}\cr
> =&\lim_{L \to \infty} \frac{\ln 5 + L}{\ln 9  + 2L}\cr
> =&\lim_{L \to \infty} \frac{L}{2L}\cr
> =& \boxed{1/2}
> \end{aligned}
> $$
> 
> Notice that here we used our *leading term trick* from the previous section. `
> 
