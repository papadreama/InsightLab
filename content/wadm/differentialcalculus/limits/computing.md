---
title: Computing Limits
---
[[intuitive|Previous Section]]  
[[infinity|Next Section]]

> [!abstract] Overview
> In this section, we'll focus on computing limits algebraically, without relying on graphs/tables. To do so, we'll consider several cases.

## Three Cases

If $x$ is approaching a **finite value** in a **non-piecewise function**, there
are **three cases** we need to consider.

1.  We plug $a$ into $f$ and get a real value.

2.  We plug $a$ into $f$ and get $\frac00$.

3.  We plug $a$ into $f$ and get $\frac{k}{0}$, where $k \neq 0$.

### Case 1: Plug in and get a real value

> If $f(a)$ is a real number, then
> $$\lim_{x \to a} f(x) = f(a)$$
> In other words, if we can plug $x = a$ into the function and get an answer, we're done!

Here's an example:

#### Example

$$\lim_{x\to3}\frac{2}{x^2 - 1} = \frac{2}{3^2 - 1} = \frac28 = \boxed{\frac14}$$

We plugged $x = 3$ directly into the function $\frac{2}{x^2 - 1}$ and
got $\frac14$. That's it. We're done!

There's not too much more to say about this first case. But here are a few more quick examples:

1. $\lim_{x\to0} \frac{x - 1}{x + 5} = \frac{(0) - 1}{(0) + 5} = -\frac15$
2. $\lim_{x\to-3} e^x = e^{-3}$
3. $\lim_{x\to1} \cos(\pi x) = \cos((1)\pi) = -1$

> We should always start by trying to plug in $x = a$.

#### Exercise

Compute each of the following

1.  $\lim_{x \to 5} \tan(\pi x)$
2.  $\lim_{x \to 0} \ln (x + 1)$
3.  $\lim_{x \to 1} e^{\cos(\pi x)}$

> [!success]- Solution
> 
> 1.  $\lim_{x \to 5} \tan(\pi x) = \tan 5\pi = 0$
> 2.  $\lim_{x \to 0} \ln (x + 1) = \ln (0 + 1) = 0$
> 3.  $\lim_{x \to 1} e^{\cos(\pi x)} = e^{\cos(\pi)} = e^{-1}$
> 


### Properties of Case 1 Limits
Suppose we have two functions that have Case 1 limits at $x = a$. 
$$\lim_{x \to a} f(x) = M$$ 
$$\lim_{x \to a} g(x) = N$$
Then the following properties hold
* $\lim_{x \to a} \left(f(x)  + g(x)\right) = M + N$
* $\lim_{x \to a} f(x)\cdot g(x) = M \cdot N$
* $\lim_{x \to a} f(x)/g(x) = M/N$ so long as $N \neq 0$.
* $\lim_{x \to a} f(x)^n = M^n$
 
Let's make these properties a little more concrete: 

#### Example

Suppose $\lim_{x \to 5} f(x) = 7$ and $\lim_{x \to 5} g(x) = -3$. Let's compute some limits that incorporate $f$ and $g$.

* $\lim_{x \to 5} \left(f(x)  + g(x)\right) = 7 + (-3) = 4$
* $\lim_{x \to 5} \left(f(x)  \cdot g(x)\right) = 7 \cdot (-3) = -21$
* $\lim_{x \to 5} \left(f(x)/g(x)\right) = 7/(-3) = -7/3$
* $\lim_{x \to 5} \left(4f(x)\right) = 4(7)= 28$
* $\lim_{x \to 5} \left(f(x)\right)^2 = 7^2 = 49$

#### Exercise

Suppose $\lim_{x \to -1} f(x) = 5$ and $\lim_{x \to -1} g(x) = 2$.

Compute each of the following.

* $\lim_{x \to -1} \left(f(x)  + g(x)\right)$
* $\lim_{x \to -1} \left(f(x)  - g(x)\right)$
* $\lim_{x \to -1} \left(f(x)  \cdot g(x)\right)$
* $\lim_{x \to -1} \left(3f(x)\right)$
* $\lim_{x \to -1} \sqrt{f(x)}$

> [!success]- Solution
>
> * $\lim_{x \to -1} \left(f(x)  + g(x)\right) = 5 + 2 = \boxed{7}$
> * $\lim_{x \to -1} \left(f(x)  - g(x)\right) = 5 - 2 = \boxed{3}$
> * $\lim_{x \to -1} \left(f(x)  \cdot g(x)\right) = 5 \cdot 2 = \boxed{10}$
> * $\lim_{x \to -1} \left(3f(x)\right) = 3(5) = \boxed{15}$
> * $\lim_{x \to -1} \sqrt{f(x)} = \boxed{\sqrt{5}}$




### Case 2: Plug in and get zero over zero

$\frac{0}{0}$ is called an *indeterminate form*. Getting an indeterminate form doesn't mean that the limits doesn't exist; it's called indeterminate because we can't draw any conclusions, yet.

> If we plug $a$ into $f$ and get $\frac{0}{0}$, this tells us that we can do *something*...
>
> For most of the examples we'll look at in this section, that *something* will be **factoring and simplifying**. 


#### Example

In this example, we can factor both the numerator and the denominator.
We'll find that they have a common factor. Once we simplify, we'll get a
Case 1 limit. 

$$
    \begin{aligned}
    \lim_{x\to3}\frac{x^2 - 2x - 3}{x^2 - 9} &\to \frac00\cr
    &=
    \lim_{x\to3}\frac{(x-3)(x+1)}{(x-3)(x+3)}\cr
    &= 
    \lim_{x\to3}\frac{(x+1)}{(x+3)}\leftarrow \bigstar\cr
    &=
    \frac{3+1}{3+3}\cr
    &=
    \boxed{\frac23}
    \end{aligned}
$$

> $\bigstar$ : At this point, we have a Case 1 limit, so we plug in $3$.

Try this similar example:

#### Exercise

$$\lim_{x \to -2}\frac{x^2 + 3x + 2}{x^2 -3x - 10}$$

> [!success]- Solution
> 
> Once again, we'll factor the top and bottom and find that they share a
> factor.
> 
> $$
>         \begin{aligned}
>             \lim_{x \to -2}\frac{x^2 + 3x + 2}{x^2 -3x - 10}
>             &=
>             \lim_{x \to -2}\frac{(x + 1)(x + 2)}{(x + 2)(x - 5)}\cr
>             &=
>             \lim_{x \to -2}\frac{(x + 1)}{(x - 5)}\cr
>             &=
>             \frac{(-2) + 1}{(-2) - 5}\cr
>             &=
>             \frac{-1}{-7}\cr
>             &=
>             \boxed{-\frac{1}{7}}
>         \end{aligned}
> $$



#### Example

One more example: consider $\lim_{x\to0}\frac{2|x|}{x}$. A $x\to0$, we
get $\frac00$. In this case, we can't factor, but we can look at the
right and left limits.

Working with absolute value functions is always a little tricky. Often
times, the best thing to do is to define $|x|$ as a piecewise function:

$$
|x| = \begin{cases}
        x,&x\geq0\cr
        -x,&x<0
    \end{cases}
$$

It might seem weird at first, but consider a quick numerical example:

$$
|5| = 5 \quad |-5| = -(-5) = 5
$$

To make a negative number positive, we put a negative sign in front.
Let's see how that helps us with this limit.

$$
\begin{aligned}
    \lim_{x\to0^{+}}\frac{2|x|}{x}
    &=
    \lim_{x\to0^{+}}\frac{2x}{x} \leftarrow \bigstar\cr
    &=\lim_{x\to0^{+}}\frac{2}{1}\cr
    &=\boxed{2}\cr
    \lim_{x\to0^{-}}\frac{2|x|}{x}
    &=
    \lim_{x\to0^{-}}\frac{2(-x)}{x} \leftarrow \dagger\cr
    &=\lim_{x\to0^{+}}\frac{-2}{1}\cr
    &=\boxed{-2}\cr\end{aligned}
$$

> $\bigstar$ : Since $x \to 0^{+}$, we know $x > 0$. When $x>0$, $|x| = x$. 
>
> $\dagger$ : Since $x \to 0^{-}$, we know $x < 0$. When $x < 0$, $|x| = -x$. 

We conclude that $\lim_{x\to0}\frac{2|x|}{x}$ DNE.

#### Example

We can do this same trick with functions that include radicals. Consider
this limit:

$$\lim_{x\to25}\frac{x - 25}{\sqrt{x} - 5}$$

Once again, we get $\frac00$ when we plug in our $x$-value ($x = 25$ in
this case).

The trick here is to factor $x - 5$ (yup, we can factor a linear term).
Remember,

$$(a+b)(a-b) = a^2 - b^2$$

Working backwards, we want $a^2$ to be $x$, and $b^2$ to be $25$. So, we
want $a = \sqrt{x}$ and $b = 5$:

$$x - 25 = (\sqrt{x} + 5)(\sqrt{x} - 5)$$

Let's apply this to our limit:

$$
    \begin{aligned}
   \lim_{x\to25}\frac{x - 25}{\sqrt{x} - 5}
   &=
   \lim_{x\to25}\frac{(\sqrt{x} + 5)(\sqrt{x} - 5)}{\sqrt{x} - 5}\cr
   &=
   \lim_{x\to25}\sqrt{x} + 5\cr
   &=
   \sqrt{25} + 5\cr
   &=
   \boxed{10}
   \end{aligned}
$$

Your turn.

#### Exercise

Evaluate the limit $\lim_{x \to 9}\frac{\sqrt{x} - 3}{x - 9}$.

> [!success]- Solution
> 
> This time we'll factor the denominator:
> 
> $$\begin{aligned}
>    \lim_{x \to 9}\frac{\sqrt{x} - 3}{x - 9}
>    &=
>    \lim_{x \to 9}\frac{\sqrt{x} - 3}{(\sqrt{x} + 3)(\sqrt{x} - 3)}\cr
>    &=
>    \lim_{x \to 9}\frac{1}{\sqrt{x} + 3}\cr
>    &=
>    \frac{1}{\sqrt{9} + 3}\cr
>    &=
>    \boxed{\frac16}\end{aligned}
> $$
> 


### Case 3: Plug in and get non-zero over zero

> If we plug $a$ into $f$ and get $\frac{k}{0}$ (where $k \neq 0$) then there is a *vertical asymptote* at $x = a$. We can make a sign chart for $f$ to determine whether each one-sided limit is $+\infty$ or $-\infty$. 
> 
> A *vertical asymptote* indicates that $\lim_{x \to a^{-}}f(x) = \pm \infty$ and/or $\lim_{x \to a^{+}}f(x) = \pm\infty$. We usually represent it as a dotted line. It's not actually a part of the graph of a function, but serves as a visual aid to represent an infinite limit. We'll discuss *horizontal asymptotes in the next section. 

#### Example

Consider the function $f(x) = \frac{x-1}{x-2}$ at $x = 2$.

If we try to plug in $x = 2$, we get $1/0$.

We'll split up our number line at the points where the numerator and/or
denominator are 0. In this case, the numerator is zero at $x=1$ and the
denominator is zero at $x = 2$. We've marked these with stars.

Now that we've split the number line into three pieces. We plug in any
value we want in each segment to get the sign of $f$ for that interval.
Let's use $x = 0, x=3/2, x = 3$, to keep it simple.

$$\frac{(0)-1}{(0)-2} = 1/2 > 0 \qquad\qquad \frac{(3/2)-1}{(3/2)-2} = -1 < 0  \qquad\qquad \frac{(3)-1}{(3)-2} = 2 > 0$$

![Sign Chart](/images/sign_chart_limits_1.png)

From the sign chart, we can determine that

$$\lim_{x\to2^{-}}f(x) = -\infty \quad \lim_{x\to2^{+}}f(x) = +\infty$$

We conclude that $\lim_{x\to2}f(x) = DNE$ because our right and left
limits don't match.

Let's try another.

#### Example

Compute $\lim_{x \to -3^{-}} \frac{x + 2}{x^2 - 9}$ and
$\lim_{x \to -3^{+}} \frac{x + 2}{x^2 - 9}$.

Once again, when we plug in $x = -3$, we get *non-zero over zero*:

$$\frac{(-3) + 2}{(-3)^2 - 9} = \frac{-1}{0}$$

The numerator is zero when $x = -2$. The denominator is zero when
$x = \pm 3$. We'll split our number line at $x = -3, -2, 3$. This splits
the whole number line into four pieces. For each piece, we plug in one
test point.

![Sign Chart](/images/sign_chart_limits_2.png)

## Piecewise Functions

In the previous section, we looked at looked at the limits of piecewise functions graphically. It's not always convenient (or fun) to draw the graph of a piecewise functions just to compute one limit. We can apply the three cases we've looked at in this section along with what we know about one-sided limits to compute limits of piecewise functions algebraically. 

> Remember, $\lim_{x \to a} f(x)$ exists **if and only if** $\lim_{x \to a^{-}} f(x) = \lim_{x \to a^{+}} f(x)$ 

#### Example

Consider the following piecewise function.

$$
f(x) = 
\begin{cases}
2x - 1, & x < 1\cr
x^2, & 1 \leq x < 4\cr
3\sqrt{x}, & x > 4 
\end{cases}
$$

Let's evaluate the one-sided limits at $x = 1$ and $x = 4$. 

* $\lim_{x \to 1^{-}}f(x) = \lim_{x \to 1^{-}}(2x - 1)$ because **to the left of $1$** means $x < 1$. This is a *Case 1* limit: 
    $$\lim_{x \to 1^{-}}f(x) = \lim_{x \to 1^{-}}(2x - 1) = (2(1) -1) = \boxed{1}$$
* $\lim_{x \to 1^{+}}f(x) = \lim_{x \to 1^{+}}(x^2)$ because **to the right of $1$** means $x > 1$. Since we want to be **immediately to the right of $x = 1$** we use the second piece, not the third. This is also a *Case 1* limit: 
    $$\lim_{x \to 1^{+}}f(x) = \lim_{x \to 1^{+}}x^2 = (1)^2 = \boxed{1}$$
* Since $\lim_{x \to 1^{-}}f(x) = \lim_{x \to 1^{+}}f(x)$, we have 
$$\lim_{x \to 1}f(x) = 1$$
* $\lim_{x \to 4^{-}}f(x) = \lim_{x \to 4^{-}}(x^2)$ because **to the left of $4$** means $x < 4$. Since we want to be **immediately to the left of $4$**, we use the second piece, not the first. This is a *Case 1* limit: 
    $$\lim_{x \to 4^{-}}f(x) = \lim_{x \to 4^{-}}x^2 = (4)^2) = \boxed{16}$$
* $\lim_{x \to 4^{+}}f(x) = \lim_{x \to 4^{+}}(x^2)$ because **to the right of $4$** means $x > 4$. This is also a *Case 1* limit: 
    $$\lim_{x \to 4^{+}}f(x) = \lim_{x \to 4^{+}}3\sqrt{x} = 3\sqrt{4} = \boxed{6}$$
* Since $\lim_{x \to 4^{-}}f(x) \neq \lim_{x \to 4^{+}}f(x)$, we conclude that 
$$\lim_{x \to 4}f(x) \text{ DNE}$$

## Other functions with vertical asymptotes

We still need to address some other functions that have vertical asymptotes: 

* Trig functions: tangent, cotangent, secant, and cosecant
* Logarithmic functions

The four trig functions that have vertical asymptotes can all be rewritten in terms of sines and cosines. Once we do that, we can use or *Case 2* approach. 

#### Example

Let's compute the right and left limits for $\tan x$ at $x = -\pi/2$. 

* First, we note that $\tan x = \frac{\sin x}{\cos x}$. 
* Since, $\tan x$ has infinitely many vertical asymptotes, we can't make a complete sign chart (that would *literally* take forever...). Instead, we'll identify the $x$-values where it's either $0$ or undefined **around** $-\pi/2$: 
  * Undefined: $...,-3\pi/2, -\pi/2, \pi/2, ...$
  * Zero: $...,-\pi, 0, \pi, ...$
* Our sign chart (or table, if you like), just needs to contain the relevant values on either side of $-\pi/2$. For our test points, we can use $-3\pi/4$ and $-\pi/4$.
  * $\tan(-3\pi/4) = 1$
  * $\tan(-\pi/4) = -1$



|  $0$     | + + + + + + |      Und   | - - - - - -|   $0$  |
|----------|-------------|------------|------------|--------|
|  $-\pi$  |  $-3\pi/4$  |  $-\pi/2$  |  $-\pi/4$  |  $0$   |


 

## Section Summary


In this section, we started by considering limits of non-piecewise
functions as $x$ approaches a real value. All of these limits fall into
one of three cases. We always start by trying to plug in the value that
$x$ is approaching.

1.  If $f(a)$ is defined, then $\lim_{x \to a} f(x) = f(a)$. So, if you
    can plug in $x=a$ and get a real value, you're done!

2.  If plugging in $x = a$ yields $0/0$, we try to factor and simplify.
    Often, simplifying will yield a Case 1 limit.

3.  If plugging in $x = a$ yields $k/0$, where $k \neq 0$, then we have
    a vertical asymptote at $x = a$. This means that the one-sided
    limits must be $\pm\infty$. We can make a sign chart to determine
    whether the one-sided limits are positive or negative infinity.


## Additional Exercises

#### Exercise

$$\lim_{x \to -1}\frac{x^2 - 1}{x^2 + 5x + 4}$$

> [!success]- Solution
> 
> $$
> \begin{align*}
> \lim_{x \to -1}\frac{x^2 - 1}{x^2 + 4x + 4} &=
> \lim_{x \to -1}\frac{(x + 1)(x -1)}{(x + 1)(x + 4)}\cr
> &=
> \lim_{x \to -1}\frac{(x -1)}{(x + 4)}\cr
> &=
> \lim_{x \to -1}\frac{((-1) -1)}{((-1) + 4)}\cr
> &=
> \frac{-2}{3}\cr
> &=
> \boxed{-\frac23}
> \end{align*}
> $$



#### Exercise

$$\lim_{x \to 2}\frac{2x^2 - x - 6}{x^2 - x - 2}$$

> [!success]- Solution
> 
> $$
> \begin{align*}
> \lim_{x \to 2}\frac{2x^2 - x - 6}{x^2 - x - 2}
> &=
> \lim_{x \to 2}\frac{(2x + 3)(x - 2)}{(x + 1)(x - 2)}\cr
> &=
> \lim_{x \to 2}\frac{2x + 3}{x + 1}\cr
> &=
> \frac{2(2) + 3}{(2) + 1}\cr
> &=
> \boxed{\frac{7}{3}}
> \end{align*}
> $$



#### Exercise

$$\lim_{x \to 4}\frac{x - 4}{\sqrt{x} - 2}$$

> [!success]- Solution
> 
> $$
> \begin{align*}
> \lim_{x \to 4}\frac{x - 4}{\sqrt{x} - 2} &=
> \lim_{x \to 4}\frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{\sqrt{x} - 2}\cr 
> &=
> \lim_{x \to 4}\sqrt{x} + 2\cr
> &=
> \sqrt{4} + 2\cr
> &=
> \boxed{4}
> \end{align*}
> $$



#### Exercise

$$\lim_{x \to 4^{-}}{\frac{x + 1}{x - 4}}$$

> [!success]- Solution
> 
> Since we get $5/0$ when we plug in $x = 4$, we make a sign chart to see what happens to the left of $4$. The function is negative to the left of $4$, so we get 
> 
> $$\lim_{x \to 4^{-}}{\frac{x + 1}{x - 4}} = \boxed{-\infty}$$
> 


#### Exercise

$$\lim_{x \to 36^{+}}{\frac{x + 36}{\sqrt{x} - 6}}$$

> [!success]- Solution
> 
> At first glance, this might look like a *factor-and-simplify* situation, but when we plug in $x = 36$, we  get $72/0$. So, we make another sign chart to see what happens to the right of $x = 36$. 
> 
> To the right of $36$, the function is positive so
> 
> $$\lim_{x \to 36^{+}}{\frac{x + 36}{\sqrt{x} - 6}} = \boxed{+\infty}$$
> 


#### Exercise

Consider the following piecewise function.

$$
f(x) = 
\begin{cases}
x^3, & x \leq -1\cr
5, & -1 < x < 2\cr
x^2 + 1, & x \geq 2 
\end{cases}
$$

Evaluate the one-sided limits at $x = -1$ and $x = 2$. Then determine if the limits at those points exist. 

> [!success]- Solution
> * $\lim_{x \to -1^{-}}f(x) = \lim_{x \to -1^{-}}x^3 = \boxed{-1}$
> * $\lim_{x \to -1^{+}}f(x) = \lim_{x \to -1^{+}}5 = \boxed{5}$
> * $\lim_{x \to -1}f(x)$ DNE
> * $\lim_{x \to 2^{-}}f(x) = \lim_{x \to 2^{-}}5 = \boxed{5}$
> * $\lim_{x \to 2^{+}}f(x) = \lim_{x \to 2^{+}}x^2 + 1 = \boxed{5}$
> * $\lim_{x \to 2} f(x) = 5$. 


Click [here](https://www.math.drexel.edu/classes/Calculus/resources/Math121HW/Homework1.2_Ans.pdf) for more practice problems. 

[[intuitive|Previous Section]]  
[[infinity|Next Section]]

