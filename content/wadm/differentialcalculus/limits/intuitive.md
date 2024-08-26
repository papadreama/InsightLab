---
title: An Intuitive Approach to Limits
---

[[limits introduction|Previous Section]]  
[[computing|Next Section]]

> [!abstract] Overview
> In this section, we are going to take an intuitive approach to the limits of functions. When working through this section, pay careful attention to the wording of each definition. In mathematics, having very clear definitions is essential.
> 
> Before starting this section, you should be able to...
>
> * Sketch all of the basic functions: power functions, trig functions, exponential functions, logarithmic functions, and inverse trig functions
> * Sketch piecewise functions
>
> By the end of this section, you should be able to...
> 
> * Describe what we mean when we write $\lim_{x \to a} f(x) = L$
> * Use the graph of a function to determine the limit at a particular $x$-value, as well as the one-sided limits
> * Explain why a limit does not exist in terms of its one-sided limits

A motivating example
--------------------

Let's start with a question:

> Is $0.\overline{9} = 1$, or is $0.\overline{9}$ just *approximately*
> equal to 1?

To make sense of this question, we need be clear on what we mean
by $0.\overline{9}$. Most of us, I suspect, encounter this notation for
repeating decimals early on in our mathematical education. We're told
that $0.\overline{9} = 0.99999\dots$, where the 9s *go on forever*. But
what does *goes on forever* mean?

Consider this process of adding 9's onto the end of our decimal. There's
no maximum number of 9's that we can tack on, right? When we write
$0.\overline{9}$, we're referring to this unbounded process of tacking 9s onto the end of $0.9$. The *limit* of this process is $1$ because\...

> \...we can get as close to $1$ as we like by putting enough 9's.

In other words, if you want to be within a billionth of 1, put enough nines to get you there: 0.999999999. If you want to be within a trillionth of 1, you just put at least twelve 9's (0.999999999999). 

> The key thing to remember is that limits are about being able to get as close to a value as we like. The limit value - in this case its $1$ - is **unique**. There's no other number that I can as close to as I like by adding on more nines. 

### Answer?

So, does this answer our question? Well it depends. If we accept that
$0.\overline{9}$ is actually a *limit*, than yes! 

$$0.\overline{9} = 1$$

Clarifying our definition
-------------------------

Keeping in mind this idea of **getting as close to a value as we like**, we can define the limit of a function at a point. 

> [!note] Definition and Notation
>We say that the limit of $f(x)$, as $x$ approaches $a$, is $L$, provided that we can make $f$ as close to $L$ as we like by making $x$ sufficiently close to $a$. We write
>
>$$\lim_{ x \to a } f ( x ) = L$$

#### Example

Consider the function $f(x) = \frac{ \sin x }{ x }$. Notice that $f$ is
undefined at $x=0$. But, if we plug in values "close" to 0, we see a
pattern:

|  $x$  |   $y$    |
|-------|----------|
|  -0.3 |    0.9851|
|  -0.25|    0.9896|
|  -0.2 |    0.9933|
|  -0.15|    0.9963|
|  -0.1 |    0.9983|
|  -0.05|    0.9996|
|    0  | undefined|
|  0.05 |    0.9996|
|   0.1 |    0.9983|
|  0.15 |    0.9963|
|   0.2 |    0.9933|
|  0.25 |    0.9896|
|   0.3 |    0.9851|

We can see that the $y$-values seem to be creeping closer and closer to
1 without ever getting there. It seems as though we can make the
$y$-value as close to 1 as we like by making $x$-value closer and closer
to 0.

Let's also take a look at the graph:

![[sinxoverx.png]]

Even though $y(0)$ is undefined, we can say that, based on the table and
the graph, $\lim_{x \to 0} \frac{\sin x }{x} = 1$. Now, this doesn't
*prove* that the limit is 1, but it's pretty good evidence. 

Later, we'll show why this limit is 1 in a more rigorous way. 

Limits from graphs
------------------

A nice place to start is with graphs of functions. This will help build
our intuition about what limits are. Take a look at this funny little
function: $f(x) = \frac{|x|}{x}$.

#### Example

What does $f(x) = \frac{|x|}{x}$ look like? Plug in some values to see
whats going on:

| $x$   | $f(x)$    |
| ----- | --------- |
| -3    | 1         |
| -2    | -1        |
| -1    | -1        |
| -1/2  | -1        |
| -1/10 | -1        |
| 0     | undefined |
| 1/10  | 1         |
| 1/2   | 1         |
| 1     | 1         |
| 2     | 1         |
| 3     | 1         |

![[absx_over_x.png]]

What's going on at $x = 0$? The function is undefined because 0/0 is
undefined. Does it have a limit? Does $\lim_{x \to 0} f(x)$ exist?

Nope. $\lim_{x \to 0} f(x)$ does not exist because **there is no value that
we can get as close to as we like** by moving $x$ close to 0.

-   We can't say the limit is 1 because $x$-values to the left of 0 make
    $f$ equal to -1.

-   We can't say the limit is -1 because $x$-values to the right of 0
    give us 1.

One-sided limits
----------------

The previous example brings up an important point: we can look at the
limit of a function at a point from just one side or the other. Here's
the notation:

-   Right-side limit: $\lim_{x\to a^{+}} f(x) = L$. The limit of $f$ as
    $x$ approaches $a$ from the right. This means we can make $f(x)$ as
    close to $L$ as we like by making $x$ close enough to $a$, where
    $x>a$

-   Left-side limit: $\lim_{x\to a^{-}} f(x) = L$. The limit of $f$ as
    $x$ approaches $a$ from the right. This means we can make $f(x)$ as
    close to $L$ as we like by making $x$ close enough to $a$, where
    $x<a$

In the example above, we could say that

$$\lim_{x\to0^{+}}\frac{|x|}{x} = 1 \quad \text{and} \quad \lim_{x\to0^{-}}\frac{|x|}{x} = -1$$

This brings us to a super important point:

> [!info]
> The limit of $f$ at $x = a$ exists if and only if the one-sided limits both exist and are equal: 
> $$\lim_{x\to a}f(x) = L \textbf{ if and only if } \lim_{x\to a}f(x) = L \textbf{ and } \lim_{x\to a}f(x) = L$$


Now, let's apply all of this to some functions by only looking at their
graphs.


#### Example

Consider the graph of the function $f$ that is shown below.

Graph of $f$

![[piecewise1.png]]


There are two points of interest here: $x = -2$ and $x = 1$. At each of
the points, something weird is going on with the function. We want to
describe what that weirdness is in more technical terms.

At $x = -2$ we can say...

-   $f(-2) = 3$. The function value is 3, and we know so because there
    is a closed dot at $(-2,3)$.

-   $\lim_{x\to-2}f(x) = -1$. The open dot at $(-2,-1)$ tells us that we
    can get as close to that point as we like without ever getting all
    the way there.

At $x = 1$ we can say...

-   $f(1) = 1$ because we have a closed dot at $(1,1)$.

-   $\lim_{x\to1^{-}}f(x) = 2$ because as we approach $x=1$ *from the
    left*, we approach a open dot at $(1,2)$.

-   $\lim_{x\to1^{+}}f(x) = 0$ because as we approach $x=1$ *from the
    right*, we approach a open dot at $(1,0)$.

-   Because $\lim_{x\to1^{-}}f(x) \neq \lim_{x\to1^{+}}f(x)$, we
    conclude that $\lim_{x\to1}f(x)$ does not exist (DNE for short).

Now you try one.

#### Exercise

Consider the graph of the function $f$ that is shown below.

Graph of $f$

![[piecewise2.png]]

Evaluate each of the following. If a limit does not exist, write DNE and
explain why it doesn't exist.

(a) $\lim_{x\to-4^{-}}f(x)$

(b) $\lim_{x\to-4^{+}}f(x)$

(c) $\lim_{x\to-4}f(x)$

(d) $f(-4)$

(e) $\lim_{x\to0^{-}}f(x)$

(f) $\lim_{x\to0^{+}}f(x)$

(g) $\lim_{x\to0}f(x)$

(h) $f(0)$

(i) $\lim_{x\to2^{-}}f(x)$

(j) $\lim_{x\to2^{+}}f(x)$

(k) $\lim_{x\to2}f(x)$

(l) $f(2)$


> [!success]-- Solution
> When we're looking for a left-side limit, we go a little to the left of the given $x$-value and then trace our way toward the $x$-value. Similarly, when we're looking for a right-side limit, we go a little to the right of the given $x$-value and then trace our way toward the $x$-value.
>
> (a) $\lim_{x\to-4^{-}}f(x) = 2$
> 
> Note that the portion of the graph immediately to the left of $x=-4$ connects to the open dot $(-4,2)$.
> 
> (b) $\lim_{x\to-4^{+}}f(x) = 1$
> 
> Note that the portion of the graph immediately to the right of $x=-4$ connects to the closed dot $(-4,1)$.
> 
> (c) $\lim_{x\to-4}f(x)$ DNE
> 
> It doesn't exist because $\lim_{x\to-4^{-}}f(x) \neq \lim_{x\to-4^{+}}f(x)$
>
> (d) $f(-4) = 1$
>
> We have a closed dot at $(-4,1)$
> 
> (e) $\lim_{x\to0^{-}}f(x) = -1$
>
> (f) $\lim_{x\to0^{+}}f(x) = -1$
>
> (g) $\lim_{x\to0}f(x) = -1$
>
> Here the left and right limits agree - both sides meet at the open dot $(0,-1)$.
>
> (h) $f(0) = 5$
>
> We have a closed dot at $(0,5)$.
>
> (i) $\lim_{x\to2^{-}}f(x) = 3$
>
> Note that the portion of the graph immediately to the left of $x=2$ connects to the open dot $(2,3)$.
>
> (j) $\lim_{x\to2^{+}}f(x) = 4$
>
> Note that the portion of the graph immediately to the right of $x=2$ connects to the open dot $(2,4)$.
>
> (k) $\lim_{x\to2}f(x)$ DNE
>
> Here $\lim_{x\to2^{-}}f(x) \neq \lim_{x\to2^{+}}f(x)$.
>
> (l) $f(2) = 6$
>
> We have a closed dot at $(2,6)$.


#### Example

In this example, something different is going on\...

Graph of $f$


![Graph of f](/images/piecewise3.png)

At $x = -1$ we have a *vertical asymptote*. An asymptote is line we draw
on a graph to help us visualize certain limits (or limit-like behaviors)
- it's not actually a part of the graph of the function. A vertical
asymptote indicates that a function *increases or decreases without
bound* as we approach a particular $x$-value. We'll talk about
horizontal asymptotes in an upcoming section.

In this case, the vertical asymptote at $x=-1$ indicates that $f$
increases without bound as we approach $x=-1$ from the left. In terms of
limits, we write

$$\lim_{x\to-1^{-}}f(x) = +\infty$$

We say that the limit is positive infinity, or that $f$ goes to positive
infinity, but we should be clear that a function can't *be* infinity.

Let's look at the rest of the important limits for this function based
on its graph.

(a) $\lim_{x\to-1^{-}}f(x) = +\infty$

(b) $\lim_{x\to-1^{+}}f(x) = -2$

(c) $\lim_{x\to-1}f(x)$ DNE because the right and left limits do not
    agree.

(d) $f(-1) = -2$ because we have a closed dot at $(-1,-2)$.

(e) $\lim_{x\to2^{-}}f(x) = -5$

(f) $\lim_{x\to2^{+}}f(x) = -5$

(g) $\lim_{x\to2}f(x) = -5$

(h) $f(2) = 1$.

Here's another exercise for you to try with some vertical asymptotes.

#### Exercise

Consider the graph of the function $f$ that is shown below.

Graph of $f$

![Graph of f](/images/piecewise4.png)

Evaluate each of the following. If a limit does not exist, write DNE and
explain why it doesn't exist.

(a) $\lim_{x\to-1^{-}}f(x)$

(b) $\lim_{x\to-1^{+}}f(x)$

(c) $\lim_{x\to-1}f(x)$

(d) $f(-1)$

(e) $\lim_{x\to3^{-}}f(x)$

(f) $\lim_{x\to3^{+}}f(x)$

(g) $\lim_{x\to3}f(x)$

(h) $f(3)$

> [!success]- Solution
> 
> In this exercise, $f$ goes to positive infinity as we approach -1 from
> the right and negative infinity as we approach 3 from the left.
> 
> (a) $\lim_{x\to-1^{-}}f(x) = -2$
> 
> Note that the portion of the graph immediately to the left of $x=-1$ connects to the open dot $(-1,-2)$.
> 
> (b) $\lim_{x\to-1^{+}}f(x) = +\infty$
> 
> Note that the portion of the graph immediately to the right of
> $x=-1$ increases (goes up) without bound.
> 
> (c) $\lim_{x\to-1}f(x)$ DNE
> 
> It doesn't exist because
> $\lim_{x\to-1^{-}}f(x) \neq \lim_{x\to-1^{+}}f(x)$
> 
> (d) $f(-1) = 3$
> 
> We have a closed dot at $(-1,3)$
> 
> (e) $\lim_{x\to3^{-}}f(x) = -\infty$
> 
> Note that the portion of the graph immediately to the left of $x=3$
> decreases (goes down) without bound.
> 
> (f) $\lim_{x\to3^{+}}f(x) = 4$
> 
> Note that the portion of the graph immediately to the right of $x=3$
> connects to the open dot at $(3,4)$.
> 
> (g) $\lim_{x\to3}f(x)$ DNE
> 
> Again, the right and left limits do not agree.
> 
> (h) $f(3) = 1$
> 
> We have a closed dot at $(3,1)$.
> 



Piecewise functions
-------------------

In the examples we've looked at so far, we've been given the graph of a
function, but not the function itself. Most of those graphs came from
*piecewise functions*. Now that we're comfortable with that, let's try
drawing some piecewise functions ourselves.

In most cases, we'll be interested in the limits of piecewise functions
at the 'seams' - i.e., the places where the function definition changes.

#### Example

$$
f(x) = 
   \begin{cases}
      x - 1, & x < 2\cr
      \sqrt{2x}, & x \geq 2
   \end{cases}
$$

When drawing piecewise functions, we want to first make sure we know how
to draw each piece. Then we can keep only the piece we need.

-   First, we'll draw $y = x - 1$, which we know is a line with slope
    $1$ and $y$-intercept $(0, -1)$.

    ![Partial graph of f 1](/images/piecewise1_partial1.png)

-   We'll keep the part of the line for which $x<2$. This means we'll
    put an *open dot* at $(2,1)$, since $(2) - 1 = 1$.

    ![Partial graph of f 1](/images/piecewise1_partial2.png)

-   Next, let's sketch $y = \sqrt{2x}$. This is the top half of a
    sideways parabola.

    ![Partial graph of f 1](/images/piecewise1_partial3.png)

-   We'll keep the part of the curve for which $x \geq 2$. This means
    we'll put a *closed dot* at $(2, 2)$, since $\sqrt{2(2)} = 2$.

    ![Partial graph of f 1](/images/piecewise1_partial4.png)

-   Finally, we can draw both pieces together. Of course, you can do
    this all on a single graph and erase as needed.

    ![Partial graph of f 1](/images/piecewise1_complete.png)

Now we can use the graph to determine the limits at $x = 2$:

-   $\lim_{x \to 2^{-}} f(x) = 1$

-   $\lim_{x \to 2^{+}} f(x) = 2$

-   $\lim_{x \to 2} f(x)$ does not exist.

Now you try one:

#### Exercise

Consider the function

$$
f(x) = 
   \begin{cases}
      e^x, & x<0\cr
      2, & x = 0\cr
      1 - x^3, & x > 0
   \end{cases}
$$

Compute each of the following.

(a) $\lim_{x \to 0^{-}} f(x)$

(b) $\lim_{x \to 0^{+}} f(x)$

(c) $\lim_{x \to 0} f(x)$

(d) $f(0)$

> [!success]- Solution
> 
> ![Solution graph](/images/piecewise2_Solution.png)
> 
> From our graph, we have
> 
> -   $\lim_{x\to0^{-}} f(x) = 1$
> 
> -   $\lim_{x\to0^{+}} f(x) = 1$
> 
> -   $\lim_{x\to0} f(x) = 1$ since the right and left limits match.
> 
> -   $f(0) = 2$
> 
> Next, let's try one with a few different definitions.
> 



#### Example

Consider the function

$$
f(x) = 
   \begin{cases}
      \sin{\pi x}, & x < -2\cr
      x + 2, & -2 \leq x < 1\cr
      \ln x, & x \geq 1
   \end{cases}
$$

In this case, there are two points of interest: $x = -2$ and $x = 1$.
These are the points where the definition of the function changes.

-   Since the first and second pieces meet at $x=-2$, we'll plug $-2$
    into each. We'll use an open dot for the first piece

    -   Since $\sin(-2\pi) = 0$, we put an open dot at $(-2,0)$. It's
        open because this piece does not include $x = -2$

    -   $(-2) + 2 = 0$, so we put a closed dot at $(-2,0)$, filling in
        the open dot we just drew.

-   The second and third pieces meet at $x = 1$.

    -   $(1) + 2 = 3$, so we'll put an open dot at $(1,3)$.

    -   $\ln(1) = 0$, so we'll put a closed dot at $(1,0)$.

![Solution graph](/images/piecewise3_Solution.png)

-   $\lim_{x\to-2^{-}} f(x) = 0$

-   $\lim_{x\to-2^{+}} f(x) = 0$

-   $\lim_{x\to-2} f(x) = 0$

-   $\lim_{x\to1^{-}} f(x) = 3$

-   $\lim_{x\to1^{+}} f(x) = 0$

-   $\lim_{x\to1} f(x)$ does not exist


#### Exercise

Consider the function

$$
f(x) = 
\begin{cases}
(x+1)^2, & x \leq 1\cr
3, & 1 < x < 4\cr
5, & x = 4\cr
\frac12 x + 1, & x > 4
\end{cases}
$$

Evaluate each of the following.

(a) $\lim_{x\to1^{-}}f(x)$

(b) $\lim_{x\to1^{+}}f(x)$

(c) $\lim_{x\to1}f(x)$

(d) $f(1)$

(e) $\lim_{x\to4^{-}}f(x)$

(f) $\lim_{x\to4^{+}}f(x)$

(g) $\lim_{x\to4}f(x)$

(h) $f(4)$

> [!success]- Solution
> 
> Don't let the two constant pieces throw you off here! The fact that $f$
> is defined to be $3$ for $1<x<4$ means that we have a horizontal line
> ($y = 3$) on that interval. Then, when $x = 4$, we have a closed dot at
> $5$.
> 
> Here's the graph:
> 
> ![Solution graph](/images/piecewise5_Solution.png)
> 
> (a) $\lim_{x\to1^{-}}f(x) = 4$
> 
> (b) $\lim_{x\to1^{+}}f(x) = 3$
> 
> (c) $\lim_{x\to1}f(x)$ DNE
> 
> (d) $f(1) = 4$
> 
> (e) $\lim_{x\to4^{-}}f(x) = 4$
> 
> (f) $\lim_{x\to4^{+}}f(x) = 4$
> 
> (g) $\lim_{x\to4}f(x) = 4$
> 
> (h) $f(4) = 5$


#### Exercise

Consider the function

$$
f(x) = 
\begin{cases}
2^x, & x<2\cr
-x + 6, & 2\leq x \leq 4\cr
\frac{8}{x}, & x > 4
\end{cases}
$$

Evaluate each of the following.

(a) $\lim_{x\to2^{-}}f(x)$

(b) $\lim_{x\to2^{+}}f(x)$

(c) $\lim_{x\to2}f(x)$

(d) $f(2)$

(e) $\lim_{x\to4^{-}}f(x)$

(f) $\lim_{x\to4^{+}}f(x)$

(g) $\lim_{x\to4}f(x)$

(h) $f(4)$

> [!success]- Solution
> 
> You may have noticed that, unlike most examples we've looked at so far,
> this function doesn't have any gaps or jumps. We say functions like this
> are *continuous*. We'll explore continuity in more detail in an upcoming
> section.
> 
> ![Solution graph](/images/piecewise6.png)
> 
> (a) $\lim_{x\to2^{-}}f(x) = 4$
> 
> (b) $\lim_{x\to2^{+}}f(x) = 4$
> 
> (c) $\lim_{x\to2}f(x) = 4$
> 
> (d) $f(2) = 4$
> 
> (e) $\lim_{x\to4^{-}}f(x) = 2$
> 
> (f) $\lim_{x\to4^{+}}f(x) = 2$
> 
> (g) $\lim_{x\to4}f(x) = 2$
> 
> (h) $f(4) = 2$



## Section Summary

In this section, we took an intuitive approach to limits. Here are the
key takeaways:

-   Definition of a limit: $\lim_{x \to a} f(x) = L$ means that the
    value of $f$ can be made as close to $L$ as we like by setting $x$
    sufficiently close to $a$.

-   One-sided limits:

    -   $\lim_{x \to a^{-}} f(x)$ means we want to approach $x=a$ from
        the left ($x < a$).

    -   $\lim_{x \to a^{+}} f(x)$ means we want to approach $x=a$
        from the right ($x > a$).

-   $\lim_{x \to a} f(x) = L$ if and only if $\lim_{x \to a^{-}} = L$
    AND $\lim_{x \to a^{+}} f(x) = L$.

-   If $\lim_{x \to a^{-}} f(x) \neq \lim_{x \to a^{+}} f(x)$, we say
    that $\lim_{x \to a} f(x)$ does not exist (DNE).

-   Remember that the limit of a function at $x = a$ and the value of $f(a)$ don't have to be the same!

----

[[limits introduction|Previous Section]]  
[[computing|Next Section]]