---
title: Limits of Trig Functions
weight: 26
math: true
---
# Limits of Trig Functions

{{< hint "info" >}}

In the section on [computing limits](computing), we learned that when we get an indeterminate form (like $0/0$), we can often do some algebraic trickery to get an answer. Unfortunately, the tricks we used in that section don't work for something like $\lim_{x \to 0} \frac{\sin x }{x}$. So what do we do?

There's an important theorem, called The Squeeze Theorem that helps us with that trig limit and many more.
 
By the end of this section, you should
 
* Know $\lim_{x \to 0} \frac{\sin x }{x}$ and $\lim_{x \to 0}\frac{1 - \cos x}{x}$
* Be able to apply $\lim_{x \to 0}\frac{\sin x }{x}$ to evaluate limits with more complex functions involving trig
* Be able to recall and apply The Squeeze Theorem to evaluate other strange limits. 

{{< /hint >}}
## The Squeeze Theorem

Consider the function $f(x) = x^2 e^{\cos(1/x)}$, shown below. 

![Squeeze Theorem Illustration](/images/x2ecos1overx.png)

Note that this function is **continuous** for $x \neq 0$. From the graph, we might guess that $\lim_{x \to 0}x^2 e^{\cos(1/x)} = 0$, but none of the techniques we've learned so far can *justify* that answer. After all, plugging in $x = 0$, we get cosine of something undefined...?

Ok, let's make use of some of our basic trig knowledge. We know that 

$$-1 \leq \cos \theta \leq 1$$

That means the exponent on $e$ in our function is always between $-1$ and $1$. Since, $e \approx 2.71828$ and $e^{-1} = \frac{1}{e} = \frac{1}{2.71828}$, we can say that

$$x^2 e^{-1} \leq x^2 e^{\cos(1/x)} \leq x^2 e^1$$

$$\frac1e x^2\leq x^2 e^{\cos(1/x)} \leq e x^2 $$

While the limit of $f$ isn't something we can compute directly, the outer two limits are [*Case 1*](computing). 

$$\lim_{x \to 0}\frac1e x^2 = \frac1e (0)^2 = 0$$
$$\lim_{x \to 0}e x^2 = e (0)^2 = 0$$

So, $\displaystyle f(x) = x^2 e^{\cos(1/x)}$, is always ***squeezed between*** two functions that are going to zero as $x \to 0$. You can see that in the figure below. 

![Function squeezed between two others](/images/sq_thm_ex1.png)

Because $f$ is continuous everywhere but $x = 0$, it can't really *go anywhere*; it's trapped between $\frac1ex^2$ and $ex^2$. Therefore, it has to be the case that

$$\lim_{x \to 0}x^2 e^{\cos(1/x)} = 0$$ 

Let's summarize this in a theorem: 

> #### The Squeeze Theorem
> Suppose that $f$, $g$, and $h$ are all continuous on $(a,c)$ and $f(x) \leq g(x) \leq h(x)$ except, maybe, at the point $x = b$ ($a<b<c$). In other words, $g$ is sandwiched between $f$ and $h$ and all three are continuous on $(a,c)$, but maybe not at $x = b$. 
> 
> If $\lim_{x \to b}f(x) = L$ and $\lim_{x \to b}h(x) = L$, then $\lim_{x \to b}g(x) = L$. 

## Applying the Squeeze Theorem

Now, let's consider the limit $\lim_{x \to 0}\frac{\sin x}{x}$. Can we *squeeze* the function $\frac{\sin x}{x}$ between two other function *whose limits at zero we **can** evaluate*?

> Note: this derivation is pretty long and complicated. The point isn't for you to be able to create this from scratch yourself. But, there are lots of important concepts from both trig and limits that you should be comfortable with. I've made some of the steps into mini exercises. See if you can solve them as you read through!

Time for some more trig. Consider the following diagram on the unit circle.

![Unit Circle Diagram 1](/images/sinx_x_proof_1.png)

* The unit circle ($x^2 + y^2 = 1$) is in red
* A line forming an angle of $\theta$ with the $x$-axis is in blue
* The green vertical line connects to the point $(\cos\theta, \sin\theta$)
* The purple vertical line is tangent to the unit circle at $(1,0)$. 

Let's consider three shapes. 

**SHAPE 1:** The triangle inside the circle.

![Unit Circle Diagram 2](/images/sinx_x_proof_2.png)

What's the area of this triangle? 

{{< details "Solution" >}}
Well, the base is $\cos \theta$ and the height is $\sin\theta$. Why? Because on the unit circle, the $x$-coordinate comes from cosine and the $y$-coordinate comes from sine. 

$$\text{AREA 1: } \frac12\cos\theta\sin\theta$$
{{< /details >}}

**SHAPE 2:** The sector

![Unit Circle Diagram 2](/images/sinx_x_proof_3.png)

What's the area of this sector?

{{< details "Solution" >}}
Remember, the area of a sector with radius $r$ and angle $\theta$ is given by $A = \frac12 r^2 \theta$. *Notice that if you plug in $\theta = 2\pi$, you get $A = \frac12 r^2 (2\pi) = \pi r^2$, the area of a circle!

So, given that our radius is $1$, 

$$\text{AREA 2: } \frac12\theta$$
{{< /details >}}

**SHAPE 3:** The outside triangle

![Unit Circle Diagram 2](/images/sinx_x_proof_4.png)

This is probably the hardest one. We don't talk much about how $\tan\theta$ relates to the unit circle. Think about that and see if you can figure out the area. 

{{< details "Solution" >}}
The base is $1$ and the height is $\tan\theta$. How do we know it's $\tan\theta$? 

Since the two triangles are nested right triangles, they must be **similar** and therefore **proportional**. Thus, 

$$
\begin{aligned}
\frac{height_{big}}{base_{big}} &= \frac{height_{small}}{base_{small}}\cr
\frac{height_{big}}{1} &= \frac{\sin\theta}{\cos\theta}\cr
height_{big}&= \frac{\sin\theta}{\cos\theta}\cr
&=\tan\theta
\end{aligned}
$$

Therefore, 

$$\text{AREA 3: } = \frac12 (1)\tan\theta$$

{{< /details >}}

Okay, so now we have our three areas. From the diagram, we can see that 

$$\text{AREA 1 } \leq \text{ AREA 2 } \leq \text{ AREA 3}$$

$$\frac12\cos\theta\sin\theta \leq \frac12\theta \leq \frac12\tan\theta$$

Can you manipulate this inequality to end up with $\frac{\sin\theta}{\theta}$ in the middle?

{{< details "Solution" >}}

$$
\begin{aligned}
\frac12 \cos \theta\sin\theta \leq &\frac12\theta \leq \frac12\tan\theta\cr
\cos\theta\sin\theta \leq & \theta \leq \tan\theta\cr
\cos\theta \leq & \frac{\theta}{\sin\theta} \leq \frac{\tan\theta}{\sin\theta}\cr
\cos\theta \leq & \frac{\theta}{\sin\theta} \leq \frac{1}{\cos\theta}\cr
\frac{1}{\cos\theta} \geq & \frac{\sin\theta}{\theta} \geq {\cos\theta}\cr
\cos\theta \leq & \frac{\sin\theta}{\theta} \leq \frac{1}{\cos\theta}\cr
\end{aligned}
$$

We've already seen that cosine and sine are continuous everywhere. $\frac{\sin\theta}{\theta}$ is continuous everywhere but $\theta = 0$. So, we can apply The Squeeze Theorem:

$$\lim_{\theta \to 0}\cos\theta = 1  \&  \lim_{\theta \to 0}\frac{1}{\cos\theta} = 1$$

$$\Longrightarrow\boxed{\lim_{\theta \to 0}{\frac{\sin\theta}{\theta}} = 1}$$

{{< /details >}}

From this point forward, we will take this limit for granted: 

> $$\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$$

#### Example

Let's try to use this new limit to evaluate $\lim_{\theta \to 0}\frac{1 - \cos\theta}{\theta}$. 

At first glance, it doesn't look like the sine-limit we derived above. But let's apply some trig identities to see what we can do. 

> #### Pythagorean Trig Identity
> $$\cos^2\theta + \sin^2\theta = 1$$
> $$1 - \sin^2\theta = \cos^2\theta$$
> $$1 - \cos^2\theta = \sin^2\theta$$

> #### Useful trick: multiplying by conjugate
> When we multiply a **conjugate pair**, we get the following:
> $$(A + B)(A - B) = A^2 - B^2$$

$$
\begin{aligned}
\lim_{\theta \to 0}\frac{1 - \cos\theta}{\theta}
&= 
\lim_{\theta \to 0}\frac{1 - \cos\theta}{\theta}\cdot\left(\frac{1 + \cos\theta}{1 + \cos\theta}\right)\cr
&=
\lim_{\theta \to 0}\frac{1 - \cos^2\theta}{\theta(1 + \cot\theta)}\cr
&=
\lim_{\theta \to 0}\frac{\sin^2\theta}{\theta(1 + \cot\theta)}\cr
&=
\lim_{\theta \to 0}\frac{\sin\theta}{\theta}\cdot\frac{\sin\theta}{1 + \cos\theta}\cr
&=
(1)\left(\frac{0}{1 + 1}\right)\cr
&=
\boxed{0}
\end{aligned}
$$

This is another limit we'll use going forward:

> $$\lim_{\theta \to 0}\frac{1-\cos\theta}{\theta} = 0$$

For the rest of the examples in this section, we'll apply these two limits in conjunction with trig identities. 

#### Example

Let's evaluate $\displaystyle \lim_{x\to0}\frac{\sin(5x)}{3x}$. 

We want to apply $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$, but the angle in the sine ($5x$) doesn't match the angle in the denominator ($3x$). We can fix that with some algebra. 


$$
\begin{aligned}
\lim_{x\to0}\frac{\sin(5x)}{3x} 
&=
\lim_{x\to0}\frac{\sin(5x)}{3x}\cdot\frac55 &  \boxed{\text{multiply by }\frac{5}{5}}\cr
&=
\lim_{x\to0}\frac13\frac{\sin(5x)}{x}\cdot\frac55 &  \boxed{\text{pull out 1/3}}\cr
&=
\lim_{x\to0}\frac53\frac{\sin(5x)}{5x}\cr
&=
\left(\frac53\right)(1)\cr
&=
\boxed{\frac53}
\end{aligned}
$$

You try.

#### Exercise

Evaluate $\lim_{x\to0}\frac{\sin9x}{2x}$. 

{{< details "Solution" >}}

$$
\begin{aligned}
\lim_{x\to0}\frac{\sin9x}{2x}
&=
\lim_{x\to0}\frac{\sin9x}{2x}\cdot\frac99\cr
&=
\lim_{x\to0}\frac92\frac{\sin9x}{9x}\cr
&=
\frac92\cdot1\cr
&=
\boxed{\frac92}
\end{aligned}
$$

{{< /details >}}

You've probably spotted a pattern here: 

#### Exercise

Show that $\lim_{x \to 0}\frac{\sin(a x)}{b x} = \frac{a}{b}$.

{{< details "Solution" >}}
$$
\begin{aligned}
\lim_{x \to 0}\frac{\sin(ax)}{bx}
&=
\lim_{x \to 0}\frac{\sin(ax)}{bx}\cdot\frac{a}{a}\cr
&=
\lim_{x \to 0}\frac{a}{b}\cdot\frac{\sin(ax)}{ax}\cr
&=
\frac{a}{b}\cdot 1\cr
&=
\boxed{\frac{a}{b}}
\end{aligned}
$$
{{< /details >}}

#### Exercise

Evaluate $\lim_{x \to 0}\frac{\sin(3x)}{\sin(7x)}$.

*Hint: you'll have to use the fact that $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$ implies that $\lim_{\theta \to 0}\frac{\theta}{\sin\theta} = 1$, too.*

{{< details "Solution" >}}

$$
\begin{aligned}
\lim_{x \to 0}\frac{\sin(3x)}{\sin(7x)}
&=
\lim_{x \to 0}\frac{\sin(3x)}{\sin(7x)}\cdot\frac33\cdot\frac77\cdot\frac{x}{x}\cr
&=
\lim_{x\to0}\frac{\sin3x}{(3x)}\cdot\frac{7x}{\sin(7x)}\cdot\frac37\cr
&=
(1)(1)\left(\frac37\right)\cr
&=
\boxed{\frac37}
\end{aligned}
$$

Note that all we're doing is multiplying by $1$ in a clever way and then shuffling terms around until we get things into the form we want. 
{{< /details >}}

#### Example

We can apply the same limits to limits that include tangent as well. Consider the limit

$$\lim_{x \to 0}\frac{\tan(4x)}{2x}$$

We can rewrite tangent in terms of sine and cosine. Since $\cos 0 = 1$, we don't really have to worry about the cosine term.

$$
\begin{aligned}
\lim_{x \to 0}\frac{\tan(4x)}{2x}
&=
\lim_{x \to 0}\frac{\sin(4x)}{\cos(4x)}\frac{1}{2x}\cr
&=
\lim_{x \to 0}\frac{\sin(4x)}{\cos(4x)}\frac{1}{2x}\cdot\frac44\cr
&=
\lim_{x \to 0}\frac{\sin(4x)}{4x}\frac{4}{2\cos(4x)}\cr
&=
(1)\left(\frac42\right)\cr
&=
\boxed{2}
\end{aligned}
$$

> As you're going through these problems where we do a lot of algebraic shuffling around, it's important to keep checking that from one line to the next you aren't losing track of any terms. 

## Advanced substitutions

With all of the examples and exercises we've done thus far, there has been an *implied* substitution. For example, when we say that $\lim_{x \to 0}\frac{\sin 4x}{4x} = 1$ because $\lim_{\theta \to 0}\frac{\sin\theta}{\theta} = 1$, we're implying the substitution $\theta = 4x$. Because it's kind of obvious, we didn't explicitly write it out. But for more complicated limits, it may be helpful to do so. 

#### Example

Consider the limit $\lim_{x \to \infty}x\sin\left(\frac1x\right)$. At first glance, this looks nothing like the $\lim_{\theta \to 0}\frac{\sin\theta}{\theta}$. 

Let's move some terms around: 

$$\lim_{x \to \infty}x\sin\left(\frac1x\right) = \lim_{x \to \infty}\frac{\sin\left(\frac1x\right)}{\frac1x}$$

What if we make the substitution $\theta = \frac1x$?

{{< details "Solution" >}}

$$\frac{\sin\left(\frac1x\right)}{\frac1x} \longrightarrow \frac{\sin\theta}{\theta}$$

{{< /details >}}

But we still have to deal with the $x\to\infty$. What happens to $\theta$ as $x \to \infty$?

{{< details "Solution" >}}
As $x\to \infty$, $\frac1x \to 0$ ([Case 2](computing) limit). Therefore, as $x \to \infty$, $\theta \to \infty$
{{< /details >}}

Putting this all together, what do we get?

{{< details "Solution" >}}
$$
\begin{aligned}
\lim_{x \to \infty}x\sin\left(\frac1x\right)
&=
\lim_{x \to \infty}\frac{\sin\left(\frac1x\right)}{\frac1x}\cr
&=
\lim_{\theta \to 0}\frac{\sin\theta}{\theta}\cr
& = 1
\end{aligned}
$$

{{< /details >}}

So, we see that substitutions can help us relate more complex limits to much simpler limits. 

#### Example

Let's try the same thing for 

$$\lim_{x \to 1}\frac{\sin(\ln x^2)}{\ln x^3}$$

Notice that if we plug in $x = 1$, we get 

$$\frac{\sin(\ln (0)^2)}{\ln (0)^3} = \frac{\sin 0 }{0} = \frac00$$

So, we get the sense that it behaves like $\lim_{\theta \to 0}\frac{\sin\theta}{\theta}$.

Let's apply some log properties first. 

> Recall that $\ln A^B = B \ln A$

$$
\lim_{x \to 1}\frac{\sin(\ln x^2)}{\ln x^3} = \lim_{x \to 1}\frac{\sin(2\ln x)}{3\ln x}
$$

Now we can apply the substitution $\theta = \ln x$. 

See if you can take it from here.

{{< details "Solution" >}}

As $x\to 1$, $\ln x\to 0$, which mean that $\theta \to 0$. 

$$
\begin{aligned}
\lim_{x \to 1}\frac{\sin(\ln x^2)}{\ln x^3} 
&= \lim_{x \to 1}\frac{\sin(2\ln x)}{3\ln x}\cr
&= \lim_{\theta \to 0}\frac{\sin(2\theta)}{3\theta}\cr
&= \boxed{\frac23}
\end{aligned}
$$

{{< /details >}}

#### Exercise

Use an appropriate substitution to evaluate the limit

$$
\lim_{x \to \pi/4}\frac{\sin\left(x - \frac{\pi}{4}\right)}{4x - \pi}
$$

{{< details "Solution" >}}
We'll make the substitution $\theta = x - \frac{\pi}{4}$. 

As $x \to \pi/4$, $\theta \to 0$. 

To make the substitution fit, factor $4$ out of the denominator.

$$
\begin{aligned}
\lim_{x \to \pi/4}\frac{\sin\left(x - \frac{\pi}{4}\right)}{4x - \pi}
&=
\lim_{x \to \pi/4}\frac{\sin\left(x - \frac{\pi}{4}\right)}{4\left(x - \frac{\pi}{4}\right)}\cr
&=
\lim_{\theta\to0}\frac{\sin\theta}{4\theta}\cr
&=
\boxed{\frac14}
\end{aligned}
$$
{{< /details >}}

#### Exercise

Use an appropriate substitution to evaluate 

$$
\lim_{x \to -\infty}\frac{\tan(2e^x)}{e^x}
$$

{{< details "Solution" >}}
Let $\theta = e^x$. 

Then as $x\to -\infty$, $\theta \to 0$. 

$$
\begin{aligned}
\lim_{x \to -\infty}\frac{\tan(2e^x)}{e^x}
&=
\lim_{\theta\to0}\frac{\tan2\theta}{\theta}\cr
&=
\boxed{2}
\end{aligned}
$$
{{< /details >}}

#### Exercise

Determine the value(s) of $a$ that make $f$ continuous everywhere. 

$$
f(x)=
\begin{cases}
\frac{4\tan(ax)}{x}, & x < 0\cr
2a^2 + 4x, & x\geq 0
\end{cases}
$$

{{< details "Solution" >}}

We've done exercises like this before. First, let's observe that both pieces are continuous on their respective intervals. 

Next, we want to investigate what's happening at the seam, $x = 0$. 

* $f(0) = 2a^2 + 4(0) = 2a^2$. So, once we set a value for $a$, $f(0)$ will be defined. 
* $\lim_{x \to 0^{-}}f(x) = \lim_{x \to 0^{-}}\frac{4\tan(ax)}{x} = 4a$.
* $\lim_{x \to 0^{+}}f(x) = \lim_{x \to 0^{+}}(2a^2 + 4x) =  2a^2$. 
* We want to make the right and left limits at $0$ match: 
$$
\begin{aligned}
\lim_{x \to 0^{-}}f(x) &= \lim_{x \to 0^{+}}f(x)\cr
4a&=2a^2\cr
0 &= 2a^2 - 4a\cr
0 &= 2a(a - 2) \leftarrow \star\cr
a &= 0, 2
\end{aligned}
$$

We conclude that $f$ is continuous everywhere if $a = 0$ or $a = 2$. 

> $\star:$ Notice that we didn't divide by $2a$. If we divide by $2a$, we assume $a\neq0$ and miss one of the solutions. We should alway factor to solve for the zeros/roots of a polynomial!

{{< /details >}}

---

Click [here](https://www.math.drexel.edu/classes/Calculus/resources/Math121HW/Homework1.6_ans.pdf) for more exercises.

---
